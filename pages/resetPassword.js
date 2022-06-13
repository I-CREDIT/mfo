import React, { useState } from "react";
import Spinner from "react-spinner-material";
import axios from "axios";
import { Formik, Form, ErrorMessage, FieldArray, Field } from "formik";
import { connect } from "react-redux";
import { successMessage, emptyMessage } from "../store/actions/ActionCreators";
import { useRouter } from "next/router";
import swal from "sweetalert";

const mapDispatchToProps = (dispatch) => ({
  successMessage: (message) => {
    dispatch(successMessage(message));
  },
  emptyMessage: () => {
    dispatch(emptyMessage());
  },
});

const ResetPasword = () => {
  const router = useRouter();
  const { iin } = router.query;
  const { phone } = router.query;
  const [btnLoading] = useState(false);
  const [message] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (values) => {
    // Пароль - пустое поле
    if (values.password === "") {
      setErrorMessage("Введите пароль");
    }

    // Пароль - короче 5 символов
    if (values.password.length > 0 && values.password.length < 6) {
      setErrorMessage("Пароль должен быть не меньше 5 символов");
    }

    // Пароли не совпадают
    if (
      values.password.length > 4 &&
      values.password !== values.passwordConfirm
    ) {
      setErrorMessage("Пароли не совпадают");
    } else {
      setErrorMessage(null);
      const params = {
        phone,
        iin,
        password: values.password,
      };
      axios
        .get(`https://api.i-credit.kz/api/resetPassword`, { params })
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            swal("", `Ваш пароль успешно обновлен`, "success").then(() => {
              router.push("/login");
            });
          }
        });
    }
  };

  return (
    <div>
      <section className="otherPages">
        <div className="container">
          <section className="oplata feedback row">
            <div className=" oplate--form feedbackForm">
              <Formik
                initialValues={{
                  phone: phone,
                  iin: iin,
                  password: "",
                  passwordConfirm: "",
                }}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                {({ errors, touched, isValidating, isSubmitting }) => (
                  <Form className="oplataform">
                    <h2 className="text-center mb-5">Восстановление пароля</h2>
                    {message !== null ? (
                      <div className="alert alert-success" role="alert">
                        <strong>{message}</strong>
                      </div>
                    ) : null}
                    {errorMessage !== null ? (
                      <div className="alert alert-danger" role="alert">
                        <strong>{errorMessage}</strong>
                      </div>
                    ) : null}

                    <div className="input-group">
                      <Field
                        name="password"
                        type="password"
                        placeholder="Новый пароль"
                      />
                    </div>
                    <div className="input-group">
                      <Field
                        name="passwordConfirm"
                        type="password"
                        placeholder="Подтверждение пароля"
                      />
                    </div>
                    <div className="buttonForm">
                      {btnLoading === true ? (
                        <Spinner
                          className="loading"
                          size={200}
                          spinnerColor={"#ef2221"}
                          spinnerWidth={2}
                          visible={true}
                        />
                      ) : (
                        <button className="loginbutton" type="submit">
                          Подтвердить
                        </button>
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(ResetPasword);

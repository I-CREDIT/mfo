import React from "react";
import Spinner from "react-spinner-material";
import MaskedInput from "react-text-mask";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import { connect } from "react-redux";
import { fetchCurrentUser, loginAdmin } from "../store/actions/userAction";
import { emptyMessage } from "../store/actions/ActionCreators";
import Router from "next/router";
import { required } from "../defaults/validationredux";
import Head from "next/head";
import cookie from "js-cookie";

// Перевод для классового компонента
import withUseTranslation from "../public/js/hocs/useTranslation";

const AppLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

const maskIin = [
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  /\w/,
];

class Login extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    if (cookie.get("token") && !this.props.loggedIn) {
      Router.push("/");
    }

    setTimeout(() => {
      this.props.emptyMessage();
    }, 8000);
  }
  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false,
      message: null,
      errorMessage: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    //  e.preventDefault();

    if (!required(values.iin) || !required(values.password)) {
      this.setState({
        errorMessage: "Введите данные",
      });
    } else {
      this.props.loginAdmin(values);
      this.setState({
        errorMessage: null,
      });
    }
    console.log(values);
  }

  render() {
    // Достаем функцию-переводчик
    const { t } = this.props.useTranslationValue;

    return (
      <div>
        <Head>
          <title>{t("login-title-1")}</title>
        </Head>
        <section className="otherPages">
          <div className="">
            <section className="oplata feedback row">
              <div className=" oplate--form feedbackForm">
                <Formik
                  initialValues={{
                    iin: "",
                    password: "",
                  }}
                  onSubmit={(values) => {
                    this.handleSubmit(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className="oplataform">
                      <h2 className="text-center mb-5">{t("login-title-1")}</h2>
                      {this.props.successMessage !== null ? (
                        <div className="alert alert-success">
                          {this.props.successMessage}. Пожалуйста, проверьте
                          вашу почту
                        </div>
                      ) : (
                        <div></div>
                      )}
                      {(this.props.failedLogin && this.props.error !== null) ||
                      this.state.errorMessage !== null ? (
                        <div className="alert alert-danger" role="alert">
                          <strong>
                            {" "}
                            {this.state.errorMessage || this.props.error}
                          </strong>
                        </div>
                      ) : null}
                      <div className="input-group">
                        <label htmlFor="email">
                          <h2>{t("login-form-title-1")}</h2>
                        </label>
                        <Field
                          name="iin"
                          placeholder="ИИН"
                          render={({ field }) => (
                            <MaskedInput
                              {...field}
                              mask={maskIin}
                              autoComplete="off"
                              id="username"
                              placeholder={t("login-form-label-1")}
                              type="text"
                            />
                          )}
                        />
                        {errors.username && touched.username && (
                          <div className="text-danger">{errors.username}</div>
                        )}
                      </div>

                      <div className="input-group">
                        <label>
                          <h2>{t("login-form-title-2")}</h2>
                        </label>
                        <Field
                          name="password"
                          type="password"
                          placeholder={t("login-form-label-2")}
                        />
                        {errors.password && touched.password && (
                          <div className="text-danger">{errors.password}</div>
                        )}

                        <AppLink
                          href="password_reset"
                          className="resetText mt-4"
                        >
                          {t("forget-password")}
                        </AppLink>
                      </div>

                      <div className="buttonForm">
                        {this.props.authenticatingUser === true ? (
                          <Spinner
                            className="loading"
                            size={200}
                            spinnerColor={"#ef2221"}
                            spinnerWidth={2}
                            visible={true}
                          />
                        ) : (
                          <button className="loginbutton" type="submit">
                            {t("log-in")}
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
  }
}

const mapStateToProps = ({
  userReducer: { authenticatingUser, failedLogin, error, loggedIn },
  message: { success },
}) => ({
  authenticatingUser,
  failedLogin,
  error,
  loggedIn,
  successMessage: success,
});

export default connect(mapStateToProps, {
  fetchCurrentUser,
  emptyMessage,
  loginAdmin
})(withUseTranslation(Login));

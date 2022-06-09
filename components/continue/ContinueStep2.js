import React, { useEffect, useState } from "react";
import { relative_type, speciality } from "../../defaults/defaultRelative";
import {
  required,
  phoneValidation,
  acceptCirrilic,
  getAge,
  requiredd,
} from "../../defaults/validations";
import cookie from "js-cookie";
import InputMask from "react-input-mask";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import Router from "next/router";

// Перевод для функционального компонента
import { useTranslation } from "react-i18next";

const PhoneMask = ({ field, form, ...props }) => (
  <InputMask
    mask="+7(999)-999-9999"
    maskPlaceholder={null}
    className="my-input"
    {...field}
    {...props}
  />
);

const ContinueStep2 = ({ next, setNext }) => {
  // Translation
  const { t } = useTranslation();

  const [regions, setRegions] = useState({});
  const [checked, setChecked] = useState(
    cookie.get("continueChecked") ? cookie.get("continueChecked") : false
  );
  const [city, setCity] = useState(
    cookie.get("continue2") ? JSON.parse(cookie.get("continue2")).UF_17 : ""
  );
  let scrollToElement = require("scroll-to-element");

  const handleFocus = () => {
    setTimeout(() => {
      scrollToElement(".text-danger", {
        offset: 0,
        align: "middle",
        ease: "outExpo",
        duration: 600,
      });
    }, 100);
  };

  const onSubmit = (values) => {
    window.scrollTo(0, 0);

    let source = "i-credit2";
    if (cookie.get("utm_source") !== undefined) {
      source = cookie.get("utm_source") + "_2";
    }

    let secondStepValues = {
      token: cookie.get("token"),
      workPlace: values.work_place,
      sphere: values.sphere,
      lastSix: values.lastSix,
      deposit: values.deposit,
      position: values.position,
      fioContact: `${values.relative_name} ${values.relative_last_name}`,
      phoneContact: values.relative_phone_number,
      relativeContact: values.relative_type_id,
      source: source,
    };

    axios
      .post(
        `https://api.i-credit.kz/api/secondStep`,
        { ...secondStepValues },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${cookie.get("token")}`,
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          swal("Успешно!", `Данные отправлены`, "success").then(() => {
            Router.push("/cabinet/continue");
          });
        } else {
          swal(
            "Oops!",
            `${
              response.errors ||
              "У вас анкета заполнена не до конца. Напишите на WhatsApp или звоните на номер +7 727 250 15 00"
            }`,
            "error"
          ).then(() => {});
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
        swal("Oops", "Что то пошло не так", "error").then(() => {
          Router.push("/cabinet/loans");
        });
      });
  };

  return (
    <div>
      <Formik
        initialValues={{
          position: "",
          work_place: "",
          sphere: "",
          deposit: `${Math.round(Math.random() * (4000000 - 2000000) + 2000000).toString().split('').slice(0, 4).concat(['0', '0', '0']).join('')}`,
          lastSix: `${Math.round(Math.random() * (3000000 - 1500000) + 1500000).toString().split('').slice(0, 4).concat(['0', '0', '0']).join('')}`,
          relative_name: "",
          relative_last_name: "",
          relative_phone_number: "",
          relative_type_id: "",
        }}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="container mt-5">
            <h2 className="mt-5 mb-5">Информация о месте работы</h2>
            <div className="row form-group">
              <div className="col-md-6 mb-3">
                <label>Должность *</label>
                <Field
                  as="select"
                  name="position"
                  validate={requiredd}
                  className="form-control"
                  validators={{
                    required,
                  }}
                >
                  <option value="" disabled></option>
                  {speciality.map((spec) => (
                    <option key={spec.id} value={spec.name}>
                      {spec.name}
                    </option>
                  ))}
                </Field>
                {errors.position && touched.position && (
                  <p className="text-danger">{t(errors.position)}</p>
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label>Место работы *:</label>
                <div className="input-group">
                  <Field
                    name="work_place"
                    validate={requiredd}
                    autocomplete="off"
                    className="form-control"
                  />
                  <div className="hint">Обязательное поле</div>
                </div>
                {errors.work_place && touched.work_place && (
                  <p className="text-danger">Обязательное поле</p>
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label>Сфера деятельности *:</label>
                <div className="input-group">
                  <Field
                    name="sphere"
                    validate={requiredd}
                    autocomplete="off"
                    className="form-control"
                  />
                  <div className="hint">Обязательное поле</div>
                </div>
                {errors.sphere && touched.sphere && (
                  <p className="text-danger">Обязательное поле</p>
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label>Остаток на депозите *:</label>
                <div className="input-group">
                  <Field
                    name="deposit"
                    validate={requiredd}
                    autocomplete="off"
                    className="form-control"
                    defaultValue={`${Math.round(
                      Math.random() * (4000000 - 2000000) + 2000000
                    )
                      .toString()
                      .split("")
                      .slice(0, 4)
                      .concat(["0", "0", "0"])
                      .join("")}`}
                  />
                  <div className="hint">
                    Чем больше сумма депозита тем больше сумма при одобрении
                    микрокредита
                  </div>
                </div>
                {errors.deposit && touched.deposit && (
                  <p className="text-danger">Обязательное поле</p>
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label>
                  Сумма платежей закрытых микрокредитов за последние 6 мес. *:
                </label>
                <div className="input-group">
                  <Field
                    name="lastSix"
                    validate={requiredd}
                    autocomplete="off"
                    className="form-control"
                    defaultValue={`${Math.round(
                      Math.random() * (3000000 - 1500000) + 1500000
                    )
                      .toString()
                      .split("")
                      .slice(0, 4)
                      .concat(["0", "0", "0"])
                      .join("")}`}
                  />
                  <div className="hint">Обязательное поле</div>
                </div>
                {errors.lastSix && touched.lastSix && (
                  <p className="text-danger">Обязательное поле</p>
                )}
              </div>
            </div>

            <h2 className="mt-5 mb-5">{t("relative")}</h2>
            <div className="row form-group">
              <div className="col-md-6 mb-3">
                <label>{t("relative-name")}</label>
                <div className="input-group">
                  <Field
                    name="relative_name"
                    validate={(requiredd, acceptCirrilic)}
                    autocomplete="off"
                    className="form-control"
                  />
                  <div className="hint">{t("cyrillic-only")}</div>
                </div>
                {errors.relative_name && touched.relative_name && (
                  <p className="text-danger">{t(errors.relative_name)}</p>
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label>{t("relative-surname")}</label>
                <div className="input-group">
                  <Field
                    name="relative_last_name"
                    validate={(requiredd, acceptCirrilic)}
                    autocomplete="off"
                    className="form-control"
                  />

                  <div className="hint">{t("cyrillic-only")}</div>
                </div>
                {errors.relative_last_name && touched.relative_last_name && (
                  <p className="text-danger">{t(errors.relative_last_name)}</p>
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label>{t("relative-phone")}</label>
                <Field
                  name="relative_phone_number"
                  className="form-control"
                  type="tel"
                  validate={phoneValidation}
                  component={PhoneMask}
                />
                {errors.relative_phone_number &&
                  touched.relative_phone_number && (
                    <p className="text-danger">
                      {t(errors.relative_phone_number)}
                    </p>
                  )}
              </div>

              <div className="col-md-6 mb-3">
                <label>{t("relative-connection")}</label>
                <div className="input-group">
                  <Field
                    as="select"
                    name="relative_type_id"
                    validate={requiredd}
                    className="form-control"
                  >
                    <option value="" disabled></option>
                    {relative_type.map((relative) => (
                      <option key={relative.id} value={t(relative.name)}>
                        {t(relative.name)}
                      </option>
                    ))}
                  </Field>
                </div>
                {errors.relative_type_id && touched.relative_type_id && (
                  <p className="text-danger">{t(errors.relative_type_id)}</p>
                )}
              </div>
            </div>

            <div className="button form-group mb-5">
              <button
                type="submit "
                className="agreement-btn"
                onClick={() => handleFocus()}
              >
                Дальше
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContinueStep2;

import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import cookie from "js-cookie";
import Router from "next/router";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import {
  requiredd,
  requiredd1,
} from "../../defaults/validations";
import {
  isValidIBANNumber,
} from "../../defaults/validationredux";
import swal from "sweetalert";

// Перевод для функционального компонента
import { useTranslation } from "react-i18next";
import $ from "jquery";

const IbanN = ({ field, form, ...props }) => (
  <InputMask
    mask="KZ******************"
    placeholder="KZ"
    className="my-input"
    {...field}
    {...props}
  />
);

const CardNumber = ({ field, form, ...props }) => (
  <InputMask
    mask="9999-9999-9999-9999"
    maskPlaceholder={null}
    type="tel"
    className="my-input"
    {...field}
    {...props}
  />
);

const CardExp = ({ field, form, ...props }) => (
  <InputMask
    mask="99/99"
    maskPlaceholder={null}
    type="tel"
    className="my-input"
    {...field}
    {...props}
  />
);

function replaceDate(val) {
  return String(val).replace(/[^A-Z0-9]/g, "");
}

const ContinueStep3 = () => {
  // Translation
  const { t } = useTranslation();

  const [btnLoading, setBtnLoading] = useState(false);

  const onSubmit = (values) => {
    if (isValidIBANNumber(iban.value)) {
      let other = {};
      other.bank_name = isValidIBANNumber(values.iban_account);
      other.source = "i-credit.kz";

      if (cookie.get("utm_source") !== undefined) {
        if (cookie.get("utm_source").includes("sms")) {
          other.source = cookie.get("utm_source");
        }
        if (cookie.get("utm_source").includes("loangate")) {
          other.source = cookie.get("utm_source");
          other.cpa_source = cookie.get("utm_source");
          other.cpa_clickid = cookie.get("afclick");
        }
        if (
          cookie.get("utm_source") === "upsala" ||
          cookie.get("utm_source") === "doaff" ||
          cookie.get("utm_source") === "goodaff" ||
          cookie.get("utm_source") === "finpublic_cpa" ||
          cookie.get("utm_source") === "pdl-profit" ||
          cookie.get("utm_source") === "marketing" ||
          cookie.get("utm_source") === "leadssu" || 
          cookie.get("utm_source").includes("click2money") ||
          cookie.get("utm_source") === "rafinad" ||
          cookie.get("utm_source") === "crezu" ||
          cookie.get("utm_source") === "admitad" ||
          cookie.get("utm_source") === "altel_2365" ||
          cookie.get("utm_source") === "altel_4291" ||
          cookie.get("utm_source") === "altel_7846" ||
          cookie.get("utm_source") === "altel_3954" ||
          cookie.get("utm_source") === "altel_8132" ||
          cookie.get("utm_source") === "altel_5673" ||
          cookie.get("utm_source") === "altel_6728" ||
          cookie.get("utm_source") === "altel_1589" ||
          cookie.get("utm_source") === "altel_4376"
        ) {
          other.source = cookie.get("utm_source");
          other.cpa_source = cookie.get("utm_source");
          other.cpa_clickid = cookie.get("clickid");
        }
        if (cookie.get("utm_source") === "leadgid") {
          other.source = cookie.get("utm_source");
          other.cpa_source = cookie.get("utm_source");
          other.webID = cookie.get("wmid");
          other.cpa_clickid = cookie.get("clickid");
        }
        if (cookie.get("utm_source") === "sales_doubler") {
          other.source = cookie.get("utm_source");
          other.cpa_source = cookie.get("utm_source");
          other.webID = cookie.get("utm_term");
          other.cpa_clickid = cookie.get("clickid");
        }
        if (cookie.get("utm_source").includes("smartzaim")) {
          other.source = cookie.get("utm_source");
          other.cpa_source = cookie.get("utm_source");
          other.utm_campaign = cookie.get("utm_campaign");
          other.utm_term = "smartzaim";
        }
        if (cookie.get("utm_source").includes("qaz")) {
          other.source = "qazlead";
          other.cpa_source = cookie.get("utm_campaign");
          other.cpa_clickid = cookie.get("clickid");
        }
        if (cookie.get("utm_source") === "guruleads") {
          other.source = cookie.get("utm_source");
          other.cpa_source = cookie.get("utm_source");
          other.cpa_clickid = cookie.get("clickid");
          other.webID = cookie.get("wmid");
        }
        if (cookie.get("utm_source") === "sales_doubler") {
          other.source = cookie.get("utm_source");
          other.cpa_source = cookie.get("utm_source");
          other.cpa_clickid = cookie.get("clickid");
          other.webID = cookie.get("utm_term");
        }
      }

      let thirdStepValues = {
        token: cookie.get("token"),
        iban: iban.value,
        cardNumber: replaceDate(values.card_number),
        cardIssue: values.expiration_date_of_bcard,
        cardName: values.name_of_owner,
        source: other.source,
        clickID: other.cpa_clickid,
        web_id: other.webID,
      };

      setBtnLoading(true);

      axios
        .post(
          `https://api.i-credit.kz/api/thirdStep`,
          { ...thirdStepValues },
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
          setBtnLoading(false);
          if (response.data.success) {
            axios
              .get(`https://api.i-credit.kz/api/getScore`, {
                params: {
                  token: cookie.get("token"),
                },
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  Authorization: `Bearer ${cookie.get("token")}`,
                },
              })
              .then((response) => {
                console.log(response);
                if (response.success) {
                  swal("Успешно!", `Заявка отправлена`, "success").then(() => {
                    Router.push("/cabinet/loans");
                    cookie.remove("continue2");
                  });
                }
                swal("Успешно!", `Заявка отправлена`, "success").then(() => {
                  Router.push("/cabinet/loans");
                  cookie.remove("continue2");
                });
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
          setBtnLoading(false);
          window.scrollTo(0, 0);
          swal("Oops", "Что то пошло не так", "error").then(() => {
            Router.push("/cabinet/loans");
          });
        });
    }
  };

  useEffect(() => {
    $(".cardName").on("keypress", function (event) {
      var englishAlphabetDigitsAndWhiteSpace = /[A-Za-z ]/g;

      var key = String.fromCharCode(event.which);

      if (
        event.keyCode == 8 ||
        event.keyCode == 37 ||
        event.keyCode == 39 ||
        englishAlphabetDigitsAndWhiteSpace.test(key)
      ) {
        return true;
      }

      return false;
    });
    $(".cardName").on("paste", function (e) {
      e.preventDefault();
    });

    function forceInputUppercase(e) {
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      e.target.value = e.target.value.toUpperCase();
      e.target.setSelectionRange(start, end);
    }

    document
      .getElementById("name_of_owner")
      .addEventListener("keyup", forceInputUppercase, false);
  });

  const [iban, setIban] = useState({
    value: "",
    text: "Заполните поле до конца",
  });

  const setIbanValue = (e) => {
    setIban({ value: e.target.value, text: isValidIBANNumber(e.target.value) });
  };

  return (
    <div>
      <Formik
        initialValues={{
          iban: "",
          card_number: "",
          expiration_date_of_bcard: "",
          name_of_owner: "",
        }}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form className="container">
            <h2 className="col-md-12 mt-5 mb-5">Информация о счетах</h2>

            <div className="row form-group">
              <div className="col-md-6 mb-3">
                <label>IBAN счет *</label>
                <div className="input-group">
                  <Field
                    onChange={(e) => setIbanValue(e)}
                    value={iban.value.toUpperCase()}
                    className="form-control"
                    name="iban"
                    component={IbanN}
                  />
                  <div className="hint">Номер банковского счета</div>
                </div>
                <p className="mt-2 text-info">{iban.text}</p>
              </div>

              <div className="col-md-6 mb-3">
                <label>Номер карты *</label>
                <div className="input-group">
                  <Field
                    className="form-control"
                    name="card_number"
                    validate={requiredd}
                    component={CardNumber}
                  />
                </div>
                {errors.card_number && touched.card_number && (
                  <p className="text-danger">{t(errors.card_number)}</p>
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label>Дата окончания *</label>
                <Field
                  className="form-control"
                  name="expiration_date_of_bcard"
                  placeholder="__/__"
                  validate={requiredd}
                  component={CardExp}
                />
                {errors.expiration_date_of_bcard &&
                  touched.expiration_date_of_bcard && (
                    <p className="text-danger">
                      {t(errors.expiration_date_of_bcard)}
                    </p>
                  )}
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="name_of_owner">
                  Имя владельца карты латинскими буквами * :
                </label>
                <div className="input-group">
                  <Field
                    id="name_of_owner"
                    name="name_of_owner"
                    autocomplete="off"
                    className="form-control input-uppercase registerCyrril cardName"
                    validate={requiredd1}
                  />
                  <div className="hint">Только на латинском</div>
                </div>
                {errors.name_of_owner && touched.name_of_owner && (
                  <p className="text-danger">{t(errors.name_of_owner)}</p>
                )}
              </div>
            </div>

            <div className="button form-group mb-5">
              <button type="submit" disabled={btnLoading} className="">
                {btnLoading ? "Загрузка..." : "Отправить"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContinueStep3;

import * as ActionTypes from "../types";
import Router from "next/router";
import cookie from "js-cookie";
import { newCookie } from "../../defaults/utmSource";
import axios from "axios";
import swal from "sweetalert";
export const changingMoney = (money) => ({
  type: ActionTypes.MONEY_CHANGE,
  payload: money,
});

function replaceDate(val) {
  return String(val).replace(/[^A-Z0-9]/g, "");
}

export const changingDay = (day) => ({
  type: ActionTypes.DAY_CHANGE,
  payload: day,
});

export const SUCCESS_RESPONSE = (result) => ({
  type: "SUCCESS_RESPONSE",
  payload: result,
});

export const FAILED_RESPONSE = (result) => ({
  type: "FAILED_RESPONSE",
  payload: result,
});

export const successMessage = (message) => ({
  type: "SUCCESS_MESSAGE",
  payload: message,
});

export const errorMessage = (message) => ({
  type: "ERROR_MESSAGE",
  payload: message,
});
export const emptyMessage = () => ({
  type: "EMPTY_MESSAGE",
});

export const addRegistration = (registrations) => ({
  type: "ADD_REGISTRATION",
  payload: registrations,
});

export const stepRegistration = (step) => ({
  type: "STEP_REGISTRATION",
  payload: step,
});

export const isLoading = (loader) => ({
  type: "IS_LOADING",
  payload: loader,
});

export const getSMSFromBMG = (user) => (dispatch) => {
  dispatch(emptyMessage());
  dispatch(isLoading(true));
  user.phone = replaceDate(user.phone);

  const payload = {
    phone: user.phone,
    iin: user.iin,
  };

  return fetch(`https://api.i-credit.kz/api/test/takeCode`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "same-origin",
  })
    .then((response) => {
      if (response.ok) return response;
      throw response;
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.success) {
        dispatch(addRegistration(user));
        dispatch(isLoading(false));
        dispatch(stepRegistration(1));
        window.scrollTo(0, 0);
        dispatch(successMessage(""));
        localStorage.setItem("step", "1");
      } else {
        dispatch(isLoading(false));
        localStorage.setItem("BMGAttempts", "3");
        localStorage.setItem("isOnBMG", "false");
        dispatch(
          errorMessage(
            `${response.message}. Вы будете перенаправлены на страницу авторизации.`
          )
        );
        setTimeout(() => {
          Router.push("/login");
        }, 5000);
      }
    })
    .catch((e) => {
      localStorage.setItem("BMGAttempts", "3");
      localStorage.setItem("isOnBMG", "false");
      dispatch(
        errorMessage(
          "Ошибка получения кода с egov. Пожалуйста, заполните данные вручную."
        )
      );
      // setTimeout(() => {
      //   window.location.reload();
      // }, 1000);
    })
    .then(() => dispatch(isLoading(false)));
};

export const getSMS = (user) => (dispatch) => {
  dispatch(emptyMessage());
  dispatch(isLoading(true));
  user.phone = replaceDate(user.phone);

  const payload = {
    source: "i-credit.kz",
    phone: user.phone,
  };

  return fetch(`https://api.i-credit.kz/api/test/sendSMS`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "same-origin",
  })
    .then((response) => {
      if (response.ok) return response;
      throw response;
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.success) {
        dispatch(addRegistration(user));
        dispatch(isLoading(false));
        dispatch(stepRegistration(4));
        window.scrollTo(0, 0);
        dispatch(successMessage(""));
        localStorage.setItem("step", "4");
      } else {
        dispatch(isLoading(false));
        dispatch(
          errorMessage("Вас нет в БМГ! Пожалуйста, заполните данные вручную.")
        );
      }
    })
    .catch((e) => {
      dispatch(
        errorMessage(
          "Ошибка получения кода с egov. Пожалуйста, заполните данные вручную."
        )
      );
      setTimeout(() => {
        checkIIN(e.errors);
      }, 3000);
    })
    .then(() => dispatch(isLoading(false)));
};

function checkIIN(val) {
  if (val && val.iin) {
    document.location.replace("https://www.i-credit.kz/login");
  } else {
    console.log("not working");
  }
}

export const confirmSMS = (registration) => (dispatch) => {
  dispatch(emptyMessage());
  dispatch(isLoading(true));
  registration.source = "i-credit1";
  if (cookie.get("utm_source") !== undefined) {
    registration.source = cookie.get("utm_source") + "_1";
  }

  const payload = {
    code: registration.code,
    phone: registration.phone,
    period: registration.period_in_days,
    amount: registration.loan_amount,
    name: registration.name,
    surname: registration.middlename,
    fatherName: registration.last_name,
    password: registration.password,
    email: registration.email,
    source: registration.source,
    utm_content: registration.cpa_clickid,
    utm_campaign: registration.webID,
    iin: registration.iin,
    docNumber: registration.doc_number,
    docIssue: registration.doc_issue,
    startGiven: registration.start_given,
    endGiven: registration.end_given,
  };

  return fetch(`https://api.i-credit.kz/api/test/confirmSMS`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "same-origin",
  })
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw response;
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.success) {
        localStorage.setItem("token", response.token);
        dispatch(addRegistration(""));
        dispatch(stepRegistration(2));
        dispatch(emptyMessage());
        localStorage.setItem("step", "2");
        window.scrollTo(0, 0);
        dispatch(isLoading(false));
      } else {
        dispatch(isLoading(false));
        dispatch(
          errorMessage(
            `${response.message}. Вы будете перенаправлены на главную страницу.`
          )
        );
        dispatch(stepRegistration(0));
        localStorage.removeItem("step");
        localStorage.removeItem("token");
        localStorage.setItem("BMGAttempts", "3");
        localStorage.setItem("isOnBMG", "false");
        setTimeout(() => {
          Router.push("/");
        }, 2000);
      }
    })
    .then((response) => dispatch(isLoading(false)))
    .catch((r) => {
      console.log(r);
      dispatch(
        errorMessage(
          "Ошибка отправки кода. Вы будете перенаправлены на главную страницу."
        )
      );
      setTimeout(() => {
        dispatch(stepRegistration(0));
      }, 6000);
      dispatch(isLoading(false));
      setTimeout(() => {
        localStorage.removeItem("step");
        localStorage.removeItem("token");
      }, 5000);
      setTimeout(() => {
        Router.push("/");
      }, 5000);
    })
    .then(() => dispatch(isLoading(false)));
};

export const takeDocumentsBiometry = (registration) => (dispatch) => {
  dispatch(emptyMessage());
  dispatch(isLoading(true));

  const params = {
    iin: registration.iin,
    name: registration.name,
    middleName: registration.middlename,
    lastName: registration.last_name,
    code: registration.code,
  };

  return axios
    .get("https://24money.kz/biometria/public/api/takeDocs", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      params,
    })
    .then((response) => {
      if (response.status === 200) {
        return response;
      }
      throw response;
    })
    .then((response) => response.data)
    .then((response) => {
      if (response.success) {
        localStorage.setItem("token", response.token);

        let start_given_date = new Date(response.startGiven);
        const day_start =
          start_given_date.getDate().toString().length === 1
            ? "0" + start_given_date.getDate().toString()
            : start_given_date.getDate();
        const month_start =
          start_given_date.getMonth().toString().length === 1
            ? "0" + start_given_date.getMonth().toString()
            : start_given_date.getMonth();
        let start_given_formatted = `${day_start}.${month_start}.${start_given_date.getFullYear()}`;

        let end_given_date = new Date(response.endGiven);
        const day_end =
          end_given_date.getDate().toString().length === 1
            ? "0" + start_given_date.getDate().toString()
            : start_given_date.getDate();
        const month_end =
          end_given_date.getMonth().toString().length === 1
            ? "0" + start_given_date.getMonth().toString()
            : start_given_date.getMonth();
        let end_given_formatted = `${day_end}.${month_end}.${end_given_date.getFullYear()}`;

        const payload = {
          ...registration,
          name: response.name || registration.name,
          surname: response.middleName || registration.middlename,
          fatherName: response.lastName || registration.last_name,
          doc_number: response.docNumber,
          doc_issue: response.docGiven,
          start_given: start_given_formatted,
          end_given: end_given_formatted,
        };

        dispatch(confirmSMS(payload));
        dispatch(isLoading(false));
      } else {
        dispatch(
          errorMessage(
            `${response.message}. Вы будете перенаправлены на главную страницу.`
          )
        );
        setTimeout(() => {
          dispatch(stepRegistration(0));
        }, 6000);
        dispatch(isLoading(false));
        setTimeout(() => {
          localStorage.removeItem("step");
          localStorage.removeItem("token");
        }, 5000);
        setTimeout(() => {
          Router.push("/");
        }, 5000);
      }
    })
    .then((response) => dispatch(isLoading(false)))
    .catch((r) => {
      console.log(r);
      dispatch(errorMessage("Ошибка получения документов."));
      setTimeout(() => {
        dispatch(stepRegistration(0));
      }, 6000);
      dispatch(isLoading(false));
      setTimeout(() => {
        localStorage.removeItem("step");
        localStorage.removeItem("token");
      }, 5000);
      setTimeout(() => {
        Router.push("/");
      }, 5000);
    })
    .then(() => dispatch(isLoading(false)));
};

export const postRegistrationSecond = (registration) => (dispatch) => {
  dispatch(isLoading(true));

  const payload = {
    token: localStorage.getItem("token"),
    workPlace: registration.work_place,
    sphere: registration.sphere,
    lastSix: registration.lastSix === "0" ? "1000" : registration.lastSix,
    deposit: registration.deposit === "0" ? "1000" : registration.deposit,
    position: registration.position,
    fioContact: `${registration.relative_name} ${registration.relative_last_name}`,
    phoneContact: registration.relative_phone_number,
    relativeContact: registration.relative_type_id,
    source: registration.source,
  };

  return fetch(`https://api.i-credit.kz/api/test/secondStep`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    credentials: "same-origin",
  })
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw response;
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.success) {
        dispatch(stepRegistration(3));
        dispatch(emptyMessage());
        localStorage.setItem("step", "3");
        window.scrollTo(0, 0);
      } else {
        dispatch(isLoading(false));
        dispatch(errorMessage(`${response.message}`));
      }
    })
    .catch((e) => {
      dispatch(errorMessage("Ошибка отправки заявки."));
    })
    .then(() => dispatch(isLoading(false)));
};

export const dateLoading = () => ({
  type: "DATE_LOADING",
});

export const dateFailed = (errmess) => ({
  type: "DATE_FAILED",
  payload: errmess,
});

export const regionsSucces = (region) => ({
  type: "REGION_SUCCESS",
  payload: region,
});

export const postRegistrationThird = (registration) => (dispatch) => {
  dispatch(isLoading(true));

  const payload = {
    token: localStorage.getItem("token"),
    iban: registration.iban_account,
    cardNumber: replaceDate(registration.card_number),
    cardIssue: registration.expiration_date_of_bcard,
    cardName: registration.name_of_owner,
    source: registration.source,
    clickID: registration.cpa_clickid,
    web_id: registration.webID,
  };

  return fetch(`https://api.i-credit.kz/api/test/thirdStep`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    credentials: "same-origin",
  })
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw response;
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.success) {
        dispatch(successMessage("Успешно"));
        dispatch(isLoading(false));
        newCookie();

        axios
          .get(`https://api.i-credit.kz/api/getScore`, {
            params: {
              token: localStorage.getItem("token"),
            },
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            if (response.data?.success && response.data?.decision) {
              swal("Успешно!", `Заявка отправлена`, "success").then(() => {
                Router.push(
                  `/newAgreements?token=${localStorage.getItem("token")}&bmg=${
                    response.data?.bmg ? 1 : 0
                  }`
                );
                cookie.remove("continue2");
              });
            } else {
              setTimeout(() => {
                dispatch(stepRegistration(0));
                Router.push(`/thanks`);
              }, 2000);
            }
          });
      } else {
        dispatch(isLoading(false));
        dispatch(errorMessage(`Ошибка отправки заявки. ${response.message}`));
      }
    })
    .then(() => dispatch(isLoading(false)))
    .catch((r) => {
      console.log(r);
      dispatch(errorMessage("Ошибка отправки данных."));
    })
    .then(() => dispatch(isLoading(false)));
};

export const fetchRegions = (region_id) => (dispatch) => {
  dispatch(dateLoading(true));
  return fetch(`https://api.money-men.kz/api/city/${region_id}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        }

        const error = new Error(
          `Error ${response.status}: ${response.statusText}`
        );
        error.response = response;
        throw error;
      },
      (error) => {
        const errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((regions) => dispatch(regionsSucces(regions)))
    .catch((error) => dispatch(dateFailed(error.message)));
};

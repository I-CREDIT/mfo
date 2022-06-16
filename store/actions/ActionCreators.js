import * as ActionTypes from "../types";
import Router from "next/router";
import cookie from "js-cookie";
import { newCookie } from "../../defaults/utmSource";
import axios from "axios";
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

export const getInfoFromBMG = (code) => (dispatch) => {
  dispatch(emptyMessage());
  dispatch(isLoading(true));

  return fetch(`http://185.233.3.138/api/takeCode?code=${code}`, {
    method: "GET",
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
      throw errorMessage("777");
    })
    .catch((error) =>
      error.json().then((e) => {
        dispatch(errorMessage(e.message));
      })
    )
    .finally(() => {
      dispatch(isLoading(false));
    });
};

export const getSMSFromBMG = (user) => (dispatch) => {
  dispatch(emptyMessage());
  dispatch(isLoading(true));
  user.phone = replaceDate(user.phone);

  const payload = {
    phone: user.phone,
    iin: user.iin,
  };

  return fetch(`https://api.i-credit.kz/api/takeCode`, {
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
            "Такой ИИН не зарегистрирован в БМГ! Пожалуйста, заполните данные вручную."
          )
        );
        setTimeout(() => {
          Router.push("/");
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
      setTimeout(() => {
        Router.push("/");
      }, 5000);
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

  return fetch(`https://api.i-credit.kz/api/sendSMS`, {
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

export const postRegistration = (registration) => (dispatch) => {
  dispatch(emptyMessage());
  dispatch(isLoading(true));
  registration.phone = replaceDate(registration.phone);
  registration.last_name = registration.last_name || "Нет";

  return fetch(`https://api.money-men.kz/api/registration_step_one`, {
    method: "POST",
    body: JSON.stringify(registration),
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
    .then((response) => dispatch(addRegistration(registration)))
    .then((response) => dispatch(isLoading(false)))
    .then((response) => dispatch(stepRegistration(1)))
    .then((response) => {
      localStorage.setItem("step", "1");
    })
    .then((response) => window.scrollTo(0, 0))
    .then((response) => dispatch(successMessage("")))
    .catch((e) => {
      dispatch(
        errorMessage(
          e.errors.iin
            ? "ИИН уже зарегистрирован. Вы будете перенаправлены на страницу авторизация! "
            : "" || e.errors.password
            ? "Пароли не совпадают"
            : "" || e.errors.phone
            ? "Польвозатель с таким телефон номером уже зарегистрирован"
            : e.errors.email || "" || e.errors
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
    iin: registration.iin,
    docNumber: registration.doc_number,
    docIssue: registration.doc_issue,
    startGiven: registration.start_given,
    endGiven: registration.end_given,
  };

  return fetch(`https://api.i-credit.kz/api/confirmSMSTest`, {
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
        let start_given_formatted = `${start_given_date.getDate()}.${start_given_date.getMonth()}.${start_given_date.getFullYear()}`;

        let end_given_date = new Date(response.endGiven);
        let end_given_formatted = `${end_given_date.getDate()}.${end_given_date.getMonth()}.${end_given_date.getFullYear()}`;

        const payload = {
          ...registration,
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
    lastSix: registration.lastSix,
    deposit: registration.deposit,
    position: registration.position,
    fioContact: `${registration.relative_name} ${registration.relative_last_name}`,
    phoneContact: registration.relative_phone_number,
    relativeContact: registration.relative_type_id,
    source: registration.source,
  };

  return fetch(`https://api.i-credit.kz/api/secondStep`, {
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
  console.log("hello", payload);

  return fetch(`https://api.i-credit.kz/api/thirdStep`, {
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
        dispatch(stepRegistration(0));
        dispatch(isLoading(false));
        newCookie();
        setTimeout(() => {
          Router.push(`/thanks`);
          // Router.push(`/newAggrements`);
        }, 3000);
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

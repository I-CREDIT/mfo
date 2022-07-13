import cookie from "js-cookie";
import Router from "next/router";

export const authenticatingUser = () => ({ type: "AUTHENTICATING_USER" });

export const setCurrentUser = (userData) => ({
  type: "SET_CURRENT_USER",
  payload: userData,
});

export const dateLoading = () => ({
  type: "DATE_LOADING",
});

export const dateFailed = (errmess) => ({
  type: "DATE_FAILED",
  payload: errmess,
});

export const statusSuccess = (status) => ({
  type: "STATUS_SUCCESS",
  payload: status,
});

export const historySuccess = (history) => ({
  type: "HISTORY_SUCCESS",
  payload: history,
});

export const logoutUser = () => ({
  type: "LOGOUT_USER",
});

export const loginUser = (values) => (dispatch) => {
  dispatch({ type: "AUTHENTICATING_USER" });
  fetch("https://api.i-credit.kz/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => {
      if (response.ok) {
        return response;
      }
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        return data;
      }
      const error = new Error(
        `Error ${response.status}: ${response.statusText}`
      );
      error.response = data.message;
      throw error;
    })
    .then(
      (data) => {
        cookie.set("token", data.token);
        dispatch(fetchCurrentUser());
        dispatch({ type: "SET_CURRENT_USER", payload: "user" });
        dispatch({ type: "AUTHENTICATED_USER" });
        Router.push("/cabinet/loans");
      },
      (error) => {
        throw new Error(error.message);
      }
    )
    .catch((error) => {
      if (error.message.includes("400")) {
        dispatch({
          type: "FAILED_LOGIN",
          payload: "Неправильный ИИН или пароль",
        });
      } else {
        dispatch({
          type: "FAILED_LOGIN",
          payload: "Неправильный ИИН или пароль",
        });
      }
    });
};

export const loginAdmin = (values) => (dispatch) => {
  values.login = values.iin
  delete values['iin']
  dispatch({ type: "AUTHENTICATING_USER" });
  fetch("https://api.i-credit.kz/api/authAdmin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => {
      if (response.ok) {
        return response;
      }
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        return data;
      }
      const error = new Error(
        `Error ${response.status}: ${response.statusText}`
      );
      error.response = data.message;
      throw error;
    })
    .then(
      (data) => {
        cookie.set("token", data.token);
        dispatch(fetchCurrentUser());
        dispatch({ type: "SET_CURRENT_USER", payload: "user" });
        dispatch({ type: "AUTHENTICATED_USER" });
        Router.push("/cabinet/admin13531");
      },
      (error) => {
        throw new Error(error.message);
      }
    )
    .catch((error) => {
      if (error.message.includes("400")) {
        dispatch({
          type: "FAILED_LOGIN",
          payload: "Неправильный ИИН или пароль",
        });
      } else {
        dispatch({
          type: "FAILED_LOGIN",
          payload: "Неправильный ИИН или пароль",
        });
      }
    });
};

export const fetchCurrentUser = () => (dispatch) => {
  dispatch(authenticatingUser());
  fetch("https://api.i-credit.kz/api/getUserProfileFromBitrix", {
    method: "POST",
    body: JSON.stringify({ token: cookie.get("token") }),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response;
      }
      const error = new Error(
        `Error ${response.status}: ${response.statusText}`
      );
      error.response = response;
      throw error;
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(setCurrentUser(data));
    })
    .catch((error) => {
      // cookie.remove("token");
      console.log(error.message || "Error");
    });
};

export const fetchUserStatus = () => (dispatch) => {
  dispatch(dateLoading(true));
  fetch("https://api.i-credit.kz/api/getUserInfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ token: cookie.get("token") }),
  })
    .then((response) => {
      if (response.ok) {
        return response;
      }
      const error = new Error(
        `Error ${response.status}: ${response.statusText}`
      );
      error.response = response;
      throw error;
    })
    .then((response) => response.json())
    .then((data) => {
      dispatch(statusSuccess(data));
    })
    .catch((error) => {
      // cookie.remove("token");
      dispatch(dateFailed(error.message || "Данные верны. "));
      console.log(error.message || "Error");
    });
};

export const fetchUserHistory = () => (dispatch) => {
  dispatch(dateLoading(true));
  fetch("https://api.i-credit.kz/api/history", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ token: cookie.get("token") }),
  })
    .then((response) => {
      if (response.ok) {
        return response;
      }
      const error = new Error(
        `Error ${response.status}: ${response.statusText}`
      );
      error.response = response;
      throw error;
    })
    .then((response) => response.json())
    .then((data) => {
      dispatch(historySuccess(data));
    })
    .catch((error) => {
      // cookie.remove("token");
      dispatch(dateFailed(error.message));
      console.log(error.message || "Error");
    });
};

export const fetchAdmin = () => (dispatch) => {
  dispatch(authenticatingUser());
  fetch(
    `http://localhost:8000/api/getProfile?token=${cookie.get("admin_token")}`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      if (response.ok) {
        return response;
      }
      const error = new Error(
        `Error ${response.status}: ${response.statusText}`
      );
      error.response = response;
      throw error;
    })
    .then((response) => response.json())
    .then((data) => {
      dispatch(setCurrentUser(data));
    })
    .catch((error) => {
      cookie.remove("admin_token");
      console.log(error.message || "Error");
    });
};

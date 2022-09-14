import getCustomers from "../../api/getCustomers";

import jwt_decode from "jwt-decode";

const getIsLogin = (isLogin) => {
  return { type: "SET_IS_LOGIN", payload: isLogin };
};

const setLogin = (login) => {
  return { type: "GET_LOGIN_SUCCESS", payload: login };
};
const setError = (error) => {
  return { type: "GET_LOGIN_ERROR", payload: error };
};

const getSuccess = (data, dispatch) => {
  dispatch(getIsLogin(data.success));
  dispatch(setLogin({ ...jwt_decode(data.token), token: data.token }));
};

const fetchUser = (userData, isAutoLog) => {
  return async (dispatch) => {
    await getCustomers(userData)
      .then((response) => {
        const status = response.data.success;
        status && getSuccess(response.data, dispatch);
        isAutoLog
          ? localStorage.setItem("login", JSON.stringify(response.data.token))
          : sessionStorage.setItem(
              "login",
              JSON.stringify(response.data.token)
            );
      })
      .catch((error) => {
        dispatch(setError(error.response.data));
      });
  };
};

export { fetchUser, setError, getSuccess, getIsLogin, setLogin };

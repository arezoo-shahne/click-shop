import axios from "axios";
import {
  LoginPageSuccess,
  LoginPageError,
  LoginPageLoading,
  SignUpError,
  SignUpSuccess,
  SignUpLoading,
} from "../../constance/Variables";
import { addressInitialState } from "./User.reducer";

export const LoginAction = (LoginPayload) => async (dispatch, getState) => {
  const { LoginData } = getState().UserState;

  dispatch({
    type: "update-state",
    payload: {
      LoginData: LoginData,
      LoginLoading: true,
      LoginError: "",
      signedUp: false,
      userProfileInfo: {},
    },
  });
  await axios
    .post("http://kzico.runflare.run/user/login", {
      email: LoginPayload.email,
      password: LoginPayload.password,
    })
    .then((response) => {
      addToLocalStorage(response.data.user);

      dispatch({
        type: "update-state",
        payload: {
          LoginData: response.data.user,
          LoginLoading: false,
          LoginError: "",
          signedUp: false,
          userProfileInfo: {},
          userAddress: addressInitialState(),
        },
      });
    })
    .catch(() => {
      dispatch({
        type: "update-state",
        payload: {
          LoginData: LoginData,
          LoginLoading: false,
          LoginError: "failed",
          signedUp: false,

          userProfileInfo: {},
        },
      });
    });
};
export const SignUpAction = (SignUpPayload) => async (dispatch, getState) => {
  const { LoginData } = getState().UserState;

  dispatch({
    type: "update-state",
    payload: {
      LoginData: LoginData,
      LoginLoading: true,
      LoginError: "",
      signedUp: false,
      userProfileInfo: {},
    },
  });
  await axios
    .post("http://kzico.runflare.run/user/signup", {
      username: SignUpPayload.username,
      email: SignUpPayload.email,
      password: SignUpPayload.password,
      mobile: SignUpPayload.mobile,
    })
    .then(() => {
      dispatch({
        type: "update-state",
        payload: {
          LoginData: LoginData,
          LoginLoading: false,
          LoginError: "",
          signedUp: true,
          userProfileInfo: {},
        },
      });
    })
    .catch(() => {
      dispatch({
        type: "update-state",
        payload: {
          LoginData: LoginData,
          LoginLoading: false,
          LoginError: "failed",
          signedUp: false,
          userProfileInfo: {},
        },
      });
    });
};
export const addressAction = (address) => async (dispatch, getState) => {
  const { LoginData } = getState().UserState;
  saveUserAddress(address);
  dispatch({
    type: "update-state",
    payload: {
      LoginData: LoginData,
      LoginLoading: true,
      LoginError: "",
      signedUp: false,
      userAddress: address,
      userProfileInfo: {},
    },
  });
};
export function Logout() {
  return async (dispatch, getState) => {
  const { LoginData } = getState().UserState;
    DeleteUserLocalStorage();
    dispatch({
      type: "update-state",
      payload: {
        LoginLoading: false,
        LoginData: LoginData,
        LoginError: "",
        SignedUp: false,
        userAddress: {
          city: null,
          address: null,
          postalCode: null,
          phone: null,
        },
        userProfileInfo: {},
      },
    });
  };
}

export function getProfile() {
  return async (dispatch, getState) => {
    const { LoginData } = getState().UserState;
    dispatch({
      type: "update-state",
      payload: {
        LoginLoading: true,
        LoginData: LoginData,
        LoginError: "",
        SignedUp: false,
        userProfileInfo: {},
        
        userAddress:addressInitialState(),
      },
    });
    await axios
      .get("http://kzico.runflare.run/user/profile", {
        headers: {
          authorization: "Bearer " + getState().UserState.LoginData,
        },
      })
      .then((response) => {
        dispatch({
          type: "update-state",
          payload: {
            LoginLoading: false,
            LoginData: LoginData,
            LoginError: "",
            SignedUp: true,
            userProfileInfo: response.data,
            
            userAddress:addressInitialState(),
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "update-state",
          payload: {
            LoginLoading: false,
            LoginData: LoginData,
            LoginError: error.message,
            SignedUp: false,
            userProfileInfo: {},
          },
        });
      })
      .finally(() => {});
  };
}

function DeleteUserLocalStorage() {
  localStorage.removeItem("login");
  localStorage.removeItem("address");
}

function addToLocalStorage(loginData) {
  localStorage.setItem("login", JSON.stringify(loginData));
}
function saveUserAddress(address) {
  localStorage.setItem("address", JSON.stringify(address));
}

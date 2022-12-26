import axios from "axios";
import {
  LoginPageSuccess,
  LoginPageError,
  LoginPageLoading,
  SignUpError,
  SignUpSuccess,
  SignUpLoading,
} from "../../constance/Variables";

export const LoginAction = (LoginPayload) => async (dispatch, getState) => {
  dispatch({
    type: "update-state",
    payload: {
      LoginData: null,
      LoginLoading: true,
      LoginError: "",
      signedUp: false,
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
        },
      });
    })
    .catch(() => {
      dispatch({
        type: "update-state",
        payload: {
          LoginData: null,
          LoginLoading: false,
          LoginError: "failed",
          signedUp: false,
        },
      });
    });
  // try {
  //   dispatch({
  //     type: LoginPageLoading,
  //     payload: {
  //       LoginData: null,
  //       LoginLoading: true,
  //       LoginError: "",
  //       signedUp: false,
  //     },
  //   });
  //   const { data } = await axios.post("http://kzico.runflare.run/user/login", {
  //     email: LoginPayload.email,
  //     password: LoginPayload.password,
  //   });
  //   addToLocalStorage(data.user);
  //   dispatch({
  //     type: LoginPageSuccess,
  //     payload: {
  //       LoginData: [...data],
  //       LoginLoading: false,
  //       LoginError: "",
  //       signedUp: false,
  //     },
  //   });
  // } catch (error) {
  //   dispatch({
  //     type: LoginPageError,
  //     payload: {
  //       LoginData: null,
  //       LoginLoading: false,
  //       LoginError: error.message,
  //       signedUp: false,
  //     },
  //   });
  // }
};
export const SignUpAction = (SignUpPayload) => async (dispatch, getState) => {
  dispatch({
    type: "update-state",
    payload: {
      LoginData: null,
      LoginLoading: true,
      LoginError: "",
      signedUp: false,
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
          LoginData: null,
          LoginLoading: false,
          LoginError: "",
          signedUp: true,
        },
      });
    })
    .catch(() => {
      dispatch({
        type: "update-state",
        payload: {
          LoginData: null,
          LoginLoading: false,
          LoginError: "failed",
          signedUp: false,
        },
      });
    });
  //   try {
  //     dispatch({
  //       type: SignUpLoading,
  //       payload: { LoginData: null, LoginLoading: true, LoginError: "" ,signedUp:false},
  //     });
  //     const { data } = await axios.post("http://kzico.runflare.run/user/signup", {
  //       username: SignUpPayload.username,
  //       email: SignUpPayload.email,
  //       password: SignUpPayload.password,
  //       mobile: SignUpPayload.mobile,
  //     });
  //     // addToLocalStorage(data.user);
  //     dispatch({
  //       type: SignUpSuccess,
  //       payload: { LoginData: [...data], LoginLoading: false, LoginError: "",signedUp:true },
  //     });
  //   } catch (error) {
  //     dispatch({
  //       type: SignUpError,
  //       payload: {
  //         LoginData: {},
  //         LoginLoading: false,
  //         LoginError: error.message,
  //         signedUp:false
  //       },
  //     });
  //   }
};
export const addressAction = (address) => async (dispatch, getState) => {
  saveUserAddress(address)
  dispatch({
    type: "update-state",
    payload: {
      LoginData: null,
      LoginLoading: true,
      LoginError: "",
      signedUp: false,
      userAddress:address
    },
  });
};
function addToLocalStorage(loginData) {
  localStorage.setItem("login", JSON.stringify(loginData));
}
function saveUserAddress(address){
  localStorage.setItem("address", JSON.stringify(address));

}
export function getProfile() {
  return async (dispatch, getState) => {
    dispatch({
      type: "update-state",
      payload: {
        userLoading: true,
        userList: getState().UserState.LoginData,
        userError: "",
        userSignedUp: false,
        userProfileInfo: {},
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
            userLoading: false,
            userList: getState().UserState.LoginData,
            userError: "",
            userSignedUp: true,
            userProfileInfo: response.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "update-state",
          payload: {
            userLoading: false,
            userList: null,
            userError: error.message,
            userSignedUp: false,
            userProfileInfo: {},
          },
        });
      })
      .finally(() => {});
  };
}

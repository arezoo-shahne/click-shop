import {
  LoginPageLoading,
  SignUpError,
  SignUpSuccess,
  SignUpLoading,
  LoginPageSuccess,
  LoginPageError,
} from "../../constance/Variables";
export const UserReducer = (
  UserState = {
    LoginData: LoginInitialState(),
    LoginLoading: false,
    LoginError: "",
    signedUp: false,
    userAddress: addressInitialState(),
    userProfileInfo: {},

  },
  { type, payload }
) => {
  switch (type) {
    case "update-state":
      return payload;
    default:
      return UserState;
  }
};
function LoginInitialState() {
  let initState = null;
  if (JSON.parse(localStorage.getItem("login"))) {
    initState = JSON.parse(localStorage.getItem("login"));
  }
  return initState;
}
function addressInitialState() {
  let initState = null;
  if (JSON.parse(localStorage.getItem("address"))) {
    initState = JSON.parse(localStorage.getItem("address"));
  }
  return initState;
}

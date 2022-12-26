import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { LoginAction } from "../../../services/user/User.action";
import "./LoginPage.scss";

function LoginPage() {
  const loginDispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {LoginData } = useSelector((response) => response.UserState);

  function loginFn() {
    loginDispatch(LoginAction({email, password}));
  }
  return (
    <div>
      <div className="login-header">
        <input
          className="login-header__inputs"
          type="text"
          placeholder="ایمیل/نام کاربری خود را وارد کنید"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <input
          className="login-header__inputs"
          type="password"
          placeholder="رمز عبور خود را وارد کنید"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </div>
      <div className="login-footer">
        <div className="login-footer__wrapper">
          <button className="login-footer__login" onClick={loginFn}>
            ورود
          </button>
          <Link to="/sign-up" className="login-footer__signup">
            ثبت نام{" "}
          </Link>
        </div>
      </div>
          {
            LoginData &&
            <Navigate to='/cart'/>
          }
    </div>
  );
}

export default LoginPage;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {SignUpAction } from "../../../services/user/User.action";
import "./SignUpPage.scss";

function SignUpPage() {
  const signUpDispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const {signedUp } = useSelector((response) => response.UserState);


  function signUpFn() {
    signUpDispatch(SignUpAction({username,email,password,mobile}));
  }
  return (
    <div>
      <div className="sign-up-header">
        <input
          className="sign-up-header__inputs"
          type="text"
          placeholder="نام کاربری"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
        <input
          className="sign-up-header__inputs"
          type="email"
          placeholder="ایمیل"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <input
          className="sign-up-header__inputs"
          type="password"
          placeholder="رمز عبور"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <input
          className="sign-up-header__inputs"
          type="password"
          placeholder="تایید رمز عبور"
          onChange={(event) => setConfirmPassword(event.target.value)}
          value={confirmPassword}
        />
        <input
          className="sign-up-header__inputs"
          type="text"
          placeholder="شماره تلفن همراه"
          onChange={(event) => setMobile(event.target.value)}
          value={mobile}
        />
      </div>
      <div className="sign-up-footer">
        <div className="sign-up-footer__wrapper">
          <button className="sign-up-footer__signup" onClick={signUpFn}>
            ثبت نام
          </button>
          {
            signedUp &&
            <Navigate to='/login'/>
          }
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;

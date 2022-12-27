import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Logout } from "../../../services/user/User.action";
import './LoginButton.scss'
function LoginButton() {
  const dispatch = useDispatch();
  const { LoginData } = useSelector((response) => response.UserState);
  const [userLoggedOut, setuserLoggedOut] = useState(false);
  function LogOutUser() {
    dispatch(Logout());
    setuserLoggedOut(true);
  }
  return (
    <div className="login-button">
      {LoginData ? (
        <Link to="/profile">{LoginData.email}</Link>
      ) : (
        <Link to="/login">ورود</Link>
      )}
      {LoginData ? (
        <div className="login-button__wrapper">
          <div className="login-button__menu">
            <Link to="./profile">Profile</Link>
            <Link to="./orders">Orders</Link>
            <Link to="./setting">Setting</Link>
            <div onClick={LogOutUser}>LogOut</div>
          </div>
        </div>
      ):("")}
      {userLoggedOut && <Navigate to="/" />}
    </div>
  );
}

export default LoginButton;

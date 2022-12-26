import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './LoginButton.scss'
function LoginButton() {
  const { LoginData } = useSelector((response) => response.UserState);

  return (
    <div className="login-button">
      {LoginData ? (
        <Link to="/profile">{LoginData.email}</Link>
      ) : (
        <Link to="/login">ورود</Link>
      )}
      {LoginData && (
        <div className="login-button__wrapper">
          <div className="login-button__menu">
            <Link to="./profile">Profile</Link>
            <Link to="./orders">Orders</Link>
            <Link to="./setting">Setting</Link>
            <div>LogOut</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginButton;

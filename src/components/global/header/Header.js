import React from "react";
import { Provider } from "react-redux";
import { Link } from "react-router-dom";
import CombinedStores from "../../../services/combined-stores/CombinedStores.store";
import CartIcon from "../../ad/cart-icon/CartIcon";
import LoginButton from "../../user/login-button/LoginButton";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Link to="./">کلیک شاپ</Link>
      <div className="header__left-part">
        <Provider store={CombinedStores}>
          <CartIcon />
          <LoginButton />
        </Provider>
      </div>
    </header>
  );
}

export default Header;

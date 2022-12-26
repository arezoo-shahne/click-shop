import React from "react";
import { Provider } from "react-redux";
import CombinedStores from "../../../services/combined-stores/CombinedStores.store";
import CartIcon from "../../ad/cart-icon/CartIcon";
import LoginButton from "../../user/login-button/LoginButton";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <span>کلیک شاپ</span>
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

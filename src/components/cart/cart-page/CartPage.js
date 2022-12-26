import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartPageItems from "../cart-page-items/CartPageItems";
import "./CartPage.scss";

function CartPage() {
  const AdDetailDispatch = useDispatch();
  const { CartState, UserState } = useSelector((response) => response);
  const { CartData, total } = CartState;
  const { LoginData } = UserState;

  function clickfunction() {}
  return (
    <div>
      {CartData.length === 0 ? (
        <p className="cart-page__empty-message">سبد خرید شما خالی است :(</p>
      ) : (
        CartData.map((cartItemData) => {
          return <CartPageItems data={cartItemData} />;
        })
      )}
    {
        CartData.length!==0 ?
        <div className="cart-page__footer">
        {LoginData ? (
          <Link to='/address' className="cart-page__button" click={clickfunction()}>
            Next
          </Link>
        ) : (
          <Link to="/login" className="cart-page__login-button">
            وارد شوید
          </Link>
        )}
        <span className="cart-page__price">مجموع قیمت: ${total.price}</span>
      </div> :
      null
    }
      
    </div>
  );
}

export default CartPage;

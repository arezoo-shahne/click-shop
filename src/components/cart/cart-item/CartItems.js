import React from "react";
import { useDispatch } from "react-redux";
import "./CartItems.scss";

function CartItems({ data }) {
    const AdDetailDispatch = useDispatch();
  return (
    <div className="cart-items">
      <div className="cart-items__right">
        <div className="cart-items__image">
          <img src={data.image} alt=""/>
        </div>
        <p className="cart-items__name">نام محصول: {data.name}</p>
      </div>
      <div className="cart-items__left">
      <span className="cart-items__price">قیمت: {data.price}$</span>
      </div>
    </div>
  );
}

export default CartItems;

import React from "react";
import { useDispatch } from "react-redux";
import { minusQty, plusQty, removeItem } from "../../../services/cart/cart.action";
import ButtonPlus from "../../global/button-plus/ButtonPlus";
import "./CartPageItems.scss";

function CartPageItems({ data }) {
    const AdDetailDispatch = useDispatch();

    function Plus(){
        AdDetailDispatch(plusQty(data._id))
      }
      function Minus(){
        AdDetailDispatch(minusQty(data._id))
      }
      function Remove(){
        AdDetailDispatch(removeItem(data._id))
      }
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
      <ButtonPlus count={data.qty} plus={Plus} minus={Minus} remove={Remove} className="cart-items__button"/>
      </div>
    </div>
  );
}

export default CartPageItems;

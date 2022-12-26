import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import CartPageItems from "../cart-page-items/CartPageItems";
import "./CheckOutPage.scss"
function CartCheckOut() {
  const [submited, setSubmited] = useState(false);
  const mergedDispatch = useDispatch();
  const { CartData, total } = useSelector((response) => {
    return response.CartState;
  });
  const { LoginData, userAddress } = useSelector(
    (response) => response.UserState
  );
  function GenerateOrderItems() {
    let orderItems = [];
    CartData.forEach((itemData) => {
      orderItems.push({
        product: itemData._id,
        qty: itemData.qty,
      });
    });
    return orderItems;
  }
  function SubmitOrder() {
    axios
      .post(
        "http://kzico.runflare.run/order/submit",
        {
          orderItems: GenerateOrderItems(),
          shippingAddress: {
            address: userAddress.address,
            city: userAddress.city,
            postalCode: userAddress.postalCode,
            phone: userAddress.phone,
          },
          paymentMethod: "cash",
          shippingPrice: 5,
          totalPrice: total.price + 5,
        },
        {
          headers: {
            authorization: "Bearer " + (JSON.parse(localStorage.getItem("login")).token),
          },
        },
      )
      .then((response) => {
        setSubmited(true);
      });
  }
  return (
    <div className="cart-checkout">
      {CartData.map((itemData, index) => {
        return <CartPageItems data={itemData} key={index} />;
      })}

      <div className="cart-checkout__footer">
        <Link to="/cart" className="checkout__btn">تغییر</Link>
        <span>مجموع قیمت: {total.price}</span>
        <button onClick={SubmitOrder} className="checkout__btn">ثبت سفارش</button>
      </div>
      {submited && <Navigate to="/" />}
    </div>
  );
}

export default CartCheckOut;

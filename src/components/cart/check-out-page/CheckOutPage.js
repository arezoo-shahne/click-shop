import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { ClearCart } from "../../../services/cart/cart.action";
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
  const [hasToken, sethasToken] = useState(true);
  function CheckToken() {
    if (JSON.parse(localStorage.getItem("login")) !== null) {
      sethasToken(true);
      return true;
    } else {
      sethasToken(false);
      return false;
    }
  }
  useEffect(() => {
    CheckToken();
  }, []);

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
        mergedDispatch(ClearCart())
      });
  }
  return (
    <div className="cart-checkout">
      {!hasToken && <Navigate to={"/"} />}
      {CartData.map((itemData, index) => {
        return <CartPageItems data={itemData} key={index} />;
      })}

      <div className="cart-checkout__footer">
        <button onClick={SubmitOrder} className="checkout__btn">ثبت سفارش</button>
        <Link to="/cart" className="checkout__btn">تغییر</Link>
        <span>مجموع قیمت: {total.price}</span>
      </div>
      {submited && <Navigate to="/" />}
    </div>
  );
}

export default CartCheckOut;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { ClearCart } from "../../../services/cart/cart.action";
import CartItems from "../cart-item/CartItems";
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
        return <CartItems data={itemData} key={index} />;
      })}

      <div className="checkout__footer">
       <div className="footer__right-side">
       <Link to="/" onClick={SubmitOrder} className="checkout__btn">ثبت سفارش</Link>
        <Link to="/cart" className="checkout__btn">تغییر</Link>
       </div>
       <div className="footer__left-side">
        <span className="checkout__price">مجموع قیمت: {total.price}</span>
       </div>
      </div>
      {submited && <Navigate to="/" />}
    </div>
  );
}

export default CartCheckOut;

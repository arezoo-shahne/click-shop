import React from "react";
import "./CartIcon.scss";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CartIcon() {
    const {total}=useSelector(
        (response)=>response.CartState
    )
  return (
    <Link to="/cart" className="cart-icon">
      <span>{total.count}</span>
      <FiShoppingCart />
    </Link>
  );
}

export default CartIcon;

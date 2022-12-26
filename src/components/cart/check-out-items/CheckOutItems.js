import React from "react";
import { useDispatch } from "react-redux";
import './CheckOutItems.scss'
function CheckOutItems({ data }) {
    const AdDetailDispatch = useDispatch();

  return (
    <div className="check-out-items">
      <div className="check-out-items__right">
        <div className="check-out-items__image">
          <img src={data.image} alt=""/>
        </div>
        <p className="check-out-items__name">نام محصول: {data.name}</p>
      </div>
      <div className="check-out-items__left">
      <span className="check-out-items__price">قیمت: {data.price}$</span>
      </div>
    </div>
  );
}

export default CheckOutItems;

import React from "react";
import { Link } from "react-router-dom";
import "./OrderItem.scss";
function OrderItem({ data }) {
  return (
    <Link to={"/order/" + data._id} className="order-item">
      <p>تعداد محصولات : {data.orderItems.length}</p>
      <p>نحوه پرداخت : {data.paymentMethod}</p>
      <p>شهر : {data.shippingAddress.city}</p>
      <p>هزینه ارسال: {data.shippingPrice}</p>
      <p>قیمت کل : {data.totalPrice}</p>
    </Link>
  );
}

export default OrderItem;

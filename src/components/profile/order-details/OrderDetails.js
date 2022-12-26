import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { OrderDetailAction } from "../../../services/order/Order.Action";
import OrderItem from "../order-item/OrderItem";
import "./OrderDetails.scss";
function OrderDetail() {
  const { id } = useParams();
  const orderDispatch = useDispatch();
  const { orderDetail } = useSelector((response) => response.orderState);
  useEffect(() => {
    orderDispatch(OrderDetailAction(id));
  }, []);
  console.log(orderDetail);
  return (
    <div className="order-detail">
      {orderDetail && <OrderItem data={orderDetail} />}
    </div>
  );
}

export default OrderDetail;

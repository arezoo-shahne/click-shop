import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { OrderAction } from '../../../services/order/Order.Action';
import OrderItem from '../order-item/OrderItem';

function OrderPage() {
    const AdDetailDispatch = useDispatch();
    const { orderList } = useSelector((response) => response.orderState );
    useEffect(() => {
      AdDetailDispatch(OrderAction());
    }, []);
    console.log(orderList)
  return (
       <div className="orders-page">
      {orderList&&
      orderList.map((item, index) => {
        return <OrderItem data={item} key={index} />;
      })}
    </div>
  )
}

export default OrderPage
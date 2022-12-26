import { saveData } from "../../constance/Variables";


export default function OrderReducer(
  orderState = {
    orderLoading: false,
    orderList: [],
    orderError: "",
    orderDetail: null,
  },
  { type, payload },
) {
  switch (type) {
    case saveData:
      return payload;
    default:
      return orderState;
  }
}
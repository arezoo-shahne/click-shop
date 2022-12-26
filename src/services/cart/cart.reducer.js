import {
  AddToCart,
  Decrease,
  Increase,
  Remove,
} from "../../constance/Variables";
export const CartReducer = (
  CartState = {
    CartData: cartListInitialState(),
    CartLoading: false,
    CartError: "",
    total: toalInitialState(),
  },
  { type, payload }
) => {
  switch (type) {
    case AddToCart:
      return payload;
    case Increase:
      return payload;
    case Decrease:
      return payload;
    case Remove:
      return payload;
    default:
      return CartState;
  }
};
function cartListInitialState() {
  let initState = [];
  let storedData = localStorage.getItem("cart");
  if (storedData) {
    initState = JSON.parse(storedData);
  }
  return initState;
}

function toalInitialState() {
  let initState = {
    count:0,
    price:0
  };
  let storedTotal = localStorage.getItem("total");
  if (storedTotal) {
    initState = JSON.parse(storedTotal);
  }
  return initState;
}

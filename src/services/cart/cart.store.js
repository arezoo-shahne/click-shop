import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "./cart.reducer";
const Reducers = combineReducers({ CartState: CartReducer });
// const InitialState=[];
const midleware = [thunk];
const CartStore = legacy_createStore(
  Reducers,
  applyMiddleware(...midleware),
//   InitialState
);
export default CartStore;
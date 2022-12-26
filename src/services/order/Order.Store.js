import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import OrderReducer from "./Order.Reducer";

const reducers = combineReducers({ orderState: OrderReducer });
const middleware = [thunk];
const initState = {};
const orderStore = legacy_createStore(
  reducers,
  initState,
  applyMiddleware(...middleware),
);
export default orderStore;

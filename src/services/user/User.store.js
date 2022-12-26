import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {UserReducer } from "./User.reducer";
const Reducers = combineReducers({ UserState: UserReducer });
// const InitialState=[];
const midleware = [thunk];
const LoginStore = legacy_createStore(
  Reducers,
  applyMiddleware(...midleware)
  //   InitialState
);
export default LoginStore;

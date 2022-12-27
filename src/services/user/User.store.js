import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {UserReducer } from "./User.reducer";
const reducers = combineReducers({ UserState: UserReducer });
const initialState=[];
const midleware = [thunk];
const LoginStore = legacy_createStore(
  reducers,
  initialState,
  applyMiddleware(...midleware)
);
export default LoginStore;

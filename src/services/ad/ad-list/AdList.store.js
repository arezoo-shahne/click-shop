import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AdListReducer } from "./AdList.reducer";
const Reducers = combineReducers({ adListstate: AdListReducer });
// const InitialState=[];
const midleware = [thunk];
const adListstore = legacy_createStore(
  Reducers,
  applyMiddleware(...midleware),
//   InitialState
);
export default adListstore;

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AdDetailReducer } from "./AdDetail.reducer";

const Reducers = combineReducers({adDetailState:AdDetailReducer  });
// const InitialState=[];
const midleware = [thunk];
const AdDetailStore = legacy_createStore(
  Reducers,
  applyMiddleware(...midleware),
//   InitialState
);
export default AdDetailStore;

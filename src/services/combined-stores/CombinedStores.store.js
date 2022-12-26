import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AdDetailReducer } from "../ad/ad-detail/AdDetail.reducer";
import { CartReducer } from "../cart/cart.reducer";
import { UserReducer } from "../user/User.reducer";

const Reducers = combineReducers({
  adDetailState: AdDetailReducer,
  CartState: CartReducer,
  UserState: UserReducer,
});
// const InitialState=[];
const midleware = [thunk];
const CombinedStores = legacy_createStore(
  Reducers,
  applyMiddleware(...midleware)
  //   InitialState
);
export default CombinedStores;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Header from "./components/global/header/Header";
import AdList from "./components/ad/ad-list/AdList";
import { Provider } from "react-redux";
import adListstore from "./services/ad/ad-list/AdList.store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdDetail from "./components/ad/ad-detail/AdDetail";
import CombinedStores from "./services/combined-stores/CombinedStores.store"; 
import orderStore from "./services/order/Order.Store"; 
import CartPage from "./components/cart/cart-page/CartPage";
import LoginPage from "./components/user/login-page/LoginPage";
import SignUpPage from "./components/user/sign-up-page/SignUpPage";
import AddressPage from "./components/cart/address-page/AddressPage";
import CheckOutPage from "./components/cart/check-out-page/CheckOutPage";
import ProfilePage from "./components/profile/profile-page/ProfilePage";
import OrderPage from "./components/profile/order-page/OrderPage";
import OrderDetail from "./components/profile/order-details/OrderDetails";
import SettingPage from "./components/setting/setting-page/SettingPage";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="click-shop-wrapper">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Provider store={adListstore}>
                <AdList />
              </Provider>
            }
          ></Route>
          <Route
            path="/ad-detail/:id"
            element={
              <Provider store={CombinedStores}>
                <AdDetail />
              </Provider>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Provider store={CombinedStores}>
                <CartPage />
              </Provider>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Provider store={CombinedStores}>
                <LoginPage />
              </Provider>
            }
          ></Route>
          <Route
            path="/sign-up"
            element={
              <Provider store={CombinedStores}>
                <SignUpPage />
              </Provider>
            }
          ></Route>
          <Route
            path="/address"
            element={
              <Provider store={CombinedStores}>
                <AddressPage />
              </Provider>
            }
          ></Route>
          <Route
            path="/checkout"
            element={
              <Provider store={CombinedStores}>
                <CheckOutPage/>
              </Provider>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <Provider store={CombinedStores}>
                <ProfilePage/>
              </Provider>
            }
          ></Route>
          <Route
            path="/orders"
            element={
              <Provider store={orderStore}>
                <OrderPage/>
              </Provider>
            }
          ></Route>
          <Route
            path="/order/:id"
            element={
              <Provider store={orderStore}>
                <OrderDetail />
              </Provider>
            }
          ></Route>
          <Route
            path="/setting"
            element={
              <Provider store={CombinedStores}>
                <SettingPage/>
              </Provider>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

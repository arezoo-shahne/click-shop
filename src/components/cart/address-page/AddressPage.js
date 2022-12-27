import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { addressAction } from "../../../services/user/User.action";
import "./AddressPage.scss";

function AddressPage() {
  const { userAddress } = useSelector((response) => {
    console.log(response);
    return response.UserState;
  });
  const addressDispatch = useDispatch();
  const [city, setCity] = useState(
    userAddress === null ? "" : userAddress.city,
  );
  const [address, setAddress] = useState(
    userAddress === null ? "" : userAddress.address,
  );
  const [postalCode, setPostalCode] = useState(
    userAddress === null ? "" : userAddress.postalCode,
  );
  const [phone, setPhone] = useState(
    userAddress === null ? "" : userAddress.phone,
  );
  const [saved, setSaved] = useState(false);
  const [btnInable, setBtnInable] = useState(false);
  const [hasToken, sethasToken] = useState(true);
  function addressFn() {
    addressDispatch(addressAction({ city, address, postalCode, phone }));
    setSaved(true);
  }
  function CheckToken() {
    if (JSON.parse(localStorage.getItem('login')) !== null) {
      sethasToken(true);
      return true;
    } else {
      sethasToken(false);
      return false;
    }
  }
  useEffect(() => {
    CheckToken() && handleButton();
  }, [city, address, postalCode, phone]);

  function handleButton() {
    if (
      city?.trim().length > 2 &&
      address?.trim().length > 9 &&
      postalCode?.trim().length > 9 &&
      phone?.length > 10
    ) {
      setBtnInable(false);
    } else {
      setBtnInable(true);
    }
  }

  return (
    <div className="address-header">
       {!hasToken && <Navigate to={"/"} />}
      <input
        className="address-header__inputs"
        type="text"
        placeholder="شهر"
        onChange={(event) => setCity(event.target.value)}
        value={city}
      />
      <input
        className="address-header__inputs"
        type="text"
        placeholder="آدرس"
        onChange={(event) => setAddress(event.target.value)}
        value={address}
      />
      <input
        className="address-header__inputs"
        type="text"
        placeholder="کد پستی"
        onChange={(event) => setPostalCode(event.target.value)}
        value={postalCode}
      />
      <input
        className="address-header__inputs"
        type="text"
        placeholder="تلفن همراه"
        onChange={(event) => setPhone(event.target.value)}
        value={phone}
      />
      <button disabled={btnInable} className="address-footer__signup" onClick={addressFn}>
        بعدی
      </button>
      {saved && <Navigate to="/checkout"></Navigate>}
    </div>
  );
}

export default AddressPage;

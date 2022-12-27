import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ChangeProfile.scss";
function ChangeProfile() {
  const mergedDispatch = useDispatch();
  const { LoginData } = useSelector((response) => response.UserState);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  async function SubmitForm() {
    console.log(LoginData.token); 
    await axios.put(
      "http://kzico.runflare.run/user/change-profile",
      {
        firstname,
        lastname,
        gender,
        age,
        city,
      },
      {
        headers: {
          authorization: "Bearer " + LoginData.token,
        },
      },
    );
  }
  return (
    <div className="change-profile-header ">
      <input
        className="change-profile__input"
        type="text"
        placeholder="نام:"
        value={firstname}
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />
      <input
        className="change-profile__input"
        type="text"
        placeholder="نام خانوادگی :"
        value={lastname}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
       <div className="change-profile__radio">
        <span className="change-profile__button-holder">
          <label className="change-profile__button">
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(event) => {
                setGender("male");
              }}
            />
            مرد
          </label>
          <label className="change-profile__button">
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(event) => {
                setGender("female");
              }}
            />
            زن
          </label>
        </span>
      </div>
      <input
        className="change-profile__input"
        type="number"
        placeholder="سن"
        value={age}
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
      <input
        className="change-profile__input"
        type="text"
        placeholder="شهر"
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
      />
      <button
        className="change-profile__button"
        disabled={false}
        onClick={() => {
          SubmitForm();
        }}
      >
        ذخیره
      </button>
    </div>
  );
}

export default ChangeProfile;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ChangeProfile.scss";
function ChangeProfile() {
  const mergedDispatch = useDispatch();
  const { LoginData } = useSelector((response) => response.UserState);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  async function SubmitForm() {
    console.log(LoginData.token)
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
      <input
        className="change-profile__input"
        type="text"
        placeholder=" جنسیت"
        value={gender}
        onChange={(event) => {
          setGender(event.target.value);
        }}
      />
      <input
        className="change-profile__input"
        type="text"
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
        className="change-profile__button" disabled={false} 
        onClick={() => {
          SubmitForm();
        }}
      >ذخیره</button>
    </div>
  );
}

export default ChangeProfile;

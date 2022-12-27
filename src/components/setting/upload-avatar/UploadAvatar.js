import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./UploadAvatar.scss";
function UploadAvatar() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFormValid, setIsFormValid] = useState(true);

  const { LoginData } = useSelector((response) => response.UserState);
  function handleSelectedFile(event) {
    validateSize(event.target.files[0].size);
    if (!validateExtension(event.target.files[0].type)) {
      return;
    }
    if (!validateSize(event.target.files[0].size)) {
      return;
    }
    setIsFormValid(false);
    setSelectedFile(event.target.files[0]);
  }
  async function UploadFile() {
    const fileData = new FormData();
    fileData.append("profile-image", selectedFile);
    await axios.post("http://kzico.runflare.run/user/profile-image", fileData, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: "Bearer " + LoginData.token,
      },
    });
  }
  function validateSize(fileSize) {
    if ((fileSize / 1048576).toFixed(1) < 2) {
      return true;
    } else return false;
  }
  function validateExtension(fileExt) {
    let isValid = false;
    if (
      fileExt === "image/png" ||
      fileExt === "image/jpeg" ||
      fileExt === "image/jpg"
    ) {
      isValid = true;
      return isValid;
    }
  }
  return (
    <div className="upload-avatar">
      <input
        type="file"
        onChange={(event) => {
          handleSelectedFile(event);
        }}
        accept="image/*"
      />
      <button className="upload-btn"
        disabled={isFormValid}
        onClick={() => {
          UploadFile();
        }}
      >آپلود</button>
    </div>
  );
}

export default UploadAvatar;

import React, { useState } from "react";
import ChangePassword from "../change-password/ChangePassword";
import ChangeProfile from "../change-profile/ChangeProfile";
// import ChangePassword from "../change-password/ChangePassword";
// import ChangeProfile from "../change-profile/ChangeProfile";
import SideBar from "../side-bar/SideBar";
import UploadAvatar from "../upload-avatar/UploadAvatar";
// import UploadAvatar from "../upload-avatar/UploadAvatar";
import "./SettingPage.scss";
function SettingPage() {
  const [selectedTab, setSelectedTab] = useState("profile");
  function changeTab(tabValue) {
    setSelectedTab(tabValue);
  }
  return (
    <div className="setting-page">
      <SideBar
        click={(tabValue) => {
          changeTab(tabValue);
        }}
      />
      {selectedTab === "profile" ? (
        <ChangeProfile />
      ) : selectedTab === "password" ? (
        <ChangePassword />
      ) : (
        selectedTab === "avatar" && <UploadAvatar />
      )}
    </div>
  );
}

export default SettingPage;

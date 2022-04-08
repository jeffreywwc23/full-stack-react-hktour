import React, { useState } from "react";
import "./User.css";
import { FaUserEdit, FaMapMarkedAlt } from "react-icons/fa";
import { UserProfile } from "../../components/UserProfile/UserProfile";
import { MyBooking } from "../../components/MyBooking/MyBooking";

export const User = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClickActiveTab = (currentTab) => {
    setActiveTab(currentTab);
  };

  return (
    <div className="profile-container">
      <div className="profile-menu">
        <div className="profile-menu-sub-container">
          <h2 className="profile-menu-title">Setting</h2>
          <ul>
            <li
              className={activeTab === 0 ? "active" : ""}
              onClick={() => handleClickActiveTab(0)}
              data-tab="0"
            >
              <FaUserEdit className="profile-menu-icon" />
              <span>Account</span>
            </li>
            <li
              className={activeTab === 1 ? "active" : ""}
              onClick={() => handleClickActiveTab(1)}
              data-tab="1"
            >
              <FaMapMarkedAlt className="profile-menu-icon" />
              <span>My Tour</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="profile-content">
        {activeTab === 0 && <UserProfile />}
        {activeTab === 1 && <MyBooking />}
      </div>
    </div>
  );
};

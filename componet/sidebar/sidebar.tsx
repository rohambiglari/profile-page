"use client";
import React, { useEffect, useState } from "react";
import "../sidebar/sidebar.css";
const SideBar: React.FC = () => {
  return (
    <>
      <div className="contaner-user-profile">
        <div className="user-profile">
          <div className="profile-text">
            <p>پروفایل کاربری</p>
          </div>
        </div>
      </div>
      <div className="profile-items">
        <div className="wallet-section">
          <div className="wallet-contaner-item">
            <div className="value">0 ریال</div>
            <div className="wallet-item">
              <div>کیف پول</div>
              <div className="wallet-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;

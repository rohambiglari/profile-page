"use client";
import "./.././../src/app/tailwind.css";
import React, { useEffect, useState } from "react";
import "../sidebar/sidebar.css";
import Items from "./itemporfielpattern/itemprofielpattern";
const SideBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1167);
  const [showSections, setShowSections] = useState<boolean>(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1167);
    if (window.innerWidth >= 1167) {
      setShowSections(true);
    }
  };

  const toggleSections = () => {
    setShowSections((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="contaner-user-profile">
        <div className="user-profile">
          {isMobile && (
            <button className="toggle-logo" onClick={toggleSections}>
              <div>
                <div className="rectangle"></div>
                <div className="rectangle"></div>
              </div>
              <div>
                <div className="rectangle"></div>
                <div className="rectangle"></div>
              </div>
            </button>
          )}
          <div className="profile-text">
            <p>پروفایل کاربری</p>
          </div>
          {isMobile && (
            <div className="active-title">
              <p>|</p>
              <p>داشبورد</p>
              <div>
                <img src="./icons8-back-24.png" alt="arrow icon" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="profile-items">
        {(!isMobile || showSections) && (
          <>
            <div className="avatar-section">
              <div className="name-number">
                <div className="name">
                  <p>رهام</p>
                </div>
                <div className="number">
                  <p>09127833445</p>
                </div>
              </div>
              <div className="avatar">
                <img src="./Profile_Placeholder.svg" alt="Avatar" />
              </div>
            </div>
            <div className="profile-section">
              <Items />
            </div>
          </>
        )}
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

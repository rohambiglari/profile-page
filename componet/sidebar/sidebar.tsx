"use client";
import React, { useState } from "react";
import axios from "axios"; // اضافه کردن اکسیوس برای ارسال درخواست
import "../sidebar/sidebar.css";
import config from "../api/global";

const SideBar: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // تابع ارسال درخواست به API
  const csrftoken =
    "SwtjQCOVR3bAH5ee6HrqGMAz5v1WE2vQAvSdlqjnbkXf9mC2zHLIuQR14b8ds02H";

  // تابع ارسال درخواست به API
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://zebrashop.com.tr/login/",
        {
          phone,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${csrftoken}`, // ارسال توکن در هدر
          },
        }
      );
      console.log(response.data); // نمایش داده‌های دریافتی در کنسول
      setErrorMessage("");
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("خطا در ورود. لطفاً اطلاعات را بررسی کنید.");
    }
  };

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

      {/* فرم ورود */}
      <div className="login-form">
        <input
          type="text"
          placeholder="شماره تلفن"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button onClick={handleSubmit} className="submit-button">
          ارسال
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </>
  );
};

export default SideBar;

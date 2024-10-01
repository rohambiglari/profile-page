import React from "react";
import "./input.css";
const Input = ({
  title,
  name,
  type,
  err,
  value,
  change,
  placeholder,
  classLabel,
  classInput,
  showErr,
  onFocus
}) => {
  
  return (
    <div className="style-input">
      <label className={classLabel} htmlFor="add">
        {title}
      </label>
      <input
        className={classInput}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={change}
      ></input>
    </div>
  );
};
export default Input;

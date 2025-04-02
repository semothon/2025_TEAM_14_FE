import React from "react";
import "../styles/CustomInput.css";

const CustomInput = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="custom-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomInput;

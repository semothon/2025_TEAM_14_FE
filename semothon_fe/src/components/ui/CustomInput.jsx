import React from "react";
import "../../styles/ui/CustomInput.css";

const CustomInput = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  disabled = false,
}) => {
  return (
    <input
      className={`custom-input ${className || ""}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default CustomInput;

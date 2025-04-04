import React from "react";
import "../../styles/common/SubmitButton.css";

const SubmitButton = ({ label, type = "button", onClick, className = "" }) => {
  return (
    <button
      type={type}
      className={`submit-button ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SubmitButton;

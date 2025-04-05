import React from "react";
import { Link } from "react-router-dom";
import "../../styles/form/AuthForm.css";
import SubmitButton from "../ui/SubmitButton";

const AuthForm = ({ title, onSubmit, children, buttonLabel, bottomTexts }) => {
  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <div className="auth-form-main">
        <div className="auth-form-title">{title}</div>
        <div className="auth-form-input">{children}</div>
        <SubmitButton type="submit" label={buttonLabel} />
      </div>
      <div className="auth-form-bottom-text">
        {bottomTexts?.map((item, index) => (
          <Link key={index} to={item.link}>
            {item.text}
          </Link>
        ))}
      </div>
    </form>
  );
};

export default AuthForm;

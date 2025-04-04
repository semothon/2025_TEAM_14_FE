import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/SignUp.css";
import api from "../axiosConfig.js";
import AuthForm from "../components/common/AuthForm.jsx";
import SignupLogo from "../assets/KHUoogle.png";
import useUserForm from "../components/hooks/useUserForm.js";
import UserInfoForm from "../components/common/UserInfoForm.jsx";

const SignUp = () => {
  const navigate = useNavigate();
  const form = useUserForm();

  // 로고 클릭 시 메인페이지로 이동
  const goToMain = () => {
    navigate("/");
  };

  // 회원가입 요청
  const handleSignUp = async (e) => {
    e.preventDefault();

    const {
      email,
      password,
      confirmPassword,
      name,
      department,
      grade,
      hasExtraMajor,
      extraMajor,
    } = form;

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const res = await api.post("/api/auth/signup", {
        email,
        password,
        name,
        department,
        grade: grade?.value,
        extraMajor: hasExtraMajor ? extraMajor : null,
      });

      alert("회원가입 성공");
      navigate("/login");
    } catch (error) {
      console.log("회원가입 실패", error);
      alert("회원가입 실패");
    }
  };

  return (
    <div className="signup">
      <img
        src={SignupLogo}
        className="signup-logo"
        alt="loginImage"
        onClick={goToMain}
      />
      <AuthForm title="Sign Up" buttonLabel="회원가입" onSubmit={handleSignUp}>
        <UserInfoForm form={form} mode="signup" />
      </AuthForm>
    </div>
  );
};

export default SignUp;

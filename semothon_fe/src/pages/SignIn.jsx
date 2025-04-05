import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/SignIn.css";
import api from "../axiosConfig.js";
import AuthForm from "../components/form/AuthForm.jsx";
import loginLogo from "../assets/KHUoogle.png";
import CustomInput from "../components/ui/CustomInput.jsx";

const SignIn = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 로그인 요청
  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/login", { email, password });

      localStorage.setItem("isLogin", "true");
      localStorage.setItem("userEmail", email);
      setIsLogin(true);

      alert("로그인 성공");
      navigate("/");
    } catch (error) {
      const message = error.response?.data || "로그인 실패";
      alert(message);
    }
  };

  // 로고 클릭 시 메인페이지로 이동
  const goToMain = () => {
    navigate("/");
  };

  return (
    <div className="login">
      <img
        src={loginLogo}
        className="login-logo"
        alt="loginImage"
        onClick={goToMain}
      />
      <AuthForm
        title="로그인"
        buttonLabel="로그인"
        onSubmit={handelLogin}
        bottomTexts={[
          { text: "회원가입", link: "/signup" },
          { text: "비밀번호 찾기", link: "/password" },
        ]}
      >
        <CustomInput
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </AuthForm>
    </div>
  );
};

export default SignIn;

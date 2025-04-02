import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignIn.css";
import api from "../axiosConfig";
import AuthForm from "../components/AuthForm";
import loginLogo from "../assets/KHUoogle.png";
import CustomInput from "../components/CustomInput";

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
      setIsLogin(true);

      alert("로그인 성공"); // 나중에 지우기
      navigate("/");
    } catch (error) {
      console.log(error.response);
      alert("로그인 실패"); // 나중에 변경
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
        title="Sign In"
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

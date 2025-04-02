import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";
import api from "../axiosConfig.js";
import AuthForm from "../components/AuthForm";
import SignupLogo from "../assets/KHUoogle.png";
import CustomInput from "../components/CustomInput";
import Select from "react-select";
import EmailInput from "../components/EmailInput";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [grade, setGrade] = useState(null);
  const [hasExtraMajor, setHasExtraMajor] = useState(false);
  const [extraMajor, setExtraMajor] = useState("");

  // 로고 클릭 시 메인페이지로 이동
  const goToMain = () => {
    navigate("/");
  };

  // 드롭다운 옵션
  const options = [
    { value: "1", label: "1학년" },
    { value: "2", label: "2학년" },
    { value: "3", label: "3학년" },
    { value: "4", label: "4학년" },
  ];

  // 드롭다운 스타일
  const CustomStyle = {
    control: (base) => ({
      ...base,
      backgroundColor: "#f0f0f0",
      width: "128px",
      height: "48px",
      border: "none",
      borderRadius: "20px",
      paddingRight: "8px",
      boxSizing: "border-box",
    }),
    placeholder: (base) => ({
      ...base,
      color: "black",
      fontSize: "20px",
      margin: "0px",
      padding: "0px",
      lineHeight: "48px",
      width: "100%",
      textAlign: "right",
    }),
    singleValue: (base) => ({
      ...base,
      color: "black",
      fontSize: "20px",
      margin: "0px",
      padding: "0px",
      lineHeight: "48px",
      width: "100%",
      textAlign: "right",
    }),
    input: (base) => ({
      ...base,
      margin: "0px",
      padding: "0px",
      height: "1px",
      width: "1px",
      minWidth: "0px",
      overflow: "hidden",
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "0px",
      display: "flex",
      alignItems: "center",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (base) => ({
      ...base,
      marginTop: "-10px",
      fontSize: "20px",
    }),
  };

  // 회원가입 요청
  const handleSignUp = async (e) => {
    e.preventDefault();

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
        <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
        <CustomInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomInput
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <CustomInput
          type="text"
          placeholder="성명"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="signup-department">
          <input
            type="text"
            placeholder="학과"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <Select
            className="signup-grade-select"
            placeholder="학년"
            options={options}
            styles={CustomStyle}
            value={grade}
            onChange={(selectedOption) => setGrade(selectedOption)}
          />
        </div>
        <div className="signup-extra-major">
          <input
            type="checkbox"
            checked={hasExtraMajor}
            onChange={() => setHasExtraMajor(!hasExtraMajor)}
          />
          전과 / 부전공이 있어요
        </div>

        {hasExtraMajor && (
          <CustomInput
            className="extra-major-input"
            type="text"
            placeholder="전과한 학과 또는 부전공"
          />
        )}
      </AuthForm>
    </div>
  );
};

export default SignUp;

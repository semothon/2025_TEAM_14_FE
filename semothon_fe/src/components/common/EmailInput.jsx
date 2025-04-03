import React, { useState } from "react";
import api from "../../axiosConfig.js";
import "../../styles/common/EmailInput.css";

const EmailInput = ({ value, onChange }) => {
  const [isChecking, setIsChecking] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isAvailable, setIsAvailable] = useState(null);
  const [emailError, setEmailError] = useState("");

  const handleCheck = async (e) => {
    if (!value) return alert("이메일을 입력해주세요.");

    try {
      setIsChecking(true);
      const res = await api.get("/api/auth/check-email", {
        params: { email: value },
      });

      if (res.data == "사용 가능한 이메일입니다.") {
        alert("사용 가능한 이메일입니다");
        setIsAvailable(true);
        setIsChecked(true);
      } else {
        alert("이미 사용 중인 이메일입니다.");
        setIsAvailable(false);
      }
    } catch (error) {
      console.log(error);
      alert("오류가 발생했습니다.");
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="email-input-wrapper">
      <div className="email-input-form">
        <input
          className="email-input"
          type="email"
          placeholder="이메일"
          value={value}
          onChange={(e) => {
            onChange(e);
            setIsChecked(false);
            const newValue = e.target.value;
            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue);
            if (!isValid && newValue !== "") {
              setEmailError("올바른 이메일 형식을 입력해주세요.");
            } else {
              setEmailError("");
            }
          }}
        />
        <button
          className="email-input-btn"
          onClick={handleCheck}
          disabled={isChecking || isChecked}
        >
          {isChecking ? "확인 중" : isChecked ? "확인 완료" : "중복 확인"}
        </button>
      </div>
      {emailError && <p className="email-error-text">{emailError}</p>}
    </div>
  );
};

export default EmailInput;

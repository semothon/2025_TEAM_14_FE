import React from "react";
import EmailInput from "./EmailInput";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import "../../styles/common/UserInfoForm.css";

const UserInfoForm = ({ form, mode }) => {
  const storedEmail = localStorage.getItem("userEmail");
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    name,
    setName,
    department,
    setDepartment,
    grade,
    setGrade,
    hasExtraMajor,
    setHasExtraMajor,
    extraMajor,
    setExtraMajor,
  } = form;

  return (
    <>
      {mode === "signup" ? (
        <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
      ) : (
        <CustomInput type="text" value={storedEmail} disabled="true" />
      )}
      <CustomInput
        type="password"
        placeholder={mode === "signup" ? "비밀번호 입력" : "새 비밀번호 입력"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <CustomInput
        type="password"
        placeholder={mode === "signup" ? "비밀번호 확인" : "새 비밀번호 확인"}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <CustomInput
        type="text"
        placeholder="성명"
        className="space-between-info"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="info-department">
        <input
          type="text"
          placeholder="학과"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <CustomSelect
          className="info-grade-select"
          placeholder="학년"
          value={grade}
          onChange={(selectedOption) => setGrade(selectedOption)}
        />
      </div>
      <div className="info-extra-major">
        <input
          type="checkbox"
          checked={hasExtraMajor}
          onChange={() => setHasExtraMajor(!hasExtraMajor)}
        />
        <p>전과 / 부전공이 있어요</p>
      </div>
      {hasExtraMajor && (
        <CustomInput
          className="extra-major-input"
          type="text"
          placeholder="전과한 학과 / 부전공"
          value={extraMajor}
          onChange={(e) => setExtraMajor(e.target.value)}
        />
      )}
    </>
  );
};

export default UserInfoForm;

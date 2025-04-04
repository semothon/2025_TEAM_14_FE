import React from "react";
import UserPopup from "./UserPopup";
import useUserForm from "../hooks/useUserForm.js";
import UserInfoForm from "../form/UserInfoForm.jsx";
import SubmitButton from "../ui/SubmitButton.jsx";
import api from "../../axiosConfig.js";

const PopupController = ({ popupType, onClose }) => {
  const form = useUserForm();
  if (!popupType) return null;

  let title = "";
  let content = null;

  const handelUpdateUser = async (e) => {
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
      const res = await api.put("/api/user/update", {
        password,
        name,
        department,
        grade: grade?.value,
        extraMajor: hasExtraMajor ? extraMajor : null,
      });

      alert("개인정보 저장 성공");
      onClose();
    } catch (error) {
      console.log("개인정보 저장 실패", error);
      alert("개인정보 저장 실패");
    }
  };

  switch (popupType) {
    case "password":
      title = "개인정보 변경";
      content = (
        <>
          <UserInfoForm form={form} mode="edit" />
          <SubmitButton label="저장" onClick={handelUpdateUser} />
        </>
      );
      break;
    case "category":
      title = "카테고리 설정";
      content = <div>카테고리카테고리리</div>;
      break;
    case "recommend":
      title = "추천 탭";
      content = <div>추천추천</div>;
      break;
    default:
      return null;
  }

  return (
    <UserPopup title={title} onClose={onClose}>
      {content}
    </UserPopup>
  );
};

export default PopupController;

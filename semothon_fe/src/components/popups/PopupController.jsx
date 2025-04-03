import React from "react";
import UserPopup from "./UserPopup";

const PopupController = ({ popupType, onClose }) => {
  if (!popupType) return null;

  let title = "";
  let content = null;

  switch (popupType) {
    case "password":
      title = "비밀번호 변경";
      content = <div>비밀번호비밀번호</div>;
      break;
    case "category":
      title = "카테고리 변경";
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

import React, { useRef, useEffect } from "react";
import { RiCloseFill } from "react-icons/ri";
import "../../styles/popups/UserPopup.css";

const UserPopup = ({ title, children, onClose }) => {
  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose(); // 바깥 클릭 시 닫기
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="modal" ref={popupRef}>
        <div className="modal-header">
          <div className="modal-title">{title}</div>
          <button className="close-button" onClick={onClose}>
            <RiCloseFill />
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default UserPopup;

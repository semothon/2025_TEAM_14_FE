import React from "react";
import "../../styles/popup/RemoveIDModal.css";

const RemoveIDModal = ({ onClose, onConfirm }) => {
  return (
    <div className="remove-modal-overlay">
      <div className="remove-modal">
        <div className="remove-icon-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="60"
            viewBox="0 0 14 60"
            fill="none"
          >
            <path
              d="M13.0984 0L12.0343 41.5007H1.55683L0.492712 0H13.0984ZM0.00157936 53.1241C-0.080276 49.3588 3.03023 46.2892 6.87743 46.3301C10.52 46.2892 13.6714 49.3588 13.6714 53.1241C13.6714 56.9304 10.52 60 6.87743 60C3.03023 60 -0.080276 56.9304 0.00157936 53.1241Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="remove-title">정말 탈퇴하시겠어요?</div>
        <div className="remove-subtitle">
          회원 탈퇴 시 계정 정보가 <br />
          모두 삭제되어 복구되지 않습니다
        </div>
        <button className="remove-btn withdraw" onClick={onConfirm}>
          탈퇴
        </button>
        <button className="remove-btn cancel" onClick={onClose}>
          취소
        </button>
      </div>
    </div>
  );
};

export default RemoveIDModal;

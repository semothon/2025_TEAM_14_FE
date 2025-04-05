import React from "react";
import "../styles/PasswordChangeModal.css";

const PasswordChangeModal = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="" onClick={handleOverlayClick}>
      <div className="password-modal">
        <div className="modal-header">
          <h2 className="modal-title">비밀번호 변경</h2>
          <button className="close-button" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36">
              <path
                d="M18.0001 15.8791L25.4251 8.4541L27.5461 10.5751L20.1211 18.0001L27.5461 25.4251L25.4251 27.5461L18.0001 20.1211L10.5751 27.5461L8.4541 25.4251L15.8791 18.0001L8.4541 10.5751L10.5751 8.4541L18.0001 15.8791Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <div className="modal-section">
          <div className="section-left">
            <svg
              className="section-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M15.4691 17.349L27.3791 5.43896L30.5606 8.62047L28.4396 10.7415L31.6211 13.923L26.3186 19.227L23.1371 16.0455L18.6521 20.5305C19.4779 22.1194 19.7082 23.9513 19.3014 25.6952C18.8945 27.4391 17.8774 28.98 16.4337 30.0395C14.99 31.099 13.215 31.6072 11.4294 31.4723C9.6437 31.3374 7.96518 30.5683 6.69705 29.304C5.42829 28.0372 4.65527 26.3579 4.51809 24.5703C4.38091 22.7827 4.88864 21.005 5.94927 19.5595C7.00991 18.1141 8.55326 17.0963 10.2997 16.6908C12.0461 16.2853 13.88 16.5188 15.4691 17.349ZM14.1206 26.121C14.4071 25.8442 14.6356 25.5132 14.7929 25.1472C14.9501 24.7812 15.0328 24.3875 15.0363 23.9892C15.0398 23.5908 14.9639 23.1958 14.813 22.8271C14.6622 22.4584 14.4394 22.1235 14.1577 21.8418C13.8761 21.5601 13.5411 21.3373 13.1724 21.1865C12.8037 21.0357 12.4087 20.9598 12.0103 20.9632C11.612 20.9667 11.2184 21.0494 10.8523 21.2067C10.4863 21.3639 10.1553 21.5924 9.87855 21.879C9.33208 22.4448 9.0297 23.2026 9.03653 23.9892C9.04337 24.7758 9.35887 25.5282 9.9151 26.0844C10.4713 26.6406 11.2238 26.9562 12.0103 26.963C12.7969 26.9698 13.5547 26.6674 14.1206 26.121Z"
                fill="white"
              />
            </svg>

            <span className="section-title">비밀번호 변경</span>
          </div>
          <input className="section-input" placeholder="새 비밀번호 입력" />
        </div>

        <div className="modal-section">
          <div className="section-left">
            <svg
              className="section-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M33.471 15.2578L31.3485 17.3788L30.288 16.3183L23.925 22.6813L22.8645 27.9853L20.742 30.1063L14.379 23.7418L6.95401 31.1668L4.83301 29.0458L12.258 21.6208L5.89351 15.2578L8.01451 13.1353L13.32 12.0748L19.683 5.71181L18.6225 4.65131L20.7435 2.52881L33.471 15.2578Z"
                fill="white"
              />
            </svg>
            <span className="section-title">카테고리 변경</span>
          </div>
          <input className="section-input" placeholder="새 비밀번호 확인" />
        </div>

        <button className="confirm-button">확인</button>
        <button className="withdraw-button">회원 탈퇴</button>
      </div>
    </div>
  );
};

export default PasswordChangeModal;

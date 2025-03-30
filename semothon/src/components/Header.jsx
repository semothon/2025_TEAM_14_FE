import React from "react";

const Header = () => {
  return (
    <header className="top-bar">
      <div className="left-buttons">
        <button className="header-button">캘린더</button>
      </div>
      <div className="right-buttons">
        <button className="header-button">로그인 / 회원가입</button>
        <button className="header-button">마이페이지</button>
      </div>
    </header>
  );
};

export default Header;

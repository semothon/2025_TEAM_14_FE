import React from "react";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillProfile } from "react-icons/ai";
import { Popover } from "./Popover";

const Header = ({ isLogin }) => {
  const navigate = useNavigate();

  // 로고 클릭 시 메인페이지로 이동
  const goToMain = () => {
    navigate("/");
  };

  return (
    <header>
      <div className="header-logo" onClick={goToMain}>
        로고
      </div>
      {!isLogin ? (
        <div className="guest-menu">
          <Link to="/login">로그인</Link>
          <Link to="/logout">로그아웃</Link>
        </div>
      ) : (
        <div className="user-menu">
          <Popover trigger={<AiFillProfile size={36} />}>
            <div className="popover-item">마이페이지</div>
            <hr className="popover-divider" />
            <div className="popover-item">로그아웃</div>
          </Popover>
        </div>
      )}
    </header>
  );
};

export default Header;

import "../../styles/layout/Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  RiAccountCircleFill,
  RiThumbUpFill,
  RiLogoutBoxFill,
  RiKey2Fill,
  RiPushpinFill,
} from "react-icons/ri";
import { Popover } from "../popup/Popover";
import { useState } from "react";
import PopupController from "../popup/PopupController";
import headerLogo from "../../assets/KHU.png";

const Header = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();
  const locationNow = useLocation();
  const userEmail = localStorage.getItem("userEmail");
  const [popupType, setPopupType] = useState("");

  if (locationNow.pathname === "/login" || locationNow.pathname === "/signup")
    return null;

  // 로그아웃
  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("userEmail");
    setIsLogin(false);
    navigate("/");
  };

  return (
    <header>
      <div className="header-left">
        {locationNow.pathname.startsWith("/search") && (
          <div className="header-logo" onClick={() => navigate("/")}>
            <img src={headerLogo} alt="KHU 로고" className="khu-logo-img" />
          </div>
        )}
      </div>
      <div className="header-right">
        {!isLogin ? (
          <div className="guest-menu">
            <Link to="/signup" className="signup-btn">
              회원가입
            </Link>
            <Link to="/login" className="login-btn">
              로그인
            </Link>
          </div>
        ) : (
          <div className="user-menu">
            <Popover
              trigger={
                <RiAccountCircleFill size={36} className="user-menu-icon" />
              }
              popupType={popupType}
            >
              <div className="user-popover">
                <div className="welcome-text">
                  <h1>Welcome,</h1>
                  <h2>{userEmail}</h2>
                </div>
                <div
                  className="popover-item"
                  onClick={() => setPopupType("password")}
                >
                  <RiKey2Fill size={36} />
                  <p>개인정보 변경</p>
                </div>
                <div
                  className="popover-item"
                  onClick={() => setPopupType("category")}
                >
                  <RiPushpinFill size={36} />
                  <p>카테고리 설정</p>
                </div>
                <div className="popover-item" onClick={handleLogout}>
                  <RiLogoutBoxFill size={36} />
                  <p>로그아웃</p>
                </div>
              </div>
            </Popover>
            <PopupController
              popupType={popupType}
              onClose={() => setPopupType(null)}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

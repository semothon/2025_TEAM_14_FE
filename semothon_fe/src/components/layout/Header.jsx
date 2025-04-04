import "../../styles/layout/Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  RiAccountCircleFill,
  RiSettings5Fill,
  RiThumbUpFill,
  RiLogoutBoxFill,
  RiKey2Fill,
  RiPushpinFill,
} from "react-icons/ri";
import { Popover } from "../popups/Popover";
import { useState } from "react";
import PopupController from "../popups/PopupController";

const Header = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();
  const locationNow = useLocation();
  const userEmail = localStorage.getItem("userEmail");
  const [popupType, setPopupType] = useState("");

  if (locationNow.pathname === "/login" || locationNow.pathname === "/signup")
    return null;

  // 로그아웃
  const handelLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("userEmail");
    setIsLogin(false);
    navigate("/");
  };

  return (
    <header>
      {!isLogin ? (
        <div className="guest-menu">
          <Link to="/signup">회원가입</Link>
          <Link to="/login">로그인</Link>
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
              <div
                className="popover-item"
                onClick={() => setPopupType("recommend")}
              >
                <RiThumbUpFill size={36} />
                <p>추천 탭</p>
              </div>
              <div className="popover-item" onClick={handelLogout}>
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
    </header>
  );
};

export default Header;

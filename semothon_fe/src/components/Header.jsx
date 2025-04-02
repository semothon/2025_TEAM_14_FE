import "../styles/Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillProfile } from "react-icons/ai";
import { Popover } from "./Popover";

const Header = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();
  const locationNow = useLocation();

  if (locationNow.pathname === "/login" || locationNow.pathname === "/signup")
    return null;

  // 로고 클릭 시 메인페이지로 이동
  const goToMain = () => {
    navigate("/");
  };

  const handelLogout = () => {
    localStorage.removeItem("isLogin");
    setIsLogin(false);
    navigate("/");
  };

  return (
    <header>
      <div className="header-logo" onClick={goToMain}>
        로고
      </div>
      {!isLogin ? (
        <div className="guest-menu">
          <Link to="/signup">회원가입</Link>
          <Link to="/login">로그인</Link>
        </div>
      ) : (
        <div className="user-menu">
          <Popover trigger={<AiFillProfile size={36} />}>
            <div className="popover-item">마이페이지</div>
            <hr className="popover-divider" />
            <div className="popover-item" onClick={handelLogout}>
              로그아웃
            </div>
          </Popover>
        </div>
      )}
    </header>
  );
};

export default Header;

import "../styles/Header.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { Popover } from "./Popover";
import React, { useState } from "react";
import PasswordChangeModal from "./PasswordChangeModal";

const Header = ({ isLogin }) => {
  const navigate = useNavigate();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const goToMain = () => {
    navigate("/");
  };
  const handleOverlayClick = () => {
    setPopoverOpen(false);
    setShowPasswordModal(false);
  };

  return (
    <>
      <header>
        <div className="header-logo" onClick={goToMain}></div>
        {!isLogin ? (
          <div className="guest-menu">
            <Link to="/login">로그인</Link>
            <Link to="/logout">로그아웃</Link>
          </div>
        ) : (
          <div className="user-menu">
            <Popover
              trigger={<RiAccountCircleFill className="mypage-icon" />}
              onPopoverClick={() => setPopoverOpen(!popoverOpen)}
            >
              <div className="user-popover">
                <div className="welcome-text">Welcome,</div>
                <div className="user-email">hy1228@khu.ac.kr</div>
                <div className="popover-actions">
                  <div
                    className="action"
                    onClick={() => setShowPasswordModal(true)}
                  >
                    <svg
                      className="action-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M3.19789 20.4451C2.92883 18.8262 2.92883 17.174 3.19789 15.5551C4.85089 15.5941 6.33589 14.8021 6.91339 13.4086C7.49089 12.0136 7.00039 10.4026 5.80339 9.26414C6.75801 7.92807 7.92674 6.75884 9.26239 5.80364C10.4024 7.00064 12.0134 7.49114 13.4084 6.91364C14.8034 6.33614 15.5939 4.84964 15.5534 3.19814C17.1733 2.92875 18.8265 2.92875 20.4464 3.19814C20.4059 4.85114 21.1979 6.33614 22.5914 6.91364C23.9864 7.49114 25.5974 7.00064 26.7359 5.80364C28.072 6.75826 29.2412 7.92698 30.1964 9.26264C28.9994 10.4026 28.5089 12.0136 29.0864 13.4086C29.6639 14.8036 31.1504 15.5941 32.8019 15.5536C33.0713 17.1735 33.0713 18.8268 32.8019 20.4466C31.1489 20.4061 29.6639 21.1981 29.0864 22.5916C28.5089 23.9866 28.9994 25.5976 30.1964 26.7361C29.2418 28.0722 28.073 29.2414 26.7374 30.1966C25.5974 28.9996 23.9864 28.5091 22.5914 29.0866C21.1964 29.6641 20.4059 31.1506 20.4464 32.8021C18.8265 33.0715 17.1733 33.0715 15.5534 32.8021C15.5939 31.1491 14.8019 29.6641 13.4084 29.0866C12.0134 28.5091 10.4024 28.9996 9.26389 30.1966C7.92782 29.242 6.75859 28.0733 5.80339 26.7376C7.00039 25.5976 7.49089 23.9866 6.91339 22.5916C6.33589 21.1966 4.84939 20.4046 3.19789 20.4451ZM17.9999 22.5001C19.1934 22.5001 20.338 22.026 21.1819 21.1821C22.0258 20.3382 22.4999 19.1936 22.4999 18.0001C22.4999 16.8067 22.0258 15.6621 21.1819 14.8182C20.338 13.9742 19.1934 13.5001 17.9999 13.5001C16.8064 13.5001 15.6618 13.9742 14.8179 14.8182C13.974 15.6621 13.4999 16.8067 13.4999 18.0001C13.4999 19.1936 13.974 20.3382 14.8179 21.1821C15.6618 22.026 16.8064 22.5001 17.9999 22.5001Z"
                        fill="white"
                      />
                    </svg>
                    <span className="action-label">개인정보 변경</span>
                  </div>
                  <div className="action">
                    <svg
                      className="action-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M3 13.5002H7.5V31.5002H3C2.60218 31.5002 2.22064 31.3421 1.93934 31.0608C1.65804 30.7795 1.5 30.398 1.5 30.0002V15.0002C1.5 14.6023 1.65804 14.2208 1.93934 13.9395C2.22064 13.6582 2.60218 13.5002 3 13.5002ZM10.9395 11.5607L20.5395 1.96067C20.6671 1.83271 20.8366 1.75512 21.0168 1.74216C21.1971 1.72921 21.3759 1.78177 21.5205 1.89017L22.8 2.85017C23.1554 3.11693 23.4238 3.48295 23.5714 3.90205C23.719 4.32115 23.7392 4.77459 23.6295 5.20517L21.9 12.0002H31.5C32.2956 12.0002 33.0587 12.3162 33.6213 12.8788C34.1839 13.4415 34.5 14.2045 34.5 15.0002V18.1562C34.5004 18.5482 34.424 18.9365 34.275 19.2992L29.6325 30.5717C29.5192 30.8465 29.3269 31.0815 29.0799 31.2468C28.8328 31.4121 28.5422 31.5003 28.245 31.5002H12C11.6022 31.5002 11.2206 31.3421 10.9393 31.0608C10.658 30.7795 10.5 30.398 10.5 30.0002V12.6212C10.5001 12.2234 10.6582 11.8419 10.9395 11.5607Z"
                        fill="white"
                      />
                    </svg>
                    <span className="action-label">추천 탭</span>
                  </div>
                  <div className="action">
                    <svg
                      className="action-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M7.5 3H28.5C28.8978 3 29.2794 3.15804 29.5607 3.43934C29.842 3.72064 30 4.10218 30 4.5V31.5C30 31.8978 29.842 32.2794 29.5607 32.5607C29.2794 32.842 28.8978 33 28.5 33H7.5C7.10218 33 6.72064 32.842 6.43934 32.5607C6.15804 32.2794 6 31.8978 6 31.5V4.5C6 4.10218 6.15804 3.72064 6.43934 3.43934C6.72064 3.15804 7.10218 3 7.5 3ZM13.5 16.5V12L6 18L13.5 24V19.5H22.5V16.5H13.5Z"
                        fill="white"
                      />
                    </svg>
                    <span className="action-label">로그아웃</span>
                  </div>
                </div>
              </div>
            </Popover>
          </div>
        )}
      </header>
      {(showPasswordModal || popoverOpen) && (
        <div className="overlay" onClick={handleOverlayClick}></div>
      )}

      {showPasswordModal && (
        <PasswordChangeModal onClose={() => setShowPasswordModal(false)} />
      )}
    </>
  );
};
export default Header;

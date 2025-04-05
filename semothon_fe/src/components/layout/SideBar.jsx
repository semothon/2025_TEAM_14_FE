import React, { useState, useRef, useEffect } from "react";
import "../../styles/layout/SideBar.css";

const categories = [
  {
    label: "학사·수업",
    subcategories: [
      "1학기", "2학기", "강의", "강의평가", "개강", "계절학기",
      "기말고사", "복학", "성적", "성적평가", "수강신청", "재수강",
      "재입학", "전과", "중간고사", "출결", "편입", "학사제도",
      "학생설계전공", "학점", "학점교류", "휴학", "휴·복학"
    ]
  },
  {
    label: "장학·행정",
    subcategories: ["기타", "공공시설", "논문", "다·부전공", "등록금", "상담", "서비스", "신입", "신청", "예비군", "장학", "전과", "졸업", "지침", "학생증", "학위수여식", "행정실", "홍보"]
  },
  { label: "대내/외활동", subcategories: [] },
  { label: "사회진출", subcategories: [] },
  { label: "학교생활", subcategories: [] },
  { label: "단과대학", subcategories: [] },
  { label: "기타", subcategories: [] }
];

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(null); // 고정된 팝업
  const [hoverIndex, setHoverIndex] = useState(null);   // 마우스 오버
  const popupRef = useRef(null);

  // 팝업 바깥 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target) &&
        !e.target.classList.contains("category-item-box")
      ) {
        setActiveIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-border" />
      <div className="category-text">카테고리</div>
      <ul className="category-list">
        {categories.map((cat, idx) => {
          const isActive = activeIndex === idx || hoverIndex === idx;

          return (
            <li
              key={idx}
              className="category-item"
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div
                className={`category-item-box ${isActive ? "active" : ""}`}
                onClick={() => handleClick(idx)}
              >
                {cat.label}
              </div>

              {isActive && cat.subcategories.length > 0 && (
                <div
                  className="popup"
                  ref={activeIndex === idx ? popupRef : null}
                >
                  <div className="popup-inner">
                    <div className="popup-column">
                      {cat.subcategories.slice(0, 12).map((sub, subIdx) => (
                        <div key={subIdx} className="popup-item">
                          {sub}
                        </div>
                      ))}
                    </div>
                    <div className="popup-divider" />
                    <div className="popup-column">
                      {cat.subcategories.slice(12).map((sub, subIdx) => (
                        <div key={subIdx} className="popup-item">
                          {sub}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;

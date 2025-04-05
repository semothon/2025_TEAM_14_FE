import React, { useState, useEffect, useRef } from "react";
import "../../styles/layout/SideBar.css";

// 카테고리 구성 정보: width, divider, 정렬 여부 포함
const categories = [
  {
    label: "학사·수업",
    width: 264,
    divider: 132,
    twoColumn: true,
    subcategories: [
      "1학기", "2학기", "강의", "강의평가", "개강", "계절학기", "기말고사", "복학", "성적", "성적평가",
      "수강신청", "재수강", "재입학", "전과", "중간고사", "출결", "편입", "학사제도", "학생설계전공", "학점",
      "학점교류", "휴학", "휴·복학"
    ]
  },
  {
    label: "장학·행정",
    width: 264,
    divider: 132,
    twoColumn: true,
    subcategories: [
      "공공시설", "논문", "다·부전공", "등록금", "상담", "서비스", "신입", "신청", "예비군",
      "장학", "전과", "졸업", "지침", "학생증", "학위수여식", "행정실", "홍보"
    ]
  },
  {
    label: "대내/외활동",
    width: 132,
    twoColumn: false,
    subcategories: ["강연", "국제교류", "공모전", "대회", "설명회", "설문조사", "세미나", "스터디", "연수"]
  },
  {
    label: "사회진출",
    width: 132,
    twoColumn: false,
    subcategories: ["사업", "실습", "연구", "유학", "인턴", "자격증", "창업", "취업", "프로그램"]
  },
  {
    label: "학교생활",
    width: 132,
    twoColumn: false,
    subcategories: ["기숙사", "동아리", "설국버스", "이벤트", "일정", "축제", "학생회", "학식"]
  },
  {
    label: "단과대학",
    width: 307,
    divider: 133,
    twoColumn: true,
    subcategories: [
      "문과대학", "정경대학", "경영대학", "호텔관광대학", "이과대학", "생활과학대학", "의과대학",
      "한의과대학", "치과대학", "약학대학", "간호과학대학", "음악대학", "미술대학", "무용학부",
      "자율전공학부", "공과대학", "전자정보대학", "소프트웨어융합대학", "응용과학대학", "생명과학대학",
      "국제대학", "외국어대학", "예술·디자인대학", "체육대학", "자유전공학부"
    ]
  },
  {
    label: "기타",
    width: 132,
    twoColumn: false,
    subcategories: []
  }
];

const SideBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [fixedIndex, setFixedIndex] = useState(null);
  const containerRef = useRef();

  const isPopupVisible = (idx) => fixedIndex === idx || (fixedIndex === null && hoveredIndex === idx);

  // 사이드바 외부 클릭 시 팝업 고정 해제
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setFixedIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sidebar" ref={containerRef}>
      <div className="sidebar-border" />
      <div className="category-text">카테고리</div>
      <ul className="category-list">
        {categories.map((cat, idx) => {
          const isTwoCol = cat.twoColumn;

          return (
            <li
              key={idx}
              className="category-item"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setFixedIndex(idx)}
            >
              <div className={`category-item-box ${isPopupVisible(idx) ? "active" : ""}`}>
                {cat.label}
              </div>

              {isPopupVisible(idx) && cat.subcategories.length > 0 && (
                <div className="popup" style={{ width: cat.width }}>
                  <div className="popup-inner">
                    {/* 첫 번째 열 */}
                    <div
                      className="popup-column"
                      style={{ paddingLeft: isTwoCol ? `${24}px` : `${24}px` }}
                    >
                      {isTwoCol
                        ? cat.subcategories.slice(0, Math.ceil(cat.subcategories.length / 2)).map((sub, subIdx) => (
                            <div key={subIdx} className="popup-item">{sub}</div>
                          ))
                        : cat.subcategories.map((sub, subIdx) => (
                            <div key={subIdx} className="popup-item">{sub}</div>
                          ))}
                    </div>

                    {/* 흰색 구분선 */}
                    {isTwoCol && (
                      <div className="popup-divider" style={{ left: cat.divider }} />
                    )}

                    {/* 두 번째 열 */}
                    {isTwoCol && (
                      <div
                        className="popup-column"
                        style={{
                          position: "absolute",
                          left: `${cat.divider + 24}px`
                        }}
                      >
                        {cat.subcategories.slice(Math.ceil(cat.subcategories.length / 2)).map((sub, subIdx) => (
                          <div key={subIdx} className="popup-item">{sub}</div>
                        ))}
                      </div>
                    )}
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

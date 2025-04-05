import React, { useState, useEffect, useRef } from "react";
import "../../styles/layout/SideBar.css";

const categories = [
  "학사·수업",
  "장학·행정",
  "대내/외활동",
  "사회진출",
  "학교생활",
  "단과대학",
  "기타",
];

const subCategories = {
  "학사·수업": [
    "1학기",
    "2학기",
    "강의",
    "강의평가",
    "개강",
    "계절학기",
    "기말고사",
    "복학",
    "성적",
    "성적평가",
    "수강신청",
    "재수강",
    "재입학",
    "전과",
    "중간고사",
    "출결",
    "편입",
    "학사제도",
    "학생설계전공",
    "학점",
    "학점교류",
    "휴학",
    "휴·복학",
  ],
  "장학·행정": [
    "기타",
    "공공시설",
    "논문",
    "다·부전공",
    "등록금",
    "상담",
    "서비스",
    "신입",
    "신청",
    "예비군",
    "장학",
    "전과",
    "졸업",
    "지침",
    "학생증",
    "학위수여식",
    "행정실",
    "홍보",
  ],
  "대내/외활동": [
    "강연",
    "국제교류",
    "공모전",
    "대회",
    "설명회",
    "설문조사",
    "세미나",
    "스터디",
    "연수",
    "워크숍",
    "캠페인",
    "캠프",
    "특강",
  ],
  사회진출: [
    "사업",
    "실습",
    "연구",
    "유학",
    "인턴",
    "자격증",
    "창업",
    "취업",
    "컨퍼런스",
    "프로그램",
  ],
  학교생활: [
    "개최",
    "기숙사",
    "동아리",
    "모집",
    "설국버스",
    "오리엔테이션",
    "온라인",
    "이벤트",
    "일정",
    "축제",
    "학생회",
    "학식",
    "행사",
  ],
  단과대학: [
    "문과대학",
    "정경대학",
    "경영대학",
    "호텔관광대학",
    "이과대학",
    "생활과학대학",
    "의과대학",
    "한의과대학",
    "치과대학",
    "약학대학",
    "간호과학대학",
    "음악대학",
    "미술대학",
    "무용학부",
    "자율전공학부",
    "공과대학",
    "전자정보대학",
    "소프트웨어융합대학",
    "응용과학대학",
    "생명과학대학",
    "국제대학",
    "외국어대학",
    "예술·디자인대학",
    "체육대학",
    "자유전공학부",
  ],
};

const SideBar = () => {
  const [active, setActive] = useState("장학·행정");
  const categoryRefs = useRef({}); // 각 항목 ref 저장용
  const [subTop, setSubTop] = useState(0); // 세부 카테고리 top 위치
  const [hoverCategory, setHoverCategory] = useState(null);
  const currentCategory = hoverCategory || active;

  useEffect(() => {
    const ref = categoryRefs.current[currentCategory];
    if (ref) {
      const { offsetTop } = ref;
      setSubTop(offsetTop);
    }
  }, [currentCategory]);

  return (
    <div className="sidebar-container">
      <div className="sidebar-title">카테고리</div>
      <div className="main-category-list">
        {categories.map((ctg) => (
          <div
            key={ctg}
            className={`main-category-item ${
              active === ctg || hoverCategory === ctg ? "active" : ""
            }`}
            onClick={() => setActive(ctg)}
            onMouseEnter={() => setHoverCategory(ctg)} // 마우스 올라가면 세부 보여줌
            onMouseLeave={() => setHoverCategory(null)} // 마우스 벗어나면 숨김
            ref={(el) => (categoryRefs.current[ctg] = el)}
          >
            {ctg}
          </div>
        ))}
      </div>
      +{" "}
      {subCategories[currentCategory] && (
        <div className="sub-category-panel" style={{ top: subTop }}>
          <div className="sub-category-columns">
            <div className="column">
              {subCategories[active]
                .slice(0, Math.ceil(subCategories[active].length / 2))
                .map((sub) => (
                  <div key={sub} className="sub-category-item">
                    {sub}
                  </div>
                ))}
            </div>
            <div className="column">
              {subCategories[active]
                .slice(Math.ceil(subCategories[active].length / 2))
                .map((sub) => (
                  <div key={sub} className="sub-category-item">
                    {sub}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;

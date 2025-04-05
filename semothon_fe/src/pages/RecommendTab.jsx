import React from "react";
import { RiThumbUpFill } from "react-icons/ri";
import "../styles/pages/RecommendTab.css";

const RecommendTab = () => {
  return (
    <div className="recommend-tab">
      <RiThumbUpFill className="recommend-icon" />
      <span className="recommend-text">추천 탭 페이지입니다!</span>
    </div>
  );
};

export default RecommendTab;

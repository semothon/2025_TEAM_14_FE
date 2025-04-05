import React from "react";
import "../styles/pages/RecommendTab.css";
import { RiThumbUpFill } from "react-icons/ri";

const RecommendTab = () => {
  return (
    <div className="recommend-container">
      <div className="recommend-header">
        <RiThumbUpFill size={20} />
        <span>추천 탭</span>
      </div>
    </div>
  );
};

export default RecommendTab;

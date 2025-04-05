import React from "react";
import SideBar from "../components/layout/SideBar";
import SearchBar from "../components/layout/SearchBar";
import Topic from "../components/layout/Topic"; // ✅ 추가
import mainLogo from "../assets/KHUoogle.png";
import "../styles/pages/Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="layout-sidebar">
        <SideBar />
      </div>
      <div className="layout-main">
        <img src={mainLogo} className="main-logo" alt="MainImage" />
        <div className="search-input">
          <SearchBar />
        </div>
        <div className="topic-container">
          <Topic label="# 학사" />
          <Topic label="# 장학" />
          <Topic label="# 대외활동" />
          <Topic label="# 진로" />
        </div>
      </div>
    </div>
  );
};

export default Main;


import React from "react";
import SideBar from "../components/layout/SideBar";
import SearchBar from "../components/layout/SearchBar";
import mainLogo from "../assets/KHUoogle.png";
import "../styles/pages/Main.css";
import TopKeywords from "../components/layout/TopKeywords";

const Main = () => {
  return (
    <div className="main">
      <div className="layout-sidebar">
        <SideBar />
      </div>
      <div className="layout-main">
        <img src={mainLogo} className="main-logo" alt="MainImage" />
        <SearchBar className="search-input" iconColor="#fff" textColor="#fff" />
        <div className="layout-keyword">
          <TopKeywords />
        </div>
      </div>
    </div>
  );
};

export default Main;

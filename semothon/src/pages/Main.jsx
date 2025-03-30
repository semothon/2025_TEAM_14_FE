import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import "../styles/Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="layout-sidebar">
        <Sidebar />
      </div>
      <div className="layout-main">
        <div className="main-logo">로고입니다.</div>
        <div className="search-input">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Main;

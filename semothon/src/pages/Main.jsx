import React, { useState } from "react";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import "../styles/Main.css";

const Main = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="main">
      <div className="layout-sidebar">
        <SideBar />
      </div>
      <div className="layout-main">
        <div className="main-logo">KHUUU</div>
        <div className="search-input">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Main;

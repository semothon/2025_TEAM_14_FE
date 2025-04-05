import React, { useEffect, useRef, useState } from "react";
import "../../styles/layout/SideBar.css";
import allCategories from "../../data/categories";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [fixedIndex, setFixedIndex] = useState(null);
  const containerRef = useRef();
  const navigate = useNavigate();

  const isPopupVisible = (idx) =>
    fixedIndex === idx || (fixedIndex === null && hoveredIndex === idx);
  const categories = Object.keys(allCategories).filter((key) => key !== "기타");
  const subCategories = allCategories;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setFixedIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubClick = (keyword) => {
    navigate(`/search-result?query=${keyword}`);
  };

  return (
    <div className="sidebar-container" ref={containerRef}>
      <div className="sidebar-title">카테고리</div>
      <ul className="main-category-list">
        {categories.map((cat, idx) => {
          const subList = subCategories[cat] || [];
          const half = Math.ceil(subList.length / 2);
          return (
            <li
              key={cat}
              className="category-item"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setFixedIndex(idx)}
            >
              <div
                className={`category-item-box ${
                  isPopupVisible(idx) ? "active" : ""
                }`}
              >
                {cat}
              </div>

              {isPopupVisible(idx) && subList.length > 0 && (
                <div className="popup">
                  <div className="popup-inner">
                    <div className="popup-column">
                      {subList.slice(0, half).map((sub) => (
                        <div
                          key={sub}
                          className="popup-item"
                          onClick={() => handleSubClick(sub)}
                        >
                          {sub}
                        </div>
                      ))}
                    </div>
                    <div className="popup-divider" />
                    <div className="popup-column">
                      {subList.slice(half).map((sub) => (
                        <div
                          key={sub}
                          className="popup-item"
                          onClick={() => handleSubClick(sub)}
                        >
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

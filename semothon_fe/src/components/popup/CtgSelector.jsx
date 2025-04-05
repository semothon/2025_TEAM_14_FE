import React, { useState } from "react";
import flatCategories from "../../data/categories.js";
import SubmitButton from "../ui/SubmitButton.jsx";
import { RiRestartLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import Select from "react-select";
import "../../styles/popup/CtgSelector.css";
import Hangul from "hangul-js";

const CtgSelector = () => {
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  const handleToggle = (ctg) => {
    setSelected((prev) =>
      prev.includes(ctg) ? prev.filter((item) => item !== ctg) : [...prev, ctg]
    );
  };

  const handleReset = () => setSelected([]);
  const handleSave = () => {
    const payload = {
      categories: selected, //백엔드로 보낼 준비된 형식
    };
    console.log("백엔드로 보낼 데이터:", payload);
    // fetch('/api/your-endpoint', { method: 'POST', body: JSON.stringify(payload) }) 등으로 사용 예정
  };

  const filteredCategories = flatCategories.filter(
    (ctg) => Hangul.search(ctg, search) > -1
  );

  const options = flatCategories.map((ctg) => ({ value: ctg, label: ctg }));

  return (
    <div className="category-selector">
      <div className="search-wrapper">
        <div className="search-content">
          {selected.map((ctg) => (
            <div
              key={ctg}
              className="tag-chip"
              onClick={() => handleToggle(ctg)}
            >
              {ctg}
            </div>
          ))}
          <input
            className="search-input"
            placeholder={selected.length === 0 ? "검색할 카테고리 입력" : ""}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="search-icon-wrapper">
          <RiSearchLine className="search-icon" />
        </div>
      </div>

      <div className="category-list">
        {filteredCategories.map((ctg) => (
          <button
            key={ctg}
            className={`category-item ${
              selected.includes(ctg) ? "selected" : ""
            }`}
            onClick={() => handleToggle(ctg)}
          >
            {ctg}
          </button>
        ))}
      </div>

      <div className="ctg-selector-footer">
        <button className="reset-button" onClick={handleReset}>
          <RiRestartLine size={36} />
        </button>
        <button className="save-button" onClick={handleSave}>
          저장
        </button>
      </div>
    </div>
  );
};

export default CtgSelector;

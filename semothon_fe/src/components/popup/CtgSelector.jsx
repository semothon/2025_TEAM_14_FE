import React, { useMemo, useState } from "react";
import allCategories from "../../data/categories.js";
import SubmitButton from "../ui/SubmitButton.jsx";
import { RiRestartLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";

import "../../styles/popup/CtgSelector.css";

const CtgSelector = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  const allKeywords = useMemo(() => Object.values(allCategories).flat(), []);

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const input = search.trim();

      if (!input) return;

      if (allKeywords.includes(input) && !selected.includes(input)) {
        setSelected((prev) => [...prev, input]);
      }

      setSearch("");
    }
  };

  const handleRemove = (ctg) => {
    setSelected(selected.filter((item) => item !== ctg));
  };
  const handleToggle = (ctg) => {
    setSelected((prev) =>
      prev.includes(ctg) ? prev.filter((item) => item !== ctg) : [...prev, ctg]
    );
  };

  const handleSave = () => {};
  const handleReset = () => setSelected([]);
  const filtered = allKeywords.filter((kw) =>
    kw.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="ctg-selector">
      <div className="ctg-wrapper">
        <div className="ctg-content">
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
            className="ctg-input"
            placeholder={selected.length === 0 ? "검색할 카테고리 입력" : ""}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="ctg-icon-wrapper">
          <RiSearchLine className="search-icon" />
        </div>
      </div>

      <div className="ctg-list">
        {filtered.map((ctg) => (
          <button
            key={ctg}
            className={`ctg-item ${selected.includes(ctg) ? "selected" : ""}`}
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

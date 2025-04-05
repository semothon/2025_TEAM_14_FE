import React, { useState } from "react";
import allCategories from "../../data/categories.js";
import SubmitButton from "../ui/SubmitButton.jsx";
import { RiRestartLine } from "react-icons/ri";

const CtgSelector = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  const handelKeydown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const input = search.trim();

      if (!input) return;

      const matchedCategory = allCategories.find((ctg) => ctg === input);

      if (matchedCategory && !selected.includes(matchedCategory)) {
        setSelected([...selected, matchedCategory]);
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

  const filtered = allCategories.filter((ctg) => ctg.includes(search));

  return (
    <div className="category-selector">
      <div className="selected-tags">
        {selected.map((ctg) => (
          <span key={ctg} className="tag">
            {ctg}
            <button className="remove-btn" onClick={() => handleRemove(ctg)}>
              ×
            </button>
          </span>
        ))}
        <input
          type="text"
          placeholder="검색할 카테고리 입력"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handelKeydown}
        />
      </div>
      <div className="category-list">
        {filtered.map((ctg) => (
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
        <RiRestartLine className="reset-button" onClick={handleReset} />
        <SubmitButton type="button" onClick={handleSave} />
      </div>
    </div>
  );
};

export default CtgSelector;

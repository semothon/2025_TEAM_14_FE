import React, { useMemo, useState } from "react";

const CategoryTab = ({ categories, onChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sortedCategories = useMemo(() => {
    return [...categories].sort((a, b) => {
      if (a === "기타") return 1;
      if (b === "기타") return -1;
      return 0;
    });
  }, [categories]);

  const handleClick = (idx) => {
    const selected = categories[idx];
    setActiveIndex(idx);
    onChange(categories[idx]);
  };

  return (
    <div>
      {sortedCategories.map((category, idx) => (
        <button
          key={category}
          className={`custom-tab ${idx === activeIndex ? "active" : ""}`}
          onClick={() => handleClick(idx)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTab;

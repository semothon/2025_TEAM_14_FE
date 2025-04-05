import React, { useState } from "react";
import "../../styles/ui/PaginatedResult.css";
import { RiArrowUpSLine } from "react-icons/ri";

const PAGE_SIZE = 10;

const PaginatedResult = ({ items = [] }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(items.length / PAGE_SIZE);
  const sliced = items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {sliced.map((item) => (
        <div key={item.id} className="result-item">
          <p className="result-item-major">{item.major}</p>
          <p className="result-item-time">{item.timestamp.slice(0, 10)}</p>
          <a href={item.url} className="result-item-title">
            {item.title}
          </a>
        </div>
      ))}
      {totalPages > 1 && (
        <div className="result-page">
          {Array(totalPages)
            .fill(null)
            .map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx + 1)}
                className="result-page-btn"
              >
                {idx + 1}
              </button>
            ))}
        </div>
      )}
      <div className="scroll-to-top" onClick={scrollToTop}>
        <RiArrowUpSLine size={36} />
      </div>
    </div>
  );
};

export default PaginatedResult;

import React, { useState } from "react";

const PAGE_SIZE = 10;

const PaginatedResult = ({ items = [] }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(items.length / PAGE_SIZE);
  const sliced = items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <ul>
        {sliced.map((item) => (
          <li key={`${item.id}-${item.timestamp}`}>
            <p>{item.department}</p>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
        <div>
          {Array(totalPages)
            .fill(null)
            .map((_, idx) => (
              <button key={idx} onClick={() => setPage(idx + 1)}>
                {idx + 1}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default PaginatedResult;

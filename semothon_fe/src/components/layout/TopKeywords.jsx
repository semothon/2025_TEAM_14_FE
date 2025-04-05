import React, { useEffect, useState } from "react";
import api from "../../axiosConfig.js";
import { useNavigate } from "react-router-dom";
import "../../styles/layout/TopKeywords.css";

const TopKeywords = () => {
  const [keywords, setKeywords] = useState([]);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopKeywords = async () => {
      try {
        const res = await api.get("/api/search/top");
        setKeywords(res.data);
      } catch (err) {
        console.error("키워드 가져오기 실패:", err);
      }
    };

    fetchTopKeywords();
  }, []);

  const handleClick = (keyword) => {
    setSelected(keyword);
    navigate(`/search-result?query=${keyword}`);
  };

  return (
    <div className="top-keyword-container">
      {keywords.map((kw) => (
        <div
          key={kw}
          className="top-keyword-item"
          onClick={() => handleClick(kw)}
        >
          # {kw}
        </div>
      ))}
    </div>
  );
};

export default TopKeywords;

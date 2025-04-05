import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 추가

const SearchBar = () => {
  // 검색어를 저장할 상태
  const [query, setQuery] = useState("");
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 검색 아이콘 클릭 시 호출되는 함수
  const handleSearch = () => {
    
    if (query.trim()) {
      navigate(`/search-result?query=${query}`); // 파라미터로search로 
    }
      
     navigate("/search-result");
  }; 
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Enter 키가 눌리면 handleSearch 함수 실행
    }
  };



  return (
    <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
      {/* 검색 입력 폼 */}
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown} // onKeyDown 이벤트 연결
        style={{
          flex: 1,
          padding: "22px",
          borderRadius: "40px",
          border: "none",
          backgroundColor: "#f9f9f9",
          width: "745px",
          paddingRight: "50px",
          background: "linear-gradient(to bottom right, #b22014, #f67802)", // 그라데이션 추가
          boxShadow: "0 4px 10px rgba(80, 80, 80, 0.5)", // 작은 그림자 효과 추가
          transition: "all 0.3s ease", // 부드러운 전환 효과
          fontSize: "15px",
        }}
      />
      {/* 검색 아이콘 */}
      <button
        style={{
          position: "absolute",
          right: "20px",
          top: "15%",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleSearch} // 클릭 시 검색 실행
      >
        <FiSearch color="white" size={37} />
      </button>
    </div>
  );
};

export default SearchBar;
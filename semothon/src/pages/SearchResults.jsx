import React from "react";
import SearchBar from "../components/SearchBar"; // 경로 확인

const SearchResults = () => {
  console.log("SearchResults Rendered"); // 로그 찍기

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <SearchBar />  
      </div>

      <div>
        <h1>검색 결과</h1>
        <p>검색 결과를 나중에 추가합니다.</p>
      </div>
    </div>
  );
};

export default SearchResults;
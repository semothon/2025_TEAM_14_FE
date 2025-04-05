import React from "react";
import SearchBar from "../components/layout/SearchBar";
import { useSearchParams } from "react-router-dom";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  return (
    <div>
      <div>
        <SearchBar />
      </div>

      <div>
        <h1>검색 결과</h1>
        {query ? (
          <p>"{query}"에 대한 검색 결과</p>
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResult;

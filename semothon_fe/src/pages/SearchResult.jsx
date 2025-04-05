import React, { useEffect, useMemo, useState } from "react";
import SearchBar from "../components/layout/SearchBar";
import { useLocation } from "react-router-dom";
import "../styles/pages/SearchResult.css";
import groupByKeyword from "../data/groupByKeyword.js";
import PaginatedResult from "../components/ui/PaginatedResult.jsx";
import CategoryTab from "../components/ui/CategoryTab.jsx";
import api from "../axiosConfig.js";

const SearchResult = () => {
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [activeCategory, setActiveCategory] = useState("전체");

  // query 추출
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const value = searchParams.get("query") || "";
    setQuery(value);
  }, [location.search]);

  // api 요청
  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        const res = await api.get("/api/search", {
          params: { keyword: query },
        });
        setResults(res.data);
      } catch (error) {
        console.log("검색 중 오류 발생", error);
      }
    };

    fetchData();
  }, [query]);

  const resultByCategory = useMemo(() => {
    const all = results.map((r) => ({
      ...r,
      keyword: r.keywords[0] || "기타", // 첫 번째 키워드 기준 (필요 시 보완)
    }));
    return {
      전체: all,
      ...groupByKeyword(all),
    };
  }, [results]);

  const filteredItems = resultByCategory[activeCategory] || [];

  return (
    <div className="search-result">
      <SearchBar className="search-result-input" iconColor="#a40e17" />
      <div>
        <h1>검색 결과</h1>
        {query ? <p>"{query}"에 대한 검색 결과</p> : <></>}
      </div>
      <div className="search-scrollable-category">
        <CategoryTab
          categories={Object.keys(resultByCategory)}
          onChange={(category) => setActiveCategory(category)}
        />
      </div>
      <PaginatedResult items={filteredItems} />
    </div>
  );
};

export default SearchResult;

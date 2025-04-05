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

    const cached = sessionStorage.getItem("searchResults");
    let shouldFetch = true;

    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (
          Array.isArray(parsed) &&
          parsed.length > 0 &&
          parsed[0]?.cachedQuery === query
        ) {
          setResults(parsed);
          shouldFetch = false;
        }
      } catch (e) {
        console.warn("세션 캐시 파싱 실패", e);
      }
    }

    const fetchData = async () => {
      try {
        const res = await api.get("/api/search", {
          params: { keyword: query },
        });

        if (Array.isArray(res.data)) {
          const tagged = res.data.map((r) => ({
            ...r,
            cachedQuery: query,
          }));
          setResults(tagged);
          sessionStorage.setItem("searchResults", JSON.stringify(tagged));
        } else {
          console.warn("예상치 못한 응답:", res.data);
          setResults([]);
        }
      } catch (error) {
        console.log("검색 중 오류 발생", error);
        setResults([]);
      }
    };

    if (shouldFetch) {
      fetchData();
    }
  }, [query]);

  const resultByCategory = useMemo(() => {
    const all = results.map((r) => ({
      ...r,
      keyword: r.keywords[0] || "기타",
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
      {results.length === 0 ? (
        <div>
          <p>검색 결과가 없습니다.</p>
        </div>
      ) : (
        <>
          <div className="search-scrollable-category">
            <CategoryTab
              categories={Object.keys(resultByCategory)}
              onChange={(category) => setActiveCategory(category)}
            />
          </div>
          <PaginatedResult items={filteredItems} />
        </>
      )}
    </div>
  );
};

export default SearchResult;

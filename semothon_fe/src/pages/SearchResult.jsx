import React, { useEffect, useMemo, useState } from "react";
import SearchBar from "../components/layout/SearchBar";
import { useLocation } from "react-router-dom";
import "../styles/pages/SearchResult.css";
import groupByKeyword from "../data/groupByKeyword.js";
import PaginatedResult from "../components/ui/PaginatedResult.jsx";
import CategoryTab from "../components/ui/CategoryTab.jsx";
import api from "../axiosConfig.js";
import SideBar from "../components/layout/SideBar.jsx";

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
        console.log("✅ 받은 데이터:", res.data);

        if (Array.isArray(res.data)) {
          const transformed = res.data.map((r) => ({
            ...r.stackEntry,
            keyword: r.keyword || "기타",
            cachedQuery: query,
          }));
          const deduped = Array.from(
            new Map(transformed.map((item) => [item.url, item])).values()
          );

          setResults(deduped);
          sessionStorage.setItem("searchResults", JSON.stringify(deduped));
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
    return {
      전체: results,
      ...groupByKeyword(results),
    };
  }, [results]);

  const filteredItems = resultByCategory[activeCategory] || [];

  return (
    <div className="search-result">
      <SearchBar className="search-result-input" iconColor="#a40e17" />
      <div className="search-result-main">
        <SideBar />
        {results.length === 0 ? (
          <div className="no-result">
            <p className="no-result-title">
              <span style={{ color: "#0A326F" }}>{query}</span>에 대한 검색
              결과가 없습니다.
            </p>
            <ul className="no-result-list">
              <li>입력한 단어의 철자나 띄어쓰기가 정확한지 확인해 보세요.</li>
              <li>보다 일반적인 단어로 검색해 보세요.</li>
              <li>단어의 개수를 줄여 보세요.</li>
            </ul>
          </div>
        ) : (
          <>
            <div className="search-scrollable-category">
              <CategoryTab
                categories={Object.keys(resultByCategory)}
                onChange={(category) => setActiveCategory(category)}
              />
              <PaginatedResult items={filteredItems} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResult;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header";
import SearchResults from "./pages/SearchResults"; // 검색 결과 페이지 추가

function App() {
  const isLogin = true;
  return (
    <div className="App">
      <Router>
        <Header isLogin={isLogin} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search-result" element={<SearchResults />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
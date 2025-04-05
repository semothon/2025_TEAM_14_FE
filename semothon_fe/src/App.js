import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/layout/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useState, useEffect } from "react";
import api from "./axiosConfig.js";
import SearchResult from "./pages/SearchResult.jsx";

function App() {
  const isLogin = false;
  /*
  const [isLogin, setIsLogin] = useState(false);

  // 로그인 상태 확인
  useEffect(() => {
    const savedLogin = localStorage.getItem("isLogin") === "true";

    const checkSession = async () => {
      try {
        const res = await api.get("/api/auth/me");
        if (res.status === 200) {
          setIsLogin(true);
        }
      } catch (err) {
        localStorage.removeItem("isLogin");
        localStorage.removeItem("userEmail");
        setIsLogin(false);
      }
    };

    if (savedLogin) {
      checkSession();
    }
  }, []);
*/
  return (
    <div className="App">
      <Router>
        <Header isLogin={isLogin} /*setIsLogin={setIsLogin}*/ />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<SignIn /*setIsLogin={setIsLogin}*/ />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search-result" element={<SearchResult />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useState, useEffect } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const savedLogin = localStorage.getItem("isLogin");
    setIsLogin(savedLogin === "true");
  }, []);

  return (
    <div className="App">
      <Router>
        <Header isLogin={isLogin} setIsLogin={setIsLogin} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<SignIn setIsLogin={setIsLogin} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

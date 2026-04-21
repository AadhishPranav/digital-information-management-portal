import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Schemes from "./pages/Schemes";
import Policies from "./pages/Policies";
import Regulations from "./pages/Regulations";
import HigherStudies from "./pages/HigherStudies";
import Scholarships from "./pages/Scholarships";
import News from "./pages/News";

import NewsDetail from "./pages/NewsDetail";
import SchemeDetail from "./pages/SchemeDetail";
import RegulationDetail from "./pages/RegulationDetail";
import PolicyDetail from "./pages/PolicyDetail";
import ScholarshipDetail from "./pages/ScholarshipDetail";
import HigherStudyDetail from "./pages/HigherStudyDetail";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Chatbot from "./components/Chatbot";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  return (
    <BrowserRouter>

      {isLoggedIn && <Navbar />}

      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
        <Route path="/schemes" element={isLoggedIn ? <Schemes /> : <Login />} />
        <Route path="/policies" element={isLoggedIn ? <Policies /> : <Login />} />
        <Route path="/regulations" element={isLoggedIn ? <Regulations /> : <Login />} />
        <Route path="/higher-studies" element={isLoggedIn ? <HigherStudies /> : <Login />} />
        <Route path="/scholarships" element={isLoggedIn ? <Scholarships /> : <Login />} />
        <Route path="/news" element={isLoggedIn ? <News /> : <Login />} />

        <Route path="/news/:id" element={isLoggedIn ? <NewsDetail /> : <Login />} />
        <Route path="/schemes/:id" element={isLoggedIn ? <SchemeDetail /> : <Login />} />
        <Route path="/regulations/:id" element={isLoggedIn ? <RegulationDetail /> : <Login />} />
        <Route path="/policies/:id" element={isLoggedIn ? <PolicyDetail /> : <Login />} />
        <Route path="/scholarships/:id" element={isLoggedIn ? <ScholarshipDetail /> : <Login />} />
        <Route path="/higherstudies/:id" element={isLoggedIn ? <HigherStudyDetail /> : <Login />} />

      </Routes>

      {isLoggedIn && <Chatbot />}

    </BrowserRouter>
  );
}

export default App;
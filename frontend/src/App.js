import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Schemes from "./pages/Schemes";
import Policies from "./pages/Policies";
import Regulations from "./pages/Regulations";
import HigherStudies from "./pages/HigherStudies";
import Scholarships from "./pages/Scholarships";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail"; // ✅ ADD THIS
import SchemeDetail from "./pages/SchemeDetail";
import RegulationDetail from "./pages/RegulationDetail";
import PolicyDetail from "./pages/PolicyDetail";
import ScholarshipDetail from "./pages/ScholarshipDetail";
import HigherStudyDetail from "./pages/HigherStudyDetail";


import Chatbot from "./components/Chatbot";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/regulations" element={<Regulations />} />
        <Route path="/higher-studies" element={<HigherStudies />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/news" element={<News />} />

        {/* ✅ NEW ROUTE */}
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/schemes/:id" element={<SchemeDetail />} />
        <Route path="/regulations/:id" element={<RegulationDetail />} />
        <Route path="/policies/:id" element={<PolicyDetail />} />
        <Route path="/scholarships/:id" element={<ScholarshipDetail />} />
        <Route path="/higherstudies/:id" element={<HigherStudyDetail />} />
        

      </Routes>
      
    <Chatbot />
    </BrowserRouter>
    
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/Landing";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import YogaPoses from "./pages/YogaPoses/YogaPoses";
import PoseDetails from "./pages/PoseDetails/PoseDetails";
import YogaPosesBySkill from "./pages/YogaPosesBySkill/YogaPosesBySkill";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";

function App() {
  return (
    <BrowserRouter>
    <div className="app-background">
    <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/yoga-poses/category/:categoryId" element={<YogaPoses />} />
        <Route path="/yoga-poses/category/details/:poseId" element={<PoseDetails />} />
        <Route path="/yoga-poses/skills/:title" element={<YogaPosesBySkill />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        {/* <Route path="/skill-level/:title" element={<SkillComponent />} /> */}
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
   
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Events from "./events";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ProfileSection from "../components/Profile/ProfileSection";
import SurveySection from "../components/Survey/SurveySection";

const Pages = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<ProfileSection />} />
        <Route path="/survey" element={<SurveySection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Pages;

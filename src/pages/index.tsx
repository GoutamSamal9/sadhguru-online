import { BrowserRouter, Route, Routes } from "react-router-dom";
import Events from "./events";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ProfileSection from "../components/Profile/ProfileSection";
import Survey from "./survey";

const Pages = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<ProfileSection />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Pages;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Events from "./events/events";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const Pages = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Pages;

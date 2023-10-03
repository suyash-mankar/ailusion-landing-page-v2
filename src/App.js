import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import ContactUs from "./pages/contactUs/contactUs";
import NavbarComp from "./components/navbar/navbarComp";
import { bg_shadows } from "./global/icons/media";
import AboutUs from "./pages/aboutUs/aboutUs";

function App() {
  const [showBgImg, setShowBgImg] = useState(false);

  return (
    <div className="App">
      {showBgImg && <img src={bg_shadows} className="bg_shadows" alt="" />}

      <NavbarComp />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage setShowBgImg={setShowBgImg} />} />
          <Route
            path="/contact-us"
            element={<ContactUs setShowBgImg={setShowBgImg} />}
          />
          <Route
            path="/about-us"
            element={<AboutUs setShowBgImg={setShowBgImg} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

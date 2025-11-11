import React from "react";
import Navbar from "./components/common/Navbar.jsx";
import FooterMain from "./components/common/FooterMain.jsx";
import Lista from "./pages/pages/Lista.jsx";
import SearchBar from "./components/common/SearchBar.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Strona główna */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
            </>
          }
        />
        {/* Strona lista */}
        <Route path="/lista" element={<Lista />} />
      </Routes>
      <SearchBar/>
      <FooterMain/>
    </Router>
  );
};

export default App;
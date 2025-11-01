import React from "react";
import Navbar from "./components/common/Navbar.jsx";
import Lista from "./pages/Lista.jsx";
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
    </Router>
  );
};

export default App;
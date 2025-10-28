import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Lista from "./pages/Lista"; // <- Twój komponent z poprzedniego kroku
import Galeria from "./pages/Galeria";
import Oferta from "./pages/Oferta";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<h2>Witamy d00pie i zapraszam</h2>} />
          <Route path="/lista" element={<Galeria />} />
          <Route path="/oferta" element={<Oferta />} />
          <Route path="/lista" element={<Lista />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

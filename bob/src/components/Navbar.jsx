import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        Home
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Strona główna
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/lista">
              Lista
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/oferta">
              Oferta
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/lista">
              Lista użytkowników
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Projekt BOB</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Strona główna</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lista">Lista użytkowników</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
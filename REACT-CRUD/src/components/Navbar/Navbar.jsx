import React from "react";
import "./Navbar.css";
import LogoutButton from "../Buttons/LogoutButton/LogoutButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h1>Produtos</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active" href="#">
                  Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cadastro-produto" className="nav-link" href="#">
                  Cadastro
                </Link>
              </li>
              <div className="align-mobile-logout">
                <li className="nav-item">
                  <Link to="/consulta-produto" className="nav-link" href="#">
                    Consulta
                  </Link>
                </li>
              </div>
            </ul>
            <hr style={{ color: "white" }} />
            <LogoutButton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

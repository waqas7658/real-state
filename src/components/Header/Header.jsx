import React from "react";
import "../Header/Header.css";
import logo1 from "../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img src={logo1} alt="logo" id="logo1" />

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="">
                    Residencies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    Our Value
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Get Started
                  </a>
                </li>
                <button className="contact">Contact</button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;

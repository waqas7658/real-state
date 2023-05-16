import React from "react";
import "./Footer.css";
import Footerlogo from "../images/logo2.png";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <img src={Footerlogo} alt="Footerlogo" />
            <p className="footer-text">
              Our vision is to make all people <br /> the best place to live for
              them.
            </p>
          </div>
          <div className="col-md-6 col-sm-6">
            <h2 className="footer-heading">Information</h2>
            <p className="footer-text">145 New York, FL 5467, USA</p>
            <div className="footer-links">
              <ul className="footer-ul">
                <li className="footer-li">
                  <a>Property</a>
                </li>
                <li className="footer-li">
                  <a>Services</a>
                </li>
                <li className="footer-li">
                  <a>Product</a>
                </li>
                <li className="footer-li">
                  <a>About Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

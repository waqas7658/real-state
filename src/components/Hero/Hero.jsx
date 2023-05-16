import React from "react";
import "./Hero.css";
import hero from "../images/hero-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="white-gradient" />
        <Header />
        <div className="container">
          <div className="row py-5 mx-4 justify-content-center">
            {/* left side */}
            <div className=" col-md-6 col-sm-6">
              <div className="discover">
                <div className="orange-circle"></div>
                <p className="hero_h1">
                  Discover <br /> Most Suitable <br /> Property
                </p>
                <p className="hero_text my-4">
                  Find a variety of properties that suit you very easilty <br />
                  Forget all difficulties in finding a residence for you
                </p>
                {/* <div className="search ">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="lg"
                    style={{ color: "#145bd7" }}
                  />
                  <input type="text" />
                  <button className="contact">search</button>
                </div> */}
                <div className="search-box py-3">
                  <div className="search">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      size="lg"
                      style={{ color: "#145bd7" }}
                    />
                    <input type="text" />
                    <button className="contact">search</button>
                  </div>
                </div>
                <div className="stats">
                  <div className="stats-element">
                    <span>
                      <CountUp start={8800} end={9000} duration={4} />
                      <span> +</span>
                    </span>
                    <span className="stats-text">premium Products</span>
                  </div>
                  <div className="stats-element">
                    <span>
                      <CountUp start={1950} end={2000} duration={4} />
                      <span> +</span>
                    </span>
                    <span className="stats-text">Happy Customer</span>
                  </div>
                  <div className="stats-element">
                    <span>
                      <CountUp end={28} />
                      <span> +</span>
                    </span>
                    <span className="stats-text">Award Winning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* right div */}
            <div className="col-md-6 col-sm-6">
              <div className="hero_image">
                <img src={hero} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

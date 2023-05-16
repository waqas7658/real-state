import React from "react";
import "./Companies.css";
import prologis from "../images/prologis.png";
import americanTower from "../images/tower.png";
import equnix from "../images/equinix.png";
import reality from "../images/realty.png";

const Companies = () => {
  return (
    <>
      <div className="comapnies">
        <img src={prologis} alt="prologis" className="comapnies-img" />
        <img src={americanTower} alt="prologis" className="comapnies-img" />
        <img src={equnix} alt="prologis" className="comapnies-img" />
        <img src={reality} alt="prologis" className="comapnies-img" />
      </div>
    </>
  );
};

export default Companies;

import React from "react";
import "./Cards.css";
// import card from "../../images/r3.png";
const Cards = (card) => {
  return (
    <>
      <div className="card">
        <img src={card.image} alt="" className="card-img" />
        <div className="amount">
          <span>$ </span>
          <span>{card.price}</span>
        </div>
        <div className="card-title">{card.name}</div>
        <div className="card-address">{card.detail}</div>
      </div>
    </>
  );
};

export default Cards;

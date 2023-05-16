import React from "react";
import "./ContactCard.css";

const ContactCard = (Ccard) => {
  return (
    <>
      <div className="contact-card">
        <div className="c-content">
          <div className="c-icon">{Ccard.icon}</div>
          <div className="c-detail">
            <span className="c-title">{Ccard.title}</span>
            <span className="c-number">{Ccard.number}</span>
          </div>
        </div>
        <button className="c-btn">{Ccard.btn}</button>
      </div>
    </>
  );
};

export default ContactCard;

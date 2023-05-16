import React from "react";
import "./Contact.css";
import contact from "../images/hero-image.png";
import ContactCard from "./ContactCard/ContactCard";
import Cdata from "../../utils/Ccard";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 contactus ">
            <span className="contact-heading">Contact Us</span>
            <span className="contact-text">Easy To Contact us</span>
            <span className="contact-text1">
              We always ready to help by providijng the best services for you.
              We beleive a good blace to live can make your life better
            </span>

            {/* <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6 col-md-6">
                  {Cdata.map((Ccard, i) => {
                    return (
                      <>
                        <ContactCard {...Ccard} />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
             */}
            <div className="contact-cards">
              {Cdata.map((Ccard, i) => {
                return (
                  <>
                    <ContactCard {...Ccard} />
                  </>
                );
              })}
            </div>
          </div>

          {/* right side */}
          <div className="col-sm-6 col-md-6">
            <div className="contact-image">
              <img src={contact} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

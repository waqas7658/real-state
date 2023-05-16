import values from "../images/value.png";
import "./Values.css";
import data from "../../utils/accordion";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdArrowDropDown } from "react-icons/md";

const Values = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 ">
            <div className="value_image ">
              <img src={values} alt="value image" />
            </div>
          </div>

          <div className="col-md-6 col-sm-6 values">
            <span className="value-heading">Our Values</span>
            <span className="value-text">Values We give to you</span>
            <span className="value-text1">
              We always ready to help by providijng the best services for you.
              We beleive a good blace to live can make your life better
            </span>
            <div className="accordions">
              <Accordion
                className="main-accordion"
                allowMultipleExpanded={false}
                preExpanded={[0]}
              >
                {data.map((item, i) => {
                  return (
                    <AccordionItem
                      className={"accordian-item"}
                      key={i}
                      uuid={i}
                    >
                      <AccordionItemHeading>
                        <AccordionItemButton className="accordionButton">
                          <div className="accordion-icon">{item.icon}</div>
                          <div className="accordion-heading">
                            {item.heading}
                          </div>
                          <div className="accordion-icon">
                            <MdArrowDropDown size={20} />
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="value-detail">{item.detail}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Values;

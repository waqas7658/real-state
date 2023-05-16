import React from "react";
import "./Residencies.css";
import Cards from "./Cards/Cards";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.js";
import { sliderSettings } from "../../utils/common";

const Recidencies = () => {
  return (
    <>
      <section className="main">
        <div className="r-container container">
          <div className="best d-flex flex-column">
            <span className="best-choices">Best Choices</span>
            <span className="popular">Popular Residencies</span>
          </div>
          <div className="swiper">
            <Swiper {...sliderSettings}>
              <SlideButton />
              {data.map((card, i) => (
                <SwiperSlide key={i}>
                  <Cards {...card} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recidencies;

function SlideButton() {
  const swiper = useSwiper();

  return (
    <>
      <div className="swiper-btns ">
        <button onClick={() => swiper.slidePrev()} className="swiper-btn2">
          &lt;
        </button>
        <button onClick={() => swiper.slideNext()} className="swiper-btn1">
          &gt;
        </button>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "../css/_homeProjects.sass";
import shape from "../images/Shape.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import wibty from "../images/wibty.png";
import ricon from "../images/Ricon.png";

export const HomeProjects = () => {
  return (
    <div className="homeProjects mt-4">
      <div className="title">
        <h2>Layihələrimiz</h2>
        <Link to="/projects">hamısına bax</Link>
      </div>

      <div className="projects">
        <div className="info">
          <span className="line"></span>
          <h3 className="header">Wibty ilk musiqi və sosial şəbəkə</h3>
          <span className="line"></span>
          <p>
            Wibty ilk musiqi və sosial platforması wibty ilk musiqi və sosial
            platforması ilk musiqi və sosial ...
          </p>
          <div className="goTo">
            <Link to="projects">keçid et</Link> <img src={shape} alt="" />
          </div>
        </div>
        <div className="image">
          <Swiper
            direction={"vertical"}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={wibty} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ricon} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

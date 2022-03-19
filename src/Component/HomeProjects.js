import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useTranslation } from "react-i18next";
import "../css/_homeProjects.sass";
import shape from "../images/Shape.svg";
import "swiper/css";
import "swiper/css/pagination";
import riconCover from "../images/wibtyCover.jpg";
import ricon from "../images/Ricon.png";

export const HomeProjects = () => {
  const { i18n, t } = useTranslation();

  return (
    <div className="homeProjects mt-4">
      <div className="title">
        <h2>{t("layihelerimiz")}</h2>
        <Link to="/projects">{t("hamisinabax")}</Link>
      </div>

      <div className="projects">
        <div className="info">
          <span className="line"></span>
          <h3 className="header"> {t("wibtysosialsebeke")}</h3>
          <span className="line"></span>
          <p>
            Wibty ilk musiqi və sosial platforması wibty ilk musiqi və sosial
            platforması ilbk musiqi və sosial ...
          </p>
          <div className="goTo">
            <Link to="projects">{t("kecidet")}</Link> <img src={shape} alt="" />
          </div>
        </div>
        <div className="image">
          <Swiper
            direction={"vertical"}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={riconCover} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={riconCover} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

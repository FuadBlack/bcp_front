import React from "react";
import { Link } from "react-router-dom";
import "../css/_homePortfolio.sass";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { riconImages } from "./riconImages";

export const HomePortfolio = () => {
  return (
    <div className="homePortfolio">
      <div className="title">
        <h2>Portfoliomuz</h2>
        <Link to="/portfolio">hamısına bax</Link>
      </div>

      <div className="row">
        <div className="col-md-8">
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {riconImages.images.map((val, id) => (
              <SwiperSlide key={id}>
                <img src={val.image} alt={val.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

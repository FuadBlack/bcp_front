import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "../css/_homePortfolio.sass";
import { sliderImages } from "./sliderImages";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export const HomePortfolio = () => {
  const { i18n, t } = useTranslation();

  const length = sliderImages.length;

  const [slide, setActiveSlide] = useState({
    active: 1,
    multiplier: 100 / length 
  });

  const sliderRef = React.useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
    setActiveSlide(prev => ({ ...prev, active: sliderRef.current.swiper.activeIndex + 1}));
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    setActiveSlide(prev => ({ ...prev, active: sliderRef.current.swiper.activeIndex + 1}));
  }, []);

  if (!Array.isArray(sliderImages) || length <= 0) {
    return null;
  }

  

  return (
    <div className="homePortfolio ">
      <div className="title">
        <h2>{t("portfoliomuz")}</h2>
        <Link to="/portfolio">{t("hamisinabax")}</Link>
      </div>

      <div className="slider row">
        <div className="col-md-8">
          <Swiper spaceBetween={50} slidesPerView={1} ref={sliderRef}>
            {sliderImages.map((val, index) => (
              <div className="swiper">
                <SwiperSlide>
                  <img key={index} src={val.image} alt="" />
                  <h3>{val.name}</h3>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
        <div className="right col-md-4">
          <p>
            {sliderImages[slide.active - 1].name || null}
          </p>
          <div className="buttons">
            <button type="button" className="left" onClick={handlePrev}>
              <span className="button">
                <svg
                  width="60"
                  height="118"
                  viewBox="0 0 60 118"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M58.049 0.0305937C56.7435 0.0715787 55.4485 0.153549 54.1654 0.275245L54.2126 0.77301C52.9228 0.895339 51.6452 1.05812 50.3809 1.26005L50.3021 0.766311C49.013 0.972198 47.7378 1.21846 46.4778 1.50372L46.5882 1.99138C45.3271 2.27688 44.0814 2.60176 42.8524 2.96464L42.7108 2.48511C41.4611 2.85414 40.2285 3.26214 39.0145 3.70768L39.1868 4.17707C37.974 4.62221 36.7798 5.10514 35.606 5.6244L35.4037 5.16713C34.2134 5.69367 33.0437 6.25725 31.8961 6.85637L32.1275 7.2996C30.9838 7.89676 29.8622 8.52953 28.7644 9.1964L28.5048 8.76906C27.3931 9.44433 26.3055 10.1543 25.2437 10.8974L25.5303 11.307C24.4742 12.0461 23.4436 12.8183 22.4403 13.6219L22.1277 13.2317C21.1134 14.0441 20.1267 14.8884 19.1691 15.7632L19.5063 16.1323C18.5552 17.0011 17.6331 17.9001 16.7415 18.8278L16.381 18.4813C15.4813 19.4175 14.6124 20.3826 13.7759 21.3752L14.1583 21.6974C13.3289 22.6815 12.5317 23.6927 11.7683 24.7295L11.3657 24.4331C10.5965 25.4778 9.86122 26.5482 9.16155 27.6428L9.58284 27.9121C8.89035 28.9955 8.23302 30.1028 7.61241 31.2324L7.17419 30.9916C6.55029 32.1272 5.96316 33.2852 5.41438 34.4641L5.86767 34.6751C5.32575 35.8392 4.82156 37.0239 4.35662 38.2275L3.89021 38.0473C3.42379 39.2547 2.99653 40.4811 2.60996 41.725L3.08743 41.8734C2.70709 43.0972 2.36647 44.3381 2.06706 45.5946L1.58068 45.4787C1.28112 46.7358 1.02246 48.0084 0.806128 49.295L1.2992 49.3779C1.08692 50.6405 0.915758 51.9167 0.787126 53.2053L0.289598 53.1556C0.161569 54.4382 0.0753152 55.7328 0.0321823 57.038L0.531908 57.0546C0.510686 57.6968 0.499994 58.3416 0.499994 58.9889C0.499994 59.6363 0.51069 60.2812 0.531915 60.9235L0.0321896 60.94C0.0753337 62.2455 0.161611 63.5403 0.289666 64.823L0.78719 64.7734C0.915849 66.0621 1.08703 67.3386 1.29935 68.6014L0.806271 68.6843C1.02262 69.9711 1.28131 71.2439 1.58089 72.5012L2.06728 72.3854C2.3667 73.642 2.70732 74.8831 3.08767 76.1072L2.61019 76.2555C2.99676 77.4996 3.424 78.7262 3.89041 79.9339L4.35683 79.7538C4.82174 80.9576 5.3259 82.1425 5.86778 83.3069L5.41446 83.5178C5.96319 84.6969 6.55025 85.8552 7.17408 86.9911L7.61233 86.7504C8.23287 87.8802 8.89012 88.9878 9.58252 90.0715L9.16117 90.3407C9.86075 91.4357 10.5959 92.5064 11.365 93.5515L11.7677 93.2551C12.531 94.2922 13.328 95.3038 14.1573 96.2883L13.7749 96.6104C14.6112 97.6033 15.48 98.5689 16.3796 99.5054L16.7402 99.1591C17.6316 100.087 18.5536 100.987 19.5046 101.856L19.1673 102.225C20.1248 103.1 21.1114 103.945 22.1255 104.758L22.4382 104.368C23.4415 105.172 24.472 105.944 25.528 106.684L25.2412 107.093C26.303 107.837 27.3905 108.547 28.5021 109.223L28.7619 108.796C29.8597 109.463 30.9812 110.096 32.125 110.694L31.8934 111.137C33.041 111.737 34.2107 112.301 35.401 112.828L35.6034 112.371C36.7773 112.89 37.9715 113.374 39.1844 113.819L39.012 114.289C40.226 114.735 41.4587 115.143 42.7085 115.512L42.8502 115.033C44.0793 115.396 45.3251 115.721 46.5863 116.007L46.4758 116.495C47.736 116.78 49.0114 117.027 50.3006 117.233L50.3795 116.739C51.6439 116.941 52.9218 117.104 54.2118 117.227L54.1645 117.724C55.4478 117.846 56.743 117.928 58.0487 117.969L58.0644 117.47C58.5415 117.485 59.0201 117.494 59.5 117.498L59.5 116.033L60 116.033L60 112.1L59.5 112.1L59.5 108.167L60 108.167L60 104.233L59.5 104.233L59.5 100.3L60 100.3L60 96.3667L59.5 96.3667L59.5 92.4333L60 92.4333L60 88.5L59.5 88.5L59.5 84.5667L60 84.5667L60 80.6333L59.5 80.6333L59.5 76.7L60 76.7L60 72.7667L59.5 72.7667L59.5 68.8333L60 68.8333L60 64.9L59.5 64.9L59.5 60.9667L60 60.9667L60 57.0333L59.5 57.0333L59.5 53.1L60 53.1L60 49.1667L59.5 49.1667L59.5 45.2333L60 45.2333L60 41.3L59.5 41.3L59.5 37.3667L60 37.3667L60 33.4333L59.5 33.4333L59.5 29.5L60 29.5L60 25.5667L59.5 25.5667L59.5 21.6333L60 21.6333L60 17.7L59.5 17.7L59.5 13.7667L60 13.7667L60 9.83332L59.5 9.83332L59.5 5.89999L60 5.89999L60 1.96665L59.5 1.96665L59.5 0.502029C59.0202 0.505905 58.5417 0.515365 58.0647 0.530342L58.049 0.0305937Z"
                    stroke="#9B9B9B"
                    stroke-dasharray="4 4"
                  />
                </svg>
              </span>
              <span className="shape">
                <svg
                  width="28"
                  height="16"
                  viewBox="0 0 28 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7.92196L7.77872 14.8437M1 7.92196L7.77873 1.00017M1 7.92196L28 7.92196"
                    stroke="#9B9B9B"
                  />
                </svg>
              </span>
            </button>
            <button type="button" className="right" onClick={handleNext}>
              <span className="button">
                <svg
                  width="60"
                  height="118"
                  viewBox="0 0 60 118"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M59.5 59.0111C59.5 91.1401 33.1463 117.234 0.5 117.498L0.5 0.502023C33.1461 0.766237 59.5 26.8818 59.5 59.0111Z"
                    stroke="#F4A442"
                  />
                </svg>
              </span>
              <span className="shape">
                <svg
                  width="28"
                  height="16"
                  viewBox="0 0 28 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27 7.92179L20.2213 1M27 7.92179L20.2213 14.8436M27 7.92179H0"
                    stroke="#F4A442"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div
            class="progress"
            style={{ height: "1px", transform: "translateX(110px)" }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${slide.multiplier * slide.active }%`, backgroundColor: "#F4A442" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <div className="sliderMobile">
        {sliderImages.map((images, id) => (
          <div key={id}>
            <img src={images.image} alt="" width="370px" />
            <div className="info text-start">
              <h3>{images.name}</h3>
              <p>{images.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

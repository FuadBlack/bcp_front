import React, { useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/_homePortfolio.sass";
import { sliderImages } from "./sliderImages";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

export const HomePortfolio = () => {
  const { i18n, t } = useTranslation();

  let length = sliderImages.length;

  const [slide, setActiveSlide] = useState({
    active: 1,
    multiplier: 100 / length,
  });

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
    setActiveSlide((prev) => ({
      ...prev,
      active: sliderRef.current.swiper.activeIndex + 1,
    }));
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    setActiveSlide((prev) => ({
      ...prev,
      active: sliderRef.current.swiper.activeIndex + 1,
    }));
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
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            ref={sliderRef}
            
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
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
          <p>{sliderImages[slide.active - 1]?.info || null}</p>
          <div className="buttons">
            <button type="button" className="left">
              {slide.active <= 1 ? (
                <span onClick={handlePrev}>
                  <svg
                    width="60"
                    height="118"
                    viewBox="0 0 60 118"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 58.922L30.7787 65.8437M24 58.922L30.7787 52.0002M24 58.922L51 58.922"
                      stroke="#9B9B9B"
                    />
                    <path
                      d="M58.049 0.0305937C56.7435 0.0715787 55.4485 0.153549 54.1654 0.275245L54.2126 0.77301C52.9228 0.895339 51.6452 1.05812 50.3809 1.26005L50.302 0.766311C49.013 0.972198 47.7378 1.21846 46.4778 1.50372L46.5882 1.99138C45.3271 2.27688 44.0814 2.60176 42.8524 2.96464L42.7108 2.48511C41.4611 2.85414 40.2285 3.26214 39.0145 3.70768L39.1868 4.17707C37.974 4.62221 36.7798 5.10514 35.606 5.6244L35.4037 5.16713C34.2134 5.69367 33.0437 6.25725 31.8961 6.85637L32.1275 7.2996C30.9838 7.89676 29.8622 8.52953 28.7644 9.1964L28.5048 8.76906C27.3931 9.44433 26.3055 10.1543 25.2437 10.8974L25.5303 11.307C24.4742 12.0461 23.4436 12.8183 22.4403 13.6219L22.1277 13.2317C21.1134 14.0441 20.1267 14.8884 19.1691 15.7632L19.5063 16.1323C18.5552 17.0011 17.6331 17.9001 16.7415 18.8278L16.381 18.4813C15.4813 19.4175 14.6124 20.3826 13.7759 21.3752L14.1583 21.6974C13.3289 22.6815 12.5317 23.6927 11.7683 24.7295L11.3657 24.4331C10.5965 25.4778 9.86122 26.5482 9.16155 27.6428L9.58284 27.9121C8.89035 28.9955 8.23302 30.1028 7.61241 31.2324L7.17419 30.9916C6.55029 32.1272 5.96316 33.2852 5.41438 34.4641L5.86767 34.6751C5.32575 35.8392 4.82156 37.0239 4.35662 38.2275L3.89021 38.0473C3.42379 39.2547 2.99653 40.4811 2.60996 41.725L3.08743 41.8734C2.70709 43.0972 2.36647 44.3381 2.06706 45.5946L1.58068 45.4787C1.28112 46.7358 1.02246 48.0084 0.806128 49.295L1.2992 49.3779C1.08692 50.6405 0.915758 51.9167 0.787126 53.2053L0.289598 53.1556C0.161569 54.4382 0.0753152 55.7328 0.0321823 57.038L0.531908 57.0546C0.510686 57.6968 0.499994 58.3416 0.499994 58.9889C0.499994 59.6363 0.51069 60.2812 0.531915 60.9235L0.0321896 60.94C0.0753337 62.2455 0.161611 63.5403 0.289666 64.823L0.78719 64.7734C0.915845 66.0621 1.08703 67.3386 1.29935 68.6014L0.806271 68.6843C1.02262 69.9711 1.28131 71.2439 1.58089 72.5012L2.06728 72.3853C2.3667 73.642 2.70732 74.8831 3.08767 76.1072L2.61019 76.2555C2.99676 77.4996 3.424 78.7262 3.89041 79.9339L4.35683 79.7538C4.82174 80.9576 5.3259 82.1425 5.86778 83.3069L5.41446 83.5178C5.96319 84.6969 6.55025 85.8552 7.17408 86.9911L7.61234 86.7504C8.23287 87.8802 8.89012 88.9878 9.58252 90.0715L9.16117 90.3407C9.86075 91.4357 10.5959 92.5064 11.365 93.5515L11.7677 93.2551C12.531 94.2922 13.328 95.3038 14.1573 96.2883L13.7749 96.6104C14.6112 97.6033 15.48 98.5689 16.3796 99.5054L16.7402 99.1591C17.6316 100.087 18.5536 100.987 19.5046 101.856L19.1673 102.225C20.1248 103.1 21.1114 103.945 22.1255 104.758L22.4382 104.368C23.4415 105.172 24.472 105.944 25.528 106.684L25.2412 107.093C26.303 107.837 27.3905 108.547 28.5021 109.223L28.7619 108.796C29.8597 109.463 30.9812 110.096 32.125 110.694L31.8934 111.137C33.041 111.737 34.2107 112.301 35.401 112.828L35.6034 112.371C36.7773 112.89 37.9715 113.374 39.1844 113.819L39.012 114.289C40.226 114.735 41.4587 115.143 42.7085 115.512L42.8503 115.033C44.0793 115.396 45.3252 115.721 46.5864 116.007L46.4759 116.495C47.736 116.78 49.0114 117.027 50.3006 117.233L50.3795 116.739C51.644 116.941 52.9218 117.104 54.2118 117.227L54.1645 117.724C55.4478 117.846 56.743 117.928 58.0487 117.969L58.0644 117.47C58.5415 117.485 59.0201 117.494 59.5 117.498L59.5 116.033L60 116.033L60 112.1L59.5 112.1L59.5 108.167L60 108.167L60 104.233L59.5 104.233L59.5 100.3L60 100.3L60 96.3667L59.5 96.3667L59.5 92.4333L60 92.4333L60 88.5L59.5 88.5L59.5 84.5667L60 84.5667L60 80.6333L59.5 80.6333L59.5 76.7L60 76.7L60 72.7667L59.5 72.7667L59.5 68.8333L60 68.8333L60 64.9L59.5 64.9L59.5 60.9667L60 60.9667L60 57.0333L59.5 57.0333L59.5 53.1L60 53.1L60 49.1667L59.5 49.1667L59.5 45.2333L60 45.2333L60 41.3L59.5 41.3L59.5 37.3667L60 37.3667L60 33.4333L59.5 33.4333L59.5 29.5L60 29.5L60 25.5667L59.5 25.5667L59.5 21.6333L60 21.6333L60 17.7L59.5 17.7L59.5 13.7667L60 13.7667L60 9.83333L59.5 9.83333L59.5 5.89999L60 5.89999L60 1.96665L59.5 1.96665L59.5 0.502029C59.0202 0.505913 58.5417 0.515365 58.0647 0.53035L58.049 0.0305937Z"
                      stroke="#9B9B9B"
                      stroke-dasharray="4 4"
                    />
                  </svg>
                </span>
              ) : (
                <span onClick={handlePrev}>
                  <svg
                    width="60"
                    height="118"
                    viewBox="0 0 60 118"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.499989 59.0111C0.499989 91.1401 26.8537 117.234 59.5 117.498L59.5 0.502023C26.8539 0.766237 0.499989 26.8818 0.499989 59.0111Z"
                      stroke="#F4A442"
                    />
                    <path
                      d="M21 58.9218L27.7787 52M21 58.9218L27.7787 65.8436M21 58.9218H48"
                      stroke="#F4A442"
                    />
                  </svg>
                </span>
              )}
            </button>
            <button type="button" className="right">
              {slide.active < length ? (
                <span onClick={handleNext}>
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
                    <path
                      d="M35 58.9218L28.2213 52M35 58.9218L28.2213 65.8436M35 58.9218H8"
                      stroke="#F4A442"
                    />
                  </svg>
                </span>
              ) : (
                <span onClick={handleNext}>
                  <svg
                    width="60"
                    height="118"
                    viewBox="0 0 60 118"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36 58.922L29.2213 65.8437M36 58.922L29.2213 52.0002M36 58.922L9 58.922"
                      stroke="#9B9B9B"
                    />
                    <path
                      d="M1.95101 0.0305937C3.25651 0.0715787 4.55146 0.153549 5.83458 0.275245L5.78737 0.77301C7.07715 0.895339 8.35483 1.05812 9.61909 1.26005L9.69795 0.766311C10.987 0.972198 12.2622 1.21846 13.5222 1.50372L13.4118 1.99138C14.6729 2.27688 15.9186 2.60176 17.1476 2.96464L17.2892 2.48511C18.5389 2.85414 19.7715 3.26214 20.9855 3.70768L20.8132 4.17707C22.026 4.62221 23.2202 5.10514 24.394 5.6244L24.5963 5.16713C25.7866 5.69367 26.9563 6.25725 28.1039 6.85637L27.8725 7.2996C29.0162 7.89676 30.1378 8.52953 31.2356 9.1964L31.4952 8.76906C32.6069 9.44433 33.6945 10.1543 34.7563 10.8974L34.4697 11.307C35.5258 12.0461 36.5564 12.8183 37.5597 13.6219L37.8723 13.2317C38.8866 14.0441 39.8733 14.8884 40.8309 15.7632L40.4937 16.1323C41.4448 17.0011 42.3669 17.9001 43.2585 18.8278L43.619 18.4813C44.5187 19.4175 45.3876 20.3826 46.2241 21.3752L45.8417 21.6974C46.6711 22.6815 47.4683 23.6927 48.2317 24.7295L48.6343 24.4331C49.4035 25.4778 50.1388 26.5482 50.8385 27.6428L50.4172 27.9121C51.1096 28.9955 51.767 30.1028 52.3876 31.2324L52.8258 30.9916C53.4497 32.1272 54.0368 33.2852 54.5856 34.4641L54.1323 34.6751C54.6742 35.8392 55.1784 37.0239 55.6434 38.2275L56.1098 38.0473C56.5762 39.2547 57.0035 40.4811 57.39 41.725L56.9126 41.8734C57.2929 43.0972 57.6335 44.3381 57.9329 45.5946L58.4193 45.4787C58.7189 46.7358 58.9775 48.0084 59.1939 49.295L58.7008 49.3779C58.9131 50.6405 59.0842 51.9167 59.2129 53.2053L59.7104 53.1556C59.8384 54.4382 59.9247 55.7328 59.9678 57.038L59.4681 57.0546C59.4893 57.6968 59.5 58.3416 59.5 58.9889C59.5 59.6363 59.4893 60.2812 59.4681 60.9235L59.9678 60.94C59.9247 62.2455 59.8384 63.5403 59.7103 64.823L59.2128 64.7734C59.0842 66.0621 58.913 67.3386 58.7006 68.6014L59.1937 68.6843C58.9774 69.9711 58.7187 71.2439 58.4191 72.5012L57.9327 72.3854C57.6333 73.642 57.2927 74.8831 56.9123 76.1072L57.3898 76.2555C57.0032 77.4996 56.576 78.7262 56.1096 79.9339L55.6432 79.7538C55.1783 80.9576 54.6741 82.1425 54.1322 83.3069L54.5855 83.5178C54.0368 84.6969 53.4497 85.8552 52.8259 86.9911L52.3877 86.7504C51.7671 87.8802 51.1099 88.9878 50.4175 90.0715L50.8388 90.3407C50.1393 91.4357 49.4041 92.5064 48.635 93.5515L48.2323 93.2551C47.469 94.2922 46.672 95.3038 45.8427 96.2883L46.2251 96.6104C45.3888 97.6033 44.52 98.5689 43.6204 99.5054L43.2598 99.1591C42.3684 100.087 41.4464 100.987 40.4954 101.856L40.8327 102.225C39.8752 103.1 38.8886 103.945 37.8745 104.758L37.5618 104.368C36.5585 105.172 35.528 105.944 34.472 106.684L34.7588 107.093C33.697 107.837 32.6095 108.547 31.4979 109.223L31.2381 108.796C30.1403 109.463 29.0188 110.096 27.875 110.694L28.1066 111.137C26.959 111.737 25.7893 112.301 24.599 112.828L24.3966 112.371C23.2227 112.89 22.0285 113.374 20.8156 113.819L20.988 114.289C19.774 114.735 18.5413 115.143 17.2915 115.512L17.1498 115.033C15.9207 115.396 14.6749 115.721 13.4137 116.007L13.5242 116.495C12.264 116.78 10.9886 117.027 9.69942 117.233L9.62048 116.739C8.35606 116.941 7.0782 117.104 5.78824 117.227L5.8355 117.724C4.55219 117.846 3.25704 117.928 1.95134 117.969L1.93564 117.47C1.4585 117.485 0.979934 117.494 0.5 117.498L0.5 116.033L-1.71931e-07 116.033L-5.15794e-07 112.1L0.499999 112.1L0.499999 108.167L-8.59657e-07 108.167L-1.20352e-06 104.233L0.499999 104.233L0.499998 100.3L-1.54738e-06 100.3L-1.89125e-06 96.3667L0.499998 96.3667L0.499998 92.4333L-2.23511e-06 92.4333L-2.57897e-06 88.5L0.499997 88.5L0.499997 84.5667L-2.92283e-06 84.5667L-3.2667e-06 80.6333L0.499997 80.6333L0.499996 76.7L-3.61056e-06 76.7L-3.95442e-06 72.7667L0.499996 72.7667L0.499996 68.8333L-4.29829e-06 68.8333L-4.64215e-06 64.9L0.499995 64.9L0.499995 60.9667L-4.98601e-06 60.9667L-5.32988e-06 57.0333L0.499995 57.0333L0.499994 53.1L-5.67374e-06 53.1L-6.0176e-06 49.1667L0.499994 49.1667L0.499994 45.2333L-6.36146e-06 45.2333L-6.70533e-06 41.3L0.499993 41.3L0.499993 37.3667L-7.04919e-06 37.3667L-7.39305e-06 33.4333L0.499993 33.4333L0.499992 29.5L-7.73692e-06 29.5L-8.08078e-06 25.5667L0.499992 25.5667L0.499992 21.6333L-8.42464e-06 21.6333L-8.76851e-06 17.7L0.499991 17.7L0.499991 13.7667L-9.11237e-06 13.7667L-9.45623e-06 9.83332L0.499991 9.83332L0.49999 5.89999L-9.80009e-06 5.89999L-1.0144e-05 1.96665L0.49999 1.96665L0.49999 0.502029C0.979821 0.505905 1.45829 0.515365 1.93532 0.530342L1.95101 0.0305937Z"
                      stroke="#9B9B9B"
                      stroke-dasharray="4 4"
                    />
                  </svg>
                </span>
              )}
            </button>
          </div>
          <div
            className="num d-flex justify-content-between"
            style={{ transform: "translateX(110px)" }}
          >
            <span
              className=""
              style={{ transform: "translate(-24px,10px)", color: "#F4A442" }}
            >
              0{slide.active}
            </span>
            <span
              className="text-light"
              style={{ transform: "translate(24px,10px)" }}
            >
              0{sliderImages.length}
            </span>
          </div>
          <div
            className="progress"
            style={{ height: "2px", transform: "translateX(110px)" }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${slide.multiplier * slide.active}%`,
                backgroundColor: "#F4A442",
              }}
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
            <img className="img-fluid" src={images.image} alt="" width="370px" />
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

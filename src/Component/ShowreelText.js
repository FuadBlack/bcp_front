import React from "react";
import showreelPlay from "../images/ShowreelPlay.svg";
import text from "../images/Text.svg";
import "../css/_showReel.sass";

export const ShowreelText = () => {
  return (
    <div className="d-flex justify-content-between align-items-center px-4">
      <div className="showReel">
        <svg viewBox="0 0 500 500">
          <path
            id="curve"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          />
          <text width="500">
            <textPath href="#curve">Dangerous Curves Ahead</textPath>
          </text>
        </svg>

        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="14.5407" cy="14.8429" r="14.1027" fill="#E6A250" />
          <path
            d="M12.7778 11.3145V18.3658L18.654 14.8401L12.7778 11.3145Z"
            fill="#F6F3EE"
          />
        </svg>
      </div>
      <div className="text">
        <svg
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.89844 12.2496C4.89844 10.95 5.41469 9.70371 6.33361 8.78479C7.25254 7.86586 8.49888 7.34961 9.79844 7.34961H26.9484C28.248 7.34961 29.4943 7.86586 30.4133 8.78479C31.3322 9.70371 31.8484 10.95 31.8484 12.2496V22.0496C31.8484 23.3492 31.3322 24.5955 30.4133 25.5144C29.4943 26.4334 28.248 26.9496 26.9484 26.9496H22.0484L14.6984 34.2996V26.9496H9.79844C8.49888 26.9496 7.25254 26.4334 6.33361 25.5144C5.41469 24.5955 4.89844 23.3492 4.89844 22.0496V12.2496Z"
            fill="#E6A350"
          />
          <path
            d="M36.7471 17.1504V22.0504C36.7471 24.6495 35.7146 27.1422 33.8768 28.98C32.0389 30.8179 29.5462 31.8504 26.9471 31.8504H24.0757L19.749 36.1795C20.435 36.5446 21.2166 36.7504 22.0471 36.7504H26.9471L34.2971 44.1004V36.7504H39.1971C40.4967 36.7504 41.743 36.2341 42.6619 35.3152C43.5809 34.3963 44.0971 33.15 44.0971 31.8504V22.0504C44.0971 20.7508 43.5809 19.5045 42.6619 18.5856C41.743 17.6666 40.4967 17.1504 39.1971 17.1504H36.7471Z"
            fill="#E6A350"
          />
        </svg>
      </div>
    </div>
  );
};

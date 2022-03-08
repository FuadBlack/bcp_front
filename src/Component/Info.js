import React from "react";
import { Link } from "react-router-dom";
import "../css/_info.sass";
import brain from "../images/brain1.png";
import insta from "../images/insta.svg";
import dribble from "../images/dribble.svg";
import youtube from "../images/youtube.svg";
import behance from "../images/behance.svg";
import linkedin from "../images/linkedin.svg";
import facebook from "../images/facebook.svg";
import "../css/_responsive_info.sass";

export const Info = ({data}) => {
  
  let lang = localStorage.getItem("language")

  console.log(data)
  return (
    <div className="info">
      <div className="title">
        <h1>{data?.title?.az}</h1>
        <Link to="#">
          <button>layihəyə başla</button>
        </Link>
      </div>
      <div className="brain">
        <div className="brainImg">
          <img src={brain} alt="" />
        </div>
        <div className="dot_brain">
          <a href="#"></a>
        </div>
        <div className="dot_brain">
          <a href="#"></a>
        </div>
        <div className="dot_brain">
          <a href="#"></a>
        </div>
        <div className="dot_brain">
          <a href="#"></a>
        </div>
        <div className="dot_brain">
          <a href="#"></a>
        </div>
        <div className="dot_brain">
          <a href="#"></a>
        </div>
        <ul className="socialLinks">
          <li>
            <Link to="/">
              <img src={insta} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={dribble} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={youtube} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={behance} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={linkedin} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={facebook} alt="" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="info_content">
        <p>
          <svg
            width="26"
            height="50"
            viewBox="0 0 26 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5469 0.0917969L12.7262 24.8105C19.7045 24.7599 25.3184 19.1861 25.2689 12.3618C25.2194 5.53758 19.5252 0.0411703 12.5469 0.0917969Z"
              fill="#1BB1A1"
            />
            <path
              d="M12.8115 49.0586L12.6322 24.3399C5.65389 24.3905 0.03999 29.9643 0.0894988 36.7886C0.139008 43.6128 5.83322 49.1092 12.8115 49.0586Z"
              fill="#1BB1A1"
            />
          </svg>

          <span>
            Biz yaxşı dizaynla problemləri həll edirik.Seçim sənindir. Biz yaxşı
            dizaynla problemləri həll edirik.Seçim sənindir.
          </span>
        </p>
      </div>
    </div>
  );
};

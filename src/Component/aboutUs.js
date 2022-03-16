import React, { useState, useEffect } from "react";
import video from "../assets/img/bcp_team.png";
import showreel_music from "../assets/img/showreel_music.png";
import showreel_img from "../assets/img/showreel_img.svg";
import { Link } from "react-router-dom";
import "../assets/css/_aboutUs.sass";
import axios from "axios";


const AboutUs = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("http://pony.bcptest.online/api/about")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="about_us">
      <div className="breadcrumb_container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="breadcrumb_item_link" to="/">
                BCP
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Haqqımızda
            </li>
          </ol>
        </nav>
      </div>
      <div className="about_us_container">
        <div className="row">
          <div className="title col-md-6">
            <h4>{data?.title?.az}</h4>
          </div>
          <div className="content col-md-6">
            <p>
            {data?.sm_text?.az}
            </p>
          </div>
        </div>

        <div className="video">
          <img src={data?.cover} />
        </div>

        <div className="bcpTeam row">
          <div className="title2 col-md-6 ">
            <p>BCP Komandası</p>
            <p>{data?.starter_date}</p>
          </div>
          <div className="content2 col-md-6">
            <p>
              {data?.long_text?.az}
            </p>
          </div>
        </div>
        <div className="showreel">
          <img src={showreel_music} />
          <div className="showreel_title">
            <div>
              <img src={showreel_img} />
            </div>
            <div className="content">
           {data?.show_reel_text?.az}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
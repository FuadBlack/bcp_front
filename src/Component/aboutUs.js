import React, { useEffect, useState } from 'react';
import video from '../assets/img/bcp_team.png';
import showreel_music from '../assets/img/showreel_music.png';
import showreel_img from '../assets/img/showreel_img.svg';
import { Link } from 'react-router-dom';
import '../assets/css/_aboutUs.sass';
import axios from 'axios';

const AboutUs = () => {
  const [data, setDataApi] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get('http://192.168.1.18:5555/api/about')
      .then((res) => {
        setDataApi(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(data);

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
        <div className="about_us_title">
          <div className="title">
            <h4>Haqqımızda</h4>
          </div>
          <div className="content">
            <p>{data?.text_up?.az}</p>
          </div>
        </div>
        <div className="video">
          <img src={data?.video} />
        </div>
        <div className="bcp_team_container">
          <div className="team_name">
            <p>BCP Komandası</p>
            <p>2021 noyabr</p>
          </div>
          <div className="content2">
            <p>{data?.text_end?.az}</p>
          </div>
        </div>
        <div className="showreel">
          <img src={data?.image} />
          <div className="showreel_title">
            <div>
              <img src={showreel_img} />
            </div>
            <div className="content">
              {/* <span>Showreel</span>
                  <span className="for">üçün</span>
                  <span>yer qoymuşam</span> */}
              <span>{data?.text?.az.slice(0, 20)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;

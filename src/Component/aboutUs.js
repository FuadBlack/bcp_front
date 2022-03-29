import React, { useState, useEffect, useRef } from "react";
import showreel_music from "../assets/img/showreel_music.png";
import showreel_img from "../assets/img/showreel_img.svg";
import { Link } from "react-router-dom";
import "../assets/css/_aboutUs.sass";
import axios from "axios";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("http://192.168.1.18:5555/api/about")
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
        <div className="about_us_title">
          <div className="title">
            <h4>Haqqımızda</h4>
          </div>
          <div className="content">
            <p>
              Şirkət yarandığı gündən, müştərilərimizə öz bizneslərini inkişaf
              etdirmək üçün rəqəmsal həllər təklif edib. Həmçinin, bu müddətdə
              yaddaqalan brendlər və müasir dizaynlar hazırlayırıq. Hər il öz
              texniki bazamızı biraz daha gücləndiririk. Güclü texniki baza və
              təcrübə hazırladığımız məhsulları ən yaxşı şəkildə ortaya
              çıxarmağa kömək edir.
            </p>
          </div>
        </div>

        <div className="video">
          <img src={data?.image} />
        </div>

        <div className="bcp_team_container">
          <div className="team_name">
            <p>BCP Komandası</p>
            <p>2021 noyabr</p>
          </div>
          <div className="content2">
            <p>
              Şirkət yarandığı gündən, müştərilərimizə öz bizneslərini inkişaf
              etdirmək üçün rəqəmsal həllər təklif edib. Həmçinin, bu müddətdə
              yaddaqalan brendlər və müasir dizaynlar hazırlayırıq. Hər il öz
              texniki bazamızı biraz daha gücləndiririk. Güclü texniki baza və
              təcrübə hazırladığımız məhsulları ən yaxşı şəkildə ortaya
              çıxarmağa kömək edir. Şirkət yarandığı gündən, müştərilərimizə öz
              bizneslərini inkişaf etdirmək üçün rəqəmsal həllər təklif edib.
              Həmçinin, bu müddətdə yaddaqalan brendlər və müasir dizaynlar
              hazırlayırıq. Hər il öz texniki bazamızı biraz daha gücləndiririk.
              Güclü texniki baza və təcrübə hazırladığımız məhsulları ən yaxşı
              şəkildə ortaya çıxarmağa kömək edir. Şirkət yarandığı gündən,
              müştərilərimizə öz bizneslərini inkişaf etdirmək üçün rəqəmsal
              həllər təklif edib. Həmçinin, bu müddətdə yaddaqalan brendlər və
              müasir dizaynlar hazırlayırıq. Hər il öz texniki bazamızı biraz
              daha gücləndiririk. Güclü texniki baza və təcrübə hazırladığımız
              məhsulları şəkildə ortaya çıxarmağa kömək edir.
            </p>
          </div>
        </div>
        <div className="showreel">
          <div className="row">
            <div className="col-md-6">
              <img src={showreel_music} />
            </div>
            <div className="col-md-6">
              <div className="showreel_title">
                <div>
                  <img src={showreel_img} />
                </div>
                <div className="content">
                  <span>{data?.text?.[i18n.language].split(" ", 2)}</span>
                  <span className="for">
                    {data?.text?.[i18n.language].split(" ", 3)}
                  </span>
                  <span>{data?.text?.[i18n.language].split(" ", 2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;

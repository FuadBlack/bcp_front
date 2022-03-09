import React from "react";
import video from "../assets/img/bcp_team.png";
import showreel_music from "../assets/img/showreel_music.png";
import showreel_img from "../assets/img/showreel_img.svg";
import { Link } from "react-router-dom";
import "../assets/css/_aboutUs.sass";
const AboutUs = () => {
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
            <h4>Haqqımızda</h4>
          </div>
          <div className="content col-md-6">
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
          <img src={video} />
        </div>

        <div className="bcpTeam row">
          <div className="title2 col-md-6 ">
            <p>BCP Komandası</p>
            <p>2021 noyabr</p>
          </div>
          <div className="content2 col-md-6">
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
          <img src={showreel_music} />
          <div className="showreel_title">
            <div>
              <img src={showreel_img} />
            </div>
            <div className="content">
              <span>Showreel</span>
              <span className="for">üçün</span>
              <span>yer qoymuşam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;


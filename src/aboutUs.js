import React from 'react';
import video from './assets/img/bcp_team.png';
import showreel_music from './assets/img/showreel_music.png';
import showreel_img from './assets/img/showreel_img.svg';
import { Link } from 'react-router-dom';

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
        <div className="about_us_title">
          <p className="title">Haqqımızda</p>
          <p className="content">
            Şirkət yarandığı gündən, müştərilərimizə öz bizneslərini inkişaf
            etdirmək üçün rəqəmsal həllər təklif edib. Həmçinin, bu müddətdə
            yaddaqalan brendlər və müasir dizaynlar hazırlayırıq. Hər il öz
            texniki bazamızı biraz daha gücləndiririk. Güclü texniki baza və
            təcrübə hazırladığımız məhsulları ən yaxşı şəkildə ortaya çıxarmağa
            kömək edir.{' '}
          </p>
        </div>
        <div className="video">
          <img src={video} />
        </div>
        <div className="bcp_team_container">
          <div className="team_name">
            <span>BCP Komandası</span>
            <span>2021 noyabr</span>
          </div>
          <p className="content">
            Şirkət yarandığı gündən, müştərilərimizə öz bizneslərini inkişaf
            etdirmək üçün rəqəmsal həllər təklif edib. Həmçinin, bu müddətdə
            yaddaqalan brendlər və müasir dizaynlar hazırlayırıq. Hər il öz
            texniki bazamızı biraz daha gücləndiririk. Güclü texniki baza və
            təcrübə hazırladığımız məhsulları ən yaxşı şəkildə ortaya çıxarmağa
            kömək edir. Şirkət yarandığı gündən, müştərilərimizə öz bizneslərini
            inkişaf etdirmək üçün rəqəmsal həllər təklif edib. Həmçinin, bu
            müddətdə yaddaqalan brendlər və müasir dizaynlar hazırlayırıq. Hər
            il öz texniki bazamızı biraz daha gücləndiririk. Güclü texniki baza
            və təcrübə hazırladığımız məhsulları ən yaxşı şəkildə ortaya
            çıxarmağa kömək edir. Şirkət yarandığı gündən, müştərilərimizə öz
            bizneslərini inkişaf etdirmək üçün rəqəmsal həllər təklif edib.
            Həmçinin, bu müddətdə yaddaqalan brendlər və müasir dizaynlar
            hazırlayırıq. Hər il öz texniki bazamızı biraz daha gücləndiririk.
            Güclü texniki baza və təcrübə hazırladığımız məhsulları şəkildə
            ortaya çıxarmağa kömək edir.{' '}
          </p>
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

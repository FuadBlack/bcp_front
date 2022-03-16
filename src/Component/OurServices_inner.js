import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import microphone from '../assets/img/microphone.png';

const OurServicesInner = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("http://pony.bcptest.online/api/services")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };







  return (
    <div className="ourServices_inner">
      <div className="breadcrumb_container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="breadcrumb_item_link" to="/">
                BCP
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Xidmətlərimiz
            </li>
          </ol>
        </nav>
      </div>
      <div className="ourServices_inner_container">
        <div className="ourServices_inner_title">
          <h1>
            Səsyazma <br /> və musiqi xidməti
          </h1>
        </div>
        <div className="ourServices_inner_content">
          <p>
            Şirkət yarandığı gündən, müştərilərimizə öz bizneslərini inkişaf
            etdirmək üçün rəqəmsal həllər təklif edib. Həmçinin, bu müddətdə
            yaddaqalan brendlər və müasir dizaynlar hazırlayırıq. Hər il öz
            texniki bazamızı biraz daha gücləndiririk. Güclü texniki baza və
            təcrübə hazırladığımız məhsulları ən yaxşı şəkildə ortaya çıxarmağa
            kömək edir. Şirkət yarandığı gündən, müştərilərimizə öz bizneslərini
            inkişaf etdirmək üçün rəqəmsal həllər təklif edib. Həmçinin, bu
            müddətdə yaddaqalan brendlər və müasir dizaynlar hazırlayırıq.{' '}
          </p>
        </div>
        <div className="about_company">
          <div className="content">
            <p>
              Şirkət yarandığı gündən, müştərilərimizə öz bizneslərini inkişaf
              etdirmək üçün rəqəmsal həllər təklif edib. Həmçinin, bu müddətdə
              yaddaqalan brendlər və müasir dizaynlar hazırlayırıq. Hər il öz
              texniki bazamızı biraz daha gücləndiririk. Güclü texniki baza və
              təcrübə hazırladığımız məhsulları ən yaxşı şəkildə ortaya
              çıxarmağa kömək edir. Şirkət yarandığı gündən, müştərilərimizə öz
              bizneslərini inkişaf etdirmək üçün rəqəmsal həllər təklif edib.
              Həmçinin, bu müddətdə yaddaqalan brendlər və müasir dizaynlar
              hazırlayırıq. Şirkət yarandığı gündən, müştərilərimizə öz
              bizneslərini inkişaf etdirmək üçün rəqəmsal həllər təklif edib.{' '}
            </p>
            <ul></ul>
          </div>
          <div className="microphone">
            <img src={microphone} />
          </div>
        </div>
        <div className="content_bottom">
          <p>
            Şirkət yarandığı gündən, müştərilərimizə öz bizneslərini inkişaf
            etdirmək üçün rəqəmsal həllər təklif edib. Həmçinin, bu müddətdə
            yaddaqalan brendlər və müasir dizaynlar hazırlayırıq. Hər il öz
            texniki bazamızı biraz daha gücləndiririk. Güclü texniki baza və
            təcrübə hazırladığımız məhsulları ən yaxşı şəkildə ortaya çıxarmağa
            kömək edir. Şirkət yarandığı gündən, müştərilərimizə öz bizneslərini
            inkişaf etdirmək üçün rəqəmsal həllər təklif edib. Həmçinin, bu
            müddətdə yaddaqalan brendlər və müasir dizaynlar hazırlayırıq.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServicesInner;

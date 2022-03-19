import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import microphone from '../assets/img/microphone.png';

const OurServicesInner = () => {
  const [data, setDataApi] = useState([]);
  //API portfolios
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get('http://192.168.1.8:5555/api/service')
      .then((res) => {
        setDataApi(res.data);
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
      {data?.slice(0, 1).map((item) => {
        return (
          <div className="ourServices_inner_container">
            <div className="ourServices_inner_title">
              <p>{item?.title?.az}</p>
            </div>
            <div className="ourServices_inner_content">
              <p>
                {item?.text_up?.az}
              </p>
            </div>
            <div className="about_company">
              <div className="content">
                <p>
                  {item?.text_middle?.az}
                </p>
                <ul></ul>
              </div>
              <div className="microphone">
                <img src={item?.image} />
              </div>
            </div>
            <div className="content_bottom">
              <p>
                {item?.text_end?.az}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OurServicesInner;

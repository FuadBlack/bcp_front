import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shape from '../images/Shape.svg';
import wibty from '../images/wibty.png';
import axios from 'axios';
import { useTranslation } from "react-i18next";


export const Projects = () => {
  const { i18n, t } = useTranslation();
  const [data, setDataApi] = useState([]);
  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get('http://192.168.1.9:5555/api/projects')
      .then((res) => {
        setDataApi(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="projects">
      <div className="section">
        <div className="breadcrumb_container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link className="breadcrumb_item_link" to="/">
                  BCP
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {t("projects")}
              </li>
            </ol>
          </nav>
        </div>
        <h2>{t("layihelerimiz")}</h2>
        {data?.map((item) => {
          console.log(item);
          return (
            <div className="project_container" key={item?.data}>
              <h3 className="header">{item?.data?.title?.[i18n.language]}</h3>
              <div className="infoDiv">
                <p>
                  {item?.data?.text?.[i18n.language]} ...
                </p>
                <div className="goTo">
                  <Link to={item.data?.url}>keçid et</Link> <img src={shape} alt="" />{' '}
                </div>
              </div>
              <div className="image">
                <img src={item?.data?.image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

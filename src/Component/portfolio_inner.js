import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import group from '../assets/img/group_inner_port.svg';
import axios from 'axios';
import { useTranslation } from "react-i18next";


const RiconConstraction = () => {
  const { i18n, t } = useTranslation();
  const { slug } = useParams();
  console.log(slug);
  const [data, setDataApi] = useState([]);
  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get(`http://192.168.1.9:5555/api/portfolio/${slug}`)
      .then((res) => {
        setDataApi(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="ricon_constraction">
      <div className="breadcrumb_container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="breadcrumb_item_link" to="/">
                BCP
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link className="breadcrumb_item_link" to="/portfolio">
              {t("portfolio")}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {data?.data?.slug}
            </li>
          </ol>
        </nav>
      </div>
      <div className="ricon_constraction_contain">
        <h1 className="title">{data?.data?.title?.[i18n.language]}</h1>
        <div className="grid_content">
          <div className="content_item">
            <img src={group} />
            <div className="content">{data?.data?.text_up?.[i18n.language]}</div>
          </div>
        </div>
        <div className="image_bussines_cards">
          <div className="ricon_bussines_card">
            <div>
              <img src={data?.data?.image} />
            </div>
          </div>
          <div className="image_flex">
            <div>
              <img src={data?.data?.image} />
            </div>
            <div>
              <img src={data?.data?.image} />
            </div>
          </div>
          <div className="ricon_bussines_card">
            <img src={data?.data?.image} />
          </div>
        </div>
        <div className="branding">
          <p className="about_branding">{data?.data?.text_end?.[i18n.language]}</p>
        </div>
        <div className="image_bussines_cards">
          <div className="ricon_bussines_card">
            <img src={data?.data?.image} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RiconConstraction;

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footerinput from './FooterContact';
import TabsContainer from './TabsContainer';
import filterIcon from '../assets/img/filter_icon.svg';
import axios from 'axios';
import DataFIlter from './data';
import { useTranslation } from "react-i18next";

// const allCategories = [
//   'Hamısı',
//   ...new Set(DataFIlter.map((item) => item.category)),
// ];

const Portfolio = () => {
  const { i18n, t } = useTranslation();
  const [animate, setAnimate] = useState(false);
  const toggle = () => setAnimate(!animate);
  const [data, setDataApi] = useState([]);
  const [filterData, setFilterData] = useState(data);
  const [btn, setCahngeButton] = useState(null);
  const toggleColor = (e) => {
    setCahngeButton(e.target.getAttribute('data-id'));
  };
  useEffect(() => {
    fetchData();
  }, []);

  // const [menuItem, setMenuItem] = useState(DataFIlter);
  // const [buttons] = useState(allCategories);
  // const filter = (button) => {
  //   if (button === 'Hamısı') {
  //     setMenuItem(DataFIlter);
  //     return;
  //   }
  //   const filteredData = DataFIlter.filter((item) => item.category === button);
  //   setMenuItem(filteredData);
  // };

  const fetchData = async () => {
    await axios
      .get('http://192.168.1.9:5555/api/portfolios')
      .then((res) => {
        setDataApi(res.data.data);
        setFilterData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const filterProduct = (cat) => {
    const updateList = filterData.filter((x) => x.slug === cat);
    console.log(updateList);
    setFilterData(updateList);
  };
  return (
    <div>
      <div className="portofolio_main">
        <div className="breadcrumb_container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link className="breadcrumb_item_link" to="/">
                  BCP
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {t("portfolio")}
              </li>
            </ol>
          </nav>
        </div>
        <div className="portfolio_container">
          <div className="title_container">
            <h1>{t("portfoliomuz")}</h1>
            <div className="filter_icon" onClick={toggle}>
              <img src={filterIcon} />
              <span>filter</span>
            </div>
          </div>
          <TabsContainer data={filterData} dataFIlter={DataFIlter} />
        </div>
        <Footerinput />
      </div>
      <div className={animate ? 'filter_mobile active' : 'filter_mobile'}>
        <div
          className="close"
          onClick={() => {
            toggle();
          }}
        >
          <span></span>
          <span></span>
        </div>
        <div className="filter_button_mobile">
          {/* {buttons.map((cat, i) => {
            return ( */}
          <button
            type="button"
            // data-id={i + 1}
            onClick={(e) => {
              setFilterData(data);
              toggle();
              toggleColor(e);
            }}
            className={btn == 'btn' ? 'btn active' : 'btn'}
          >
            Hamısı
          </button>
          <button
            type="button"
            // data-id={i + 1}
            onClick={(e) => {
              filterProduct('et-aspernatur-velit-nesciunt-expedita');
              toggle();
              toggleColor(e);
            }}
            className={btn == 'btn' ? 'btn active' : 'btn'}
          >
            Veb sayt
          </button>
          <button
            type="button"
            // data-id={i + 1}
            onClick={(e) => {
              filterProduct('quod-ut-sint-est-iste');
              toggle();
              toggleColor(e);
            }}
            className={btn == 'btn' ? 'btn active' : 'btn'}
          >
            3d modelləmə
          </button>
          <button
            type="button"
            // data-id={i + 1}
            onClick={(e) => {
              filterProduct(
                'laudantium-totam-at-sequi-autem-porro-aliquam-quia'
              );
              toggle();
              toggleColor(e);
            }}
            className={btn == 'btn' ? 'btn active' : 'btn'}
          >
            Mobil tətbiq
          </button>
          <button
            type="button"
            // data-id={i + 1}
            onClick={(e) => {
              filterProduct(
                'dicta-facere-reprehenderit-eaque-provident-consequuntur-nihil'
              );
              toggle();
              toggleColor(e);
            }}
            className={btn == 'btn' ? 'btn active' : 'btn'}
          >
            3d animasiya
          </button>
          <button
            type="button"
            // data-id={i + 1}
            onClick={(e) => {
              filterProduct('dolorem-qui-illo-aut-expedita');
              toggle();
              toggleColor(e);
            }}
            className={btn == 'btn' ? 'btn active' : 'btn'}
          >
            Brendinq
          </button>
          <button
            type="button"
            // data-id={i + 1}
            onClick={(e) => {
              toggle();
              toggleColor(e);
            }}
            className={btn == 'btn' ? 'btn active' : 'btn'}
          >
            SMM
          </button>
          <button
            type="button"
            // data-id={i + 1}
            onClick={(e) => {
              toggle();
              toggleColor(e);
            }}
            className={btn == 'btn' ? 'btn active' : 'btn'}
          >
            Musiqi
          </button>
          <button
            type="button"
            // data-id={i + 1}
            onClick={(e) => {
              toggle();
              toggleColor(e);
            }}
            className={btn == 'btn' ? 'btn active' : 'btn'}
          >
            Qısametrajlı film
          </button>
          {/* );
          })} */}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;

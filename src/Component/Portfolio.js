import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footerinput from './FooterContact';
import TabsContainer from './TabsContainer';
import filterIcon from '../assets/img/filter_icon.svg';
import axios from 'axios';
import DataFIlter from './data';

const allCategories = [
  'Hamısı',
  ...new Set(DataFIlter.map((item) => item.category)),
];

const Portfolio = (items) => {
  const [animate, setAnimate] = useState(false);
  const toggle = () => setAnimate(!animate);
  const [data, setDataApi] = useState([]);
  const [btn, setCahngeButton] = useState(null);
  const toggleColor = (e) => {
    setCahngeButton(e.target.getAttribute('data-id'));
  };
  console.log(animate);
  useEffect(() => {
    fetchData();
  }, []);
  const [menuItem, setMenuItem] = useState(DataFIlter);
  const [buttons] = useState(allCategories);
  const filter = (button) => {
    if (button === 'Hamısı') {
      setMenuItem(DataFIlter);
      return;
    }

    const filteredData = DataFIlter.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  const fetchData = async () => {
    await axios
      .get('http://192.168.1.13:5555/api/portfolios')
      .then((res) => {
        setDataApi(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
                Portfoliomuz
              </li>
            </ol>
          </nav>
        </div>
        <div className="portfolio_container">
          <div className="title_container">
            <h1>Portfoliomuz</h1>
            <div className="filter_icon" onClick={toggle}>
              <img src={filterIcon} />
              <span>filter</span>
            </div>
          </div>
          <TabsContainer data={data} dataFIlter={DataFIlter} />
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
          {buttons.map((cat, i) => {
            return (
              <button
                type="button"
                data-id={i + 1}
                onClick={(e) => {
                  toggle();
                  toggleColor(e);
                }}
                className={btn == i + 1 ? 'btn active' : 'btn'}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;

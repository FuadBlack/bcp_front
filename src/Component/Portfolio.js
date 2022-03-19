import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footerinput from './FooterContact';
import TabsContainer from './TabsContainer';
import filterIcon from '../assets/img/filter_icon.svg';
import axios from 'axios';

const Portfolio = (items) => {
  const [animate, setAnimate] = useState(false);
  const toggle = () => setAnimate(!animate);
  const [data, setDataApi] = useState([]);
  const [btn, setCahngeButton] = useState(false);
  const toggleColor = () => setCahngeButton(!btn);
  console.log(animate);
  //API portfolios
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get('http://192.168.1.8:5555/api/portfolios')
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
          <TabsContainer data={data} />
        </div>
        <Footerinput />
      </div>
      <div className={animate ? 'filter_mobile active' : 'filter_mobile'}>
        <div className="close" onClick={toggle}>
          <span></span>
          <span></span>
        </div>
        <div className="filter_button_mobile">
          <button type="button" onClick={()=>{toggle(); toggleColor()}} className={btn ? 'btn active' : 'btn'}>Hamısı</button>
          <button type="button" onClick={()=>{toggle(); toggleColor()}} className={btn ? 'btn active' : 'btn'}>Veb sayt</button>
          <button type="button" onClick={toggle}>3d modelləmə</button>
          <button type="button" onClick={toggle}>Mobil tətbiq</button>
          <button type="button" onClick={toggle}>3d animasiya</button>
          <button type="button" onClick={toggle}>Brendinq</button>
          <button type="button" onClick={toggle}>SMM</button>
          <button type="button" onClick={toggle}>Musiqi</button>
          <button type="button" onClick={toggle}>Qısametrajlı film</button>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;

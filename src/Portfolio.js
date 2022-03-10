import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Footerinput from './FooterInput';
import TabsContainer from './TabsContainer';
import filterIcon from './assets/img/filter_icon.svg';

function Portfolio() {
  return (
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
          <div className="filter_icon">
            <img src={filterIcon} />
            <span>filter</span>
          </div>
        </div>
        <TabsContainer />
      </div>
      <Footerinput />
    </div>
  );
}

export default Portfolio;

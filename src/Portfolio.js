import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footerinput from './FooterInput';
import Data from './data';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import All from './All';
import Website from './Website';

function Portfolio() {
  const [element, setElement] = useState(5);
  const [key, setKey] = useState('Hamısı');
  const length = Data.itemData.length;
  const loadMore = (e) => {
    let button = e.target;
    setElement(element + 1);
    if (element >= length - 1) {
      button.style.display = 'none';
    }
  };
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
        <h1 className="title">Portfoliomuz</h1>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
          onOverflow={'scroll'}
        >
          <Tab eventKey="Hamısı" title="Hamısı" default>
            <All element={element} />
          </Tab>
          <Tab eventKey="Veb sayt" title="Veb sayt">
            <Website element={element} />
          </Tab>
          <Tab eventKey="3dmodel" title="3d modelləmə">
            avav
          </Tab>
          <Tab eventKey="mobileApp" title="Mobil tətbiq">
            avav
          </Tab>
          <Tab eventKey="3danime" title="3d animasiya"></Tab>
          <Tab eventKey="brendinq" title="Brendinq"></Tab>
          <Tab eventKey="SMM" title="SMM"></Tab>
          <Tab eventKey="music" title="Musiqi"></Tab>
          <Tab eventKey="shortFilm" title="Qısametrajlı film"></Tab>
        </Tabs>
        <div className="button_div">
          <button className="load_more" onClick={(e) => loadMore(e)}>
            daha çox bax
          </button>
        </div>
      </div>
      <Footerinput />
    </div>
  );
}

export default Portfolio;

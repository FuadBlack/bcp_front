import React from 'react';
import { Link } from 'react-router-dom';
import { HomeServices } from './Component/HomeServices';
import Footerinput from './FooterInput';

const OurServices = () => {
  return (
    <div className="ourServices">
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
      <div className="ourServices">
        <HomeServices />
        <Footerinput />
      </div>
    </div>
  );
};

export default OurServices;

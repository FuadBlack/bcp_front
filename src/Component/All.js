import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import portfolioShape from '../assets/img/portfolio_shape.svg';
import RiconConstraction from './portfolio_inner';

function All({ menuItem }) {
  console.log(menuItem);
  return (
    <div className="allourwork">
      <div className="workItems">
        {menuItem?.data?.map((item, key) => {
          return (
            <React.Fragment key={item?.slug}>
              <Link to={item?.slug} className="workItem">
                <div className="name_portfolio">
                  <div>
                    <span>{item?.start_date.slice(0, 4)}</span>
                    <span>qısametrajlı film</span>
                  </div>
                </div>
                <div className="image">
                  <img src={item?.image} />
                </div>
                <div className="content">
                  <div className="title">{item?.title?.az}</div>
                  <p>{item?.text_up?.az}</p>
                  <Link to="/" className="link_more_port">
                    <span>Proyekt haqqında daha ətraflı</span>
                    <img src={portfolioShape} />
                  </Link>
                </div>
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default All;

import React from 'react';
import { Link } from 'react-router-dom';


function All({ menuItem }) {
  return (
    <div className="allourwork">
      <h1 className="work_title">
        Bütün işlərimiz<sup>55</sup>
      </h1>
      <div className="workItems">
        {menuItem.map((item) => {
          return (
            <Link to="RiconConstruction" className="workItem" key={item.id}>
              <div className="name_portfolio">
                <div>
                  <span>{item.name_portfolio_1span}</span>
                  <span>{item.name_portfolio_2span}</span>
                </div>
              </div>
              <div className="image">
                <img src={item.img} />
              </div>
              <div className="content">
                <div className="title">{item.contentTitle}</div>
                <p>{item.contentp}</p>
                <Link to="/" className="link_more_port">
                  <span>{item.contentLinkSpan}</span>
                  <img src={item.contentLinkimg} />
                </Link>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default All;

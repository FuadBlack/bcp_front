import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

function Website(props) {
  const { element } = props;
  const slice = data.itemData.slice(0, element);
  return (
    <div className="allourwork">
      <div className="workItems">
        {slice.map((item, id) => {
          return (
            <Link to="/" className="workItem" key={id}>
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

export default Website;

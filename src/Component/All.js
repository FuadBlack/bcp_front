import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import portfolioShape from '../assets/img/portfolio_shape.svg';
import { useTranslation } from "react-i18next";

function All({ menuItem }) {
  const { i18n, t } = useTranslation();

  return (
    <div className="allourwork">
      <div className="workItems">
        {menuItem?.map((item, key) => {
          return (
            <React.Fragment key={item?.slug}>
              <div className="workItem">
                <Link to={item?.slug} className="name_portfolio">
                  <div>
                    <span>{item?.start_date.slice(0, 4)}</span>
                    <span>{t("qisametrajlifilm")}</span>
                  </div>
                </Link>
                <Link to={item?.slug} className="image">
                  <div>
                    <img src={item?.image} />
                  </div>
                </Link>
                <div className="content">
                  <div className="title">{item?.title?.[i18n.language]}</div>
                  <p>{item?.text_up?.[i18n.language]}</p>
                  <Link to={item?.slug} className="link_more_port">
                    <span>{t("proyekthaqqindadahaetrafli")}</span>
                    <img src={portfolioShape} />
                  </Link>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default All;

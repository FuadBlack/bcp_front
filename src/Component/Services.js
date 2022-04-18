import React from "react";
import { Link } from "react-router-dom";
import { HomeServices } from "./HomeServices";
import FooterContact from "./FooterContact";
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className="services">
   
      <div className="breadcrumb_container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="breadcrumb_item_link" to="/">
                BCP
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {t("xidmetlerimiz")}
            </li>
          </ol>
        </nav>
      </div>
      <HomeServices />
      <FooterContact />
    </div>
  );
};

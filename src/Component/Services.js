import React from "react";
import { Link } from "react-router-dom";
import { HeaderWithBtn } from "./HeaderWithBtn";
import "../css/_services.sass";
import { HomeServices } from "./HomeServices";
import FooterContact from "./FooterContact";

export const Services = () => {
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
              Xidmətlərimiz
            </li>
          </ol>
        </nav>
      </div>
      <HomeServices />
      <FooterContact />
    </div>
  );
};

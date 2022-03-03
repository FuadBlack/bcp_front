import React from "react";
import { Link } from "react-router-dom";
import FooterContact from "./FooterContact";
import "../css/_contact.sass";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="breadcrumbContainer">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumbItem">
              <Link to="/">BCP</Link>
            </li>
            <li className="breadcrumbItem active" aria-current="page">
              Əlaqə
            </li>
          </ol>
        </nav>
      </div>

 

      <FooterContact />

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388948.3248466814!2d49.57477494848202!3d40.394254379738996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2s!4v1646124933065!5m2!1sen!2s"
          width="600"
          height="450"
          style={{border:"0"}}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

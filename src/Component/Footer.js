import React from 'react';
import { Link } from 'react-router-dom';
import footer_logo from '../assets/img/footer_logo.svg';
import { useTranslation } from "react-i18next";

function Footer() {
  const { i18n, t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer_top">
        <div>
          <Link to="/" className="logo">
            <img src={footer_logo} />
          </Link>
        </div>
        <div className="menu">
          <Link className="link_footer" to="portfolio">
            {t("portfolio")}
          </Link>
          <Link className="link_footer" to="aboutUs">
            {t("about")}
          </Link>
          <Link className="link_footer" to="contact">
            {t("contact")}
          </Link>
          <Link className="link_footer" to="services">
            {t("services")}
          </Link>
          <Link className="link_footer" to="projects">
            {t("projects")}
          </Link>
        </div>
      </div>
      <div className="footer_bottom">
        <div>
          <Link to="/" className="logo">
            <img src={footer_logo} />
          </Link>
        </div>
        <div className="all_reserved">© 2021. Bütün hüquqlar qorunur.</div>
      </div>
    </div>
  );
}
export default Footer;

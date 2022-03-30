import React from 'react';
import { Link } from 'react-router-dom';
import footer_logo from '../assets/img/footer_logo.svg';

function Footer() {
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
            Portfolio
          </Link>
          <Link className="link_footer" to="aboutUs">
            Haqqımızda
          </Link>
          <Link className="link_footer" to="contact">
            Əlaqə
          </Link>
          <Link className="link_footer" to="services">
            Xidmətlər
          </Link>
          <Link className="link_footer" to="projects">
            Layihələr
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

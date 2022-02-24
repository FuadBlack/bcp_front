import React from 'react';
import { Link } from 'react-router-dom';
import footer_logo from './assets/img/footer_logo.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="logo">
          <img src={footer_logo} />
        </div>
        <div className="menu">
          <Link className="link_footer" to="/">
            Portfolio
          </Link>
          <Link className="link_footer" to="/">
            Haqqımızda
          </Link>
          <Link className="link_footer" to="/">
            Əlaqə
          </Link>
          <Link className="link_footer" to="/">
            Xidmətlər
          </Link>
          <Link className="link_footer" to="/">
            Layihələr
          </Link>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="logo">
          <img src={footer_logo} />
        </div>
        <div className="all_reserved">© 2021. Bütün hüquqlar qorunur.</div>
      </div>
    </div>
  );
}
export default Footer;

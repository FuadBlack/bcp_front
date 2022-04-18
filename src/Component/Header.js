import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoBcp from '../images/Group48.svg';
import { navLinks } from './navLinks';
import insta from '../images/insta.svg';
import dribble from '../images/dribble.svg';
import youtube from '../images/youtube.svg';
import behance from '../images/behance.svg';
import linkedin from '../images/linkedin.svg';
import facebook from '../images/facebook.svg';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { i18n, t } = useTranslation();

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [openMenu, setOpenMenu] = useState('close');
  const toggleBurger = () => {
    let bodyClass = document.querySelector('body').classList;
    setOpenMenu(openMenu === 'open' ? 'close' : 'open');

    if (openMenu === 'open') {
      setOpenMenu('close');
      bodyClass.remove('hideScroll');
    } else {
      setOpenMenu('open');
      bodyClass.add('hideScroll');
    }
  };

  let location = useLocation();

  useEffect(() => {
    setOpenMenu('close');
  }, [location]);

  return (
    <div className="header">
      <div className="headerDesktop">
        <div className="langLogoBar">
          <div className="language">
            <ul>
              <li>
                <button
                  type="button"
                  className={i18n.language === 'az' && 'activeLang'}
                  onClick={() => changeLang('az')}
                >
                  az
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={i18n.language === 'en' && 'activeLang'}
                  onClick={() => changeLang('en')}
                >
                  en
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={i18n.language === 'ru' && 'activeLang'}
                  onClick={() => changeLang('ru')}
                >
                  ru
                </button>
              </li>
            </ul>
          </div>
          <div className="logoBcp">
            <Link to="/">
              <img src={logoBcp} alt="" />
            </Link>
          </div>

          <div className="burgerside">
            <button
              type="button"
              className={
                location.pathname === '/projects' ||
                location.pathname === '/services' ||
                location.pathname === '/services/OurServices_inner' ||
                location.pathname === '/portfolio/portfolio_inner' ||
                location.pathname === '/contact' ||
                location.pathname === '/aboutUs' ||
                location.pathname === '/riconConstruction'
                  ? 'btnVisible'
                  : 'btnInvisible'
              }
            >
              <Link to="contact">{t('layiheyebasla')}</Link>
            </button>
            <div
              id="burgerMenu"
              className={openMenu}
              role="button"
              onClick={() =>
                setOpenMenu(openMenu === 'open' ? 'close' : 'open')
              }
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className={openMenu === 'open' ? 'linksActive links' : 'links'}>
        <div className="container">
          <div className="row">
            <div className="linkContainer">
              <nav className="linkMenu">
                <ul className="link1">
                  <li>
                    <Link to="services">{t('services')}</Link>
                  </li>
                  <li>
                    <Link to="portfolio">{t('portfolio')}</Link>
                  </li>
                  <li>
                    <Link to="aboutUs">{t('about')}</Link>
                  </li>
                  <li>
                    <Link to="projects">{t('projects')}</Link>
                  </li>
                  <li>
                    <Link to="contact">{t('contact')}</Link>
                  </li>
                </ul>
              </nav>
              <div className="services_side">
                <ul className="link2">
                  {navLinks.links.map((link, id) => (
                    <li key={id}>
                      <Link to="/">{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="headerMobile">
        <div>
          <div className="langLogoBar">
            <div>
              <Link to="/">
                <img src={logoBcp} alt="" />
              </Link>
            </div>
            <div className="burgerside">
              <div
                id="burgerMenuMobile"
                className={openMenu}
                role="button"
                onClick={toggleBurger}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div
            className={openMenu === 'open' ? 'mobileActive mobile' : 'mobile'}
          >
            <div className="langLogoBar d-flex justify-content-between">
              <ul>
                <li>
                  <button
                    type="button"
                    className={i18n.language === 'az' && 'activeLang'}
                    onClick={() => changeLang('az')}
                  >
                    az
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={i18n.language === 'en' && 'activeLang'}
                    onClick={() => changeLang('en')}
                  >
                    en
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={i18n.language === 'ru' && 'activeLang'}
                    onClick={() => changeLang('ru')}
                  >
                    ru
                  </button>
                </li>
              </ul>
              <div className="burgerside">
                <div
                  id="burgerMenuMobile"
                  className={openMenu}
                  role="button"
                  onClick={toggleBurger}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <nav>
              <ul className="link1">
                <li>
                  <Link to="/services">{t('services')}</Link>
                </li>
                <ul className="link2">
                  {navLinks.links
                    .filter((link) => link.id < 7)
                    .map((link, id) => (
                      <li>
                        <Link key={id} to="/">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                </ul>
                <li>
                  <Link to="/portfolio">{t('portfolio')}</Link>
                </li>
                <li>
                  <Link to="/aboutUs">{t('about')}</Link>
                </li>
                <li>
                  <Link to="/projects">{t('projects')}</Link>
                </li>
                <li>
                  <Link to="/contact">{t('contact')}</Link>
                </li>
              </ul>
            </nav>
            <div className="socialLinks">
              <ul>
                <li>
                  <Link to="/">
                    <img src={insta} alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={dribble} alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={youtube} alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={behance} alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={linkedin} alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={facebook} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

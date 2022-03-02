import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/_header.sass';
import logoBcp from '../images/Group48.svg';
import { navLinks } from './navLinks';
export const Header = () => {
  const langs = [
    { id: 1, name: 'az' },
    { id: 2, name: 'ru' },
    { id: 3, name: 'en' },
  ];

  const [changLang, setChangLang] = useState(
    localStorage.getItem('language') || 'az'
  );
  const changeLanguage = (id) => {
    localStorage.setItem('language', id);
    setChangLang(id);
  };

  const [openMenu, setOpenMenu] = useState('close');

  return (
    <div className="header">
      <div className="langLogoBar">
        <div className='language_side'>
          <ul>
            {langs.map((lang, id) => {
              return (
                <li key={id} onClick={() => changeLanguage(id)}>
                  <Link className={changLang == id ? 'activeLang' : ' '} to="/">
                    {lang.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <a href="/">
            <img src={logoBcp} alt="" />
          </a>
        </div>
        <div
          id="burgerMenu"
          className={openMenu}
          role="button"
          onClick={() => setOpenMenu(openMenu === 'open' ? 'close' : 'open')}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={openMenu === 'open' ? 'linksActive links' : 'links'}>
        <nav>
          <ul className="link1">
            <li>
              <Link to="OurServices">Xidmətlər</Link>
            </li>
            <li>
              <Link to="Portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="aboutUs">Haqqımızda</Link>
            </li>
            <li>
              <Link to="projects">Layihələr</Link>
            </li>
            <li>
              <Link to="contact">Əlaqə</Link>
            </li>
          </ul>
        </nav>
        <ul className="link2">
          {navLinks.links.map((link, id) => (
            <li key={id}>
              <Link to="/">{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

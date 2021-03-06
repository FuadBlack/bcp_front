import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/_header.sass";
import logoBcp from "../images/Group48.svg";
import { navLinks } from "./navLinks";
import insta from "../images/insta.svg";
import dribble from "../images/dribble.svg";
import youtube from "../images/youtube.svg";
import behance from "../images/behance.svg";
import linkedin from "../images/linkedin.svg";
import facebook from "../images/facebook.svg";

const langs = [
  { id: 1, name: "az" },
  { id: 2, name: "ru" },
  { id: 3, name: "en" },
];
export const Header = () => {
  const [changLang, setChangLang] = useState(
    localStorage.getItem("language") || "az"
  );

  const changeLanguage = (id) => {
    localStorage.setItem("language", id);
    setChangLang(id);
  };

  const [openMenu, setOpenMenu] = useState("close");
  const toggleBurger = () => {
    let bodyClass = document.querySelector("body").classList;
    setOpenMenu(openMenu === "open" ? "close" : "open");

    if (openMenu === "open") {
      setOpenMenu("close");
      bodyClass.remove("hideScroll");
    } else {
      setOpenMenu("open");
      bodyClass.add("hideScroll");
    }
  };

  let location = useLocation();

  useEffect(() => {
    setOpenMenu("close");
  }, [location]);

  return (
    <div className="header">
      <div className="headerDesktop">
        <div className="langLogoBar">
          <div>
            <ul>
              {langs.map((lang, id) => {
                return (
                  <li key={id} onClick={() => changeLanguage(id)}>
                    <Link
                      className={changLang == id ? "activeLang" : " "}
                      to="/"
                    >
                      {lang.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="logoBcp">
            <Link to="/">
              <img src={logoBcp} alt="" />
            </Link>
          </div>
          <button
            type="button"
            className={
              location.pathname === "/projects" ||
              location.pathname === "/services" ||
              location.pathname === "/aboutUs" ||
              location.pathname === "/riconConstruction"
                ? "btnVisible"
                : "btnInvisible"
            }
          >
            layih??y?? ba??la
          </button>

          <div className="d-flex">
            <div
              id="burgerMenu"
              className={openMenu}
              role="button"
              onClick={() =>
                setOpenMenu(openMenu === "open" ? "close" : "open")
              }
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className={openMenu === "open" ? "linksActive links" : "links"}>
          <nav>
            <ul className="link1">
              <li>
                <Link to="services">Xidm??tl??r</Link>
              </li>
              <li>
                <Link to="portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="aboutUs">Haqq??m??zda</Link>
              </li>
              <li>
                <Link to="projects">Layih??l??r</Link>
              </li>
              <li>
                <Link to="contact">??laq??</Link>
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

      <div className="headerMobile">
        <div>
          <div className="langLogoBar d-flex justify-content-between">
            <div>
              <Link to="/">
                <img src={logoBcp} alt="" />
              </Link>
            </div>
            <ul>
              {langs.map((lang, id) => {
                return (
                  <li key={id} onClick={() => changeLanguage(id)}>
                    <Link
                      className={changLang == id ? "activeLang" : " "}
                      to="/"
                    >
                      {lang.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
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
          <div
            className={openMenu === "open" ? "mobileActive mobile" : "mobile"}
          >
            <div className="langLogoBar d-flex justify-content-between">
              <ul>
                {langs.map((lang, id) => {
                  return (
                    <li key={id} onClick={() => changeLanguage(id)}>
                      <Link
                        className={changLang == id ? "activeLang" : " "}
                        to="/"
                      >
                        {lang.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div
                id="burgerMenuMobile"
                className={openMenu}
                role="button"
                onClick={() =>
                  setOpenMenu(openMenu === "open" ? "close" : "open")
                }
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <nav>
              <ul className="link1">
                <li>
                  <Link to="/services">Xidm??tl??r</Link>
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
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/aboutUs">Haqq??m??zda</Link>
                </li>
                <li>
                  <Link to="/about">Layih??l??r</Link>
                </li>
                <li>
                  <Link to="/contact">??laq??</Link>
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

import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/_header.sass";
import logoBcp from "../images/Group48.svg";
import insta from "../images/insta.svg";
import dribble from "../images/dribble.svg";
import youtube from "../images/youtube.svg";
import behance from "../images/behance.svg";
import linkedin from "../images/linkedin.svg";
import facebook from "../images/facebook.svg";
import { useTranslation } from "react-i18next";
import { NavApi } from "./NavApi";

export const Header = () => {
  const { i18n, t } = useTranslation();

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  //Open Menu
  const [openMenu, setOpenMenu] = useState("close");

  //togleBurger
  const toggleBurger = () => {
    let body = document.getElementById("root");
    setOpenMenu(openMenu === "open" ? "close" : "open");

    // if (openMenu === "open" && window.innerWidth < 780) {
    //   setOpenMenu("close");
    //   body.classList.remove("hideScroll");
    // } else {
    //   setOpenMenu("open");
    //   body.classList.add("hideScroll");
    // }

    // if (openMenu === "open" && window.innerWidth < 770) {
    //   body.classList.toggle(".hideScroll");
    // }
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
              <li>
                <button
                  type="button"
                  className={i18n.language === "az" && "activeLang"}
                  onClick={() => changeLang("az")}
                >
                  az
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={i18n.language === "en" && "activeLang"}
                  onClick={() => changeLang("en")}
                >
                  en
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={i18n.language === "ru" && "activeLang"}
                  onClick={() => changeLang("ru")}
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
          <button
            type="button"
            className={
              location.pathname === "/projects" ||
              location.pathname === "/services" ||
              location.pathname === "/about" ||
              location.pathname === "/riconConstruction"
                ? "btnVisible"
                : "btnInvisible"
            }
          >
            layihəyə başla
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
                <Link to="services">{t("services")}</Link>
              </li>
              <li>
                <Link to="portfolio">{t("portfolio")}</Link>
              </li>
              <li>
                <Link to="about">{t("about")}</Link>
              </li>
              <li>
                <Link to="projects">{t("projects")}</Link>
              </li>
              <li>
                <Link to="contact">{t("contact")}</Link>
              </li>
            </ul>
          </nav>
          <NavApi />
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
              <ul>
                <li>
                  <button
                    type="button"
                    className={i18n.language === "az" && "activeLang"}
                    onClick={() => changeLang("az")}
                  >
                    az
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={i18n.language === "ru" && "activeLang"}
                    onClick={() => changeLang("ru")}
                  >
                    ru
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={i18n.language === "en" && "activeLang"}
                    onClick={() => changeLang("en")}
                  >
                    en
                  </button>
                </li>
              </ul>
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
                <ul>
                  <li>
                    <button
                      type="button"
                      className={i18n.language === "az" && "activeLang"}
                      onClick={() => changeLang("az")}
                    >
                      az
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className={i18n.language === "ru" && "activeLang"}
                      onClick={() => changeLang("ru")}
                    >
                      ru
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className={i18n.language === "en" && "activeLang"}
                      onClick={() => changeLang("en")}
                    >
                      en
                    </button>
                  </li>
                </ul>
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
                  <Link to="/services">{t("services")}</Link>
                </li>
                <NavApi />
                <li>
                  <Link to="/portfolio">{t("portfolio")}</Link>
                </li>
                <li>
                  <Link to="/aboutUs">{t("about")}</Link>
                </li>
                <li>
                  <Link to="/aboutUs">{t("projects")}</Link>
                </li>
                <li>
                  <Link to="/contact">{t("contact")}</Link>
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

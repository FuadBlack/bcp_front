import { React, useContext, useState, useRef, useEffect } from "react";
import fill_form_phonenumber from "../assets/img/fill_form_phonenumber.svg";
import youtubeicon from "../assets/img/youtube_icon.svg";
import linkendin from "../assets/img/linkedin.svg";
import dribble from "../assets/img/dribble_icon.svg";
import behance from "../assets/img/behance_icon.svg";
import instagram from "../assets/img/instagram_icon.svg";
import facebook from "../assets/img/facebook-icon.svg";
import briefBlank from "../assets/img/Brief_blank.svg";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "../assets/css/_footerContact.sass";
import axios from "axios";
import { FormComp } from "./FormComp";
import { useTranslation } from "react-i18next";
import { Socials } from "./Socials";

function FooterContact() {
  const { i18n, t } = useTranslation();
  return (
    <div className="container">
      <div className="row">
        <div className="footer_input">
          <div className="left_side">
            <div className="fill_form">
              <span>{t("formudoldur")}</span>
            </div>
            <div className="we_call_back">
              <span>{t("bizgerizeng")}</span>
              <span>{t("edeceyik")}</span>
            </div>
            <div className="phone_number_container">
              <div className="fill_form_number_icon">
                <img src={fill_form_phonenumber} />
              </div>
              <div className="phone_number">
                <span>+994 77 600 1937</span>
                <span>+994 77 600 1937</span>
              </div>
            </div>
            <div className="socials">
              <Socials />
            </div>
          </div>
          <div className="right_side">
            <FormComp />
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterContact;

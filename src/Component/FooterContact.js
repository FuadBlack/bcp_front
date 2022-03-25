import { React } from "react";
import fill_form_phonenumber from "../assets/img/fill_form_phonenumber.svg";
import "../assets/css/_footerContact.sass";
import { FormComp } from "./FormComp";
import { useTranslation } from "react-i18next";
import { Socials } from "./Socials";
import "../assets/css/_footerContact.sass"

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

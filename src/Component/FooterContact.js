import React from "react";
import fill_form_phonenumber from "../assets/img/fill_form_phonenumber.svg";
import youtubeicon from "../assets/img/youtube_icon.svg";
import linkendin from "../assets/img/linkedin.svg";
import dribble from "../assets/img/dribble_icon.svg";
import behance from "../assets/img/behance_icon.svg";
import instagram from "../assets/img/instagram_icon.svg";
import facebook from "../assets/img/facebook-icon.svg";
import briefBlank from "../assets/img/Brief_blank.svg";
import { Link } from "react-router-dom";
import "../assets/css/_footerContact.sass";
import * as yup from "yup";
import { Form, Col, InputGroup, Button, Row } from "react-bootstrap";

  firstName: yup.string().required("Имя является обязательным полем"),
  city: yup.string().required("Город является обязательным полем"),

function FooterContact() {
  return (
    <div className="footer_input row">
      <div className="left_side col-md-6">
        <div className="fill_form">
          <span>Bu</span> formanı <br></br> doldurun <span>və</span>
        </div>
        <div className="we_call_back">
          <span>biz geri zəng</span>
          <span>edəcəyik</span>
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
        <div className="social_icon">
          <Link to="/">
            <img src={youtubeicon} />
          </Link>
          <Link to="/">
            <img src={linkendin} />
          </Link>
          <Link to="/">
            <img src={dribble} />
          </Link>
          <Link to="/">
            <img src={behance} />
          </Link>
          <Link to="/">
            <img src={instagram} />
          </Link>
          <Link to="/">
            <img src={facebook} />
          </Link>
        </div>
      </div>
      <div className="right_side col-md-6">
        {/* <FormComp /> */}

     <form>
          <div className="right_top">
            <div className="name_mail">
              <input
                type="text"
                name="name"
                placeholder="Adınız"
                
              />
              <input
                type="email"
                name="email"
                placeholder="E-poçt"
                
              />
            </div>
            <div className="number_brief">
              <input
                type="number"
                name="phone"
                placeholder="Nömrəniz"
                
              />
              <input type="file" name="Brief"  />
            </div>
          </div>
          <textarea placeholder="Layihə haqqında" />
          <div className="button_send">
            <Link to="/" target="_blank" download className="briefDownload">
              Öz brief-ni hazırla <img src={briefBlank} />
            </Link>
            <button className="send_button">Göndər</button>
          </div>
        </form> 
      </div>
    </div>
  );
}
export default FooterContact;

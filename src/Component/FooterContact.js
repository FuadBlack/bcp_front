import { React, useState } from 'react';
import fill_form_phonenumber from '../assets/img/fill_form_phonenumber.svg';
import { FormComp } from './FormComp';
import { Socials } from './Socials';
import "../assets/css/_footerContact.sass"


function FooterContact({ data }) {

  return (
    <div className="contrainer">
      <div className="row">
        <div className="footer_input">
          <div className="left_side">
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

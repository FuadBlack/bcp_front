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
import { Context } from "../Context";
import axios from "axios";
import { FormComp } from "./FormComp";


function FooterContact() {
  //Context
  const { data, setData } = useContext(Context);

  const userRef = useRef();
  const errRef = useRef();

  //Validation
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const [validName, setValidname] = useState(false);
  const [validPhone, setValidphone] = useState(false);
  const [validEmail, setValidemail] = useState(false);
  const [validContent, setValidcontent] = useState(false);

  const [errMsg, setErrmsg] = useState("");
  const [success, setSuccess] = useState("");



  //Validated
  //const [validated, setValidated] = useState(false);

  // //Post request
  // const url = "https://pony.bcptest.online/api/feedbacks";
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [content, setContent] = useState("");

  // const handle = (e) => {};

  // const handleSubmit = (e) => {
  //   const form = e.currentTarget;
  //   if (form.checkValidity() === false) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     setValidated(true);

  //     const configData = {
  //       headers: { "content-type": "multipart/form-data" },
  //     };

  //     let formData = new FormData();

  //     formData.append("file");
  //     formData.append("name", name);
  //     formData.append("phone", phone);
  //     formData.append("email", email);
  //     formData.append("content", content);

  //     axios.post(url, formData, configData);
  //   }
  // };

  return (
    <div className="container">
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
          <div className="right_side">
            <FormComp/>

            {/* <Form
              noValidate
              onSubmit={(e) => handleSubmit(e)}
              validated={validated}
            >
              <div className="right_top">
                <div className="name_mail ">
                  <Form.Group name="name" controlId="validationCustom01">
                    <Form.Control
                      onChange={(e) => setName(e.target.value)}
                      required
                      ref={userRef}
                      type="text"
                      placeholder={data?.placeholders?.name?.az}
                    />
                    <Form.Control.Feedback
                      className={errMsg ? "errmsg" : "offscreen"}
                      type="invalid"
                    >
                      {errMsg}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group name="email" controlId="validationCustom02">
                    <Form.Control
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      type="email"
                      placeholder={data?.placeholders?.email?.az}
                    />
                    <Form.Control.Feedback
                      className={errMsg ? "errmsg" : "offscreen"}
                      type="invalid"
                    >
                      {errMsg}
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="number_brief">
                  <Form.Group name="phone">
                    <Form.Control
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      type="number"
                      placeholder={data?.placeholders?.phone?.az}
                    />
                    <Form.Control.Feedback
                      className={errMsg ? "errmsg" : "offscreen"}
                      type="invalid"
                    >
                      {errMsg}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group name="Brief">
                    <Form.Control required type="file" aria-hidden="false" />
                    <Form.Control.Feedback
                      className={errMsg ? "errmsg" : "offscreen"}
                      type="invalid"
                    >
                      {errMsg}
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>
              </div>
              <Form.Group name="textarea">
                <Form.Control
                   onChange={(e) => setContent(e.target.value)}
                  required
                  as="textarea"
                  placeholder={data?.placeholders?.textarea?.az}
                />
                <Form.Control.Feedback type="invalid">
                  səhvdir
                </Form.Control.Feedback>
              </Form.Group>
              <div className="button_send">
                <Link to="/" target="_blank" download className="briefDownload">
                  Öz brief-ni hazırla <img src={briefBlank} />
                </Link>
                <Button type="submit" className="send_button">
                  Göndər
                </Button>
              </div>
            </Form> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterContact;

import { React, useState } from 'react';
import fill_form_phonenumber from './assets/img/fill_form_phonenumber.svg';
import youtubeicon from './assets/img/youtube_icon.svg';
import linkendin from './assets/img/linkedin.svg';
import dribble from './assets/img/dribble_icon.svg';
import behance from './assets/img/behance_icon.svg';
import instagram from './assets/img/instagram_icon.svg';
import facebook from './assets/img/facebook-icon.svg';
import briefBlank from './assets/img/Brief_blank.svg';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function FooterContact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
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
        <Form noValidate onSubmit={handleSubmit} validated={validated}>
          <div className="right_top">
            <div className="name_mail">
              <Form.Group name="name" controlId="validationCustom01">
                <Form.Control required type="text" placeholder="Adınız" />
                <Form.Control.Feedback type="invalid">
                  səhvdir
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group name="email" controlId="validationCustom02">
                <Form.Control required type="email" placeholder="E-poçt" />
                <Form.Control.Feedback type="invalid">
                  səhvdir
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="number_brief">
              <Form.Group name="phone">
                <Form.Control required type="number" placeholder="Nömrəniz" />
                <Form.Control.Feedback type="invalid">
                  səhvdir
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group name="Brief">
                <Form.Control required type="file" aria-hidden="false"/>
                <Form.Control.Feedback type="invalid">
                  səhvdir
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
          <Form.Group name="textarea">
            <Form.Control
              required
              as="textarea"
              placeholder="Layihə haqqında"
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
        </Form>
      </div>
    </div>
  );
}
export default FooterContact;

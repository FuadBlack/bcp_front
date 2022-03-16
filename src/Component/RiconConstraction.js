import React from "react";
import wibty from "../images/wibty.png";
import ricon_constraction from "../images/ricon_constraction_bc.png";
import content from "../images/content.svg";
import { Link } from "react-router-dom";

const RiconConstraction = () => {
  return (
    <div className="ricon_constraction">
      <div className="breadcrumb_container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="breadcrumb_item_link" to="/">
                BCP
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Portfoliomuz
            </li>
          </ol>
        </nav>
      </div>
      <div className="ricon_constraction_contain">
        <h1 className="title">Ricon constraction</h1>
        <div className="grid_content">
          <div className="content_item">
            <img src={content} />
            <div className="content">
              Brendinq sizin öz xidmətiniz haqqında düşündüklərinizi və hiss
              etdiklərinizi, kütləyə çatdırma sənətidir. Bir brend öz xidmət
              məzmununu qarşı tərəfə bir loqo, bir sloqanla çatdırmağı
              bacarmalıdır. Loqo və sloqan seçimini edərkən diqqət edilməsi
              gərəkən ən əsas məqam bir görüşdə yadda qalmasıdır.
            </div>
          </div>
        </div>
        <div className="image_bussines_cards">
          <img className="ricon_bussines_card" src={ricon_constraction} />
          <img className="wibty_image1" src={wibty} />
          <img className="wibty_image" src={wibty} />
          <img className="ricon_bussines_card" src={ricon_constraction} />
        </div>
        <div className="branding">
          <p className="about_branding">
            Brendinq sizin öz xidmətiniz haqqında düşündüklərinizi və hiss
            etdiklərinizi, kütləyə çatdırma sənətidir. Bir brend öz xidmət
            məzmununu qarşı tərəfə bir loqo, bir sloqanla çatdırmağı
            bacarmalıdır. Loqo və sloqan seçimini edərkən diqqət edilməsi
            gərəkən ən əsas məqam bir görüşdə yadda qalmasıdır. Brendinq sizin
            öz xidmətiniz haqqında düşündüklərinizi və hiss etdiklərinizi,
            kütləyə çatdırma sənətidir. Bir brend öz xidmət məzmununu qarşı
            tərəfə bir loqo, bir sloqanla çatdırmağı bacarmalıdır. Loqo və
            sloqan seçimini edərkən diqqət edilməsi gərəkən ən əsas məqam bir
            görüşdə yadda qalmasıdır. Brendinq sizin öz xidmətiniz haqqında
            düşündüklərinizi və hiss etdiklərinizi, kütləyə çatdırma sənətidir.
            Bir brend öz xidmət məzmununu qarşı tərəfə bir loqo, bir sloqanla
            çatdırmağı bacarmalıdır. Loqo və sloqan seçimini edərkən diqqət
            edilməsi gərəkən ən əsas məqam bir görüşdə yadda qalmasıdır.
          </p>
        </div>
        <div className="image_bussines_cards">
          <img className="ricon_bussines_card" src={ricon_constraction} />
        </div>
      </div>
    </div>
  );
};
export default RiconConstraction;

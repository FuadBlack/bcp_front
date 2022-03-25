import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import group from '../assets/img/group_inner_port.svg';
import axios from 'axios';

const RiconConstraction = () => {
  const { slug } = useParams();
  console.log(slug);

  useEffect(() => {
    fetchData();
  }, []);
  const [item, setDataApi] = useState([]);
  const fetchData = async () => {
    await axios
      .get(
        'http://192.168.1.6:5555/api/portfolio/et-aspernatur-velit-nesciunt-expedita'
      )
      .then((res) => {
        setDataApi(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
      <div className="ricon_constraction_contain" key={item?.slug}>
        <h1 className="title">{item?.title?.az}</h1>
        <div className="grid_content">
          <div className="content_item">
            <img src={group} />
            <div className="content">{item?.text_up?.az}</div>
          </div>
        </div>
        <div className="image_bussines_cards">
          <img className="ricon_bussines_card" src={item?.image} />
          <img className="wibty_image1" src={item?.image} />
          <img className="wibty_image" src={item?.image} />
          <img className="ricon_bussines_card" src={item?.image} />
        </div>
        <div className="branding">
          <p className="about_branding">{item?.text_end?.az}</p>
        </div>
        <div className="image_bussines_cards">
          <img className="ricon_bussines_card" src={item?.image} />
        </div>
      </div>
    </div>
  );
};
export default RiconConstraction;

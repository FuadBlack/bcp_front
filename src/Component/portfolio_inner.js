import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import group from '../assets/img/group_inner_port.svg';
import axios from 'axios';

const RiconConstraction = () => {
  const { slug } = useParams();
  // const [post, setPost] = useState([]);
  console.log(slug);
  // console.log(post);
  // useEffect(() => {
  //   axios
  //     .get('http://192.168.1.18:5555/api/portfolio/${slug}`)
  //     .then((res) => {
  //       setPost(res.post);
  //       console.log(res.post);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [slug, setPost]);
  const [data, setDataApi] = useState([]);
  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get(
        'http://192.168.1.13:5555/api/portfolio/et-aspernatur-velit-nesciunt-expedita'
      )
      .then((res) => {
        setDataApi(res.data);
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

      <div className="ricon_constraction_contain">
        <h1 className="title"></h1>
        <div className="grid_content">
          <div className="content_item">
            <img src={group} />
            <div className="content">{}</div>
          </div>
        </div>
        <div className="image_bussines_cards">
          <img className="ricon_bussines_card" />
          <img className="wibty_image1" />
          <img className="wibty_image" />
          <img className="ricon_bussines_card" />
        </div>
        <div className="branding">
          <p className="about_branding"></p>
        </div>
        <div className="image_bussines_cards">
          <img className="ricon_bussines_card" />
        </div>
      </div>
    </div>
  );
};
export default RiconConstraction;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/_services.sass";
import { HomeServices } from "./HomeServices";
import FooterContact from "./FooterContact";
import axios from "axios";

export const Services = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("http://pony.bcptest.online/api/services")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };





  return (
    <div className="services">
   
      <div className="breadcrumb_container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="breadcrumb_item_link" to="/">
                BCP
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Xidmətlərimiz
            </li>
          </ol>
        </nav>
      </div>
      <HomeServices />
      <FooterContact />
    </div>
  );
};
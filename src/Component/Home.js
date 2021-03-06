import React, { useState, useEffect } from "react";
import { HomePortfolio } from "./HomePortfolio";
import { HomeProjects } from "./HomeProjects";
import { HomeServices } from "./HomeServices";
import { Info } from "./Info";
import { ShowreelText } from "./ShowreelText";
import FooterContact from "./FooterContact";
import axios from "axios";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("http://pony.bcptest.online/api/home")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Info data={data} />
      <ShowreelText />
      <HomePortfolio />
      <HomeServices />
      <HomeProjects />
      <FooterContact data={data} />
    </div>
  );
};

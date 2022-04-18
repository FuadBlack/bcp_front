import React, { useState, useEffect } from 'react';
import { HomePortfolio } from './HomePortfolio';
import { HomeProjects } from './HomeProjects';
import { HomeServices } from './HomeServices';
import { Info } from './Info';
import { ShowreelText } from './ShowreelText';
import FooterContact from './FooterContact';
import axios from 'axios';

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get('http://192.168.1.9:5555/api/main')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='home'>
      <Info data={data} />
      <ShowreelText />
      <HomePortfolio />
      <HomeServices />
      <HomeProjects />
      <FooterContact data={data} />
    </div>
  );
};

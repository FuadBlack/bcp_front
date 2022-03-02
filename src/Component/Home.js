import React from 'react';
import { Header } from './Header';
import { HomePortfolio } from './HomePortfolio';
import { HomeProjects } from './HomeProjects';
import { HomeServices } from './HomeServices';
import { Info } from './Info';
import { ShowreelText } from './ShowreelText';
import Footerinput from '../FooterInput';

export const Home = () => {
  return (
    <div>
      <Info />
      <ShowreelText />
      <HomePortfolio />
      <HomeServices />
      <HomeProjects />
      <Footerinput />
    </div>
  );
};

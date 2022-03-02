import React from "react";
import { Header } from "./Header";
import { HomePortfolio } from "./HomePortfolio";
import { HomeProjects } from "./HomeProjects";
import { HomeServices } from "./HomeServices";
import { Info } from "./Info";
import { ShowreelText } from "./ShowreelText";
import FooterContact from "./FooterContact";

export const Home = () => {
  return (
    <div>
     
      <Info />
      <ShowreelText />
      <HomePortfolio />
      <HomeServices />
      <HomeProjects />
      <FooterContact />
     
    </div>
  );
};

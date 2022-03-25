import React, { useState, useEffect } from "react";
import { HomePortfolio } from "./HomePortfolio";
import { HomeProjects } from "./HomeProjects";
import { HomeServices } from "./HomeServices";
import { Info } from "./Info";
import { ShowreelText } from "./ShowreelText";
import FooterContact from "./FooterContact";
import axios from "axios";
import "../css/_home.sass"

export const Home = () => {
 

  return (
    <div>
      <Info  />
      <ShowreelText />
      <HomePortfolio />
      <HomeServices />
      <HomeProjects />
      <FooterContact  />
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/_projects.sass";
import shape from "../images/Shape.svg";
import wibty from "../images/wibty.png";
import axios from "axios";

export const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("http://192.168.1.25:5555/api/projects")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="projects">
      <div className="section">
        <div className="breadcrumbContainer container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumbItem">
                <Link className="breadcrumbItemLink" to="/">
                  BCP
                </Link>
              </li>
              <li className="breadcrumbItem active" aria-current="page">
                Layihələr
              </li>
            </ol>
          </nav>
        </div>
        <h2>Porfoliomuz</h2>
        <div className="project">
          {data.map((project, id) => (
            <div key={id} className="row">
              <div className="col-md-8 d-flex align-items-center">
                <h3 className="header">{project?.data?.title?.az}</h3>
                <div className="infoDiv">
                  <p className="info">{project?.data?.text?.az}</p>
                  <div className="goTo">
                    <Link to={project?.data?.url}>keçid et</Link>
                    <img src={shape} alt="" />
                  </div>
                </div>
              </div>
              <div className="image col-md-4 mt-4">
                <img src={project?.data?.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

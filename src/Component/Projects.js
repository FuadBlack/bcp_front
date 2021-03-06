import React from "react";
import { Link } from "react-router-dom";
import "../css/_projects.sass";
import shape from "../images/Shape.svg";
import wibty from "../images/wibty.png";

export const Projects = () => {
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
        <h2>Layihələrimiz</h2>
        <div className="row">
          <div className="col-md-8 d-flex align-items-center">
            <h3 className="header">
              Wibty ilk musiqi və sosial <br /> şəbəkə
            </h3>
            <div className="infoDiv">
              <p className="info">
                Wibty ilk musiqi və sosial platforması wibty ilk musiqi və
                sosial platforması ilk musiqi və sosial ...
              </p>
              <div className="goTo">
                <Link to="/">keçid et</Link> <img src={shape} alt="" />{" "}
              </div>
            </div>
          </div>
          <div className="image col-md-4 mt-4">
            <img src={wibty} alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 d-flex align-items-center">
            <h3 className="header">
              Wibty ilk musiqi və sosial <br /> şəbəkə
            </h3>
            <div className="infoDiv">
              <p className="info">
                Wibty ilk musiqi və sosial platforması wibty ilk musiqi və
                sosial platforması ilk musiqi və sosial ...
              </p>
              <div className="goTo">
                <Link to="/">keçid et</Link> <img src={shape} alt="" />{" "}
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="image">
              <img src={wibty} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

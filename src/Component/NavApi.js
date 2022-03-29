import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "../css/_navApi.sass"



export const NavApi = () => {
  const [data, setFetch] = useState();
  const {t,i18n}=useTranslation()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("http://192.168.1.13:5555/api/service")
      .then((res) => {
        console.log(res.data);
        setFetch(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="navApi">
      <div className="row ">
        {data?.map((links, id) => (
          <div key={id} className="col-md-4 ">
            <p>{links?.title?.[i18n.language]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

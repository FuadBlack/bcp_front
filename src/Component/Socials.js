import React, { useEffect, useState } from "react";
import axios from "axios";
import { SocialTypes } from "./SocialTypes";

export const Socials = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("http://192.168.1.8:5555/api/socials")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <ul className="socialLinks">
        {
          data?.map((social,id)=>(
            <li key={id}>
              <a href={social.url}>
                <SocialTypes type={social.type}/>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

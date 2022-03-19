import { React, useEffect, useState } from "react";
import All from "./All";
import Data from "./data";
import Button from "./Button";
import axios from "axios";

const TabsContainer = () => {
  const [menuItem, setMenuItem] = useState(Data);
  const [buttons, setButtons] = useState([]);



  const filter = (button) => {
    if (button === "Hamısı") {
      setMenuItem(Data);
      return;
    }

    const filteredData = Data.filter((item) => item.category === button);
    setMenuItem(filteredData);
    console.log('salam qaqas')
  };

  return (
    <div className="tabs">
      <Button button={buttons} filter={filter} />
      <All menuItem={menuItem} />
      <div className="button_div">
        <button className="load_more">daha çox bax</button>
      </div>
    </div>
  );
};
export default TabsContainer;

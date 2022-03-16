import { React, useState } from "react";
import All from "./All";
import Data from "./data";
import Button from "./Button";
const allCategories = ["Hamısı", ...new Set(Data.map((item) => item.category))];
console.log(allCategories);

const TabsContainer = () => {
  const [menuItem, setMenuItem] = useState(Data);
  const [buttons, setButtons] = useState(allCategories);
  const filter = (button) => {
    if (button === "Hamısı") {
      setMenuItem(Data);
      return;
    }

    const filteredData = Data.filter((item) => item.category === button);
    setMenuItem(filteredData);
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

import { React, useState } from 'react';
import All from './All';
import Data from './data';
import Buttons from './Button';

const allCategories = ['Hamısı', ...new Set(Data.map((item) => item.category))];
console.log(allCategories);

const TabsContainer = ( {data} ) => {
  const [menuItem, setMenuItem] = useState(Data);
  const [buttons] = useState(allCategories);
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
      <Buttons button={buttons} filter={filter} />
      <All menuItem={data} />
      <div className="button_div">
        <button className="load_more">daha çox bax</button>
      </div>
    </div>
  );
};
export default TabsContainer;

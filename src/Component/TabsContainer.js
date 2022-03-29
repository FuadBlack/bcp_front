import { React, useState } from 'react';
import All from './All';
import Buttons from './Button';

const TabsContainer = ({ data, dataFIlter }) => {
  const allCategories = [
    'Hamısı',
    ...new Set(dataFIlter.map((item) => item.category)),
  ];
  console.log(allCategories);
  const [menuItem, setMenuItem] = useState(dataFIlter);
  const [buttons] = useState(allCategories);
  console.log(buttons);
  const filter = (button) => {
    if (button === 'Hamısı') {
      setMenuItem(dataFIlter);
      return;
    }

    const filteredData = dataFIlter.filter((item) => item.category === button);
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

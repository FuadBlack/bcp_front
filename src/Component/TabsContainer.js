import { React, useState } from 'react';
import All from './All';
import Buttons from './Button';
import { useTranslation } from 'react-i18next';

const TabsContainer = ({ data, dataFIlter }) => {
  const { i18n, t } = useTranslation();
  const [limit, setLimit] = useState(2);
  const maxLimit = data.slice(0, limit);
  console.log(maxLimit.length);
  console.log(limit);
  const loadMore = () => {
    setLimit(limit + 1);
    if (limit.length >= maxLimit.length) {
      const element = document.getElementsByClassName('button_div');
      element.classList.add('none');
      console.log(element);
    }
  };
  // const allCategories = [
  //   'Hamısı',
  //   ...new Set(dataFIlter.map((item) => item.category)),
  // ];
  // const [menuItem, setMenuItem] = useState(dataFIlter);
  // const [buttons] = useState(allCategories);
  // const filter = (button) => {
  //   if (button === 'Hamısı') {
  //     setMenuItem(dataFIlter);
  //     return;
  //   }

  //   const filteredData = dataFIlter.filter((item) => item.category === button);
  //   setMenuItem(filteredData);
  // };

  return (
    <div className="tabs">
      <Buttons buttonData={data} />
      <All menuItem={maxLimit} />
      <div className="button_div">
        <button className="load_more" onClick={(e) => loadMore(e)}>
          {t('dahachoxbax')}
        </button>
      </div>
    </div>
  );
};
export default TabsContainer;

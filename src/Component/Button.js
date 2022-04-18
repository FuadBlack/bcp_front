import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTranslation } from 'react-i18next';

function Button({ buttonData }) {
  const { i18n, t } = useTranslation();

  // console.log(buttonData);
  const [btn, setCahngeButton] = useState('btn');
  const toggleColor = (e) => {
    setCahngeButton(e.target);
    // console.log(e.target.getAttribute('data-id'));
    // setCahngeButton(e.target.getAttribute('data-id'));
    // let btns = document.querySelectorAll('.btn');
    // btns.forEach((item) => item.classList.remove('active'));
    // e.target.classList.add('active');
  };
  // var btnDefault = document.createAttribute('data-id=1').css
  const [button] = useState(buttonData);
  const [filterData, setFilterData] = useState([button]);
  // console.log(filterData);
  const filterProduct = (cat) => {
    const updateList = buttonData?.filter((x) => x.slug === cat);
    setFilterData(updateList);
  };
  return (
    <div>
      <Swiper
        grabCursor={true}
        spaceBetween={0}
        breakpoints={{
          1400: { slidesPerView: 9 },
          1200: { slidesPerView: 7 },
          991: { slidesPerView: 6 },
          768: { slidesPerView: 4 },
        }}
        className="button_container"
      >
        {/* {button.map((cat, i) => {
          return ( */}
        <SwiperSlide>
          <button
            type="button"
            // data-id={i + 1}
            onClick={(e) => {
              setFilterData(buttonData);
              toggleColor(e);
            }}
            className={btn == 'btn' ? 'btn' : 'btn active'}
          >
            {t('hamisi')}
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            type="button"
            // data-id={i + 1}
            onClick={(e) => {
              filterProduct();
              toggleColor(e);
            }}
            className={btn == 'btn' ? 'btn' : 'btn  active'}
          >
            {t('vebsayt')}
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            type="button"
            // data-id={i + 1}
            onClick={(e) => {
              filterProduct();
              toggleColor(e);
            }}
            className={btn == 'btn' ? 'btn' : 'btn  active'}
          >
            {t('3dmodelleme')}
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            type="button"
            // data-id={i + 1}
            onClick={(e) => {
              filterProduct();
              toggleColor(e);
            }}
            className={btn == 'btn' ? 'btn' : 'btn  active'}
          >
            {t('mobiltet')}
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            type="button"
            // data-id={i + 1}
            onClick={(e) => {
              filterProduct();
              toggleColor(e);
            }}
            className={btn == 'btn' ? 'btn' : 'btn  active'}
          >
            {t('3danimasiya')}
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            type="button"
            // data-id={i + 1}
            onClick={(e) => {
              filterProduct();
              toggleColor(e);
            }}
            className={btn == 'btn' ? 'btn' : 'btn  active'}
          >
            {t('brendinq')}
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            type="button"
            // data-id={i + 1}
            onClick={(e) => {
              toggleColor(e);
            }}
            className={btn == 'btn' ? 'btn' : 'btn  active'}
          >
            SMM
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            type="button"
            // data-id={i + 1}
            onClick={(e) => {
              toggleColor(e);
            }}
            className={btn == 'btn' ? 'btn' : 'btn  active'}
          >
            {t('musiqi')}
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            type="button"
            // data-id={i + 1}
            onClick={(e) => {
              toggleColor(e);
            }}
            className={btn == 'btn' ? 'btn' : 'btn  active'}
          >
            {t('qisametrajlifilm')}
          </button>
        </SwiperSlide>
        {/* );
        })} */}
      </Swiper>
    </div>
  );
}

export default Button;

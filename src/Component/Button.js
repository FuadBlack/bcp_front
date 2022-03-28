import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Button({ button, filter }) {
  console.log(button);
  const [btn, setCahngeButton] = useState(null);
  const toggle = (e) => {
    console.log(e.target.getAttribute('data-id'));
    setCahngeButton(e.target.getAttribute('data-id'));

    // let btns = document.querySelectorAll('.btn');

    // btns.forEach((item) => item.classList.remove('active'));
    // e.target.classList.add('active');
  };
  return (
    <div>
      <Swiper
        spaceBetween={0}
        breakpoints={{
          1400: { slidesPerView: 9 },
          1200: { slidesPerView: 7 },
          991: { slidesPerView: 6 },
          768: { slidesPerView: 4 },
        }}
        className="button_container"
      >
        {button.map((cat, i) => {
          return (
            <SwiperSlide>
              <button
                type="button"
                data-id={i+1}
                onClick={(e) => {
                  filter(cat);
                  toggle(e);
                }}
                className={btn == i+1 ? 'btn active' : 'btn'}
              >
                {cat}
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Button;

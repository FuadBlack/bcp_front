import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Button({ button, filter }) {
  console.log(button);
  const [btn, setCahngeButton] = useState(false);
  const toggle = () => setCahngeButton(!btn);

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
        className="button_container">
        {button.map((cat, i) => {
          return (
            <SwiperSlide>
              <button
                type="button"
                onClick={() => {
                  filter(cat);
                  toggle();
                }}
                className={btn ? 'btn active' : 'btn'}
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

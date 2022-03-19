import React, { useState } from 'react';

function Button({ button, filter }) {
  const [btn, setCahngeButton] = useState('');
  console.log(setCahngeButton);
  return (
    <div className="button_container">
      {button.map((cat, i) => {
        return (
          <button
            key={i}
            type="button"
            onClick={() => {
              filter(cat.slug);
              setCahngeButton(cat.slug);
            }}
            className={btn === cat.slug ? 'btn active' : 'btn'}
          >
            {cat.slug}
          </button>
        );
      })}
    </div>
  );
}

export default Button;

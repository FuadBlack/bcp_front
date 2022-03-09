import React, { useState } from 'react';

function Button({ button, filter }) {
  const [btn, setCahngeButton] = useState('btn');
  console.log(setCahngeButton);
  return (
    <div className="button_container">
      {button.map((cat, i) => {
        return (
          <button
            type="button"
            onClick={() => {
              filter(cat);
              setCahngeButton(btn === 'btn' ? 'btn active' : 'btn');
            }}
            className={btn}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Button;

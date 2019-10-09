import React from "react";

const Button = ({ button, onClick }) => {
  return (
    <div className="key_pad">
      {button.map((btn, index) => (
        <p
          key={index}
          className="cal-btn"
          onClick={e => onClick(e.target.innerText)}
        >
          {btn}
        </p>
      ))}
      <p className="clear-btn" onClick={e => onClick(e.target.innerText)}>
        Clear
      </p>
    </div>
  );
};

export default Button;

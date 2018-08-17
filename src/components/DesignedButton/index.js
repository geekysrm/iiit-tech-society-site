import React from "react";

import "./style.css";

export default ({ text, link }) => {
  return (
    <div className="wrapper">
      <div className="button">
        <span className="button__mask" />
        <a href={link} className="button__text">
          {text}
        </a>
        <a href={link} className="button__text button__text--bis">
          {text}
        </a>
      </div>
    </div>
  );
};

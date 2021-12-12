import React from "react";
import "../Css/PageMainTitle.css";

const PageMainTitle = ({ title }) => {
  const cases = 36;
  return (
    <h2 className="main-title">
      {title}
      <div className="additional">
        <img src="./Icon-container.png" alt="" className="case" />
        {cases}
        <button className="hint-button" type="button">
          <img src="./IconSizeContainer1.png" className="hint" alt="" />
        </button>
      </div>
    </h2>
  );
};

export default PageMainTitle;

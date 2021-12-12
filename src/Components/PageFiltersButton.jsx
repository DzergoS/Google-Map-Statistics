import React from "react";
import "../Css/PageFiltersButton.css";

const PageFiltersButton = () => (
  <li className="li-filters">
    <button type="button" className="filter-button">
      <img src="./filters.png" alt="" />
    </button>
  </li>
);

export default PageFiltersButton;

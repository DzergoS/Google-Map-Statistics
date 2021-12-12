import React from "react";
import "../Css/PageFiltersLayout.css";

const PageFiltersLayout = () => (
  <li className="li-checks">
    <input type="radio" name="filter" value="case" id="case" defaultChecked />
    <label htmlFor="case">
      <img src="./case00.png" alt="" />
    </label>
    <input type="radio" name="filter" value="map" id="map" />
    <label htmlFor="map">
      <img src="./Icon-container1.png" alt="" />
    </label>
  </li>
);

export default PageFiltersLayout;

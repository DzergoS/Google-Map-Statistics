import React from "react";
import "../Css/PageMissionItem.css";

const PageMissionItem = ({
  colorIndicator,
  srcIndicator,
  title,
  date,
  pilot,
  location,
  inspections,
  percent,
}) => (
  <li className="missions-item">
    <div className="info">
      <h3>
        <button type="button" className={`info-but ${colorIndicator}`}>
          <img src={srcIndicator} alt="" className="mission-state" />
        </button>{" "}
        {title}
      </h3>
      <p className="desc">
        <bdi>
          <img src="./Union.png" alt="" />
        </bdi>
        <span>Date: </span>
        {date}
      </p>
      <p className="desc">
        <bdi>
          <img src="./Union-1.png" alt="" />
        </bdi>
        <span>Pilot: </span>
        {pilot}
      </p>
      <p className="desc">
        <bdi>
          <img src="./Union-2.png" alt="" />
        </bdi>
        <span>Location: </span>
        {location}
      </p>
      <p className="desc">
        <bdi>
          <img src="./Union-3.png" alt="" />
        </bdi>
        <span>Inspections Done: </span>
        {inspections}
      </p>
    </div>
    <div className="buttons-container vertical">
      <button type="button" className="mission-button">
        <img src="./Union-0.png" alt="" />
      </button>
      <button type="button" className="mission-button">
        <img src="./Union-4.png" alt="" />
      </button>
      <button type="button" className="mission-button">
        <img src="./Union1.png" alt="" />
      </button>
    </div>

    {/* Loading */}
    {percent ? (
      <div className="loading">
        <div className="bar" style={{ width: `${percent}%` }} />
        <span>{percent}%</span>
      </div>
    ) : null}
    <button type="button" className="show-more">
      <img src="./arrowdwn.png" alt="" />
    </button>
  </li>
);

export default PageMissionItem;

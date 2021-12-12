/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import PageMissionItem from "./PageMissionItem";
import "../Css/PageMissions.css";

const PageMissions = () => {
  const missions = [
    {
      colorIndicator: "gray",
      srcIndicator: "./State3.png",
      title: "Kent, Utah",
      date: "08/04/2021, 04:00 CST",
      pilot: "Esther Howard",
      location: "Lansing, Illinois",
      inspections: 0,
    },
    {
      colorIndicator: "green",
      srcIndicator: "./State1.png",
      title: "Coppell, Virginia",
      date: "08/07/2021, 02:23 CST",
      pilot: "Esther Howard",
      location: "Coppell, Virginia",
      inspections: 1,
    },
    {
      colorIndicator: "blue",
      srcIndicator: "./State4.png",
      title: "Lansing, Illinois",
      date: "08/04/2021, 05:00 CST",
      pilot: "Esther Howard",
      location: "Lansing, Illinois",
      inspections: 0,
      percent: 68,
    },
    {
      colorIndicator: "red",
      srcIndicator: "./State2.png",
      title: "Corona, Michigan",
      date: "08/04/2021, 03:01 CST",
      pilot: "Esther Howard",
      location: "Corona, Michigan",
      inspections: 4,
    },
    {
      colorIndicator: "gray",
      srcIndicator: "./State3.png",
      title: "Kent, Utah",
      date: "08/04/2021, 06:00 CST",
      pilot: "Esther Howard",
      location: "Lansing, Illinois",
      inspections: 0,
    },
  ];
  return (
    <Scrollbars
      className="missions"
      renderView={({ style, ...props }) => (
        <div
          {...props}
          className="track-View"
          style={{
            ...style,
            left: 16,
            top: 16,
            bottom: 16,
            right: 16,
            paddingRight: 15,
            overflowX: "hidden",
          }}
        />
      )}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          className="track-horizontal"
          style={{
            ...style,
            backgroundColor: "#BCC1CB",
            left: "5.2px",
            width: "4px",
            height: "184px",
            boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.16)",
          }}
        />
      )}
      renderTrackVertical={({ style, ...props }) => (
        <div
          {...props}
          className="track-Track"
          style={{
            ...style,
            backgroundColor: "#fff",
            width: 16,
            bottom: 0,
            top: 0,
            right: 0,
            paddingBottom: 8,
            paddingTop: 8,
            borderLeft: "1px solid #DEE3EC",
          }}
        />
      )}
    >
      {missions.map((item) => (
        <PageMissionItem {...item} key={item.date} />
      ))}
    </Scrollbars>
  );
};

export default PageMissions;

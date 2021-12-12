/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Auth from "../../Components/Auth";
import Map from "../../Components/CustomMap";
import Statistics from "../../Components/Statistics";
import Page3 from "../../Components/Page3";

export const routesObj = [
  { path: "/", element: (props) => <Auth {...props} /> },
  { path: "/map", element: (props) => <Map {...props} /> },
  { path: "/statistics", element: (props) => <Statistics {...props} /> },
  { path: "/page3", element: (props) => <Page3 {...props} /> },
];

export const AppNavLinks = [
  { to: "/map", title: "Map" },
  { to: "/statistics", title: "Statistics" },
  { to: "/page3", title: "Page 3" },
];

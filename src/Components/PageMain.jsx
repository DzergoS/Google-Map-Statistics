import React from "react";
import PageMainTitle from "./PageMainTitle";
import PageMissionFilters from "./PageMissionFilters";
import PageMissions from "./PageMissions";
import PageMissionCreate from "./PageMissionCreate";
import "../Css/PageMain.css";

const PageMain = ({ title }) => (
  <main className="main">
    <PageMainTitle title={title} />
    <PageMissionFilters />
    <PageMissions />
    <PageMissionCreate />
  </main>
);

export default PageMain;

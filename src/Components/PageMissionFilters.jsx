import React from "react";
import PageFiltersLayout from "./PageFiltersLayout";
import PageFiltersSearch from "./PageFiltersSearch";
import PageFiltersButton from "./PageFiltersButton";
import "../Css/PageMissionFilters.css";

const PageMissionFilters = () => (
  <ul className="filters">
    <PageFiltersLayout />
    <PageFiltersSearch />
    <PageFiltersButton />
  </ul>
);

export default PageMissionFilters;

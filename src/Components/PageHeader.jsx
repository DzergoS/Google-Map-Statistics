import React from "react";
import MainNav from "./MainNav";
import FooterNav from "./FooterNav";
import "../Css/PageHeader.css";

const PageHeader = () => (
  <header className="header">
    <MainNav />
    <FooterNav />
  </header>
);

export default PageHeader;

import React from "react";
import MainNavLink from "./MainNavLink";
import { mainNavLinks } from "../utils/menu/MenuConstants";

const MainNav = () => (
  <nav className="main-nav">
    {mainNavLinks.map((navLink) => (
      <MainNavLink
        key={navLink.imgLink}
        link={navLink.link}
        imgLink={navLink.imgLink}
        classN={navLink.classN}
      />
    ))}
  </nav>
);

export default MainNav;

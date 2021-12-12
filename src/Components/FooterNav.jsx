import React from "react";
import MainNavLink from "./MainNavLink";
import { mainFooterLinks } from "../utils/menu/MenuConstants";
import "../Css/FooterNav.css";

const FooterNav = () => (
  <nav className="footer-nav">
    {mainFooterLinks.map((navLink) => (
      <MainNavLink
        key={navLink.imgLink}
        link={navLink.link}
        imgLink={navLink.imgLink}
        classN={navLink.classN}
        span={navLink.span ? navLink.span : null}
      />
    ))}
  </nav>
);

export default FooterNav;

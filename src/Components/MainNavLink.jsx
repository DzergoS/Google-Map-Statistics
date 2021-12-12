import React from "react";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";
import "../Css/MainNavLink.css";

const MainNavLink = ({ link, classN, imgLink, span }) => (
  <NavLink to={link} className={!classN ? "nav-link" : classN}>
    <img src={imgLink} alt="" />
    {span ? <span className={span} /> : null}
  </NavLink>
);

MainNavLink.defaultProps = {
  link: "",
  classN: "",
  imgLink: "",
  span: "",
};

MainNavLink.propTypes = {
  link: PropTypes.string,
  classN: PropTypes.string,
  imgLink: PropTypes.string,
  span: PropTypes.string,
};
export default MainNavLink;

/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import NoAuthRedirect from "./Components/NoAuthRedirect";
import { AppNavLinks, routesObj } from "./utils/menu/AppNavigation";
import "./App.css";

const App = () => {
  const [auth, setAuth] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [historyMarkers, setHistoryMarker] = useState([]);
  const [selected, setSelected] = useState(null);
  const [headerOn, setHeader] = useState(true);

  const commonProps = {
    markers,
    setMarkers,
    selected,
    setSelected,
    historyMarkers,
    setHistoryMarker,
    setHeader,
    setAuth,
  };

  return (
    <div>
      {auth ? (
        <header className={`${headerOn ? null : "hide"} headerMap`}>
          <nav>
            {AppNavLinks.map(({ to, title }) => (
              <NavLink to={to} key={title}>
                {title}
              </NavLink>
            ))}
          </nav>
        </header>
      ) : (
        <NoAuthRedirect />
      )}
      <Routes>
        {routesObj.map(({ path, element }) => (
          <Route path={path} element={element(commonProps)} key={path} />
        ))}
      </Routes>
    </div>
  );
};

export default App;

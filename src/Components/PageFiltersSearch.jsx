import React, { useState } from "react";
import "../Css/PageFiltersSearch.css";

const PageFiltersSearch = () => {
  const [search, setSearch] = useState("");
  return (
    <li className="li-search">
      <label htmlFor="search">
        <input
          type="text"
          id="search"
          placeholder="Mission name.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="button">
          <img src="./search.png" alt="" />
        </button>
      </label>
    </li>
  );
};

export default PageFiltersSearch;

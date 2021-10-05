import React from "react";
import SearchIcon from "@material-ui/icons/Search";

export default function Search({ handleSearchNote }) {
  return (
    <div className="search">
      <SearchIcon className="search-icon" />
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
}

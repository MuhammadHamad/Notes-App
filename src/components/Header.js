import React from "react";

function Header({ handleToggle }) {
  return (
    <div className="header">
      <h2>NOTES</h2>
      <button
        onClick={() => handleToggle((previousDarkMode) => !previousDarkMode)}
        className="save"
      >
        Toggle Mode
      </button>
    </div>
  );
}

export default Header;

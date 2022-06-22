import React from "react";
import sunlifeLogo from "./sunlifeLogo.svg";

function Header() {
  return (
    <div className="welcome-header">
        <img src={sunlifeLogo} className="sunlife-logo" alt="Sunlife Logo" />
    </div>
  );
}

export default Header;

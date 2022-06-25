import React from "react";
import sunlifeLogo from "./sunlife3.jpg";

function Header() {
  return (
    <div>
      {/* <div className="solid-header" /> */}
      <div className="sunlife-header">
          <img src={sunlifeLogo} className="sunlife-logo" alt="Sunlife Logo" />
          <button className="sunlife-header-quick-start">
            QUICK START --&gt;
          </button>
      </div>
    </div>
  );
}

export default Header;

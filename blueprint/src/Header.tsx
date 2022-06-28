import React from "react";
import sunlifeLogo from "./sunlife3.jpg";
import StickyHeader from "./StickyHeader"

function Header() {

  return (
    <div>
      <div className="sunlife-header">
          <img src={sunlifeLogo} className="sunlife-logo" alt="Sunlife Logo" />
      </div>
      <StickyHeader />
    </div>
  );
}

export default Header;

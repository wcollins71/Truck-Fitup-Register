import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">
      Dashboard
    </a>
      <a className="navbar-brand" href="/newtruck">
        New Truck
      </a>
            <a className="navbar-brand" href="/archives">
        Archives
      </a>
    </nav>
  );
}

export default Nav;

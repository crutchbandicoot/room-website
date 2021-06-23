import React from "react";
import './Navbar.scss'

const Navbar = () => {
  return (
      <nav>
        <h2>room</h2>
        <ul style={{ display: "flex", listStyle: "none", padding: "0 1.5rem", paddingTop: "0.95rem" }}>
            {/* eslint-disable-next-line */}
            <li><a href="#">home</a></li>
            <li><a href="#">shop</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
        </ul>
      </nav>
  );
};

export default Navbar;

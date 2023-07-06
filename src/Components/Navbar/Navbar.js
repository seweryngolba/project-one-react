import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="container nav-cont">
        <div className="navigation">
          <a className="company" href="index.html">
            Moja Firma
          </a>
          <ul className="nav-list">
            <li className="nav-offer">
              <a href="#about">o nas</a>
            </li>
            <li className="nav-offer">
              <a href="#offer">oferta</a>
            </li>
            <li className="nav-offer">
              <a className="disabled" href="">
                kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
              <NavLink
                exact
                to="/box"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Box split
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Element Transfer
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/nested"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Nested List component
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/infinite"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Infinite scroll
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/game"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Game
              </NavLink>
            </li> */}
           
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

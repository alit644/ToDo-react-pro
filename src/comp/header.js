import React from "react";
import "./Header.css";
import './theme.css';
import { Link, NavLink } from "react-router-dom";
import {useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const Header = () => {
  const {theme , changeTheme} = useContext(ThemeContext);

  return (
    <div>
      <header className={`hide-when-mobile`}>
        <h1>
          <Link to="/">Courses 4 Arab</Link>
        </h1>

        <button onClick={() => {
          changeTheme(theme === "light" ? "dark" : "light")
        }} className="themeBtn">{theme}</button>

        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/Html">
              HTML
            </NavLink>
            {/* <ul className="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul> */}
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/Css">
              CSS
            </NavLink>
            {/* <ul className="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>
              <li className="mini-projects">
                <a href="">mini projects&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul> */}
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/Javascript">
              JavaScript
            </NavLink>
            {/* <ul className="sub-ul sub-of-js">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul> */}
          </li>
        </ul>
      </header>

      <header className="show-when-mobile">
        <Link to="/">
          <h1>Courses 4 Arab</h1>
        </Link>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              <NavLink to="/Html">
                HTML <i className="fas fa-plus" />
              </NavLink>
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              <NavLink to="/Css">
                Css <i className="fas fa-plus" />
              </NavLink>
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              <NavLink to="/Javascript">
                Javascript <i className="fas fa-plus" />
              </NavLink>
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="#">coming soon🔥</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

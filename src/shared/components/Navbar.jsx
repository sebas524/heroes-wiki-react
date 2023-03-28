import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate("/login", {
      replace: "true",
    });
    console.log("you were logged out...");
  };

  return (
    <nav
      className="navbar navbar-expand bg-primary p-2 "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
        >
          HeroesWiki
        </Link>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link "
                aria-current="page"
                to="/marvel"
              >
                Marvel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                aria-current="page"
                to="/dc"
              >
                DC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/search"
              >
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <span className="nav-item nav-link text-info">John</span>
        <button
          className="btn btn-primary"
          onClick={logoutHandler}
        >
          Log out
        </button>
      </div>
    </nav>
  );
};

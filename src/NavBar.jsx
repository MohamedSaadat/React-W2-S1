import React from "react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "./routes";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          LOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {routes.map((route) => {
              return (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={route.path}
                  >
                    {route.routeName}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

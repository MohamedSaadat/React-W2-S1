import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { projectsRoutes } from "./projectsRoutes";

export default function Projects() {
  return (
    <div className="row">
      <div className="col-md-3">
        <ul>
          {projectsRoutes.map((route) => {
            return (
              <li>
                <NavLink to={route.path}>{route.routeName}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-md-9">
        <Outlet />
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="p-5 text-center">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to={"/"} className="btn btn-outline-primary">
        Back to Home
      </Link>
    </div>
  );
}

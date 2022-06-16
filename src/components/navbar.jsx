import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Sweet Cat
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className=" navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className=" nav-link" to="/myImages">
              My images <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className=" nav-link" to="/upload">
              Upload images
            </Link>
          </li>
          <li className="nav-item">
            <Link className=" nav-link" to="/publicImages">
              Public images
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

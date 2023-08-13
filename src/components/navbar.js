import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{
        backgroundColor: "transparent",
        // backgroundColor: "brown",
      }}
    >
      <a className="navbar-brand" href="#home">
        {/* <Link to={`/`}>Veggie Mart</Link> */}
        Veggi Mart
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              HOME
              {/* <Link to={`/`}>HOME</Link> */}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about-us">
              ABOUT US
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/userlogin`}>
              LOGIN
            </Link>
            {/* <a className="nav-link" href="login.html">
              LOGIN
            </a> */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/userreg`}>
              REGISTER
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/vendorreg`}>
              BECOME A VENDOR
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

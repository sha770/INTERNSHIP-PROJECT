import { React, useState } from "react";
import "./login.css"; // Make sure to import the CSS file correctly
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

const UserRegistration = () => {
  return (
    <main className="row m-auto shadow bg-white px-0 rounded-5 col-sm-4">
      <a href="../public/index.html">
        <i className="fa-solid fa-xmark"></i>
      </a>
      <div className="col">
        <form
          action="../public/index.html"
          className="row g-3 needs-validation"
          noValidate
        >
          <h2 className="text-center mb-5">REGISTER</h2>
          <div className="div d-flex p-0">
            <i className="fa-solid fa-circle-user"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Username"
              id="valid-01"
              required
            />
          </div>

          <div className="div d-flex p-0">
            <i className="fa-solid fa-circle-user"></i>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              id="valid-01"
              required
            />
          </div>

          <div className="div d-flex p-0">
            <i className="fa-solid fa-circle-user"></i>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Your Mobile No."
              id="valid-01"
              required
            />
          </div>

          <div className="div d-flex p-0">
            <i className="fa-solid fa-key"></i>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              id="valid-02"
              required
            />
          </div>

          <div className="div d-flex p-0">
            <i className="fa-solid fa-key"></i>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              id="valid-02"
              required
            />
          </div>

          {/* Register Button */}
          <div className="d-flex justify-content-center p-0">
            <button className="btn btn-success px-3 w-100" type="submit">
              REGISTER
            </button>
          </div>

          {/* Button Separator Horizontal Rule (OR) */}
          <div className="d-flex p-0">
            <div className="col-5">
              <hr />
            </div>
            <div className="col-2 text-center">
              <small className="text-secondary">or</small>
            </div>
            <div className="col-5">
              <hr />
            </div>
          </div>

          {/* Redirect to Login Page */}
          <div className="d-flex justify-content-center p-0">
            <a className="btn btn-link" href="../public/index.html">
              LOGIN
            </a>
          </div>
        </form>
      </div>
    </main>
  );
};

export default UserRegistration;

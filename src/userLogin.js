import { React, useState } from "react";
import "./login.css"; // Make sure to import the CSS file correctly
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUserCircle } from "@fortawesome/free-solid-svg-icons";
const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted " + email + " " + password);
  };

  return (
    <div>
      <main className="row m-auto shadow bg-white px-0 rounded-5 col-sm-4">
        <a href="../public/index.html">
          <i className="fa-solid fa-xmark"></i>
        </a>

        <div className="col">
          <form
            action="../public/index.html"
            className="row g-3 needs-validation"
            noValidate
            onSubmit={handleFormSubmit}
          >
            <h2 className="text-center mb-5">Sign-In</h2>

            {/* Email */}
            <div className="div d-flex p-0">
              <FontAwesomeIcon icon={faUserCircle} />
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Email"
                value={email}
                id="valid-01"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            {/* Password */}
            <div className="div d-flex p-0">
              <FontAwesomeIcon icon={faKey} />
              <input
                type="password"
                value={password}
                className="form-control"
                placeholder="Password"
                id="valid-02"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            {/* Sign In Button */}
            <div className="div d-flex p-0">
              <button className="btn btn-primary px-3 w-100" type="submit">
                Login as a User
              </button>
            </div>

            {/* Register now and forget password */}
            <div className="d-flex p-0">
              <div className="col-8">
                <small>
                  {/* Need to fix this link below */}
                  <a href="./user_registration.html">Register Now</a>
                </small>
              </div>
              <div className="col-4 text-center">
                <small>
                  <a href="#" className="text-secondary">
                    Forgot password?
                  </a>
                </small>
              </div>
            </div>

            {/* Gmail Sign IN */}
            <div className="d-flex justify-content-center p-0">
              <i className="fa-brands fa-google alt-logIn"></i>
              <a href="http://gmail.com/" className="col-11">
                <button type="button" className="btn btn-gmail w-100">
                  SIGN IN WITH Gmail
                </button>
              </a>
            </div>

            {/* Or used as separator */}
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

            {/* Redirect to Vendor Login Page */}
            <div className="d-flex justify-content-center p-0">
              <a className="btn btn-link " href="vendor_registration.html">
                Become a Vendor
              </a>
            </div>
          </form>
        </div>
      </main>

      {/*CHATGPT Says: Optional-Might be useful in Future */}
      {/* Uncomment and implement the functionality in React if needed */}
      {/* <script>
        {`
          (() => {
            'use strict';

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            const forms = document.querySelectorAll('.needs-validation');

            // Loop over them and prevent submission
            Array.from(forms).forEach(form => {
              form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                  event.preventDefault();
                  event.stopPropagation();
                }

                form.classList.add('was-validated');
              }, false);
            });
          })();
        `}
      </script> */}
    </div>
  );
};

export default UserLogin;

import { React, useState } from "react";
import "./vendor.css"; // Make sure to import the CSS file correctly
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

const VendorRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    alert(
      "Form Submitted Successfully!" +
        "\nName is" +
        name +
        "\nEmail is" +
        email +
        "\nNumber is" +
        number +
        "\nAadhar is" +
        aadhar +
        "\nPassword is" +
        password +
        "\nConfirm Password is" +
        confirmPassword
    );
  };
  return (
    <div
      //inline css used to avoid css conflict of different background images in vendor.css & login.css
      style={{
        // THat's how we use inline css.
        height: "800px",

        //backgroundImage property not working this way though
        // backgroundImage: "url('./Images/background10.jpg')",

        //jugaadu way to use backgound image using inline css

        backgroundImage: "url(" + require("./background5.jpg") + ")",
        //but now it's not covering the whole page.
      }}
    >
      {/* css working but background image not. */}
      {/* <style
        dangerouslySetInnerHTML={{
          __html: `
          body{
            height:500px;
            // backgroundImage:"url('./Images/background10.jpg')",
            // backgroundImage: "url(" + require("./Images/background10.jpg") + ")"
            background-image:url('./Images/background10.jpg')
          }
   
          `,
        }}
      /> */}
      <main
        className="row m-auto shadow bg-white px-0 rounded-5 col-sm-4"
        // style={{
        //   // THat's how we use inline css.
        //   // height: "5000px",
        //   //backgroundImage property not working this way though
        //   // backgroundImage: "url('./Images/background10.jpg')",
        //   //jugaadu way to implement CSS
        //   backgroundImage: "url(" + require("./Images/background10.jpg") + ")",
        // }}
      >
        <a href="../public/index.html">
          <i className="fa-solid fa-xmark"></i>
        </a>
        <div className="col">
          <form
            action="../public/index.html"
            className="row g-3 needs-validation"
            noValidate
            onSubmit={handleSubmit}
          >
            <h2 className="text-center mb-5">Register as a Vendor</h2>
            <div className="div d-flex p-0">
              <i className="fa-solid fa-circle-user"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Full Name"
                id="valid-01"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
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
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                required
              />
            </div>

            <div className="div d-flex p-0">
              <i className="fa-solid fa-circle-user"></i>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Your Aadhar No."
                id="valid-01"
                value={aadhar}
                onChange={(e) => {
                  setAadhar(e.target.value);
                }}
                required
              />
            </div>

            <div className="div d-flex p-0">
              <i className="fa-solid fa-key"></i>
              <input
                type="password"
                className="form-control"
                placeholder="Set a Password"
                id="valid-02"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                required
              />
            </div>

            {/* Register Button */}
            <div className="d-flex justify-content-center p-0">
              <button className="btn btn-success px-3 w-100" type="submit">
                Apply
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
              <a className="btn btn-link" href="login.html">
                Login as a Customer
              </a>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default VendorRegistration;

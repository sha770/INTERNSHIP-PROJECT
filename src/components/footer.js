const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <h2 className="footer-about">Veggie Mart</h2>
          <p className="footer-para">
            A website to get the latest vegetable prices, predict future prices,
            and many more.
          </p>
        </div>
        <div className="col d-flex flex-column">
          <h2 className="footer-about ">
            Contact Us{" "}
            <div>
              <span></span>
            </div>
          </h2>
          <div className="d-block">
            <p className="email-id">contact@vegetablewebsite.com</p>
            <p>(+91)7454005876</p>
            <p>(+91)87692 92609</p>
          </div>
        </div>
        <div className="col d-flex flex-column">
          <div className="d-block text-left">
            <div className="language-dropdown">
              <label htmlFor="language-select">Language:</label>
              <select id="language-select">
                <option value="en">English</option>
                <option value="hn">Hindi</option>
              </select>
            </div>
          </div>
          <br />
          <div className="d-block text-left">
            <a href="#top" className="back-to-top-btn">
              Back to Top
            </a>
          </div>
        </div>
        <div className="col">
          <div className="d-block">
            <h3>
              News & Updates
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <br />
          </div>
          <div className="d-block">
            <form>
              <i className="fa-regular fa-envelope"></i>
              <input type="email" placeholder="Enter your email id" required />
              <button type="submit">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>
          </div>
          <div className="d-block">
            <div className="social-icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-pinterest"></i>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </footer>
  );
};
export default Footer;

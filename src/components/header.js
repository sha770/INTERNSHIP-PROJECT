const Header = () => {
  return (
    <div>
      <div className="heading-container" id="home">
        <div className="main-heading">Veggie Mart</div>
        <div className="sub-heading">Your One Stop Shop for Fresh Veggies</div>
      </div>

      <div className="container" id="about-us">
        <h1 className="text-center about-heading">About Us</h1>
        <div className="about-subheading">
          <p className="lead">
            Welcome to VeggieMart, your one-stop destination for fresh, organic,
            and locally sourced vegetables at the best price possible. We are
            committed to providing our customers with the highest quality
            produce while supporting local farmers and vendors.
          </p>
          <p className="lead">
            Whether you are a customer seeking the freshest vegetables for your
            kitchen or a vendor looking to expand your reach, FreshVegeMart has
            got you covered. Join us on this journey towards healthier eating
            and supporting local communities.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header;

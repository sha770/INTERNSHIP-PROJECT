const Services = () => {
  return (
    <div className="service-container">
      <h1 className="display-4">Services We Provide!</h1>
      <div className="feature-text">
        <i className="fas fa-solid fa-tag fa-5x features-icon"></i>
        <h3 className="feature-title">Check Price</h3>
        <p className="feature-p">
          Check the latest prices of all the freshest vegetables.
        </p>
      </div>
      <div className="feature-text">
        <i className="fas fa-solid fa-clock fa-5x features-icon"></i>
        <h3 className="feature-title">Future Price</h3>
        <p className="feature-p">See the Future Prices of the Vegetables.</p>
      </div>
      <div className="feature-text">
        <i className="fas fa-solid fa-chart-line fa-5x features-icon"></i>
        <h3 className="feature-title">Visualize Data</h3>
        <p className="feature-p">
          See the Data of Vegetable Prices in Chart Representation.
        </p>
      </div>
      <div className="feature-text">
        <i className="fas fa-solid fa-map-pin fa-5x features-icon"></i>
        <h3 className="feature-title">Locate</h3>
        <p className="feature-p">Locate the nearest market to your location.</p>
      </div>
    </div>
  );
};
export default Services;

<div className="container">
  <section className="slider">
    <div
      id="carousel-example-generic"
      className="carousel slide"
      data-ride="carousel"
    >
      {/* Indicators */}
      <ol className="carousel-indicators">
        <li
          data-target="#carousel-example-generic"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>

      {/* Wrapper for slides */}
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img src="Images/background6.jpg" alt="..." />
          <div className="carousel-caption">
            <h2
              className="animated bounceInRight"
              style={{ animationDelay: "1s" }}
            >
              Best deals
            </h2>
            <h3
              className="animated bounceInLeft"
              style={{ animationDelay: "2s" }}
            >
              Carrot are in lowest price here:vendor=xyz
            </h3>
          </div>
        </div>
        <div className="item">
          <img src="Images/tomato.jpg" alt="..." />
          {/* <img src="https://unsplash.com/photos/-jzHXOYtcA4" alt="..." /> */}
          <div className="carousel-caption">
            <h2
              className="animated slideInDown"
              style={{
                animationDelay: "1s",
              }}
            >
              Grab the offer
            </h2>

            <h3
              className="animated slideInRight"
              style={{
                animationDelay: "2s",
              }}
            >
              We are selling at 20% discount on 2.5kg.vendor-abc
            </h3>
          </div>
        </div>
        <div className="item">
          <img src="Images/greenv.jpg" alt="..." />
          <div className="carousel-caption">
            <h2 className="animated zoomIn" style={{ animationDelay: "1s" }}>
              Best Customer Support
            </h2>
            <h3 className="animated zoomIn" style={{ animationDelay: "2s" }}>
              Feel free to contact us.
            </h3>
          </div>
        </div>
      </div>

      {/* Controls */}
      <a
        className="left carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="prev"
      >
        <span
          className="glyphicon glyphicon-chevron-left"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="right carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="next"
      >
        <span
          className="glyphicon glyphicon-chevron-right"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </section>
</div>;

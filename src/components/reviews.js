const Reviews = () => {
  return (
    <section id="reviews">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h2 className="text">
              I highly recommend this platform to any vendor looking to expand
              their market reach and connect with customers. Thank you, Veggie
              Mart.
            </h2>
            <img
              className="review-img"
              src="https://images.pexels.com/photos/6787567/pexels-photo-6787567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="user-profile"
            />
            <em> Gupta Groceries, Dehradun</em>
          </div>
          <div className="carousel-item">
            <h2 className="text">
              I am delighted to share my wonderful experience as a customer with
              FreshVegeMart! Thank you for making my vegetable shopping
              experience enjoyable and meaningful.
            </h2>
            <img
              className="review-img"
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="user-profile"
            />
            <em>Rahul Jain, Shimla</em>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};
export default Reviews;

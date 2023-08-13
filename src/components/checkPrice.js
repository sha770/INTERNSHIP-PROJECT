import React from "react";

const CheckPrice = () => {
  return (
    <section className="check-pri-cont">
      <div className="check">
        <h2 className="head-design">Wants to Check Latest Price?</h2>
        <h4 className="caption">
          You can check the current market price of vegetables here.
        </h4>
      </div>

      <div className="search-box">
        <input
          type="text"
          className="input_text"
          placeholder="Search by location"
        />
        <input
          type="text"
          className="input_text"
          placeholder="Search by veggie"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
    </section>
  );
};

export default CheckPrice;

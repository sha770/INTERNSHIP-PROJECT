import { React, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const MyCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src="Images/background6.jpg"></img>

          <Carousel.Caption>
            <h3>Best Deals</h3>
            <p>Carrots are in lowest price here -Vendor ABC</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="Images/tomato.jpg"></img>

          <Carousel.Caption>
            <h3>Grab The Offer</h3>
            <p>We are selling at 20% discount on 2.5kg.vendor-abc</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="Images/greenv.jpg"></img>
          <Carousel.Caption>
            <h3> Best Customer Support</h3>
            <p>Feel free to contact us.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;

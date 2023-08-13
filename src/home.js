import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./home.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Services from "./components/services";
import MyCarousel from "./components/carousal";
import GraphSection from "./components/graphSection";
import Reviews from "./components/reviews";
import Footer from "./components/footer";
import CheckPrice from "./components/checkPrice";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <MyCarousel />
      <GraphSection />
      <CheckPrice />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;

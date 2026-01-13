import React from "react";
import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/main.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import TrekkingTours from "../components/Places/TrekkingTours";
import BikeTours from "../components/Places/BikeTours";
import CompanyIntro from "../components/CompanyIntro";
import Adventure from "../components/Places/Adventure";
import CustomerCounter from "../components/counter/customerCounter"; 
import StayConnected from "./StayConnected";
import MountainTours from "../components/MountainTours";
import HeroSlider from "../components/slider/heroSlider";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <div>
        <HeroSlider /> 
        <Places handleOrderPopup={handleOrderPopup} />
        <div className="my-20">
          <TrekkingTours />
          <Adventure />
          <BikeTours />
          <CompanyIntro />
          <CustomerCounter />
        </div>
        <Banner />
        <MountainTours />
        <Testimonial />
        <StayConnected />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;

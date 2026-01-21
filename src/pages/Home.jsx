import React from "react";
import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/main.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
// import BannerPic from "../components/BannerPic/BannerPic";
// import BannerImg from "../assets/cover-women.jpg";
// import Banner2 from "../assets/travel-cover2.jpg";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import TrekkingTours from "../components/Places/TrekkingTours";
import BikeTours from "../components/Places/BikeTours";
import CompanyIntro from "../components/CompanyIntro";
import Adventure from "../components/Places/Adventure";
// import TrekkingTours from './components/Places/TrekkingTours';
<<<<<<< HEAD
import CustomerCounter from "../components/counter/customerCounter";
import StayConnected from "./StayConnected";
import MountainTours from "../components/MountainTours";
=======
import CustomerCounter from "../components/counter/customerCounter";  //  Import counter
import StayConnected from "./StayConnected";
import MountainTours from "../components/MountainTours";

>>>>>>> 3892f0f75ff4618c33ce8e270ec616648fa0a584
import HeroSlider from "../components/slider/heroSlider";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <div>
<<<<<<< HEAD
        <HeroSlider /> {/* <-- Slider appears at top of page */}
        <Places handleOrderPopup={handleOrderPopup} />
        <div className="my-20">
          {/* <TrekkingTours /> */}
          <TrekkingTours />
          <Adventure />
          <BikeTours />
          <CompanyIntro />
=======

        <HeroSlider />    {/* <-- Slider appears at top of page */}
        <Places handleOrderPopup={handleOrderPopup} />
        <div className="my-20">
          {/* <TrekkingTours /> */}
            <TrekkingTours />
            <Adventure />
            <BikeTours />
             <CompanyIntro />
       
>>>>>>> 3892f0f75ff4618c33ce8e270ec616648fa0a584
          <CustomerCounter />
        </div>
        {/* <BlogsComp /> */}
        <Banner />
        <MountainTours />
        {/* <BannerPic img={Banner2} /> */}
        <Testimonial />
<<<<<<< HEAD
        <StayConnected />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
=======
      <  StayConnected/>
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

>>>>>>> 3892f0f75ff4618c33ce8e270ec616648fa0a584
      </div>
    </>
  );
};

<<<<<<< HEAD
=======

>>>>>>> 3892f0f75ff4618c33ce8e270ec616648fa0a584
export default Home;

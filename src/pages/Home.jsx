import React from "react";
import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/main.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/cover-women.jpg";
import Banner2 from "../assets/travel-cover2.jpg";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import TrekkingTours from "../components/Places/TrekkingTours";

// import TrekkingTours from './components/Places/TrekkingTours';
import CustomerCounter from "../components/counter/customerCounter";  //  Import counter
import HeroSlider from "../components/slider/heroSlider";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <div>

        <HeroSlider />    {/* <-- Slider appears at top of page */}
        <Places handleOrderPopup={handleOrderPopup} />
        <div className="my-20">
          {/* <TrekkingTours /> */}
            <TrekkingTours />
          <CustomerCounter />
        </div>
        <BlogsComp />
        <Banner />
        <BannerPic img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

      </div>
    </>
  );
};


export default Home;

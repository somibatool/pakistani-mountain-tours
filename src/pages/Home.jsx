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
import CustomerCounter from "../components/counter/customerCounter";  //  Import counter

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <div>
<div className="relative w-full h-screen overflow-hidden">
  {/* Video Background */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover object-center z-[-1]"
  >
    <source src={NatureVid} type="video/mp4" />
  </video>

  {/* Softer Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 via-cyan-900/30 to-transparent z-0"></div>

  {/* Hero Section */}
  <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
    <Hero />
  </div>
</div>



        <Places handleOrderPopup={handleOrderPopup} />

        
        <div className="my-20">
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

import React from "react";
import Places from "../components/Places/Places";
import TrekkingTours from "../components/Places/TrekkingTours";
import Adventure from "../components/Places/Adventure";
import BikeTours from "../components/Places/BikeTours";
import Testimonial from "../components/Testimonial/Testimonial";
import StayConnected from "./StayConnected";

const PlacesRoute = () => {
  return (
    <>
      <div className="pt-14">
        <Places />
       < TrekkingTours/>
      < Adventure />
      < BikeTours />
      <Testimonial />
    <  StayConnected />

        
      </div>
    </>
  );
};

export default PlacesRoute;

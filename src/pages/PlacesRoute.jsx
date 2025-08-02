import React from "react";
import Places from "../components/Places/Places";
import TrekkingTours from "../components/Places/TrekkingTours";
import BikeTours from "../components/Places/BikeTours";

const PlacesRoute = () => {
  return (
    <>
      <div className="pt-14">
        <Places />
       < TrekkingTours/>
      < BikeTours />
        
      </div>
    </>
  );
};

export default PlacesRoute;

import React from "react";
import PlaceCard from "./PlaceCard"; // Reuse same card

// Import images for trekking tours
import Img1 from "../../assets/K2-2nd-Highest-Mountain-Pakistan.webp";
import Img2 from "../../assets/rush peak.jpeg";
import Img3 from "../../assets/rakaposhi.jpeg";


const TrekkingData = [
  {
    img: Img1,
    title: "K2 Base Camp Trek",
    location: "Skardu",
    description: "One of the most iconic trekking routes in Pakistan.",
    link: "/trekkingDetail/k2-base-camp"

  },
  {
    img: Img2,
    title: "Rush Peak Trek",
    location: "Nagar Valley",
    description: "One of the most scenic moderate treks in pakistan",
    link: "/trekkingDetail/Rush-peak-Trek"

  },
  {
    img: Img3,
    title: "Rakaposhi Base Camp Trek",
    location: "Nagar Valley",
    description: "Adventure through green meadows and glaciers.",
    link: "/trekkingDetail/rakaposhi-base-camp"
  },


];

const TrekkingTours = ({ handleOrderPopup }) => {
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container ">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Trekking Tours
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {TrekkingData.map((item, index) => (
            <PlaceCard
              handleOrderPopup={handleOrderPopup}
              key={index}
              {...item}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrekkingTours;

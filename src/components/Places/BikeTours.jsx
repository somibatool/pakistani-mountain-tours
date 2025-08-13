import React from "react";
import PlaceCard from "./PlaceCard";

// Import images for bike tours (replace with real images later)
import Img1 from "../../assets/bike.jpg";
import Img2 from "../../assets/bikeTour/9.jpeg";
import Img3 from "../../assets/bikeTour/11.jpg";

const BikeTourData = [
  {
    img: Img1,
    title: "Skardu Motorbike Tour",
    location: "Skardu",
    description: "Ride through the scenic valleys and lakes of Skardu.",
    link: "/bikeDetail/Skardu-Tour"
    

  },
  {
    img: Img2,
    title: "Karakoram Highway Motorbike Tour",
    location: "Gilgit to Hunza",
    description: "Breathtaking ride on the world's highest paved road.",
    link: "/bikeDetail/karakoram-Highway"

  },
  {
    img: Img3,
    title: "Khunjerab Pass Motorbike Tour",
    location: "Pak-China Border",
    description: "Ultimate adventure to the highest border crossing.",
    link: "/bikeDetail/khunjerab-Pass"
  }
];

const BikeTours = ({ handleOrderPopup }) => {
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Motorbike Tours
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {BikeTourData.map((item, index) => (
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

export default BikeTours;

// src/components/Places/Adventure.jsx

import React from "react";
import PlaceCard from "./PlaceCard";

// Import images for adventure tours
import Img1 from "../../assets/adventure deosii/1.jpg";
import Img2 from "../../assets/adventureFairymedows/1.jpg";
import Img3 from "../../assets/astor/5.jpg";

const AdventureTourData = [
  {
    img: Img1,
    title: "Deosai National Park Tour",
    location: "Skardu",
    description: "Ultimate adventure to the highest border crossing.",
    link: "/adventureDetail/deosai", // 
  },
  {
    img: Img2,
    title: "Fairy Meadows",
    location: "Gilgit to Hunza",
    description: "Breathtaking ride on the world's highest paved road.",
    link: "/adventureDetail/fairy-meadows",
  },
  {
    img: Img3,
    title: "Astore Valley",
    location: "Pak-China Border",
    description: "Ultimate adventure to the highest border crossing.",
    link: "/adventureDetail/astore",
  }
];


const Adventure = ({ handleOrderPopup }) => {
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Adventure Tours
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {AdventureTourData.map((item, index) => (
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

export default Adventure;

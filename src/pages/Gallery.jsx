import React, { useState } from "react";
import Img1 from "../assets/autumn/autumn_12.jpg";
import Img2 from "../assets/autumn/autumn7.jpg";
import Img3 from "../assets/autumn/autumn43.jpg";
import Img4 from "../assets/autumn/ali_abad_tawor.jpg";
import Img5 from "../assets/autumn/tress.jpg";
import Img6 from "../assets/autumn/river.jpg";
import Img7 from "../assets/autumn/river.jpg";
import Img8 from "../assets/autumn/river.jpg";
import Testimonial from "../components/Testimonial/Testimonial";
import StayConnected from "./StayConnected";

// Tabs
const tabs = [
  "Gallery 2025",
  "North Pakistan",
  "South Pakistan",
  "Festivals",
  "Afghanistan",
];



const allImages = {
   "Gallery 2025": [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img1, Img2, Img3, Img4],
  "North Pakistan": [Img5, Img6, Img7, Img8, Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8],
  "South Pakistan": [Img1, Img5, Img2, Img6, Img3, Img7, Img4, Img8, Img1, Img2, Img3, Img5],
  "Festivals": [Img3, Img7, Img4, Img8, Img1, Img5, Img2, Img6, Img3, Img4, Img7, Img8],
  "Afghanistan": [Img1, Img2, Img6, Img7, Img3, Img5, Img4, Img8, Img1, Img5, Img2, Img3],
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("Gallery 2025");

  return (
    <div className="p-6 max-w-7xl mx-auto mt-20">
      
      {/* Full-width header image */}
      <div className="mb-8">
        {/* <img
          src={Img1}
          alt="Gallery Cover"
          className="w-full h-96 object-cover  rounded-xl"
        /> */}
        <div className="mt-4 text-center">
          <h2 className="text-3xl font-bold mb-2">Explore Our Gallery</h2>
          <p className="text-gray-600">
            This is our gallery section where all our tour images are shown. From the mountains of North Pakistan to the vibrant festivals of Kalash, our collection captures the true essence of adventure.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center mb-8 gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition duration-300 ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-white border-gray-300 text-gray-600 hover:bg-blue-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {allImages[activeTab].map((img, index) => (
          <a
            href={img}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="block transform transition-transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-56 object-cover rounded-lg"
            />
          </a>
        ))}
      </div>

      {/* Other sections */}
      <div className="mt-16">
        <Testimonial />
        <StayConnected />
      </div>
    </div>
  );
};

export default Gallery;

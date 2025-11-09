import React, { useState } from "react";
import Img1 from "../assets/team pic/17.jpg";
import Img2 from "../assets/team pic/2.jpg";
import Img3 from "../assets/team pic/3.jpg";
import Img11 from "../assets/team pic/4.jpg";
import Img4 from "../assets/team pic/5.jpg";
import Img5 from "../assets/team pic/6.jpg";
import Img6 from "../assets/team pic/7.jpg";
import Img7 from "../assets/team pic/8.jpg";
import Img8 from "../assets/team pic/9.jpg";
import Img9 from "../assets/team pic/10.jpg";
import Img91 from "../assets/team pic/12.jpg";
import Img92 from "../assets/team pic/13.jpg";
import Img93 from "../assets/team pic/14.jpg";
import Img94 from "../assets/team pic/15.jpg";
import Img95 from "../assets/team pic/16.jpg";
import Img96 from "../assets/team pic/1.jpg";
import Img97 from "../assets/team pic/97.jpg";
import Img98 from "../assets/team pic/team2.jpg"
import Img10 from "../assets/team pic/team 10.jpg";
import Img12 from "../assets/nightview hunza.jpg";
import Img13 from "../assets/rakaposhi-trk/1.jpg";
import Img14 from "../assets/rakaposhi-trk/2.jpg";
import Img15 from "../assets/rakaposhi-trk/6.jpg";
import Img16 from "../assets/rakaposhi-trk/10.jpg";
import Img17 from "../assets/autumn/autumn7.jpg";
import Img18 from "../assets/autumn/local_shuqa.jpg";
import Img19 from "../assets/autumn/localpeople.jpg";
import Img20 from "../assets/autumn/old_women_23.jpg";
import Img21 from "../assets/autumn/truck1.jpg";
import Img22 from "../assets/autumn/karimabad_old_house.jpg";
import Img23 from "../assets/autumn/ganish_river.jpg";
import Img24 from "../assets/south pakistan/1.jpg";
import Img25 from "../assets/south pakistan/2.jpg";
import Img26 from "../assets/south pakistan/3.jpg";
import Img27 from "../assets/south pakistan/4.jpg";
import Img28 from "../assets/south pakistan/5.jpg";
import Img29 from "../assets/south pakistan/6.jpg";
import Img30 from "../assets/south pakistan/7.jpg";
import Img31 from "../assets/south pakistan/8.jpg";
import Img32 from "../assets/south pakistan/9.jpg";
import Img33 from "../assets/south pakistan/10.jpg";
import Img34 from "../assets/south pakistan/16.jpg";
import Img35 from "../assets/south pakistan/15.jpg";
import Img36 from "../assets/culture/1.jpg";
import Img37 from "../assets/culture/2.jpg";
import Img38 from "../assets/culture/15.jpg";
import Img39 from "../assets/culture/4.jpg";
import Img40 from "../assets/culture/5.jpg";
import Img41 from "../assets/culture/6.jpg";
import Img42 from "../assets/culture/7.jpg";
import Img43 from "../assets/culture/8.jpg";
import Img44 from "../assets/culture/9.jpg";
import Img45 from "../assets/culture/10.jpg";
import Img46 from "../assets/culture/11.jpg";
import Img47 from "../assets/culture/12.jpg";
import Img48 from "../assets/newclients/39.jpg";
import Img49 from "../assets/newclients/37.jpg";
import Img50 from "../assets/newclients/3.jpg";
import Img51 from "../assets/newclients/36.jpg";
import Img52 from "../assets/newclients/38.jpg";
import Img53 from "../assets/newclients/6.jpg";
import Img54 from "../assets/newclients/7.jpg";
import Img55 from "../assets/newclients/8.jpg";
import Img56 from "../assets/newclients/26.jpg";
import Img57 from "../assets/newclients/27.jpg";
import Img58 from "../assets/newclients/28.jpg";
import Img59 from "../assets/newclients/30.jpg";
import Img60 from "../assets/newclients/26.jpg";
import Img61 from "../assets/newclients/0.jpg";
import Img62 from "../assets/newclients/1.jpg";
import Img63 from "../assets/newclients/20.jpg";
import Img64 from "../assets/newclients/21.jpg";
import Img65 from "../assets/newclients/22.jpg";
import Img66 from "../assets/newclients/23.jpg";
import Img67 from "../assets/newclients/24.jpg";
import Img68 from "../assets/newclients/25.jpg";
import Img70 from "../assets/newclients/40.jpg";
import Img71 from "../assets/newclients/35.jpg";
import Img72 from "../assets/newclients/42.jpg"
import Img73 from "../assets/newclients/hunza.jpg"
import Img74 from "../assets/newclients/rashid.jpg"
import Img75 from "../assets/newclients/41.jpg"


import Testimonial from "../components/Testimonial/Testimonial";
import StayConnected from "./StayConnected";

// Tabs
const tabs = [
  "Gallery 2024",
  "Gallery 2025",
  "North Pakistan",
  "South Pakistan",
  "Festivals",
  // "Afghanistan",
];



const allImages = {
   "Gallery 2024": [Img1, Img2, Img3,  Img11, Img91, Img9, Img6, Img7, Img8, Img5, Img10,, Img18 , Img4 ,Img92,Img93,Img94 , Img95 ,Img96 ,Img97, Img98],
   "Gallery 2025":[Img48, Img49,Img50,Img51,Img52,Img53,Img54,Img55,Img56,Img57,Img58,Img59,Img60,Img61,Img62, Img63 , Img64 ,Img65, Img66, Img67, Img68,Img70, Img71, Img72],
  "North Pakistan": [Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20, Img21, Img22, Img23, Img67, Img73,Img74,Img75],
  "South Pakistan": [Img24, Img25, Img26, Img27, Img28, Img29, Img30, Img31, Img32, Img33, Img34, Img35],
  "Festivals": [Img36, Img37, Img38, Img39, Img40, Img41, Img42, Img43, Img44, Img45, Img46, Img47],
  // "Afghanistan": [Img1, Img2, Img6, Img7, Img3, Img5, Img4, Img8, Img1, Img5, Img2, Img3],
};


const Gallery = () => {
  const [activeTab, setActiveTab] = useState("Gallery 2024");

  return (
    <div className="p-6 max-w-7xl mx-auto mt-40">
      
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
Welcome to the Gallery section of Pakistani Mountain Tours
, where we showcase unforgettable moments from our tours. This is our gallery section where all our tour images are shown — from the majestic mountains of North Pakistan to the vibrant festivals of Kalash. Our photo collection captures the true essence of adventure, culture, and the beauty that Pakistani Mountain Tours proudly brings to every journey.
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
                ? " bg-gradient-to-r from-primary to-secondary text-white"
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
              className="w-full h-full object-cover rounded-lg"
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

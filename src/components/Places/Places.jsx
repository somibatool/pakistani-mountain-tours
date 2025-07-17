import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "Attabad Lake",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/place-detail/boat"
  },
  {
 
  img: Img2,
  title: "Karimabad Hunza",
  location: "Hunza",
  description: "...",
  link: "/placeDetailHunza/karimabad-hunza"
}

  ,
  {
    img: Img3,
    title: "Fairy Meadows",
    location: "Astore",
    description: "...",
    link: "/fairyMedowsDetail/fairy-meadows"
  },
  {
    img: Img4,
    title: "Autumn",
    location: "Gilgit KKH",
    description: "...",
    link: "/autumnDetail/autumn"
  },
  {
    img: Img5,
    title: "Lake",
    location: "Skardu",
    description: "...",
    link: "/lakeDetail/skardu-lake"
  },
  {
    img: Img6,
    title: "Fairy Meadows",
    location: "Naltar",
    description: "...",
    link: "/nalterDetail/fairy-meadows-naltar"
  },
];


const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
           Popular Tours
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;

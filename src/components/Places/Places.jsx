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
    title: "Karakoram And Himalayas",
    location: "Attabad Lake",
    description: "Starting point: Islamabad Airport End: Islamabad Airport Duration Trip :...",
    link: "/place-detail/Karakoram And Himalayas"
  },
  {
 
  img: Img2,
  title: "Hindu Kush And Karakoram",
  location: "Hunza",
  description: "Start point: Islamabad End point: Islamabad Ideal time: May to...",
  link: "/placeDetailHunza/Hindu Kush And Karakoram"
}

  ,
  {
    img: Img3,
    title: "Gilgit Balistan Tour",
    location: "Fairy Medows",
    description: "Gilgit Baltistan Pakistan – Land of Lakes and Landscapes Vistas...",
    link: "/fairyMedowsDetail/Gilgit Balistan Tour"
  },
  {
    img: Img4,
   
      title: "Spring/Autumn Tour – Gilgit-Baltistan",
      // title: "Autumn",
    location: "Gilgit KKH Autumn",
    description: "Cost: Ask (depends on the number of people) Included: One...",
   link: "/autumnDetail/Spring-autumn-tour"

  },
  {
    img: Img5,
     title: "South Pakistan’s Cultural Heritage",
    // title: "Lake",
    location: "Skardu lake",
    description: "Cost: Ask (depends on the number of people) Included: All...",
    link: "/lakeDetail/South Pakistan’s Cultural Heritage"
  },
  {
    img: Img6,
    title: "Pakistan’s Cultural, Historical & Religious Tour",
    location: "Naltar",
    description: "Cost: Ask (depends on the number of people) Included: All..",
    link: "/nalterDetail/Pakistan’s Cultural, Historical & Religious Tour"
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

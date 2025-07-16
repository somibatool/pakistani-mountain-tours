import React from "react";
import { useNavigate } from "react-router-dom";

const PlaceCard = ({ img, title, location, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const routeTitle = title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/place/${routeTitle}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
    >
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{location}</p>
        <p className="text-sm mt-2">{description.slice(0, 80)}...</p>
      </div>
    </div>
  );
};

export default PlaceCard;

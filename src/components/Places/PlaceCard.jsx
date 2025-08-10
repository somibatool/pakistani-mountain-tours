import { Link } from "react-router-dom";

const PlaceCard = ({ img, title, location, description, link }) => {
  return (
    <div className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col cursor-pointer p-1">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover rounded-t-xl"
      />

      <div className="p-4 flex-grow">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-2">{location}</p>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>

      <div className="p-4">
        <Link to={link}>
         <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 rounded-full flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 ease-in-out">
  View
  <span className="text-lg">{'>'}</span>
</button>

        </Link>
      </div>
    </div>
  );
};

export default PlaceCard;

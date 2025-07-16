// import React from "react";
// import { IoLocationSharp } from "react-icons/io5";

// const PlaceCard = ({
//   img,
//   title,
//   location,
//   description,
//   price,
//   type,
//   handleOrderPopup,
// }) => {
//   return (
//     <>
//       <div
//         className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer"
//         onClick={handleOrderPopup}
//       >
//         <div className="overflow-hidden">
//           <img
//             src={img}
//             alt="No image"
//             className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
//           />
//         </div>

//         <div className="space-y-2 p-3">
//           <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
//           <div className="flex items-center gap-2 opacity-70">
//             <IoLocationSharp />
//             <span>{location}</span>
//           </div>
//           <p className="line-clamp-2">{description}</p>
//           <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
//             <div className="opacity-70">
//               <p>{type}</p>
//             </div>
//             <div>
//               <p className="text-2xl font-bold">${price}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PlaceCard;
import React from "react";
import { useNavigate } from "react-router-dom";

const PlaceCard = ({ img, title, location, description, price, type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/place/${title}`);
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
        <div className="mt-2 font-semibold">PKR {price}</div>
      </div>
    </div>
  );
};

export default PlaceCard;

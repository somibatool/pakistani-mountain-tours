import React from 'react';
import { useParams } from 'react-router-dom';

const BikeDetailPage = () => {
  const { title } = useParams();

  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-10">
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        {title} - Bike Tour
      </h1>

      <h3 className="text-lg font-semibold text-center mb-4 text-gray-700">
        Adventure Bike Journey in Northern Pakistan
      </h3>

      <p className="text-center text-sm text-gray-600 mb-10">
        Starting Point: Islamabad | Duration: 7 Days
      </p>

      <h2 className="text-2xl font-semibold text-black mb-3">
        Tour Description
      </h2>
      <p className="text-gray-800 mb-8 leading-relaxed">
        Experience the ultimate bike tour through {title}, exploring majestic mountains, scenic roads,
        and breathtaking views along the way. Whether riding to Skardu, across the Karakoram Highway,
        or up to Khunjerab Pass, this trip is for adventure lovers.
      </p>

      {/* You can add highlights, images, itinerary etc. as in PlaceDetail */}
    </div>
  );
};

export default BikeDetailPage;

import React from 'react';
import { useParams } from 'react-router-dom';

const Lake = () => {
  const { title } = useParams();

  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto">
      <div className="max-w-4xl rounded-lg p-6 space-y-6">

        {/* Title Section */}
        <h1 className="text-4xl font-bold text-blue-700 border-b pb-2">
          About us: {title}
        </h1>

        {/* Company Info */}
        <div className="text-sm text-gray-600 leading-relaxed">
          <p><strong>PAKISTANI MOUNTAIN TOURS (PVT), LTD</strong></p>
          <p>License No. ID-2590</p>
          <p>Department of Tourist Services, Government of Pakistan</p>
        </div>

        {/* Tour Schedule */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">TOUR SCHEDULE</h2>
          <h3 className="text-lg font-bold text-gray-700 mb-1">Destination: Lakes of Gilgit-Baltistan</h3>
          
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm md:text-base">
            <li><strong>Day 12 – Islamabad:</strong> Arrival, short city tour, and overnight stay at hotel.</li>
            <li><strong>Day 2 – Islamabad to Skardu:</strong> Scenic flight. Visit Shangrila Resort, Kachura Lake, and Upper Kachura Lake.</li>
            <li><strong>Day 3 – Sadpara Lake:</strong> Full day visit to Sadpara Lake, known for its turquoise water surrounded by rocky mountains.</li>
            <li><strong>Day 4 – Sheosar Lake:</strong> Travel towards Deosai Plains and explore Sheosar Lake – the jewel of Deosai at 4,142 meters altitude.</li>
            <li><strong>Day 5 – Satpara Lake:</strong> Relaxing day at Satpara Lake for boating and local sightseeing.</li>
            <li><strong>Day 6 – Attabad Lake (Hunza):</strong> Drive towards Hunza and enjoy a boat ride on the famous Attabad Lake with its crystal blue water.</li>
            <li><strong>Day 7 – Borith Lake:</strong> Visit peaceful Borith Lake near Gulmit. Ideal for nature walks and bird watching.</li>
            <li><strong>Day 8 – Return Journey:</strong> Return to Islamabad via Babusar Pass or Karakoram Highway.</li>
          </ul>
        </section>

        {/* Cost & Inclusions */}
        <section className="pt-6 border-t">
          <h2 className="text-xl font-semibold text-gray-800">Trip Includes:</h2>
          <ul className="list-disc list-inside text-gray-700 text-sm md:text-base">
            <li>3 and 4-star Hotels</li>
            <li>All Meals (Breakfast, Lunch, Dinner)</li>
            <li>Private Transportation</li>
            <li>Entrance Fees</li>
            <li>Boating at Attabad and Satpara Lakes</li>
            <li>Professional Local Guide</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4 text-gray-800">Not Included:</h2>
          <ul className="list-disc list-inside text-gray-700 text-sm md:text-base">
            <li>International Flights</li>
            <li>Personal Expenses</li>
          </ul>

          <p className="mt-4 font-semibold text-gray-800">
            <strong>Total Cost Per Person:</strong> 25,000 PKR
          </p>
        </section>

        {/* Contact */}
        <section className="pt-6 border-t text-sm text-gray-600">
          <h3 className="text-md font-semibold mb-1 text-gray-800">Contact:</h3>
          <p>Arif Market Cinema Bazar, Gilgit, Pakistan</p>
          <p>Email: pakistanimountaintour@gmail.com</p>
          <p>Phone: +66 956071467</p>
        </section>

      </div>
    </div>
  );
};

export default Lake;

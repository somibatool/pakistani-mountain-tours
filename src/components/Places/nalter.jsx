import React from 'react';
import { useParams } from 'react-router-dom';

const Nalter = () => {
  const { title } = useParams();

  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto">
      <div className="max-w-4xl rounded-lg p-6 space-y-6">

        {/* Title Section */}
        <h1 className="text-4xl font-bold text-emerald-700 border-b pb-2">
          Naltar Valley Tour: {title}
        </h1>

        {/* Company Info */}
        <div className="text-sm text-gray-600 leading-relaxed">
          <p><strong>PAKISTANI MOUNTAIN TOURS (PVT), LTD</strong></p>
          <p>License No. ID-2590</p>
          <p>Department of Tourist Services, Government of Pakistan</p>
        </div>

        {/* Tour Description */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Tour Overview</h2>
          <p className="text-gray-700 text-sm md:text-base">
            Naltar Valley – the hidden paradise of Pakistan, known for its magical green lakes, pine forests,
            snow-covered mountains, and skiing slopes. This peaceful valley offers unmatched scenic beauty,
            ideal for travelers who love adventure and solitude.
          </p>
        </section>

        {/* Tour Schedule */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Tour Schedule</h2>

          <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm md:text-base">
            <li><strong>Day 1 – Islamabad to Gilgit:</strong> Flight or road journey to Gilgit. Overnight stay at hotel.</li>
            <li><strong>Day 2 – Gilgit to Naltar:</strong> 4WD Jeep drive to Naltar Valley through mountain roads. Explore the valley.</li>
            <li><strong>Day 3 – Green Lakes Exploration:</strong> Visit Satrangi, Blue, and Green Lakes, famous for their colorful reflections.</li>
            <li><strong>Day 4 – Naltar Ski Resort:</strong> Enjoy winter sports or relax amidst natural beauty. Optional short hikes.</li>
            <li><strong>Day 5 – Return to Gilgit:</strong> Drive back to Gilgit. Visit Gilgit Bazaar and historical sites.</li>
            <li><strong>Day 6 – Departure:</strong> Return flight or drive to Islamabad for departure.</li>
          </ul>
        </section>

        {/* Cost & Inclusions */}
        <section className="pt-6 border-t">
          <h2 className="text-xl font-semibold text-gray-800">Trip Includes:</h2>
          <ul className="list-disc list-inside text-gray-700 text-sm md:text-base">
            <li>4WD Jeep Transport</li>
            <li>Hotel and Cabin Accommodation</li>
            <li>All Meals (Breakfast, Lunch, Dinner)</li>
            <li>Tour Guide & Driver</li>
            <li>Entry Fees to Parks and Resorts</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4 text-gray-800">Not Included:</h2>
          <ul className="list-disc list-inside text-gray-700 text-sm md:text-base">
            <li>Personal expenses</li>
            <li>International Flights</li>
            <li>Travel Insurance</li>
          </ul>

          <p className="mt-4 font-semibold text-gray-800">
            <strong>Total Cost Per Person:</strong> 28,000 PKR
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

export default Nalter;

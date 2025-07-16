import React from 'react';
import { useParams } from 'react-router-dom';

const PlaceDetail = () => {
  const { title } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-10">

      {/* Title Section */}
      <h1 className="text-4xl font-bold text-blue-800 border-b pb-2 mb-4">
        About us: {title}
      </h1>

      {/* Image Full Width */}
      <div>
        <img src="/public/IMG_1327.jpg" alt="Hunza Tour" className="w-full rounded-lg mb-6" />
      </div>

      {/* Company Info */}
      <div className="text-sm text-gray-600 leading-relaxed mb-8">
        <p><strong>PAKISTANI MOUNTAIN TOURS (PVT), LTD</strong></p>
        <p>License No. ID-2590</p>
        <p>Department of Tourist Services, Government of Pakistan</p>
      </div>

      {/* Tour Schedule */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">TOUR SCHEDULE</h2>
        <h3 className="text-lg font-bold text-gray-700 mb-1">Destination: Gilgit-Baltistan</h3>
        
        <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm md:text-base">
          <li><strong>Day 1 – Islamabad:</strong> Arrival and briefing, evening flight. Overnight at Hotel Crossroads.</li>
          <li><strong>Day 2 – Islamabad to Skardu:</strong> Scenic flight, view of Nanga Parbat, visit Manthal Buddha, Sadpara Lake, and Kachura lakes. Overnight at Himmel Skardu.</li>
          <li><strong>Day 3 – Skardu to Hunza:</strong> View 3 mountain ranges, Old Silk Road, Rakaposhi viewpoint, Baltit Fort, Duiker sunset. Overnight at Fairy Land Hotel Hunza.</li>
          <li><strong>Day 4 – Hunza to Passu Gojal:</strong> Sunrise view, Altit Fort, Attabad Lake, Passu & Batura Glacier, Hussaini bridge. Overnight at Villa Darya Hunza.</li>
          <li><strong>Day 5 – Fairy Meadows:</strong> Travel via Raikot Bridge & hike to Fairy Meadows. Overnight in cabins.</li>
          <li><strong>Day 6 – Viewpoint Hike:</strong> Hike to Beyal Camp, Nanga Parbat viewpoint. Return to hotel.</li>
          <li><strong>Day 7 – Return to Naran/Besham:</strong> Via Babusar Pass or KKH. Overnight at Naran/Besham.</li>
          <li><strong>Day 8 – Islamabad & Departure:</strong> Visit Taxila, Faisal Mosque, Monument. Departure for Bangkok.</li>
        </ul>
      </section>

      {/* Cost & Inclusions */}
      <section className="pt-6 border-t mb-10">
        <h2 className="text-xl font-semibold text-gray-800">Trip Includes:</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base">
          <li>4-star Hotels</li>
          <li>All Meals (Breakfast, Lunch, Dinner)</li>
          <li>Water & Fruits</li>
          <li>Transport & Fuel</li>
          <li>Entrance Fees</li>
          <li>Domestic Flight (Islamabad – Skardu)</li>
          <li>Guide & Visa Assistance</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 text-gray-800">Not Included:</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base">
          <li>International Flights</li>
        </ul>

        <p className="mt-4 font-semibold text-gray-800">
          <strong>Total Cost Per Person:</strong> 32,000 THB
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
  );
};

export default PlaceDetail;

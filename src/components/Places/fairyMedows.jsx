import React from 'react';
import { useParams } from 'react-router-dom';
// This is gilgit baltistan tour and in popular section tour 

import Img1 from '../../assets/autumn/autumn_12.jpg';
import Img2 from '../../assets/autumn/autumn7.jpg';
import Img3 from '../../assets/autumn/autumn43.jpg';
import Img4 from '../../assets/autumn/ali_abad_tawor.jpg';
import Img5 from '../../assets/autumn/tress.jpg';
import Img6 from '../../assets/autumn/river.jpg';

const FairyMedows = () => {
  const { title } = useParams();

  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto">
      <div className="max-w-4xl rounded-lg p-6 space-y-6">

        {/* Title Section */}
        <h1 className="text-4xl font-bold text-blue-800 border-b pb-2">
          About us: {title}
        </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                  <img src={Img1} alt="Autumn View 1" className="w-full h-48 object-cover rounded-lg" />
                  <img src={Img2} alt="Autumn View 2" className="w-full h-48 object-cover rounded-lg" />
                  <img src={Img3} alt="Autumn View 3" className="w-full h-48 object-cover rounded-lg" />
                  <img src={Img4} alt="Autumn View 4" className="w-full h-48 object-cover rounded-lg" />
                  <img src={Img5} alt="Autumn View 5" className="w-full h-48 object-cover rounded-lg" />
                  <img src={Img6} alt="Autumn View 6" className="w-full h-48 object-cover rounded-lg" />
                </div>

        {/* Company Info */}
        <div className="text-sm text-gray-600 leading-relaxed">
          <p><strong>PAKISTANI MOUNTAIN TOURS (PVT), LTD</strong></p>
          <p>License No. ID-2590</p>
          <p>Department of Tourist Services, Government of Pakistan</p>
        </div>

        {/* Tour Schedule */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">TOUR SCHEDULE</h2>
          <h3 className="text-lg font-bold text-gray-700 mb-1">Destination: Fairy Medows</h3>
          
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
        <section className="pt-6 border-t">
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
    </div>
  );
};

export default FairyMedows;

import React from 'react';
import { useParams } from 'react-router-dom';

const Autumn = () => {
  const { title } = useParams();

  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto">
      <div className="max-w-4xl rounded-lg p-6 space-y-6">

        {/* Title Section */}
        <h1 className="text-4xl font-bold text-orange-700 border-b pb-2">
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
          <h3 className="text-lg font-bold text-gray-700 mb-1">Destination: Autumn in Hunza & Skardu</h3>
          
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm md:text-base">
            <li><strong>Day 1 – Islamabad:</strong> Arrival and briefing. Enjoy autumn colors in the capital city parks. Overnight at hotel.</li>
            <li><strong>Day 2 – Islamabad to Skardu:</strong> Scenic flight with views of autumn forests. Visit lakes and forts. Overnight at Skardu hotel.</li>
            <li><strong>Day 3 – Skardu:</strong> Explore Shigar Valley and Cold Desert. Witness golden-yellow autumn leaves. Visit Shigar Fort.</li>
            <li><strong>Day 4 – Skardu to Hunza:</strong> Drive towards Hunza Valley through the Karakoram Highway. Photography stops along riverside autumn trees.</li>
            <li><strong>Day 5 – Hunza Exploration:</strong> Explore Altit Fort, Baltit Fort, Attabad Lake, Passu Cones, and enjoy the vibrant autumn scenery.</li>
            <li><strong>Day 6 – Duikar & Hopper:</strong> Catch sunset/sunrise views over Hunza from Duikar viewpoint. Visit Hopper Glacier in Nagar Valley.</li>
            <li><strong>Day 7 – Return to Naran/Besham:</strong> Drive back enjoying more autumn vistas. Overnight at Naran or Besham.</li>
            <li><strong>Day 8 – Return to Islamabad:</strong> Farewell dinner and departure.</li>
          </ul>
        </section>

        {/* Cost & Inclusions */}
        <section className="pt-6 border-t">
          <h2 className="text-xl font-semibold text-gray-800">Trip Includes:</h2>
          <ul className="list-disc list-inside text-gray-700 text-sm md:text-base">
            <li>4-star Hotels</li>
            <li>All Meals (Breakfast, Lunch, Dinner)</li>
            <li>Transport & Fuel</li>
            <li>Entrance Fees</li>
            <li>Photography Assistance</li>
            <li>Professional Tour Guide</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4 text-gray-800">Not Included:</h2>
          <ul className="list-disc list-inside text-gray-700 text-sm md:text-base">
            <li>International Flights</li>
            <li>Personal Expenses</li>
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

export default Autumn;

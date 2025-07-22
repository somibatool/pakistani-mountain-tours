import React from 'react';
import { useParams } from 'react-router-dom';

import Img1 from '../../assets/autumn/autumn_12.jpg';
import Img2 from '../../assets/autumn/autumn7.jpg';
import Img3 from '../../assets/autumn/autumn43.jpg';
import Img4 from '../../assets/autumn/ali_abad_tawor.jpg';
import Img5 from '../../assets/autumn/tress.jpg';
import Img6 from '../../assets/autumn/river.jpg';

const FairyMedows = () => {
  const { title } = useParams();

  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-10">
      
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        {title} - Fairy Meadows Adventure Tour
      </h1>

      {/* Subheading */}
      <h3 className="text-lg font-semibold text-center mb-4 text-gray-700">
        Land of Majestic Mountains & Fairy Meadows
      </h3>

      {/* Basic Tour Info */}
      <div className="text-center text-sm text-gray-600 mb-10">
        <p>Starting point: Islamabad Airport | End: Islamabad Airport</p>
        <p>Duration Trip : 7 nights / 8 days</p>
        <p>Ideal time: May to October</p>
      </div>

      {/* Tour Description */}
      <h2 className="text-2xl font-semibold text-black mb-3">Tour Description</h2>
      <p className="text-gray-800 mb-8 leading-relaxed">
        Experience the beauty of Fairy Meadows, Pakistan’s prime destination at the foot of Nanga Parbat, 
        the 9th highest peak in the world. Enjoy lush green meadows, wooden cabins, and panoramic mountain views. 
        This adventure tour includes scenic flights, cultural heritage visits, and breathtaking landscapes across Hunza, Skardu, and Fairy Meadows.
      </p>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <img src={Img1} alt="Tour 1" className="w-full h-48 object-cover rounded-lg" />
        <img src={Img2} alt="Tour 2" className="w-full h-48 object-cover rounded-lg" />
        <img src={Img3} alt="Tour 3" className="w-full h-48 object-cover rounded-lg" />
        <img src={Img4} alt="Tour 4" className="w-full h-48 object-cover rounded-lg" />
        <img src={Img5} alt="Tour 5" className="w-full h-48 object-cover rounded-lg" />
        <img src={Img6} alt="Tour 6" className="w-full h-48 object-cover rounded-lg" />
      </div>

      {/* Trip Information */}
      <table className="w-full border border-gray-300 text-sm mb-10">
        <tbody>
          <tr className="border border-gray-300">
            <td className="p-3 font-semibold border border-gray-300">Cost:</td>
            <td className="p-3 border border-gray-300">32,000 THB per person</td>
          </tr>
          <tr className="border border-gray-300 align-top">
            <td className="p-3 font-semibold border border-gray-300">Included:</td>
            <td className="p-3 border border-gray-300">
              <ul className="list-disc list-inside space-y-1">
                <li>4-star Hotels</li>
                <li>All Meals (Breakfast, Lunch, Dinner)</li>
                <li>Water & Fruits</li>
                <li>Transport & Fuel</li>
                <li>Entrance Fees</li>
                <li>Domestic Flight (Islamabad – Skardu)</li>
                <li>Guide & Visa Assistance</li>
              </ul>
            </td>
          </tr>
          <tr className="border border-gray-300 align-top">
            <td className="p-3 font-semibold border border-gray-300">Not Included:</td>
            <td className="p-3 border border-gray-300">
              <ul className="list-disc list-inside space-y-1">
                <li>International Flights</li>
                <li>Personal Expenses</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Tour Schedule */}
      <h2 className="text-2xl font-semibold text-black mb-4">Tour Schedule</h2>
      <ul className="list-inside text-gray-800 leading-relaxed space-y-4 mb-10">
        <li><strong>Day 1:</strong> Arrival at Islamabad. City exploration. Overnight stay.</li>
        <li><strong>Day 2:</strong> Flight to Skardu. Explore Sadpara Lake and Kachura Lakes.</li>
        <li><strong>Day 3:</strong> Drive to Hunza. Sightseeing en route including Rakaposhi viewpoint.</li>
        <li><strong>Day 4:</strong> Visit Altit Fort, Attabad Lake, and Passu Glacier.</li>
        <li><strong>Day 5:</strong> Travel to Fairy Meadows via Raikot Bridge and trek to meadows.</li>
        <li><strong>Day 6:</strong> Hike to Beyal Camp and Nanga Parbat viewpoint.</li>
        <li><strong>Day 7:</strong> Return to Naran/Besham. Overnight stay.</li>
        <li><strong>Day 8:</strong> Final drive to Islamabad. Departure.</li>
      </ul>

      {/* Company Info */}
      <div className="border-t pt-6 text-sm text-gray-700">
        <p><strong>PAKISTANI MOUNTAIN TOURS (PVT) LTD</strong></p>
        <p>License No. ID-2590</p>
        <p>Department of Tourist Services, Government of Pakistan</p>
      </div>

      {/* Contact Info */}
      <div className="border-t pt-6 text-sm text-gray-700">
        <h3 className="font-semibold text-black mb-1">Contact:</h3>
        <p>Arif Market Cinema Bazar, Gilgit, Pakistan</p>
        <p>Email: pakistanimountaintour@gmail.com</p>
        <p>Phone: +66 956071467</p>
      </div>

    </div>
  );
};

export default FairyMedows;

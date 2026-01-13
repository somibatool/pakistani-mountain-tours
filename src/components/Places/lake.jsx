import React from 'react';
import { useParams } from 'react-router-dom';
import Img1 from "../../assets/south pakistan/1.jpg";
import Img2 from "../../assets/south pakistan/2.jpg";
import Img3 from "../../assets/south pakistan/3.jpg";
import Img4 from "../../assets/south pakistan/4.jpg";
import Img5 from "../../assets/south pakistan/5.jpg";
import Img6 from "../../assets/south pakistan/6.jpg";
import Img7 from "../../assets/south pakistan/7.jpg";
import Img8 from "../../assets/south pakistan/8.jpg";

const Lake = () => {
  const { title } = useParams();
  // south pakistan 

  return (
   <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-20">
      {/* Main Heading Centered */}
      <h1 className="text-4xl font-bold text-center text-black mb-8">
        {title} - Gilgit Baltistan Tour
      </h1>

      {/* Subheading */}
      <h3 className="text-lg font-semibold text-center mb-4 text-gray-700">
        Land of Lakes and Landscapes Vistas
      </h3>

      {/* Basic Tour Info */}
      <div className="text-center text-sm text-gray-600 mb-10">
        <p>Starting point: Islamabad Airport | End: Islamabad Airport</p>
        <p>Duration Trip : 10 nights /11 days</p>
        <p>Ideal time: May to end of October</p>
      </div>

      {/* Tour Description */}
      <h2 className="text-2xl font-semibold text-black mb-3">
        Tour Description
      </h2>
      <p className="text-gray-800 mb-8 leading-relaxed">
        Visiting Pakistan in is a lifetime experience in particular the northern
        part known as (Gilgit-Baltistan), surrounded with majestic snow-capped
        mountains, and deep coloured rivers, lakes and massive glaciers making
        it one of best destinations for nature and adventure seekers. In the
        north, you will be able to explore scenic views in Gilgit, Nagar and
        Hunza valley. The tour also includes a three days trekking trip or horse
        riding to Fairy Meadow, located at the foot of the mighty Nanga Parbat
        (8,126m), the 2nd highest mountain of Pakistan and 9th in world ranking.
        Moreover, you’ll travel through the Karakoram mountains to reach the
        Khunjerab Pass (Pakistan-China border) located at 4,700 metres, known as
        the highest international border crossing and end of Karakoram Highway
        (887 km) within Pakistan.
      </p>

      {/* Tour Highlights */}
      <h2 className="text-2xl font-semibold text-black mb-3">
        Tour Highlights
      </h2>
      <ul className="list-disc list-inside mb-10 text-gray-700 space-y-2">
        <li>Tour of Islamabad</li>
        <li>Explore Baltistan – the Little Tibet</li>
        <li>Drive on the legendary Karakoram Highway</li>
        <li>Visit Gilgit – Silk Route Town</li>
        <li>Explore the wonderful Hunza valley</li>
        <li>Cross Husseini rope bridge and visit white Passu glacier</li>
        <li>Excursion to Khunjerab – Pakistan-China border</li>
        <li>Tour of Naltar valley and Green lake</li>
        <li>Fairy Meadows and Nanga Parbat adventure trip</li>
      </ul>

      {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      <img src={Img1} alt="Tour 1" className="w-full h-full object-cover rounded-lg" />
      <img src={Img2} alt="Tour 2" className="w-full h-full object-cover rounded-lg" />
      <img src={Img3} alt="Tour 3" className="w-full h-full object-cover rounded-lg" />
      <img src={Img4} alt="Tour 4" className="w-full h-full object-cover rounded-lg" />
      <img src={Img5} alt="Tour 5" className="w-full h-full object-cover rounded-lg" />
      <img src={Img6} alt="Tour 6" className="w-full h-full object-cover rounded-lg" />
      <img src={Img7} alt="Tour 7" className="w-full h-full object-cover rounded-lg" />
      <img src={Img8} alt="Tour 7" className="w-full h-full object-cover rounded-lg" />
    </div>

      {/* Trip Information Table Style */}
      <table className="w-full border border-gray-300 text-sm mb-10">
        <tbody>
          {/* Cost Row */}
          <tr className="border border-gray-300">
            <td className="p-3 font-semibold border border-gray-300">Cost:</td>
            <td className="p-3 border border-gray-300">
              Ask (depends on the number of people)
            </td>
          </tr>

          {/* Included Row */}
          <tr className="border border-gray-300 align-top">
            <td className="p-3 font-semibold border border-gray-300">
              Included:
            </td>
            <td className="p-3 border border-gray-300">
              <ul className="list-disc list-inside space-y-1">
                <li>Hotels (3 and 4 start)</li>
                <li>Breakfast, Lunch, Dinner </li>
                <li>Water And Fruits</li>
                <li>Transport, transfer and Fuel</li>
             
                <li>Entrance Fee</li>
                <li>1 Domestic Flights (Islambad -Skardu)</li>
                <li>Guiding</li>
                <li>visa</li>
                <li>Insurance</li>
              </ul>
            </td>
          </tr>

          {/* Excluded Row */}
          <tr className="border border-gray-300 align-top">
            <td className="p-3 font-semibold border border-gray-300">
              Excluded:
            </td>
            <td className="p-3 border border-gray-300">
              <ul className="list-disc list-inside space-y-1">
                <li>International Flights</li>
               
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Tour Itinerary */}
<h2 className="text-2xl font-semibold text-black mb-4">Tour Plan - South Pakistan with Islamabad</h2>
<ul className="list-inside text-gray-800 leading-relaxed space-y-6 mb-10">

  <li>
    <strong className="font-bold text-lg">Day 1:</strong> 
    <h3 className="text-lg font-bold">Arrival in Karachi</h3>
    <ul className="list-disc list-inside ml-5">
      <li>Meet and greet at Jinnah International Airport</li>
      <li>Hotel transfer for rest</li>
      <li>Evening walk at Clifton Beach</li>
      <li>Overnight stay in Karachi</li>
    </ul>
  </li>

  <li>
    <strong className="font-bold text-lg">Day 2:</strong> 
    <h3 className="text-lg font-bold">Karachi City Tour</h3>
    <ul className="list-disc list-inside ml-5">
      <li>Visit Quaid-e-Azam Mausoleum</li>
      <li>Explore Pakistan Maritime Museum</li>
      <li>Shopping at Saddar & Zainab Market</li>
      <li>Sunset at Manora Island</li>
      <li>Overnight stay in Karachi</li>
    </ul>
  </li>

  <li>
    <strong className="font-bold text-lg">Day 3:</strong> 
    <h3 className="text-lg font-bold">Karachi – Thatta – Hyderabad</h3>
    <ul className="list-disc list-inside ml-5">
      <li>Drive to Thatta (1.5 hours)</li>
      <li>Visit Shah Jahan Mosque</li>
      <li>Explore Makli Necropolis (UNESCO World Heritage Site)</li>
      <li>Continue to Hyderabad</li>
      <li>Overnight stay in Hyderabad</li>
    </ul>
  </li>

  <li>
    <strong className="font-bold text-lg">Day 4:</strong> 
    <h3 className="text-lg font-bold">Hyderabad – Bhit Shah – Sehwan</h3>
    <ul className="list-disc list-inside ml-5">
      <li>Visit Sindh Museum</li>
      <li>Drive to Bhit Shah to visit Shah Abdul Latif Bhittai Shrine</li>
      <li>Continue to Sehwan and visit Lal Shahbaz Qalandar Shrine</li>
      <li>Overnight stay in Sehwan</li>
    </ul>
  </li>

  <li>
    <strong className="font-bold text-lg">Day 5:</strong> 
    <h3 className="text-lg font-bold">Sehwan – Larkana (Mohenjo-daro)</h3>
    <ul className="list-disc list-inside ml-5">
      <li>Drive to Mohenjo-daro (UNESCO World Heritage Site)</li>
      <li>Guided tour of ancient Indus Valley Civilization ruins</li>
      <li>Continue to Larkana for overnight stay</li>
    </ul>
  </li>

  <li>
    <strong className="font-bold text-lg">Day 6:</strong> 
    <h3 className="text-lg font-bold">Larkana – Sukkur</h3>
    <ul className="list-disc list-inside ml-5">
      <li>Visit Kot Diji Fort</li>
      <li>Explore Sukkur Barrage and Lansdowne Bridge</li>
      <li>Evening boat ride on the Indus River</li>
      <li>Overnight stay in Sukkur</li>
    </ul>
  </li>

  <li>
    <strong className="font-bold text-lg">Day 7:</strong> 
    <h3 className="text-lg font-bold">Sukkur – Khairpur – Karachi</h3>
    <ul className="list-disc list-inside ml-5">
      <li>Morning visit to Shah Abdul Latif Bhittai Tomb (if missed earlier)</li>
      <li>Drive back to Karachi</li>
      <li>Farewell dinner</li>
      <li>Overnight stay in Karachi</li>
    </ul>
  </li>

  <li>
    <strong className="font-bold text-lg">Day 8:</strong> 
    <h3 className="text-lg font-bold">Karachi – Islamabad (Flight) & City Tour</h3>
    <ul className="list-disc list-inside ml-5">
      <li>Morning flight to Islamabad</li>
      <li>Visit Faisal Mosque and Pakistan Monument</li>
      <li>Walk through Lok Virsa Museum</li>
      <li>Sunset view from Daman-e-Koh</li>
      <li>Overnight stay in Islamabad</li>
    </ul>
  </li>

  <li>
    <strong className="font-bold text-lg">Day 9:</strong> 
    <h3 className="text-lg font-bold">Departure from Islamabad</h3>
    <ul className="list-disc list-inside ml-5">
      <li>Free time for last-minute shopping</li>
      <li>Airport drop-off for onward journey</li>
    </ul>
  </li>

</ul>



      {/* Company Information */}
      <div className="border-t pt-6 text-sm text-gray-700">
        <p>
          <strong>PAKISTANI MOUNTAIN TOURS (PVT) LTD</strong>
        </p>
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

export default Lake;

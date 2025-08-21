import React from 'react';
import { useParams } from 'react-router-dom';

import Img1 from '../../assets/culture/1.jpg';
import Img2 from '../../assets/culture/2.jpg';
import Img3 from '../../assets/culture/3.jpg';
import Img4 from '../../assets/culture/4.jpg';
import Img5 from '../../assets/culture/5.jpg';
import Img6 from '../../assets/culture/6.jpg';
import Img7 from '../../assets/culture/7.jpg';
import Img8 from '../../assets/culture/8.jpg';
import Img9 from '../../assets/culture/9.jpg';
import Img10 from '../../assets/culture/10.jpg';
import Img11 from '../../assets/culture/11.jpg';
import Img12 from '../../assets/culture/12.jpg';
// pakistani culture historical places





const FairyMedows = () => {
  const { title } = useParams();

  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-20">
      
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        {title} 
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

  Discover the rich cultural heritage of Pakistan’s northern valleys, where traditions are as vibrant as the landscapes. 
  In Hunza, experience the warm hospitality of the locals, ancient forts, and the unique blend of Burusho and Wakhi cultures. 
  Journey into Chitral, home to the Kalash people with their colorful festivals, intricate handicrafts, and centuries-old customs. 
  Along the way, explore mountain villages, taste traditional cuisines, and witness a way of life preserved in harmony with the majestic peaks.


      </p>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12  ">
        <img src={Img1} alt="Tour 1" className="w-full  h-full object-cover rounded-lg" />
        <img src={Img2} alt="Tour 2" className="w-full  h-full object-cover rounded-lg" />
        <img src={Img3} alt="Tour 3" className="w-full  h-full object-cover rounded-lg" />
        <img src={Img4} alt="Tour 4" className="w-full  h-full object-cover rounded-lg" />
        <img src={Img5} alt="Tour 5" className="w-full  h-full object-cover rounded-lg" />
        <img src={Img6} alt="Tour 6" className="w-full  h-full object-cover rounded-lg" />
        <img src={Img7} alt="Tour 6" className="w-full h-full object-cover rounded-lg" />
        <img src={Img8} alt="Tour 6" className="w-full h-full object-cover rounded-lg" />
        <img src={Img9} alt="Tour 6" className="w-full h-full object-cover rounded-lg" />
        <img src={Img10} alt="Tour 6" className="w-full h-full object-cover rounded-lg" />
        <img src={Img11} alt="Tour 6" className="w-full h-full object-cover rounded-lg" />
        <img src={Img12} alt="Tour 6" className="w-full h-full object-cover rounded-lg" />
      </div>

      {/* Trip Information */}
      <table className="w-full border border-gray-300 text-sm mb-10">
        <tbody>
          <tr className="border border-gray-300">
            <td className="p-3 font-semibold border border-gray-300">Cost:</td>
            <td className="p-3 border border-gray-300">Ask (depend on tour plan)</td>
          </tr>
          <tr className="border border-gray-300 align-top">
            <td className="p-3 font-semibold border border-gray-300">Included:</td>
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
    {/* Tour Schedule */}
<h2 className="text-2xl font-semibold text-black mb-4">Tour Schedule - Exploring Pakistan’s Culture</h2>
<div className="space-y-6 mb-10 text-gray-800 leading-relaxed">

  {/* Day 1 */}
  <div>
    <h3 className="font-bold text-lg">Day 1 – Arrival in Islamabad</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>Warm welcome at Islamabad International Airport</li>
      <li>Brief introduction to Pakistani culture and traditions</li>
      <li>Visit Lok Virsa Museum for cultural exhibits</li>
      <li>Overnight stay in Islamabad</li>
    </ul>
  </div>

  {/* Day 2 */}
  <div>
    <h3 className="font-bold text-lg">Day 2 – Islamabad to Chitral</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>Scenic flight or drive to Chitral</li>
      <li>Explore Chitral town & local handicraft markets</li>
      <li>Evening tea with traditional Chitrali music</li>
      <li>Overnight stay in Chitral</li>
    </ul>
  </div>

  {/* Day 3 */}
  <div>
    <h3 className="font-bold text-lg">Day 3 – Kalash Valley Experience</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>Visit the unique Kalash tribes in Bumburet or Rumbur Valley</li>
      <li>Learn about Kalash customs, festivals, and traditional dress</li>
      <li>Try local Kalash cuisine</li>
      <li>Return to Chitral for overnight stay</li>
    </ul>
  </div>

  {/* Day 4 */}
  <div>
    <h3 className="font-bold text-lg">Day 4 – Chitral to Gilgit</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>Drive through Shandur Pass (world’s highest polo ground)</li>
      <li>Stop for scenic views and photography</li>
      <li>Arrive in Gilgit and explore local bazaar</li>
      <li>Overnight stay in Gilgit</li>
    </ul>
  </div>

  {/* Day 5 */}
  <div>
    <h3 className="font-bold text-lg">Day 5 – Gilgit to Hunza</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>Drive along the Karakoram Highway</li>
      <li>Visit Rakaposhi View Point</li>
      <li>Evening cultural walk in Karimabad</li>
      <li>Overnight stay in Hunza</li>
    </ul>
  </div>

  {/* Day 6 */}
  <div>
    <h3 className="font-bold text-lg">Day 6 – Hunza Culture & Heritage</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>Explore Baltit and Altit Forts</li>
      <li>Visit Attabad Lake and Passu Cones</li>
      <li>Enjoy Hunza traditional music performance</li>
      <li>Overnight stay in Hunza</li>
    </ul>
  </div>

  {/* Day 7 */}
  <div>
    <h3 className="font-bold text-lg">Day 7 – Return Journey</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>Drive back to Islamabad via scenic valleys</li>
      <li>Short stops for souvenirs and local snacks</li>
      <li>Farewell dinner</li>
    </ul>
  </div>

  {/* Day 8 */}
  <div>
    <h3 className="font-bold text-lg">Day 8 – Departure</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>Airport drop-off for your onward journey</li>
    </ul>
  </div>

</div>


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

import React from 'react';
import { useParams } from 'react-router-dom';
import Img1 from '../../assets/astor/6.jpg';
import Img2 from '../../assets/bikeTour/1.JPEG';
import Img3 from '../../assets/bikeTour/2.JPEG';
import Img4 from '../../assets/bikeTour/3.JPEG';
import Img5 from '../../assets/bikeTour/4.JPEG';
import Img6 from '../../assets/autumn/river.jpg';
import Img7 from '../../assets/bikeTour/22.jpg';
import Img8 from '../../assets/bikeTour/21.jpg';

const KarakoramHighwayDetail = () => {
  const { title } = useParams();

 return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-10">
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        {title}Karakoram Highway - Bike Tour
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
               <img src={Img1} alt="Tour 1" className="w-full h-48 object-cover rounded-lg" />
               <img src={Img2} alt="Tour 2" className="w-full h-48 object-cover rounded-lg" />
               <img src={Img3} alt="Tour 3" className="w-full h-48 object-cover rounded-lg" />
               <img src={Img4} alt="Tour 4" className="w-full h-48 object-cover rounded-lg" />
               <img src={Img5} alt="Tour 5" className="w-full h-48 object-cover rounded-lg" />
               <img src={Img6} alt="Tour 6" className="w-full h-48 object-cover rounded-lg" />
               <img src={Img7} alt="Tour 7" className="w-full h-48 object-cover rounded-lg" />
               <img src={Img8} alt="Tour 8" className="w-full h-48 object-cover rounded-lg" />
             </div>

     <table className="w-full border border-gray-300 text-sm mb-10">
         <tbody>
           <tr className="border border-gray-300">
             <td className="p-3 font-semibold border border-gray-300">Cost:</td>
             <td className="p-3 border border-gray-300">28,000 PKR per person</td>
           </tr>
           <tr className="border border-gray-300 align-top">
             <td className="p-3 font-semibold border border-gray-300">Included:</td>
             <td className="p-3 border border-gray-300">
               <ul className="list-disc list-inside space-y-1">
                 <li>4-star Hotels</li>
                 <li>All Meals (Breakfast, Lunch, Dinner)</li>
                 <li>Transport & Fuel</li>
                 <li>Entrance Fees</li>
                 <li>Photography Assistance</li>
                 <li>Professional Tour Guide</li>
               </ul>
             </td>
           </tr>
           <tr className="border border-gray-300 align-top">
             <td className="p-3 font-semibold border border-gray-300">Excluded:</td>
             <td className="p-3 border border-gray-300">
               <ul className="list-disc list-inside space-y-1">
                 <li>International Flights</li>
                 <li>Personal Expenses</li>
               </ul>
             </td>
           </tr>
         </tbody>
       </table>
      <h2 className="text-2xl font-semibold text-black mb-4">Tour Schedule</h2>
<ul className="list-none text-gray-800 leading-relaxed space-y-4 mb-10 text-sm">
  <li>
    <h1 className="text-lg font-bold">Day 1 – Arrival in Gilgit</h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Pick up from Gilgit Airport</li>
      <li>Short city tour: Gilgit Bridge and local bazaar</li>
      <li>Introduction to Karakoram Highway journey</li>
    </ul>
  </li>
  <li>
    <h1 className="text-lg font-bold">Day 2 – Drive to Hunza via KKH</h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Scenic drive along the Karakoram Highway</li>
      <li>Short stop at Rakaposhi View Point</li>
      <li>Arrival in Hunza, check-in and rest</li>
    </ul>
  </li>
  <li>
    <h1 className="text-lg font-bold">Day 3 – Explore Hunza: Forts </h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Visit Baltit Fort and Altit Fort</li>
      <li>Photography around colorful trees and valley</li>
      <li>Walk through traditional streets of Karimabad</li>
    </ul>
  </li>
  <li>
    <h1 className="text-lg font-bold">Day 4 – Day Trip to Passu & Attabad Lake</h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Drive to Passu Cones via Ghulkin & Gulmit</li>
      <li>Boating at Attabad Lake</li>
      <li>Visit Hussaini Suspension Bridge</li>
    </ul>
  </li>
  <li>
    <h1 className="text-lg font-bold">Day 5 – Khunjerab Pass Excursion</h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Drive along KKH to the Pakistan-China border</li>
      <li>Stop at Sost village for refreshments</li>
      <li>Explore Khunjerab National Park</li>
    </ul>
  </li>
  <li>
    <h1 className="text-lg font-bold">Day 6 – Sunrise at Duikar & Hopper Valley</h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Early morning drive to Duikar Eagle's Nest</li>
      <li>Visit Hopper Glacier for fall photography</li>
      <li>Leisure evening back in Hunza</li>
    </ul>
  </li>
  <li>
    <h1 className="text-lg font-bold">Day 7 – Return Journey via Besham or Naran</h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Begin return trip from Hunza</li>
      <li>Scenic stops along the Karakoram Highway</li>
      <li>Overnight stay en route (Besham or Naran)</li>
    </ul>
  </li>
  <li>
    <h1 className="text-lg font-bold">Day 8 – Final Drive to Islamabad</h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Arrival in Islamabad</li>
      <li>Farewell dinner with the group</li>
      <li>Departure or hotel check-in for extended stay</li>
    </ul>
  </li>
</ul>

 
       <div className="border-t pt-6 text-sm text-gray-700">
         <p><strong>PAKISTANI MOUNTAIN TOURS (PVT) LTD</strong></p>
         <p>License No. ID-2590</p>
         <p>Department of Tourist Services, Government of Pakistan</p>
       </div>
 
       <div className="border-t pt-6 text-sm text-gray-700">
         <h3 className="font-semibold text-black mb-1">Contact:</h3>
         <p>Arif Market Cinema Bazar, Gilgit, Pakistan</p>
         <p>Email: pakistanimountaintour@gmail.com</p>
         <p>Phone: +66 956071467</p>
       </div>
    </div>
  );
};


export default KarakoramHighwayDetail;

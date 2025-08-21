import React from 'react';
import { useParams } from 'react-router-dom';
import Img1 from '../../assets/bikeTour/91.jpg';
import Img2 from '../../assets/bikeTour/92.jpg';
import Img3 from '../../assets/bikeTour/93.jpg';
import Img4 from '../../assets/bikeTour/94.jpg';
import Img5 from '../../assets/bikeTour/95.jpg';
import Img6 from '../../assets/bikeTour/96.jpg';
import Img7 from '../../assets/bikeTour/97.jpg';
import Img8 from '../../assets/bikeTour/98.jpg';

const BikeDetailPage = () => {
  const { title } = useParams();

  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-20">
      <h1 className="text-4xl font-bold text-center text-black mb-8">
        {title}Skardu  - Motorbike Tour
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
               <img src={Img1} alt="Tour 1" className="w-full h-full object-cover rounded-lg" />
               <img src={Img2} alt="Tour 2" className="w-full h-full object-cover rounded-lg" />
               <img src={Img3} alt="Tour 3" className="w-full h-full object-cover rounded-lg" />
               <img src={Img4} alt="Tour 4" className="w-full h-full object-cover rounded-lg" />
               <img src={Img5} alt="Tour 5" className="w-full h-full object-cover rounded-lg" />
               <img src={Img6} alt="Tour 6" className="w-full h-full object-cover rounded-lg" />
               <img src={Img7} alt="Tour 7" className="w-full h-full object-cover rounded-lg" />
               <img src={Img8} alt="Tour 8" className="w-full h-full object-cover rounded-lg" />
             </div>

     <table className="w-full border border-gray-300 text-sm mb-10">
         <tbody>
           <tr className="border border-gray-300">
             <td className="p-3 font-semibold border border-gray-300">Cost:</td>
             <td className="p-3 border border-gray-300">On request (based on group size)</td>
           </tr>
           <tr className="border border-gray-300 align-top">
             <td className="p-3 font-semibold border border-gray-300">Included:</td>
             <td className="p-3 border border-gray-300">
               <ul className="list-disc list-inside space-y-1">
                 <li>Motorbike Suzuki 150cc</li>
                 <li>Service Car</li>
                 <li>Local Guide</li>
                 <li>Marshall</li>
                 <li>Safety Kit</li>
                 <li>All Meals (Breakfast, Lunch, Dinner)</li>
                 <li>Transport & Fuel</li>
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
                
               </ul>
             </td>
           </tr>
         </tbody>
       </table>
      <h2 className="text-2xl font-semibold mb-2">Itinerary:</h2>
<ul className="list-none space-y-4 mb-6 text-gray-800 text-sm">

  <li>
    <h1 className="text-lg font-bold">Day 1 – Arrival in Skardu</h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Pick up from Skardu Airport</li>
      <li>Hotel check-in and rest</li>
      <li>Evening riverside walk and local bazaar visit</li>
    </ul>
  </li>
  <li>
    <h1 className="text-lg font-bold">Day 2 – Shigar & Cold Desert Exploration</h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Visit Shigar Fort</li>
      <li>Explore Cold Desert</li>
      <li>Visit nearby traditional villages</li>
    </ul>
  </li>
  <li>
    <h1 className="text-lg font-bold">Day 3 – Journey to Deosai Plains via Sadpara Lake</h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Drive to Sadpara Lake</li>
      <li>4x4 ride to Deosai National Park</li>
      <li>Overnight camping at Bara Pani with bonfire</li>
    </ul>
  </li>
  <li>
    <h1 className="text-lg font-bold">Day 4 – Explore Sheosar Lake</h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Jeep ride to Sheosar Lake</li>
      <li>Relax by the lake and photography</li>
      <li>Night camp in Deosai</li>
    </ul>
  </li>
  <li>
    <h1 className="text-lg font-bold">Day 5 – Wildlife Spotting & Return to Skardu</h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Spot marmots and Himalayan wildlife</li>
      <li>Drive back to Skardu</li>
      <li>Hotel stay in Skardu</li>
    </ul>
  </li>
  <li>
    <h1 className="text-lg font-bold">Day 6 – Khaplu Valley Excursion</h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Drive to Khaplu via scenic routes</li>
      <li>Visit Khaplu Palace and surrounding valley</li>
      <li>Overnight stay in Khaplu or return to Skardu</li>
    </ul>
  </li>
  <li>
    <h1 className="text-lg font-bold">Day 7 – Travel to Gilgit via Deosai Exit</h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Scenic drive through the western exit of Deosai</li>
      <li>Arrival and rest in Gilgit</li>
      <li>Evening walk around Gilgit city</li>
    </ul>
  </li>
  <li>
    <h1 className="text-lg font-bold">Day 8 – Gilgit Sightseeing</h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Visit Kargah Buddha and suspension bridge</li>
      <li>Explore local bazaars and markets</li>
      <li>Optional short hike in surrounding hills</li>
    </ul>
  </li>
  <li>
    <h1 className="text-lg font-bold">Day 9 – Drive to Hunza Valley</h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Journey along Karakoram Highway</li>
      <li>Stop at Rakaposhi viewpoint</li>
      <li>Arrival in Hunza and hotel check-in</li>
    </ul>
  </li>
  <li>
    <h1 className="text-lg font-bold">Day 10 – Hunza Valley Exploration</h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Visit Altit and Baltit Forts</li>
      <li>Drive to Attabad Lake and Hussaini Suspension Bridge</li>
      <li>Explore Passu Cones area</li>
    </ul>
  </li>
  <li>
    <h1 className="text-lg font-bold">Day 11 – Leisure Day in Hunza</h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Free day for rest and photography</li>
      <li>Shopping at Hunza handicraft markets</li>
      <li>Optional walk to Eagle’s Nest viewpoint</li>
    </ul>
  </li>
  <li>
    <h1 className="text-lg font-bold">Day 12 – Return to Gilgit & Farewell Dinner</h1>
    <ul className="list-disc ml-5 space-y-1">
      <li>Drive back to Gilgit from Hunza</li>
      <li>Group farewell dinner</li>
      <li>Prepare for next day departure</li>
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

export default BikeDetailPage;

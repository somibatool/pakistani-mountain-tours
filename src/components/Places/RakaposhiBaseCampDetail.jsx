import React from "react";
import { useParams } from 'react-router-dom';
import Img1 from '../../assets/autumn/autumn_12.jpg';
import Img2 from '../../assets/autumn/autumn7.jpg';
import Img3 from '../../assets/autumn/autumn43.jpg';
import Img4 from '../../assets/autumn/ali_abad_tawor.jpg';
import Img5 from '../../assets/autumn/tress.jpg';
import Img6 from '../../assets/autumn/river.jpg';
import Img7 from '../../assets/autumn/river.jpg';
import Img8 from '../../assets/autumn/river.jpg';

const RakaposhiBaseCampDetail = () => {
    const { title } = useParams();
  return (
      <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-6">
       <h1 className="text-4xl font-bold text-center text-primary mb-6">
         {title} Rakaposhi Base Camp Trek
       </h1>
 
       <h3 className="text-lg font-semibold text-center mb-4 text-gray-700">
         Witness the Golden Fall Season of Northern Pakistan
       </h3>
 
       <div className="text-center text-sm text-gray-600 mb-10">
         <p>Starting point: Islamabad Airport | End: Islamabad Airport</p>
         <p>Duration Trip: 7 nights / 8 days</p>
         <p>Ideal time: Mid-October to Mid-November</p>
       </div>
 
       <h2 className="text-2xl font-semibold text-black mb-3">Trip Overview</h2>
       <p className="text-gray-800 mb-8 leading-relaxed">
         The Autumn Tour of Hunza and Skardu offers breathtaking landscapes of golden-yellow trees,
         snow-dusted peaks, and mirror-like lakes. This tour is designed for photography enthusiasts and
         nature lovers seeking the charm of Pakistan’s northern valleys during fall. Enjoy visits to forts,
         lakes, glaciers, and cultural hubs while soaking in the vibrant autumn colors.
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
       <ul className="list-inside text-gray-800 leading-relaxed space-y-4 mb-10">
         <li><strong>Day 1:</strong> Arrival at Islamabad. Explore capital parks adorned in autumn foliage. Overnight stay.</li>
         <li><strong>Day 2:</strong> Flight to Skardu. Visit lakes and forts amidst autumn vistas.</li>
         <li><strong>Day 3:</strong> Shigar Valley, Cold Desert, and golden autumn photography day.</li>
         <li><strong>Day 4:</strong> Drive to Hunza via Karakoram Highway. Rivers and autumn trees en route.</li>
         <li><strong>Day 5:</strong> Explore Altit Fort, Baltit Fort, Passu Cones, and Attabad Lake surrounded by fall colors.</li>
         <li><strong>Day 6:</strong> Sunrise at Duikar, Hopper Glacier visit. Relax in Hunza.</li>
         <li><strong>Day 7:</strong> Return journey towards Besham or Naran. Overnight stay en route.</li>
         <li><strong>Day 8:</strong> Final drive to Islamabad. Farewell dinner and departure.</li>
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

export default RakaposhiBaseCampDetail;

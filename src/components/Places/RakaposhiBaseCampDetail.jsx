import React from "react";
import { useParams } from 'react-router-dom';
import Img1 from '../../assets/rakaposhi-trk/1.jpg';
import Img2 from '../../assets/rakaposhi-trk/2.jpg';
import Img3 from '../../assets/rakaposhi-trk/3.jpg';
import Img4 from '../../assets/rakaposhi-trk/4.jpg';
import Img5 from '../../assets/rakaposhi-trk/5.jpg';
import Img6 from '../../assets/rakaposhi-trk/6.jpg';
import Img7 from '../../assets/rakaposhi-trk/7.jpg';
import Img8 from '../../assets/rakaposhi-trk/8.jpg';
import StayConnected from "../../pages/StayConnected";


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

  <br /><br />
  The Rakaposhi Base Camp Trek is a spectacular journey through Nagar Valley, offering stunning views of the majestic Rakaposhi peak. This 10-day adventure takes you through lush meadows, traditional villages, and glacier-fed streams, making it perfect for both seasoned trekkers and nature lovers. With breathtaking mountain scenery and a peaceful environment, the trek promises an unforgettable escape into the heart of the Karakoram.
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
             <td className="p-3 border border-gray-300">ask (depend on tour plan )</td>
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
 
       <h2 className="text-2xl font-semibold text-black mb-4">Tour Schedule – Rakaposhi Base Camp Trek</h2>
<ul className="list-inside text-gray-800 leading-relaxed space-y-6 mb-10">
  <li>
    <strong>Day 1:</strong>
    <h2 className="text-lg font-bold">Arrival in Islamabad</h2>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Airport pickup</li>
      <li>Hotel check-in</li>
      <li>Briefing and trek preparation</li>
    </ul>
  </li>

  <li>
    <strong>Day 2:</strong>
    <h2 className="text-lg font-bold">Drive to Chilas via Naran/Babusar Pass</h2>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Scenic drive through lush Kaghan Valley</li>
      <li>Cross Babusar Pass (4,173m)</li>
      <li>Overnight stay in Chilas</li>
    </ul>
  </li>

  <li>
    <strong>Day 3:</strong>
    <h2 className="text-lg font-bold">Drive to Minapin (Nagar Valley)</h2>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Drive along Karakoram Highway</li>
      <li>Enter Nagar Valley and reach Minapin village</li>
      <li>Overnight in local guesthouse</li>
    </ul>
  </li>

  <li>
    <strong>Day 4:</strong>
    <h2 className="text-lg font-bold">Trek to Hapakun (2,800m)</h2>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Start of the trek from Minapin</li>
      <li>4-5 hour gradual ascent through pine forest</li>
      <li>Camp at Hapakun Meadows</li>
    </ul>
  </li>

  <li>
    <strong>Day 5:</strong>
    <h2 className="text-lg font-bold">Trek to Rakaposhi Base Camp (Tagaphari)</h2>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Steep but rewarding hike to base camp (3,800m)</li>
      <li>Spectacular views of Rakaposhi and Diran Peaks</li>
      <li>Overnight camping under the stars</li>
    </ul>
  </li>

  <li>
    <strong>Day 6:</strong>
    <h2 className="text-lg font-bold">Exploration and acclimatization day at Base Camp</h2>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Optional hike to nearby glacier</li>
      <li>Photography and relaxation</li>
      <li>Enjoy panoramic mountain scenery</li>
    </ul>
  </li>

  <li>
    <strong>Day 7:</strong>
    <h2 className="text-lg font-bold">Trek back to Minapin</h2>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Descend through meadows and forests</li>
      <li>Reach Minapin by afternoon</li>
      <li>Guesthouse stay and rest</li>
    </ul>
  </li>

  <li>
    <strong>Day 8:</strong>
    <h2 className="text-lg font-bold">Drive to Hunza Valley – Explore Karimabad</h2>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Visit Altit and Baltit Forts</li>
      <li>Explore local bazaar and cafes</li>
      <li>Viewpoint visit for sunset over Rakaposhi</li>
    </ul>
  </li>

  <li>
    <strong>Day 9:</strong>
    <h2 className="text-lg font-bold">Drive to Chilas</h2>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Return journey via Karakoram Highway</li>
      <li>Stopovers for photography and meals</li>
      <li>Overnight in Chilas</li>
    </ul>
  </li>

  <li>
    <strong>Day 10:</strong>
    <h2 className="text-lg font-bold">Drive back to Islamabad</h2>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Arrival and transfer to hotel</li>
      <li>Evening free for shopping or city tour</li>
      <li>End of tour</li>
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
            < StayConnected />
     </div>
   
   );
};

export default RakaposhiBaseCampDetail;

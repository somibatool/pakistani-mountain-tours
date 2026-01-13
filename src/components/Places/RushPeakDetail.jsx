import React from "react";
import { useParams } from 'react-router-dom';
import Img1 from '../../assets/Rushpeak/1.jpg';
import Img2 from '../../assets/Rushpeak/2.jpg';
import Img3 from '../../assets/Rushpeak/3.jpg';
import Img4 from '../../assets/Rushpeak/4.jpg';
import Img5 from '../../assets/Rushpeak/5.jpg';
import Img6 from '../../assets/Rushpeak/6.jpg';
import Img7 from '../../assets/Rushpeak/7.jpg';
import Img8 from '../../assets/Rushpeak/8.jpg';
import Img9 from '../../assets/Rushpeak/9.jpg';
import Img10 from '../../assets/Rushpeak/10.jpg';
import Img11 from '../../assets/Rushpeak/11.jpg';
import Img12 from '../../assets/Rushpeak/12.jpg';
import StayConnected from "../../pages/StayConnected";

const RushPeakDetail = () => {
    const { title } = useParams();
  return (
      <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-20">
       <h1 className="text-4xl font-bold text-center text-black mb-8">
         {title} Rush Peak Trek
       </h1>
 
       <h3 className="text-lg font-semibold text-center mb-4 text-gray-700">
         High-Altitude Adventure in the Heart of Nagar Valley
       </h3>
 
       <div className="text-center text-sm text-gray-600 mb-10">
         <p>Starting point: Islamabad Airport | End: Islamabad Airport</p>
         <p>Duration Trip: 9 nights / 10 days</p>
         <p>Ideal time: June to September</p>
       </div>
 
       <h2 className="text-2xl font-semibold text-black mb-3">Trip Overview</h2>
       <p className="text-gray-800 mb-8 leading-relaxed">
         The Rush Peak Trek is a breathtaking high-altitude adventure in the Nagar Valley of Gilgit-Baltistan. This trek offers panoramic views of mighty peaks such as Spantik, Malubiting, Ultar Sar, and the stunning Rush Lake — one of the highest alpine lakes in the world. Designed for nature lovers and trekkers seeking off-the-beaten-path beauty, the route passes through remote villages, glacial valleys, and high pastures.
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
         <img src={Img9} alt="Tour 8" className="w-full h-48 object-cover rounded-lg" />
         <img src={Img10} alt="Tour 8" className="w-full h-48 object-cover rounded-lg" />
         <img src={Img11} alt="Tour 8" className="w-full h-48 object-cover rounded-lg" />
         <img src={Img12} alt="Tour 8" className="w-full h-48 object-cover rounded-lg" />
       </div>

       <table className="w-full border border-gray-300 text-sm mb-10">
         <tbody>
           <tr className="border border-gray-300">
             <td className="p-3 font-semibold border border-gray-300">Cost:</td>
             <td className="p-3 border border-gray-300">ask (depend on tour plan)</td>
           </tr>
           <tr className="border border-gray-300 align-top">
             <td className="p-3 font-semibold border border-gray-300">Included:</td>
             <td className="p-3 border border-gray-300">
               <ul className="list-disc list-inside space-y-1">
                 <li>Accommodation (hotels + camping)</li>
                 <li>All Meals (Breakfast, Lunch, Dinner)</li>
                 <li>Transportation and fuel</li>
                 <li>Local guides and porters</li>
                 <li>Camping gear and logistics</li>
                 <li>Permits and entrance fees</li>
                 <li>Kitchen Gear</li>
                 <li>Camp</li>
                 <li>Sleeping Bag</li>
                 <li>Porter</li>
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

       <h2 className="text-2xl font-semibold text-black mb-4">Tour Schedule – Rush Peak Trek & Hunza Valley (10 Days)</h2>
       <ul className="list-inside text-gray-800 leading-relaxed space-y-6 mb-10">
        <li>
          <strong>Day 1:</strong>
          <h2 className="text-lg font-bold">Arrival in Islamabad</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Airport pickup</li>
            <li>Hotel check-in</li>
            <li>Briefing session and documentation</li>
          </ul>
        </li>
        <li>
          <strong>Day 2:</strong>
          <h2 className="text-lg font-bold">Drive to Chilas via Naran or Besham</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Scenic drive through valleys</li>
            <li>Lunch stop en route</li>
            <li>Overnight in Chilas</li>
          </ul>
        </li>
        <li>
          <strong>Day 3:</strong>
          <h2 className="text-lg font-bold">Drive to Nagar Valley – Hopar</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Drive through Gilgit to Nagar Valley</li>
            <li>Arrival in Hopar village</li>
            <li>Overnight in local guest house</li>
          </ul>
        </li>
        <li>
          <strong>Day 4:</strong>
          <h2 className="text-lg font-bold">Trek from Hopar to Barpu Giram</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Start trek towards Barpu Glacier</li>
            <li>Cross glacier to reach Barpu Giram campsite</li>
            <li>Camp overnight under the stars</li>
          </ul>
        </li>
        <li>
          <strong>Day 5:</strong>
          <h2 className="text-lg font-bold">Trek to Rush Lake</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Challenging ascent to Rush Lake</li>
            <li>Stunning views of Spantik and surrounding peaks</li>
            <li>Camping near Rush Lake</li>
          </ul>
        </li>
        <li>
          <strong>Day 6:</strong>
          <h2 className="text-lg font-bold">Hike to Rush Peak & return to Rush Lake</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Early morning hike to Rush Peak summit (5,098m)</li>
            <li>Panoramic views and photography</li>
            <li>Descend back to Rush Lake camp</li>
          </ul>
        </li>
        <li>
          <strong>Day 7:</strong>
          <h2 className="text-lg font-bold">Trek back to Hopar Valley</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Descend via same trail to Hopar village</li>
            <li>Overnight stay in Hopar or Nagar</li>
          </ul>
        </li>
        <li>
          <strong>Day 8:</strong>
          <h2 className="text-lg font-bold">Drive to Hunza Valley – Karimabad</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Drive to Hunza and visit Altit/Baltit Forts</li>
            <li>Explore local market and Eagle's Nest view point</li>
            <li>Overnight in Hunza hotel</li>
          </ul>
        </li>
        <li>
          <strong>Day 9:</strong>
          <h2 className="text-lg font-bold">Drive to Chilas</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Return via Karakoram Highway</li>
            <li>Stop for photos and meals</li>
            <li>Overnight stay in Chilas</li>
          </ul>
        </li>
        <li>
          <strong>Day 10:</strong>
          <h2 className="text-lg font-bold">Drive to Islamabad & Departure</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Drive to Islamabad</li>
            <li>Drop at airport or hotel</li>
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
     
     <StayConnected />
     </div>
   );
};

export default RushPeakDetail;

import React from "react";
import { useParams } from "react-router-dom";
import Img1 from "../../assets/adventure deosii/1.jpg"
import Img2 from "../../assets/adventure deosii/2.jpg"
import Img3 from "../../assets/adventure deosii/3.jpg"
import Img4 from "../../assets/adventure deosii/4.jpg"
import Img5 from "../../assets/adventure deosii/5.jpg"
import Img6 from "../../assets/adventure deosii/6.jpg"
import Img7 from "../../assets/adventure deosii/7.jpg"
import Img8 from "../../assets/adventure deosii/8.jpg"
import Img9 from "../../assets/adventure deosii/9.jpg"
import Img10 from "../../assets/adventure deosii/10.jpg"
import Img11 from "../../assets/adventure deosii/11.jpg"
import Img12 from "../../assets/adventure deosii/12.jpg"
import Img13 from "../../assets/adventure deosii/13.jpg"
import Img14 from "../../assets/adventure deosii/14.jpg"
import Img15 from "../../assets/adventure deosii/15.jpg"
import Img16 from "../../assets/adventure deosii/16.jpg"

const DeosaiDetail = () => {
  const { title } = useParams();

  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-20">
      {/* Main Heading Centered */}
      <h1 className="text-4xl font-bold text-center text-black mb-8">
        {title}  Deosai National Park Adventure Tour
      </h1>

      {/* Subheading */}
      <h3 className="text-lg font-semibold text-center mb-4 text-gray-700">
        Land of Giants & High-Altitude Wilderness
      </h3>

      {/* Basic Tour Info */}
      <div className="text-center text-sm text-gray-600 mb-10">
        <p>Starting point: Skardu | End: Skardu</p>
        <p>Duration Trip: 9 nights / 10 days</p>
        <p>Ideal time: June to September</p>
      </div>

      {/* Tour Description */}
      <h2 className="text-2xl font-semibold text-black mb-3">Tour Description</h2>
      <p className="text-gray-800 mb-8 leading-relaxed">
        Deosai National Park is one of the most enchanting high-altitude plateaus in the world. With rolling plains, wildflowers, Sheosar Lake, and roaming wildlife like Himalayan brown bears and marmots, this is a must-visit for nature lovers, photographers, and adventure seekers. The tour offers an immersive experience in untouched landscapes through a carefully curated itinerary.
      </p>

      {/* Tour Highlights */}
      <h2 className="text-2xl font-semibold text-black mb-3">Tour Highlights</h2>
      <ul className="list-disc list-inside mb-10 text-gray-700 space-y-2">
        <li>Camping beside Sheosar Lake</li>
        <li>Off-road 4x4 journey through Deosai Plains</li>
        <li>Wildlife viewing – Himalayan brown bears, marmots</li>
        <li>Visit Sadpara Lake & Bara Pani River</li>
        <li>Bonfire nights and star-gazing</li>
        <li>Skardu city exploration</li>
      </ul>

      {/* Image Gallery */}
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
              <img src={Img13} alt="Tour 8" className="w-full h-48 object-cover rounded-lg" />
              <img src={Img14} alt="Tour 8" className="w-full h-48 object-cover rounded-lg" />
              <img src={Img15} alt="Tour 8" className="w-full h-48 object-cover rounded-lg" />
              <img src={Img16} alt="Tour 8" className="w-full h-48 object-cover rounded-lg" />
            </div>

      {/* Trip Information Table Style */}
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
                <li>Private 4x4 transportation</li>
                <li>All meals and accommodations</li>
                <li>Guided wildlife exploration</li>
                <li>Entry permits and camping equipment</li>
              </ul>
            </td>
          </tr>
          <tr className="border border-gray-300 align-top">
            <td className="p-3 font-semibold border border-gray-300">Excluded:</td>
            <td className="p-3 border border-gray-300">
              <ul className="list-disc list-inside space-y-1">
                <li>Airfare to/from Skardu</li>
                <li>Personal expenses</li>
              
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Tour Itinerary */}
     <h2 className="text-2xl font-semibold text-black mb-4">Tour Plan</h2>
<ul className="list-inside text-gray-800 leading-relaxed space-y-6 mb-10">
  <li>
    <h1 className="text-lg font-bold">Day 1 – Arrival in Skardu</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Transfer to hotel</li>
      <li>Explore local bazaars</li>
      <li>Riverside walk</li>
      <li>Overnight in Skardu</li>
    </ul>
  </li>

  <li>
    <h1 className="text-lg font-bold">Day 2 – Shigar & Cold Desert</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Visit Shigar Fort and Cold Desert</li>
      <li>Explore nearby villages</li>
      <li>Experience local culture</li>
      <li>Overnight in Skardu</li>
    </ul>
  </li>

  <li>
    <h1 className="text-lg font-bold">Day 3 – Deosai via Sadpara Lake</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Drive to Sadpara Lake</li>
      <li>4x4 ride to Deosai Plateau</li>
      <li>Camping at Bara Pani</li>
      <li>Bonfire & stargazing</li>
    </ul>
  </li>

  <li>
    <h1 className="text-lg font-bold">Day 4 – Sheosar Lake Exploration</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Jeep ride to Sheosar Lake</li>
      <li>Relax and explore the area</li>
      <li>Overnight camping in Deosai</li>
    </ul>
  </li>

  <li>
    <h1 className="text-lg font-bold">Day 5 – Wildlife & Drive to Astore</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Wildlife spotting (marmots, possible bears)</li>
      <li>Return drive from Deosai to Astore</li>
      <li>Overnight in Astore Valley</li>
    </ul>
  </li>

  <li>
    <h1 className="text-lg font-bold">Day 6 – Astore Valley & Rama Meadows</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Visit Rama Meadows</li>
      <li>Explore Astore local culture</li>
      <li>Relax in peaceful surroundings</li>
      <li>Overnight stay in Astore</li>
    </ul>
  </li>

  <li>
    <h1 className="text-lg font-bold">Day 7 – Drive to Gilgit via Jaglot</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Scenic drive through Karakoram landscapes</li>
      <li>Stopovers for tea and photography</li>
      <li>Arrive in Gilgit and check-in</li>
      <li>Overnight stay in Gilgit</li>
    </ul>
  </li>

  <li>
    <h1 className="text-lg font-bold">Day 8 – Explore Gilgit City</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Visit Kargah Buddha and Gilgit Bridge</li>
      <li>Walk along Gilgit River</li>
      <li>Shopping in local markets</li>
      <li>Overnight in Gilgit</li>
    </ul>
  </li>

  <li>
    <h1 className="text-lg font-bold">Day 9 –  Trip to Naltar Valley</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Day trip to Naltar </li>
      <li>Explore lakes and pine forest</li>
      <li>Photography and relaxation</li>
      <li>Return to Gilgit for overnight stay</li>
    </ul>
  </li>
<li>
  <h1 className="text-lg font-bold">Day 9 – Trip to Hunza Valley</h1>
  <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
    <li>Drive from Gilgit to Hunza via the Karakoram Highway</li>
    <li>Visit Altit and Baltit Forts</li>
    <li>Explore Karimabad Bazaar and enjoy panoramic views</li>
    <li>Overnight stay in Hunza</li>
  </ul>
</li>

  <li>
    <h1 className="text-lg font-bold">Day 11 – Departure from Gilgit</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Airport transfer</li>
      <li>End of tour</li>
    </ul>
  </li>
</ul>


      {/* Company Information */}
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

export default DeosaiDetail;
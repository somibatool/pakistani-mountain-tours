import React from 'react'
import { useParams } from "react-router-dom";
import Img1 from "../../assets/adventureFairymedows/1.jpg"
import Img2 from "../../assets/adventureFairymedows/2.jpg"
import Img3 from "../../assets/adventureFairymedows/3.jpg"
import Img4 from "../../assets/adventureFairymedows/4.jpg"
import Img5 from "../../assets/adventureFairymedows/5.jpg"
import Img6 from "../../assets/adventureFairymedows/6.jpg"
import Img7 from "../../assets/adventureFairymedows/7.jpg"
import Img8 from "../../assets/adventureFairymedows/8.jpg"
import Img9 from "../../assets/adventureFairymedows/9.jpg"
import Img10 from "../../assets/adventureFairymedows/10.jpg"
import Img11 from "../../assets/adventureFairymedows/11.jpg"
import Img12 from "../../assets/adventureFairymedows/12.jpg"
import Img13 from "../../assets/adventureFairymedows/13.jpg"
import Img14 from "../../assets/adventureFairymedows/14.jpg"
import Img15 from "../../assets/adventureFairymedows/15.jpg"
import Img16 from "../../assets/adventureFairymedows/16.jpg"

const fairyadventure = () => {
  const { title } = useParams();
  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-20">
      {/* Main Heading Centered */}
      <h1 className="text-4xl font-bold text-center text-black mb-8">
        {title}  Fairy Meadows Adventure Tour 
      </h1>

      {/* Subheading */}
      <h3 className="text-lg font-semibold text-center mb-4 text-gray-700">
        Land of Giants & High-Altitude Wilderness
      </h3>

      {/* Basic Tour Info */}
      <div className="text-center text-sm text-gray-600 mb-10">
        <p>Starting point: Skardu | End: Gilgit</p>
        <p>Duration Trip: 11 nights / 12 days</p>
        <p>Ideal time: June to September</p>
      </div>

      {/* Tour Description */}
      <h2 className="text-2xl font-semibold text-black mb-3">Tour Description</h2>
      <p className="text-gray-800 mb-8 leading-relaxed">
        The Fairy Meadows Adventure Tour is one of Pakistan’s most scenic and soul-stirring journeys. Nestled at the base of Nanga Parbat — the 9th highest peak in the world — Fairy Meadows offers lush green alpine meadows, starry skies, and breathtaking views of glaciers and towering mountains. This extended tour also takes you through the cultural heart of Gilgit, the spectacular landscapes of Hunza Valley, and the surreal beauty of Naltar Valley. It's an ideal mix of hiking, sightseeing, and cultural immersion for nature lovers, photographers, and explorers.
      </p>

      {/* Tour Highlights */}
      <h2 className="text-2xl font-semibold text-black mb-3">Tour Highlights</h2>
      <ul className="list-disc list-inside mb-10 text-gray-700 space-y-2">
        <li>Camping at Fairy Meadows with Nanga Parbat views</li>
        <li>Optional hike to Nanga Parbat Base Camp</li>
        <li>Visit to Hunza Valley – Altit/Baltit Forts, Eagle's Nest</li>
        <li>Day trip to Naltar Valley – lakes, forests, and jeep safari</li>
        <li>Exploration of Gilgit town and local markets</li>
        <li>Bonfire nights, traditional meals, and local music</li>
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

      {/* Trip Information Table */}
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
                <li>Guided hikes and cultural tours</li>
                <li>Entry permits and camping equipment</li>
              </ul>
            </td>
          </tr>
          <tr className="border border-gray-300 align-top">
            <td className="p-3 font-semibold border border-gray-300">Excluded:</td>
            <td className="p-3 border border-gray-300">
              <ul className="list-disc list-inside space-y-1">
                <li>International Flights</li>
                <li>Personal expenses</li>
              
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

     <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
<div className="space-y-6 mb-10">
  <div>
    <h1 className="text-lg font-bold">Day 1 – Departure from Islamabad</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Group meets in Islamabad</li>
      <li>Briefing and final packing</li>
      <li>Begin road journey toward Chilas</li>
      <li>Overnight stay in Chilas</li>
    </ul>
  </div>
  <div>
    <h1 className="text-lg font-bold">Day 2 – Arrival at Chilas & Travel to Raikot Bridge</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Early morning drive to Raikot Bridge</li>
      <li>Optional photography stops along the way</li>
      <li>Preparation for jeep transfer next day</li>
      <li>Overnight at local hotel or rest house</li>
    </ul>
  </div>
  <div>
    <h1 className="text-lg font-bold">Day 3 – Jeep Ride to Tattu Village & Hike to Fairy Meadows</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Thrilling jeep ride on mountain road to Tattu village</li>
      <li>Start guided hike (approx. 3 hours) to Fairy Meadows</li>
      <li>Arrival and setup at campsite or wooden huts</li>
      <li>Campfire and dinner under stars</li>
    </ul>
  </div>
  <div>
    <h1 className="text-lg font-bold">Day 4 – Exploration & Overnight at Fairy Meadows</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Free day for nature walks, photography, and rest</li>
      <li>Optional hike to Nanga Parbat Base Camp (for experienced trekkers)</li>
      <li>Enjoy local food and evening gathering at camp</li>
      <li>Overnight stay in Fairy Meadows</li>
    </ul>
  </div>
  <div>
    <h1 className="text-lg font-bold">Day 5 – Return to Raikot Bridge & Drive to Hunza</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Morning descent to Tattu village</li>
      <li>Jeep ride back to Raikot Bridge</li>
      <li>Drive through Gilgit to Hunza Valley</li>
      <li>Overnight in Karimabad</li>
    </ul>
  </div>
  <div>
    <h1 className="text-lg font-bold">Day 6 – Explore Hunza Valley</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Visit Baltit & Altit Forts</li>
      <li>Short trek to Eagle’s Nest viewpoint</li>
      <li>Local culture and food experience</li>
      <li>Overnight in Hunza</li>
    </ul>
  </div>
  <div>
    <h1 className="text-lg font-bold">Day 7 – Day Trip to Naltar Valley</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Early departure to Naltar via 4x4 jeep</li>
      <li>Visit Naltar Lakes and pine forests</li>
      <li>Evening return to Gilgit for overnight stay</li>
    </ul>
  </div>
  <div>
    <h1 className="text-lg font-bold">Day 8 – Gilgit City Tour</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Explore Gilgit Bazaar</li>
      <li>Visit Kargah Buddha and suspension bridges</li>
      <li>Local dry fruits and souvenirs shopping</li>
      <li>Farewell group dinner</li>
    </ul>
  </div>
  <div>
    <h1 className="text-lg font-bold">Day 9 – Flight/Drive back to Islamabad</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Depending on weather: flight or road journey</li>
      <li>End of tour with group photos and goodbyes</li>
    </ul>
  </div>
</div>


      <h2 className="text-2xl font-semibold mb-2">Contact & Booking:</h2>
      <p className="mb-2">
        For bookings and more information:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Phone: <strong>0300-1234567</strong></li>
        <li>Email: <strong>info@mountaintours.pk</strong></li>
        <li>Address: Office #12, Saddar Road, Islamabad, Pakistan</li>
        <li>Company: Pakistani Mountain Tours</li>
      </ul>
    </div>
  )
}

export default fairyadventure;

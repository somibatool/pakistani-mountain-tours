import React from "react";
import { useParams } from "react-router-dom";
import Img1 from "../../assets/astor/1.jpg"
import Img2 from "../../assets/astor/2.jpg"
import Img3 from "../../assets/astor/3.jpg"
import Img4 from "../../assets/astor/4.jpg"
import Img5 from "../../assets/astor/5.jpg"
import Img6 from "../../assets/astor/6.jpg"
import Img7 from "../../assets/astor/7.jpg"
import Img8 from "../../assets/adventure deosii/18.jpg"
import Img9 from "../../assets/adventure deosii/17.jpg"
import Img10 from "../../assets/adventure deosii/16.jpg"
import Img11 from "../../assets/adventure deosii/15.jpg"
import Img12 from "../../assets/adventure deosii/14.jpg"



const AstoreAdventuredetail = () => {
  const { title } = useParams();

  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-10">
      {/* Main Heading Centered */}
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        {title} Astore Valley Adventure Tour
      </h1>

      {/* Subheading */}
      <h3 className="text-lg font-semibold text-center mb-4 text-gray-700">
        Majestic Valleys & Alpine Glory
      </h3>

      {/* Basic Tour Info */}
      <div className="text-center text-sm text-gray-600 mb-10">
        <p>Starting point: Islamabad | End: Islamabad</p>
        <p>Duration Trip: 7 nights / 8 days</p>
        <p>Ideal time: May to October</p>
      </div>

      {/* Tour Description */}
      <h2 className="text-2xl font-semibold text-black mb-3">Tour Description</h2>
      <p className="text-gray-800 mb-8 leading-relaxed">
        Astore Valley is a hidden gem in Gilgit-Baltistan offering breathtaking scenery, alpine meadows, glacier-fed rivers, and dramatic mountain landscapes. This tour is perfect for those looking to explore less crowded yet spectacular destinations in Pakistan. From the serene Rama Meadows to the rugged plains of Deosai and beyond, this journey blends natural beauty with cultural exploration. 
      </p>

      {/* Tour Highlights */}
      <h2 className="text-2xl font-semibold text-black mb-3">Tour Highlights</h2>
      <ul className="list-disc list-inside mb-10 text-gray-700 space-y-2">
        <li>Explore Rama Meadows and Rama Lake</li>
        <li>Visit Astore Bazaar and local villages</li>
        <li>Cross lush valleys and alpine forests</li>
        <li>Adventure drive to Deosai Plains</li>
        <li>Camping at Sheosar Lake</li>
        <li>Cultural interaction with locals</li>
      </ul>
{/* images section */}
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

      {/* Trip Information Table Style */}
      <table className="w-full border border-gray-300 text-sm mb-10">
        <tbody>
          <tr className="border border-gray-300">
            <td className="p-3 font-semibold border border-gray-300">Cost:</td>
            <td className="p-3 border border-gray-300">Ask (based on group size)</td>
          </tr>
          <tr className="border border-gray-300 align-top">
            <td className="p-3 font-semibold border border-gray-300">Included:</td>
            <td className="p-3 border border-gray-300">
              <ul className="list-disc list-inside space-y-1">
                <li>Private transportation</li>
                <li>Hotel accommodations</li>
                <li>Meals during Deosai camping</li>
                <li>Guided tours and entry tickets</li>
                <li>Camping equipment at Sheosar Lake</li>
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

      {/* Tour Itinerary */}
    <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
<div className="space-y-6 mb-10">
  <div>
    <h1 className="text-lg font-bold">Day 1 – Arrival in Islamabad</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Pickup from airport</li>
      <li>Hotel transfer and freshen up</li>
      <li>Optional short city tour (if time allows)</li>
      <li>Overnight stay in Islamabad</li>
    </ul>
  </div>

  <div>
    <h1 className="text-lg font-bold">Day 2 – Drive to Astore via Jaglot</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Early morning departure from Islamabad</li>
      <li>Drive along Karakoram Highway to Jaglot, then to Astore</li>
      <li>Scenic stopovers en route</li>
      <li>Overnight in Astore</li>
    </ul>
  </div>

  <div>
    <h1 className="text-lg font-bold">Day 3 – Rama Meadows & Rama Lake Hike</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Full day excursion to Rama Meadows</li>
      <li>Optional guided hike to Rama Lake</li>
      <li>Picnic and photography at scenic points</li>
      <li>Overnight stay in Astore</li>
    </ul>
  </div>

  <div>
    <h1 className="text-lg font-bold">Day 4 – Cross Deosai Plains to Sheosar Lake</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Depart Astore via Chilam and enter Deosai National Park</li>
      <li>Explore Deosai wildlife and rolling plains</li>
      <li>Set up camp at Sheosar Lake</li>
      <li>Bonfire and overnight camping</li>
    </ul>
  </div>

  <div>
    <h1 className="text-lg font-bold">Day 5 – Travel to Skardu</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Morning exploration of Sheosar Lake</li>
      <li>Drive across Deosai to Skardu Valley</li>
      <li>Check-in at hotel in Skardu</li>
      <li>Free evening to relax</li>
    </ul>
  </div>

  <div>
    <h1 className="text-lg font-bold">Day 6 – Skardu Local Sightseeing</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Visit Shigar Fort, Cold Desert, and Satpara Lake</li>
      <li>Explore Skardu Bazaar</li>
      <li>Dinner with local flavors</li>
      <li>Overnight in Skardu</li>
    </ul>
  </div>

  <div>
    <h1 className="text-lg font-bold">Day 7 – Day Trip to Khaplu Valley</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Drive to Khaplu and visit Khaplu Fort</li>
      <li>Scenic photography near the confluence of rivers</li>
      <li>Return to Skardu by evening</li>
      <li>Overnight stay in Skardu</li>
    </ul>
  </div>

  <div>
    <h1 className="text-lg font-bold">Day 8 – Free Day in Skardu</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Optional visit to Manthal Buddha Rock or Hike to Kharpocho Fort</li>
      <li>Souvenir shopping and leisure</li>
      <li>Farewell dinner with group</li>
      <li>Overnight in Skardu</li>
    </ul>
  </div>

  <div>
    <h1 className="text-lg font-bold">Day 9 – Fly from Skardu to Islamabad</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Morning flight to Islamabad (weather dependent)</li>
      <li>Arrival and hotel transfer</li>
      <li>Evening rest or optional city visit</li>
      <li>Overnight in Islamabad</li>
    </ul>
  </div>

  <div>
    <h1 className="text-lg font-bold">Day 10 – Departure Day</h1>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
      <li>Airport transfer for your onward flight</li>
      <li>Tour concludes with amazing memories</li>
    </ul>
  </div>
</div>


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

export default AstoreAdventuredetail;

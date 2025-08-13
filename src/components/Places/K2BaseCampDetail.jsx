import React from "react";
import { useParams } from "react-router-dom";
import Img1 from "../../assets/k2-trk/1.jpg";
import Img2 from "../../assets/k2-trk/2.jpg";
import Img3 from "../../assets/k2-trk/3.jpg";
import Img4 from "../../assets/k2-trk/4.jpg";
import Img5 from "../../assets/k2-trk/5.jpg";
import Img6 from "../../assets/k2-trk/6.jpg";
import Img7 from "../../assets/k2-trk/7.jpg";
import Img8 from "../../assets/k2-trk/8.jpg";
import Img9 from "../../assets/k2-trk/9.jpg";
import Img10 from "../../assets/k2-trk/16.jpg";
import Img11 from "../../assets/k2-trk/10.jpg";
import Img12 from "../../assets/k2-trk/11.jpg";
import Img13 from "../../assets/k2-trk/12.jpg";
import Img14 from "../../assets/k2-trk/13.jpg";
import Img15 from "../../assets/k2-trk/14.jpg";
import Img16 from "../../assets/k2-trk/15.jpg";

import StayConnected from "../../pages/StayConnected";

const K2BaseCampDetail = () => {
  const { title } = useParams();

  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-6">
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        {title} K2 Base Camp Trek
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
        K2 Base Camp trekking itinerary via the Baltoro Glacier and Concordia,
        one of the most iconic and demanding treks in the Karakoram range of
        Pakistan. This trek usually takes 18–21 days depending on weather, group
        pace, and acclimatization needs.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8,Img9, Img10 , Img11, Img12, Img13, Img14 , Img15, Img16].map((img, i) => (
          <img key={i} src={img} alt={`Tour ${i + 1}`} className="w-full h-48 object-cover rounded-lg" />
        ))}
      </div>

      <table className="w-full border border-gray-300 text-sm mb-10">
        <tbody>
          <tr className="border border-gray-300">
            <td className="p-3 font-semibold border border-gray-300">Cost:</td>
            <td className="p-3 border border-gray-300">  Ask (depends on the number of people)</td>
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

      <h2 className="text-2xl font-semibold text-black mb-4">Tour Schedule</h2>
      <ul className="list-inside text-gray-800 leading-relaxed space-y-6 mb-10">
        <li>
          <strong>Day 1:</strong>
          <h2 className="text-lg font-bold">Arrival in Islamabad</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Airport pickup</li>
            <li>Hotel check-in</li>
            <li>Trek briefing at Alpine Club of Pakistan</li>
            <li>Gear check and documentation</li>
          </ul>
        </li>

        <li>
          <strong>Day 2:</strong>
          <h2 className="text-lg font-bold">Flight to Skardu</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>(1 hour) or drive via Karakoram Highway (2 days)</li>
            <li>If flying: Enjoy aerial views of Nanga Parbat</li>
            <li>If driving: Overnight at Chilas via KKH</li>
          </ul>
        </li>

        <li>
          <strong>Day 3:</strong>
          <h2 className="text-lg font-bold">Free day in Skardu (2,230m)</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Last-minute shopping</li>
            <li>Permits finalized</li>
            <li>Optional day hike (Shigar Fort or Satpara Lake)</li>
          </ul>
        </li>

        <li>
          <strong>Day 4:</strong>
          <h2 className="text-lg font-bold">Drive to Askole (3,050m)</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>6–7 hours rough jeep ride along Braldu River</li>
            <li>Overnight camping at Askole</li>
          </ul>
        </li>

        <li>
          <strong>Day 5:</strong>
          <h2 className="text-lg font-bold">Trek to Jhola (3,200m)</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>6–7 hours trek</li>
            <li>Cross rivers and suspension bridges</li>
            <li>Walk along the Braldu River</li>
          </ul>
        </li>

        <li>
          <strong>Day 6:</strong>
          <h2 className="text-lg font-bold">Trek to Paiju (3,400m)</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>6–7 hours trek</li>
            <li>Views of Trango Towers</li>
            <li>Last greenery before glacier zone</li>
          </ul>
        </li>

        <li>
          <strong>Day 7:</strong>
          <h2 className="text-lg font-bold">Acclimatization/rest at Paiju</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Explore rock formations</li>
            <li>Porters bake fresh bread</li>
          </ul>
        </li>

        <li>
          <strong>Day 8:</strong>
          <h2 className="text-lg font-bold">Trek to Khoburtse (3,930m)</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>6–7 hours trek</li>
            <li>Enter the Baltoro Glacier</li>
            <li>Views of Cathedral Towers and Uli Biaho</li>
          </ul>
        </li>

        <li>
          <strong>Day 9:</strong>
          <h2 className="text-lg font-bold">Trek to Urdukas (4,050m)</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>4–5 hours trek</li>
            <li>Views of Great Trango and Lobsang Spire</li>
            <li>Camp on grassy terraces above glacier</li>
          </ul>
        </li>

        <li>
          <strong>Day 10:</strong>
          <h2 className="text-lg font-bold">Trek to Goro II (4,280m)</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>6–7 hours trek</li>
            <li>First views of Gasherbrum IV</li>
            <li>Camp on ice—first night fully on glacier</li>
          </ul>
        </li>

        <li>
          <strong>Day 11:</strong>
          <h2 className="text-lg font-bold">Trek to Concordia (4,600m)</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>5–6 hours trek</li>
            <li>Views of K2, Broad Peak, Gasherbrum I & II</li>
          </ul>
        </li>

        <li>
          <strong>Day 12:</strong>
          <h2 className="text-lg font-bold">Trek to K2 Base Camp (5,150m)</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>8–10 hours roundtrip</li>
            <li>Optional overnight at Broad Peak Base Camp</li>
            <li>Stand below mighty K2 and return</li>
          </ul>
        </li>

        <li>
          <strong>Day 13:</strong>
          <h2 className="text-lg font-bold">Optional Day or Broad Peak BC</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Visit Gilkey Memorial</li>
            <li>Rest or explore based on group condition & weather</li>
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

export default K2BaseCampDetail;

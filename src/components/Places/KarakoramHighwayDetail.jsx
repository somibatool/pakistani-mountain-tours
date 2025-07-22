import React from 'react';
import { useParams } from 'react-router-dom';

const KarakoramHighwayDetail = () => {
  const { title } = useParams();

  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-10">
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        Karakoram Highway Bike Tour
      </h1>

      <h3 className="text-lg font-semibold text-center mb-4 text-gray-700">
        Ride the World's Highest Paved International Road
      </h3>

      <div className="text-center text-sm text-gray-600 mb-10">
        <p>Starting Point: Islamabad | End Point: Khunjerab Pass</p>
        <p>Duration: 8 Days / 7 Nights</p>
        <p>Best Time: May to October</p>
      </div>

      <h2 className="text-2xl font-semibold text-black mb-3">
        Tour Description
      </h2>
      <p className="text-gray-800 mb-8 leading-relaxed">
        This Karakoram Highway Bike Tour takes you through one of the world's most spectacular routes. 
        You'll ride alongside the Indus River, past towering mountains, glaciers, ancient Silk Road settlements, and iconic towns like Hunza, Passu, and Sost, reaching the Khunjerab Pass at the China-Pakistan border.
      </p>

      <h2 className="text-2xl font-semibold text-black mb-3">
        Tour Highlights
      </h2>
      <ul className="list-disc list-inside mb-10 text-gray-700 space-y-2">
        <li>Ride from Islamabad to Khunjerab Pass</li>
        <li>Explore Chilas, Gilgit, Hunza, Passu, and Sost</li>
        <li>Cross famous suspension bridges</li>
        <li>Experience Attabad Lake</li>
        <li>Visit Passu Glacier</li>
        <li>Reach Khunjerab Pass at 4,700 meters</li>
        <li>Adventure through Karakoram National Park</li>
      </ul>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <img src="/karakoram1.jpg" alt="Highway Ride" className="w-full h-48 object-cover rounded-lg" />
        <img src="/karakoram2.jpg" alt="Scenic View" className="w-full h-48 object-cover rounded-lg" />
        <img src="/karakoram3.jpg" alt="Bike Adventure" className="w-full h-48 object-cover rounded-lg" />
        <img src="/karakoram4.jpg" alt="Mountain Ride" className="w-full h-48 object-cover rounded-lg" />
      </div>

      <table className="w-full border border-gray-300 text-sm mb-10">
        <tbody>
          <tr className="border border-gray-300">
            <td className="p-3 font-semibold border border-gray-300">Cost:</td>
            <td className="p-3 border border-gray-300">
              Contact us (depends on number of participants)
            </td>
          </tr>
          <tr className="border border-gray-300 align-top">
            <td className="p-3 font-semibold border border-gray-300">Included:</td>
            <td className="p-3 border border-gray-300">
              <ul className="list-disc list-inside space-y-1">
                <li>Bike Rental</li>
                <li>Fuel</li>
                <li>Accommodation</li>
                <li>All breakfasts</li>
                <li>Support vehicle</li>
                <li>Professional guide</li>
              </ul>
            </td>
          </tr>
          <tr className="border border-gray-300 align-top">
            <td className="p-3 font-semibold border border-gray-300">Excluded:</td>
            <td className="p-3 border border-gray-300">
              <ul className="list-disc list-inside space-y-1">
                <li>International flights</li>
                <li>Lunch and dinners</li>
                <li>Insurance</li>
                <li>Personal expenses</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="border-t pt-6 text-sm text-gray-700">
        <p><strong>PAKISTANI MOUNTAIN TOURS (PVT) LTD</strong></p>
        <p>Contact: +66 956071467 | pakistanimountaintour@gmail.com</p>
      </div>
    </div>
  );
};

export default KarakoramHighwayDetail;

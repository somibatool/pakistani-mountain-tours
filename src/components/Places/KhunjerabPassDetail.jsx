import React from 'react';
import { useParams } from 'react-router-dom';

const KhunjerabPassDetail = () => {
  const { title } = useParams();

  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-10">
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        Khunjerab Pass Bike Tour
      </h1>

      <h3 className="text-lg font-semibold text-center mb-4 text-gray-700">
        Adventure Ride to the World's Highest Border
      </h3>

      <div className="text-center text-sm text-gray-600 mb-10">
        <p>Starting Point: Hunza | End Point: Khunjerab Pass</p>
        <p>Duration: 5 Days / 4 Nights</p>
        <p>Best Time: June to September</p>
      </div>

      <h2 className="text-2xl font-semibold text-black mb-3">
        Tour Description
      </h2>
      <p className="text-gray-800 mb-8 leading-relaxed">
        Experience the thrill of riding to Khunjerab Pass, the highest paved international border crossing in the world.
        This adventure starts from Hunza Valley and takes you deep into the Karakoram Mountains, riding alongside glaciers,
        rivers, and scenic landscapes, all the way to the Pak-China border at 4,700 meters.
      </p>

      <h2 className="text-2xl font-semibold text-black mb-3">
        Tour Highlights
      </h2>
      <ul className="list-disc list-inside mb-10 text-gray-700 space-y-2">
        <li>Bike ride from Hunza to Khunjerab Pass</li>
        <li>Explore Passu Cones and Passu Glacier</li>
        <li>Cross famous Hussaini Suspension Bridge</li>
        <li>Ride through Karakoram National Park</li>
        <li>Reach the Pakistan-China border at 4,700 meters</li>
        <li>Enjoy breathtaking mountain views</li>
      </ul>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <img src="/khunjerab1.jpg" alt="Ride to Khunjerab" className="w-full h-48 object-cover rounded-lg" />
        <img src="/khunjerab2.jpg" alt="Scenery" className="w-full h-48 object-cover rounded-lg" />
        <img src="/khunjerab3.jpg" alt="Bike Ride" className="w-full h-48 object-cover rounded-lg" />
        <img src="/khunjerab4.jpg" alt="Mountains" className="w-full h-48 object-cover rounded-lg" />
      </div>

      <table className="w-full border border-gray-300 text-sm mb-10">
        <tbody>
          <tr className="border border-gray-300">
            <td className="p-3 font-semibold border border-gray-300">Cost:</td>
            <td className="p-3 border border-gray-300">
              Contact us for customized package
            </td>
          </tr>
          <tr className="border border-gray-300 align-top">
            <td className="p-3 font-semibold border border-gray-300">Included:</td>
            <td className="p-3 border border-gray-300">
              <ul className="list-disc list-inside space-y-1">
                <li>Bike rental & fuel</li>
                <li>Hotel stays</li>
                <li>All breakfasts</li>
                <li>Support vehicle</li>
                <li>Tour guide services</li>
              </ul>
            </td>
          </tr>
          <tr className="border border-gray-300 align-top">
            <td className="p-3 font-semibold border border-gray-300">Excluded:</td>
            <td className="p-3 border border-gray-300">
              <ul className="list-disc list-inside space-y-1">
                <li>International airfare</li>
                <li>Lunch & dinner</li>
                <li>Personal expenses</li>
                <li>Tips</li>
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

export default KhunjerabPassDetail;

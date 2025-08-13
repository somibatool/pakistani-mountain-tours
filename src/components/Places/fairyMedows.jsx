import React from 'react';
import { useParams } from 'react-router-dom';
import Img1 from '../../assets/adventureFairymedows/4.jpg';
import Img2 from '../../assets/adventureFairymedows/5.jpg';
import Img3 from '../../assets/adventureFairymedows/11.jpg';
import Img4 from '../../assets/autumn/ali_abad_tawor.jpg';
import Img5 from '../../assets/autumn/tress.jpg';
import Img6 from '../../assets/adventureFairymedows/1.jpg';
import Img7 from '../../assets/team pic/team 6.jpg';
import Img8 from '../../assets/adventureFairymedows/10.jpg';
import Img9 from '../../assets/adventureFairymedows/12.jpg';
import Img10 from '../../assets/adventureFairymedows/13.jpg';
import Img11 from '../../assets/adventureFairymedows/14.jpg';
import Img12 from '../../assets/adventureFairymedows/15.jpg';

// Gilgit Balistan Tour - Hunza & Skardu Autumn Tour (fairy medows)
// Witness the Golden Fall Season of Northern Pakistan
const Autumn = () => {
  const { title } = useParams();

  return (
     <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-20">
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        {title} - Hunza & Skardu Autumn Tour
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
  The Autumn Fairy Meadows Tour takes you to one of Pakistan’s most iconic landscapes, where 
  lush green meadows meet the snow-capped majesty of Nanga Parbat. During fall, golden-hued 
  trees, crisp mountain air, and clear blue skies create a dreamlike atmosphere for photography 
  and exploration. This journey combines the magic of Fairy Meadows with visits to lakes, forts, 
  glaciers, and cultural gems in Hunza and Skardu — offering a perfect mix of adventure, 
  tranquility, and breathtaking beauty.
</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 h-full w-full">
        <img src={Img1} alt="Tour 1" className="w-full h-full object-cover rounded-lg" />
        <img src={Img2} alt="Tour 2" className="w-full h-full object-cover rounded-lg" />
        <img src={Img3} alt="Tour 3" className="w-full h-full object-cover rounded-lg" />
        <img src={Img4} alt="Tour 4" className="w-full h-full object-cover rounded-lg" />
        <img src={Img5} alt="Tour 5" className="w-full h-full object-cover rounded-lg" />
        <img src={Img6} alt="Tour 6" className="w-full h-full object-cover rounded-lg" />
        <img src={Img7} alt="Tour 7" className="w-full h-full object-cover rounded-lg" />
        <img src={Img8} alt="Tour 8" className="w-full h-full object-cover rounded-lg" />
        <img src={Img9} alt="Tour 8" className="w-full h-full object-cover rounded-lg" />
        <img src={Img10} alt="Tour 8" className="w-full h-full object-cover rounded-lg" />
        <img src={Img11} alt="Tour 8" className="w-full h-full object-cover rounded-lg" />
        <img src={Img12} alt="Tour 8" className="w-full h-full object-cover rounded-lg" />
      
      </div>

      <table className="w-full border border-gray-300 text-sm mb-10">
        <tbody>
          <tr className="border border-gray-300">
            <td className="p-3 font-semibold border border-gray-300">Cost:</td>
            <td className="p-3 border border-gray-300">Ask (depends on the number of people)</td>
          </tr>
          <tr className="border border-gray-300 align-top">
            <td className="p-3 font-semibold border border-gray-300">Included:</td>
            <td className="p-3 border border-gray-300">
              <ul className="list-disc list-inside space-y-1">
                <li>Hotels (3 and 4 start)</li>
                <li>Breakfast, Lunch, Dinner </li>
                <li>Water And Fruits</li>
                <li>Transport, transfer and Fuel</li>
               
                <li>Entrance Fee</li>
                <li>1 Domestic Flights (Islambad -Skardu)</li>
                <li>Guiding</li>
                <li>visa</li>
                <li>Insurance</li>
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

     <h2 className="text-2xl font-semibold text-black mb-4">Tour Schedule - Autumn Fairy Meadows, Hunza & Skardu</h2>
<ul className="list-inside text-gray-800 leading-relaxed space-y-6 mb-10">

  <li>
    <strong className="font-bold text-lg">Day 1:</strong>
    <h3 className="text-lg font-bold">Arrival in Islamabad</h3>
    <ul className="list-disc list-inside ml-5">
      <li>Meet and greet at Islamabad International Airport</li>
      <li>Hotel transfer and rest</li>
      <li>Evening visit to Faisal Mosque and Daman-e-Koh</li>
      <li>Overnight stay in Islamabad</li>
    </ul>
  </li>

  <li>
    <strong className="font-bold text-lg">Day 2:</strong>
    <h3 className="text-lg font-bold">Islamabad – Fairy Meadows</h3>
    <ul className="list-disc list-inside ml-5">
      <li>Drive to Raikot Bridge via Karakoram Highway</li>
      <li>Jeep ride to Tato Village</li>
      <li>Short trek to Fairy Meadows</li>
      <li>Overnight stay in wooden cabins at Fairy Meadows</li>
    </ul>
  </li>

  <li>
    <strong className="font-bold text-lg">Day 3:</strong>
    <h3 className="text-lg font-bold">Explore Fairy Meadows</h3>
    <ul className="list-disc list-inside ml-5">
      <li>Morning views of Nanga Parbat</li>
      <li>Optional trek to Beyal Camp</li>
      <li>Photography and relaxation in lush meadows</li>
      <li>Overnight stay at Fairy Meadows</li>
    </ul>
  </li>

  <li>
    <strong className="font-bold text-lg">Day 4:</strong>
    <h3 className="text-lg font-bold">Fairy Meadows – Skardu</h3>
    <ul className="list-disc list-inside ml-5">
      <li>Return trek to Tato Village</li>
      <li>Drive to Skardu via breathtaking mountain roads</li>
      <li>Evening free time in Skardu</li>
      <li>Overnight stay in Skardu</li>
    </ul>
  </li>

  <li>
    <strong className="font-bold text-lg">Day 5:</strong>
    <h3 className="text-lg font-bold">Skardu Valley Tour</h3>
    <ul className="list-disc list-inside ml-5">
      <li>Visit Shangrila Lake and Upper Kachura Lake</li>
      <li>Explore Skardu Fort</li>
      <li>Photography in autumn landscapes</li>
      <li>Overnight stay in Skardu</li>
    </ul>
  </li>

  <li>
    <strong className="font-bold text-lg">Day 6:</strong>
    <h3 className="text-lg font-bold">Shigar Valley & Cold Desert</h3>
    <ul className="list-disc list-inside ml-5">
      <li>Visit Shigar Fort</li>
      <li>Walk along the Shigar River</li>
      <li>Experience the surreal Sarfaranga Cold Desert</li>
      <li>Overnight stay in Skardu</li>
    </ul>
  </li>

  <li>
    <strong className="font-bold text-lg">Day 7:</strong>
    <h3 className="text-lg font-bold">Skardu – Hunza</h3>
    <ul className="list-disc list-inside ml-5">
      <li>Drive along the Karakoram Highway</li>
      <li>Stop at scenic spots and rivers</li>
      <li>Evening arrival in Hunza</li>
      <li>Overnight stay in Hunza</li>
    </ul>
  </li>

  <li>
    <strong className="font-bold text-lg">Day 8:</strong>
    <h3 className="text-lg font-bold">Hunza Exploration</h3>
    <ul className="list-disc list-inside ml-5">
      <li>Visit Baltit Fort & Altit Fort</li>
      <li>See Attabad Lake, Passu Cones, and Hussaini Suspension Bridge</li>
      <li>Enjoy autumn colors throughout the valley</li>
      <li>Overnight stay in Hunza</li>
    </ul>
  </li>

  <li>
    <strong className="font-bold text-lg">Day 9:</strong>
    <h3 className="text-lg font-bold">Hunza – Naran/Besham</h3>
    <ul className="list-disc list-inside ml-5">
      <li>Sunrise view from Duikar</li>
      <li>Drive back via Karakoram Highway</li>
      <li>Overnight stay in Naran or Besham</li>
    </ul>
  </li>

  <li>
    <strong className="font-bold text-lg">Day 10:</strong>
    <h3 className="text-lg font-bold">Return to Islamabad</h3>
    <ul className="list-disc list-inside ml-5">
      <li>Final drive to Islamabad</li>
      <li>Farewell lunch/dinner</li>
      <li>Airport drop-off for onward journey</li>
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

export default Autumn;

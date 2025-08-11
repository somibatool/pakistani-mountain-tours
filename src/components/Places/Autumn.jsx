import React from 'react';
import { useParams } from 'react-router-dom';
import Img1 from '../../assets/spring/1.jpg';
import Img2 from '../../assets/spring/2.jpg';
import Img3 from '../../assets/spring/3.jpg';
import Img4 from '../../assets/autumn/ali_abad_tawor.jpg';
import Img5 from '../../assets/autumn/tress.jpg';
import Img6 from '../../assets/autumn/river.jpg';
import Img7 from '../../assets/spring/19.jpg';
import Img8 from '../../assets/spring/23.jpg';
import Img9 from '../../assets/spring/24.jpg';
import Img10 from '../../assets/spring/25.jpg';
import Img11 from '../../assets/spring/27.jpg';
import Img12 from '../../assets/spring/28.jpg';

const Autumn = () => {
  const { title } = useParams();

  // This is Spring/Autumn Tour – Gilgit-Baltistan

  return (
     <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-6">
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        {title} - Gilgit & Hunza  Tour
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
        <img src={Img1} alt="Tour 1" className="w-full h-full object-cover rounded-lg" />
        <img src={Img2} alt="Tour 2" className="w-full h-full object-cover rounded-lg" />
        <img src={Img3} alt="Tour 3" className="w-full h-full object-cover rounded-lg" />
        <img src={Img4} alt="Tour 4" className="w-full h-full object-cover rounded-lg" />
        <img src={Img5} alt="Tour 5" className="w-full h-full object-cover rounded-lg" />
        <img src={Img6} alt="Tour 6" className="w-full h-full object-cover rounded-lg" />
        <img src={Img7} alt="Tour 7" className="w-full h-full object-cover rounded-lg" />
        <img src={Img8} alt="Tour 8" className="w-full h-4full object-cover rounded-lg" />
        <img src={Img9} alt="Tour 8" className="w-full h-4full object-cover rounded-lg" />
        <img src={Img10} alt="Tour 8" className="w-full h-4full object-cover rounded-lg" />
        <img src={Img11} alt="Tour 8" className="w-full h-4full object-cover rounded-lg" />
        <img src={Img12} alt="Tour 8" className="w-full h-4full object-cover rounded-lg" />
      </div>

      <table className="w-full border border-gray-300 text-sm mb-10">
        <tbody>
          <tr className="border border-gray-300">
            <td className="p-3 font-semibold border border-gray-300">Cost:</td>
            <td className="p-3 border border-gray-300">ask(depend on group of people)</td>
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

     <h2 className="text-2xl font-semibold text-black mb-4">
  Tour Schedule
</h2>

<ul className="list-inside text-gray-800 leading-relaxed space-y-6 mb-10">
  
  <li>
    <strong>Day 1 – Arrival in Islamabad</strong>
    <ul className="list-disc list-inside ml-4">
      <li>Meet & greet at Islamabad International Airport</li>
      <li>Short city tour covering Faisal Mosque & Lok Virsa Museum</li>
      <li>Overnight stay in Islamabad</li>
    </ul>
  </li>
  
  <li>
    <strong>Day 2 – Islamabad to Skardu (Flight)</strong>
    <ul className="list-disc list-inside ml-4">
      <li>Scenic flight over Nanga Parbat</li>
      <li>Visit Sadpara Lake & Upper Kachura Lake</li>
      <li>Evening stroll in Skardu Bazaar</li>
    </ul>
  </li>
  
  <li>
    <strong>Day 3 – Skardu Cultural Exploration</strong>
    <ul className="list-disc list-inside ml-4">
      <li>Shigar Fort & Shigar Valley visit</li>
      <li>Cold Desert of Skardu photography</li>
      <li>Bonfire & cultural music night</li>
    </ul>
  </li>
  
  <li>
    <strong>Day 4 – Skardu to Gilgit</strong>
    <ul className="list-disc list-inside ml-4">
      <li>Drive along the Indus River</li>
      <li>Stop at Nanga Parbat viewpoint</li>
      <li>Evening in Gilgit town</li>
    </ul>
  </li>
  
  <li>
    <strong>Day 5 – Gilgit to Hunza</strong>
    <ul className="list-disc list-inside ml-4">
      <li>Travel via Karakoram Highway</li>
      <li>Stop at Rakaposhi View Point</li>
      <li>Evening walk in Karimabad</li>
    </ul>
  </li>
  
  <li>
    <strong>Day 6 – Hunza Heritage & Autumn Colors</strong>
    <ul className="list-disc list-inside ml-4">
      <li>Visit Baltit Fort & Altit Fort</li>
      <li>Attabad Lake boat ride</li>
      <li>Drive to Passu Cones & Glacier viewpoint</li>
    </ul>
  </li>
  
  <li>
    <strong>Day 7 – Upper Hunza & Hopper Glacier</strong>
    <ul className="list-disc list-inside ml-4">
      <li>Sunrise at Duikar Eagle’s Nest</li>
      <li>Hopper Valley & Glacier trek</li>
      <li>Local apricot woodcraft shopping</li>
    </ul>
  </li>
  
  <li>
    <strong>Day 8 – Hunza to Naran/Besham</strong>
    <ul className="list-disc list-inside ml-4">
      <li>Scenic drive via Babusar Pass (if open)</li>
      <li>River & mountain photography stops</li>
      <li>Overnight stay in Naran or Besham</li>
    </ul>
  </li>
  
  <li>
    <strong>Day 9 – Return to Islamabad</strong>
    <ul className="list-disc list-inside ml-4">
      <li>Stop at local handicraft markets</li>
      <li>Visit Pakistan Monument</li>
      <li>Farewell dinner in Islamabad</li>
    </ul>
  </li>
  
  <li>
    <strong>Day 10 – Departure</strong>
    <ul className="list-disc list-inside ml-4">
      <li>Transfer to Islamabad International Airport</li>
      <li>End of cultural adventure</li>
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

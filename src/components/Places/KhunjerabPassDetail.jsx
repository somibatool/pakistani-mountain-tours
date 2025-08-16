import React from 'react';
import { useParams } from 'react-router-dom';
import Img1 from '../../assets/bikeTour/99.jpg';
import Img2 from '../../assets/bikeTour/100.jpg';
import Img3 from '../../assets/bikeTour/101.jpg';
import Img4 from '../../assets/bikeTour/102.jpg';
import Img5 from '../../assets/bikeTour/103.jpg';
import Img6 from '../../assets/bikeTour/15.jpg';
import Img7 from '../../assets/bikeTour/14.jpg';
import Img8 from '../../assets/bikeTour/12.jpg';

const KhunjerabPassDetail = () => {
  const { title } = useParams();

  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-10">
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        Khunjerab Pass Motorbike Tour
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
                    <img src={Img1} alt="Tour 1" className="w-full h-full object-cover rounded-lg" />
                    <img src={Img2} alt="Tour 2" className="w-full  h-full object-cover rounded-lg" />
                    <img src={Img3} alt="Tour 3" className="w-full  h-full object-cover rounded-lg" />
                    <img src={Img4} alt="Tour 4" className="w-full  h-full object-cover rounded-lg" />
                    <img src={Img5} alt="Tour 5" className="w-full  h-full object-cover rounded-lg" />
                    <img src={Img6} alt="Tour 6" className="w-full  h-full object-cover rounded-lg" />
                    <img src={Img7} alt="Tour 7" className="w-full  h-full object-cover rounded-lg" />
                    <img src={Img8} alt="Tour 8" className="w-full  h-full object-cover rounded-lg" />
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
             <li>Motorbike Suzuki 150cc</li>
                 <li>Service Car</li>
                 <li>Local Guide</li>
                 <li>Marshall</li>
                 <li>Safety Kit</li>
                 <li>All Meals (Breakfast, Lunch, Dinner)</li>
                 <li>Transport & Fuel</li>
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
              </ul>
            </td>
          </tr>
        </tbody>
      </table>



      <h2 className="text-2xl font-semibold text-black mb-4">Tour Schedule</h2>

<h3 className="text-xl font-semibold text-black mt-6">Day 1: Arrival in Skardu</h3>
<ul className="list-disc list-inside text-gray-800 leading-relaxed space-y-2">
  <li>Arrival in Skardu via flight or road.</li>
  <li>Visit Sadpara Lake and explore Skardu Bazaar.</li>
  <li>Overnight stay in Skardu.</li>
</ul>

<h3 className="text-xl font-semibold text-black mt-6">Day 2: Shigar Valley & Cold Desert</h3>
<ul className="list-disc list-inside text-gray-800 leading-relaxed space-y-2">
  <li>Full-day excursion to Shigar Valley.</li>
  <li>Visit Shigar Fort and the Cold Desert for photography.</li>
  <li>Return to Skardu for overnight stay.</li>
</ul>

<h3 className="text-xl font-semibold text-black mt-6">Day 3: Deosai National Park</h3>
<ul className="list-disc list-inside text-gray-800 leading-relaxed space-y-2">
  <li>Journey to Deosai Plains, the land of giants.</li>
  <li>Visit Sheosar Lake and enjoy scenic views and wildlife.</li>
  <li>Overnight camping or hotel near Chilum or Astore side.</li>
</ul>

<h3 className="text-xl font-semibold text-black mt-6">Day 4: Travel to Gilgit</h3>
<ul className="list-disc list-inside text-gray-800 leading-relaxed space-y-2">
  <li>Drive from Deosai exit to Gilgit.</li>
  <li>Visit Kargah Buddha and enjoy riverside views.</li>
  <li>Overnight stay in Gilgit city.</li>
</ul>

<h3 className="text-xl font-semibold text-black mt-6">Day 5: Drive to Hunza</h3>
<ul className="list-disc list-inside text-gray-800 leading-relaxed space-y-2">
  <li>Travel on Karakoram Highway towards Hunza Valley.</li>
  <li>Stop at Rakaposhi View Point en route.</li>
  <li>Arrival in Karimabad. Overnight stay in Hunza.</li>
</ul>

<h3 className="text-xl font-semibold text-black mt-6">Day 6: Explore Historic Hunza</h3>
<ul className="list-disc list-inside text-gray-800 leading-relaxed space-y-2">
  <li>Visit Baltit Fort and Altit Fort.</li>
  <li>Sunset viewpoint at Duikar (Eagle's Nest).</li>
  <li>Overnight in Hunza.</li>
</ul>

<h3 className="text-xl font-semibold text-black mt-6">Day 7: Upper Hunza Excursion</h3>
<ul className="list-disc list-inside text-gray-800 leading-relaxed space-y-2">
  <li>Travel to Attabad Lake and Gulmit.</li>
  <li>Explore Passu Cones and Hussaini Suspension Bridge.</li>
  <li>Overnight stay in Gulmit or Passu.</li>
</ul>

<h3 className="text-xl font-semibold text-black mt-6">Day 8: Visit Khunjerab Pass</h3>
<ul className="list-disc list-inside text-gray-800 leading-relaxed space-y-2">
  <li>Drive to Khunjerab Pass (Pakistan-China border).</li>
  <li>Enjoy panoramic views at 4,733 meters altitude.</li>
  <li>Return to Sost for overnight stay.</li>
</ul>

<h3 className="text-xl font-semibold text-black mt-6">Day 9: Return to Gilgit</h3>
<ul className="list-disc list-inside text-gray-800 leading-relaxed space-y-2">
  <li>Begin return journey from Sost to Gilgit.</li>
  <li>Stop for photos and shopping on the way.</li>
  <li>Overnight in Gilgit.</li>
</ul>

<h3 className="text-xl font-semibold text-black mt-6">Day 10: Departure to Islamabad</h3>
<ul className="list-disc list-inside text-gray-800 leading-relaxed space-y-2">
  <li>Flight or road journey to Islamabad.</li>
  <li>Farewell lunch or dinner included.</li>
  <li>Tour ends with unforgettable memories.</li>
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

export default KhunjerabPassDetail;

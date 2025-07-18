import React from "react";
import Img1 from '../../assets/autumn/autumn_12.jpg';
import Img2 from '../../assets/autumn/autumn7.jpg';
import Img3 from '../../assets/autumn/autumn43.jpg';
import Img4 from '../../assets/autumn/ali_abad_tawor.jpg';
import Img5 from '../../assets/autumn/tress.jpg';
import Img6 from '../../assets/autumn/river.jpg';

const FairyMeadowsDetail = () => {
  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-10">

      {/* Title */}
      <h1 className="text-4xl font-bold text-primary border-b pb-2 mb-4">
        Fairy Meadows Trekking Adventure
      </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                <img src={Img1} alt="Autumn View 1" className="w-full h-48 object-cover rounded-lg" />
                <img src={Img2} alt="Autumn View 2" className="w-full h-48 object-cover rounded-lg" />
                <img src={Img3} alt="Autumn View 3" className="w-full h-48 object-cover rounded-lg" />
                <img src={Img4} alt="Autumn View 4" className="w-full h-48 object-cover rounded-lg" />
                <img src={Img5} alt="Autumn View 5" className="w-full h-48 object-cover rounded-lg" />
                <img src={Img6} alt="Autumn View 6" className="w-full h-48 object-cover rounded-lg" />
              </div>


      {/* Trip Highlights */}
      <p className="text-lg text-gray-800 mb-6">
        Known as one of the most scenic treks in Pakistan, the Fairy Meadows trek
        offers breathtaking views of Nanga Parbat—the ninth-highest mountain in the
        world. The trek begins at Raikot Bridge, followed by a jeep ride to Tato Village
        and a gentle hike through dense alpine forests leading to the beautiful
        Fairy Meadows campsite.
        <br /><br />
        Fairy Meadows is not just a camping spot; it's a gateway to adventure. From here,
        trekkers can continue towards Nanga Parbat Base Camp for closer views of the
        majestic peak. The area is famous for its stunning sunrise and sunset views,
        serene meadows, and traditional wooden cabins that make overnight stays memorable.
        <br /><br />
        Ideal for both beginner and experienced trekkers, this trip offers an unforgettable
        blend of adventure and nature.
      </p>

      {/* Images Grid */}
     <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
  <img src="/src/assets/IMG_1335.jpg" alt="Fairy Meadows" className="w-full h-48 object-cover rounded-lg" />
  <img src="/src/assets/IMG_1325.JPG" alt="Fairy Meadows" className="w-full h-48 object-cover rounded-lg" />
  <img src="/src/assets/IMG_1326.jpg" alt="Fairy Meadows" className="w-full h-48 object-cover rounded-lg" />
  <img src="/src/assets/autumn/attabad_lack.jpg" alt="Fairy Meadows" className="w-full h-48 object-cover rounded-lg" />
  <img src="/src/assets/autumn/nagr_valley.jpg" alt="Fairy Meadows" className="w-full h-48 object-cover rounded-lg" />
  <img src="/src/assets/autumn/hunza_mountain1.jpg" alt="Fairy Meadows" className="w-full h-48 object-cover rounded-lg" />
</div>


      {/* Itinerary */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-black mb-3">
          Trek Itinerary
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li><strong>Day 1:</strong> Drive from Islamabad to Chilas via Karakoram Highway.</li>
          <li><strong>Day 2:</strong> Jeep ride from Raikot Bridge to Tato Village. Trek to Fairy Meadows.</li>
          <li><strong>Day 3:</strong> Rest day at Fairy Meadows. Optional hike to Beyal Camp.</li>
          <li><strong>Day 4:</strong> Trek towards Nanga Parbat Base Camp (optional).</li>
          <li><strong>Day 5:</strong> Return trek to Tato Village and drive back to Chilas.</li>
          <li><strong>Day 6:</strong> Return drive to Islamabad.</li>
        </ul>
      </section>

    </div>
  );
};

export default FairyMeadowsDetail;

import React from "react";

const FairyMeadowsDetail = () => {
  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-10">

      {/* Title */}
      <h1 className="text-4xl font-bold text-primary border-b pb-2 mb-4">
        Fairy Meadows Trekking Adventure
      </h1>

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
        <img src="/fairy-1.jpg" alt="Fairy Meadows" className="w-full rounded-lg" />
        <img src="/fairy-2.jpg" alt="Fairy Meadows" className="w-full rounded-lg" />
        <img src="/fairy-3.jpg" alt="Fairy Meadows" className="w-full rounded-lg" />
        <img src="/fairy-4.jpg" alt="Fairy Meadows" className="w-full rounded-lg" />
        <img src="/fairy-5.jpg" alt="Fairy Meadows" className="w-full rounded-lg" />
        <img src="/fairy-6.jpg" alt="Fairy Meadows" className="w-full rounded-lg" />
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

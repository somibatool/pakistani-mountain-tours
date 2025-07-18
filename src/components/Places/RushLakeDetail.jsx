import React from "react";

const RushLakeDetail = () => {
  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-10">

      {/* Title */}
      <h1 className="text-4xl font-bold text-primary border-b pb-2 mb-4">
        Rush Lake Trek Adventure
      </h1>

      {/* Trip Highlights */}
      <p className="text-lg text-gray-800 mb-6">
        Rush Lake, situated at 4,694 meters (15,400 ft), is one of the world’s highest
        alpine lakes. The trek offers a combination of adventure, glaciers, meadows,
        and panoramic views of mighty Karakoram peaks including Spantik, Malubiting,
        and Ultar Sar.
        <br /><br />
        Starting from Hopar Valley near Nagar, the trail passes through stunning
        Barpu and Miar glaciers, lush green meadows, and rugged mountain terrain.
        Trekkers can camp beside the serene Rush Lake and hike further up to Rush Peak
        for mesmerizing 360° mountain views.
        <br /><br />
        This trek is suitable for moderately fit adventurers seeking a memorable
        high-altitude experience without technical climbing.
      </p>

      {/* Images Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
        <img src="/rush-1.jpg" alt="Rush Lake Trek" className="w-full rounded-lg" />
        <img src="/rush-2.jpg" alt="Rush Lake Trek" className="w-full rounded-lg" />
        <img src="/rush-3.jpg" alt="Rush Lake Trek" className="w-full rounded-lg" />
        <img src="/rush-4.jpg" alt="Rush Lake Trek" className="w-full rounded-lg" />
        <img src="/rush-5.jpg" alt="Rush Lake Trek" className="w-full rounded-lg" />
        <img src="/rush-6.jpg" alt="Rush Lake Trek" className="w-full rounded-lg" />
      </div>

      {/* Itinerary */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-black mb-3">
          Trek Itinerary
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li><strong>Day 1:</strong> Drive from Islamabad to Hunza. Overnight in Hopar village.</li>
          <li><strong>Day 2:</strong> Trek from Hopar to Barpu Glacier camp.</li>
          <li><strong>Day 3:</strong> Cross Miar Glacier. Camp at Chidin Harai.</li>
          <li><strong>Day 4:</strong> Reach Rush Lake. Enjoy panoramic views. Camp overnight.</li>
          <li><strong>Day 5:</strong> Optional hike to Rush Peak. Return to Rush Lake camp.</li>
          <li><strong>Day 6:</strong> Descend back to Hopar village.</li>
          <li><strong>Day 7:</strong> Drive back to Gilgit/Islamabad.</li>
        </ul>
      </section>

    </div>
  );
};

export default RushLakeDetail;

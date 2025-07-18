import React from "react";

const RakaposhiBaseCampDetail = () => {
  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-10">

      {/* Title */}
      <h1 className="text-4xl font-bold text-primary border-b pb-2 mb-4">
        Rakaposhi Base Camp Trek
      </h1>

      {/* Trip Highlights */}
      <p className="text-lg text-gray-800 mb-6">
        The Rakaposhi Base Camp trek is one of Pakistan's most accessible and
        scenic treks, perfect for beginners and experienced trekkers alike.
        Starting from Minapin village in Nagar Valley, the trail gently ascends
        through lush meadows, pine forests, and glacier moraines, eventually
        leading to the stunning Rakaposhi Base Camp with panoramic views of the
        7,788-meter Rakaposhi peak.
        <br /><br />
        The trek offers close-up views of the Rakaposhi Glacier and
        breathtaking sunrises. It’s a short yet unforgettable journey into the
        heart of the Karakoram mountains.
        <br /><br />
        This trek is ideal for families, nature lovers, and adventure seekers
        wanting to witness towering peaks without extreme difficulty.
      </p>

      {/* Images Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
        <img src="/rakaposhi-1.jpg" alt="Rakaposhi Trek" className="w-full rounded-lg" />
        <img src="/rakaposhi-2.jpg" alt="Rakaposhi Trek" className="w-full rounded-lg" />
        <img src="/rakaposhi-3.jpg" alt="Rakaposhi Trek" className="w-full rounded-lg" />
        <img src="/rakaposhi-4.jpg" alt="Rakaposhi Trek" className="w-full rounded-lg" />
        <img src="/rakaposhi-5.jpg" alt="Rakaposhi Trek" className="w-full rounded-lg" />
        <img src="/rakaposhi-6.jpg" alt="Rakaposhi Trek" className="w-full rounded-lg" />
      </div>

      {/* Itinerary */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-black mb-3">
          Trek Itinerary
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li><strong>Day 1:</strong> Drive from Islamabad to Hunza via Karakoram Highway. Overnight in Minapin village.</li>
          <li><strong>Day 2:</strong> Trek from Minapin to Hapakun Campsite. Scenic forest trail.</li>
          <li><strong>Day 3:</strong> Trek to Rakaposhi Base Camp. Explore glacier views.</li>
          <li><strong>Day 4:</strong> Rest day for local exploration or optional hikes.</li>
          <li><strong>Day 5:</strong> Trek back to Minapin. Drive to Hunza or Gilgit.</li>
          <li><strong>Day 6:</strong> Return journey to Islamabad.</li>
        </ul>
      </section>

    </div>
  );
};

export default RakaposhiBaseCampDetail;

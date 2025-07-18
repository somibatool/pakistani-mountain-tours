import React from "react";

const K2BaseCampDetail = () => {
  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-10">

      {/* Title */}
      <h1 className="text-4xl font-bold text-primary border-b pb-2 mb-4">
      K2 Base Camp Trek
      </h1>

      {/* Trip Highlights */}
      <p className="text-lg text-gray-800 mb-6">
        We offer another picturesque and moderate trekking option for trekking
        enthusiasts. The route leads you into seldom traveled areas of beautiful
        Yasin valley and over the Thui Ann Pass (5000m) to Yarkhun valley in the
        Hindukush mountain range of Pakistan. You will get to see some of the ancient
        routes on this trek.
        <br /><br />
        Nialthi village of Yasin valley is the starting point of this fabulous trip.
        A daily trek of 5-6 hours through fields, bushes, wildflowers and glaciers
        takes you gradually over the Thui Pass, providing marvelous views of countless
        peaks.
        <br /><br />
        From the 1st century BC to the 8th century AD, the Buddhist pilgrim route started
        from the city of Kashgar and went across the western Karakoram, through Yasin
        valley to Chitral and finally ending in Swat; the main Buddhist center at that
        time. While the monasteries and monuments have not survived, the path from Ghizer
        to Chitral remains. The Thui Ann trek crosses the Shandur range, a branch of the
        Hindu Raj mountains and connects Ghizer to Chitral.
        <br /><br />
        There are numerous peaks from 5000 meters to 6600 meters suitable for low altitude
        climbers. Many peaks remain unnamed, awaiting adventurous climbers.
        By end of the trek, we will be able to spare some time to visit pagan villages of
        famous Kalash valley, where descendants of Alexander’s army live in the shadow of
        the mountains.
      </p>

      {/* Images Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
        <img src="/k2-1.jpg" alt="K2 Trek" className="w-full rounded-lg" />
        <img src="/k2-2.jpg" alt="K2 Trek" className="w-full rounded-lg" />
        <img src="/k2-3.jpg" alt="K2 Trek" className="w-full rounded-lg" />
        <img src="/k2-4.jpg" alt="K2 Trek" className="w-full rounded-lg" />
        <img src="/k2-5.jpg" alt="K2 Trek" className="w-full rounded-lg" />
        <img src="/k2-6.jpg" alt="K2 Trek" className="w-full rounded-lg" />
      </div>

      {/* Itinerary */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-black mb-3">
          Trek Itinerary
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li><strong>Day 1:</strong> Arrive in Gilgit, drive to Yasin valley.</li>
          <li><strong>Day 2:</strong> Start trek from Nialthi village.</li>
          <li><strong>Day 3-5:</strong> Trek through meadows and glaciers towards Thui Pass.</li>
          <li><strong>Day 6:</strong> Cross Thui Ann Pass (5000m).</li>
          <li><strong>Day 7-8:</strong> Descend towards Yarkhun valley.</li>
          <li><strong>Day 9:</strong> Visit Kalash valley.</li>
          <li><strong>Day 10:</strong> Return to Gilgit for departure.</li>
        </ul>
      </section>

    </div>
  );
};

export default K2BaseCampDetail;

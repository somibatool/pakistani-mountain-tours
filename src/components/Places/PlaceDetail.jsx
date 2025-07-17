import React from "react";
import { useParams } from "react-router-dom";

const PlaceDetail = () => {
  const { title } = useParams();

  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-10">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-primary border-b pb-2 mb-4">
        About us: {title}
      </h1>
      <p>
        <h1 className="text-3xl font-bold">
          {" "}
          Gilgit Baltistan Pakistan – Land of Lakes and Landscapes Vistas
        </h1>
        <br />
        Starting point: Islamabad Airport End: Islamabad Airport Duration Trip:
        11 nights/ 12 days Ideal time: March to end of November
        <h1 className="font-bold text-2xl ">Tour Description</h1> <br />
        Visiting Pakistan is a lifetime experience in particular the northern
        part (known as Gilgit-Baltistan), surrounded with majestic snow-capped
        mountains, deep colored rivers, lakes and massive glaciers, making it
        one of the best destinations for nature and adventure seekers. This 12
        days customized tour program takes you from the capital of Pakistan to
        up north either with a scenic flight over the heart of Hindu Kush and
        West Himalaya to Skardu or drive on the Karakoram Highway along the
        river Indus. In the north, you will be able to explore scenic views of
        Baltistan, Gilgit, Hunza and Nagar valley, and Khunjerab Top. Moreover,
        you will travel through the Karakoram mountains to reach the Khunjerab
        Pass (Pakistan-China border) located at 4,700 metres, known as the
        highest international border crossing and the end of Karakoram Highway
        (887 km) within Pakistan.
        <h1 className="font-bold  text-2xl">Tour Highlights!</h1> <br />
        Tour of Islamabad Explore Baltistan – the little Tibet. Drive on the
        legendary Karakoram Highway Visit Gilgit – Silk Route town Explore the
        wonderful Hunza valley Cross Husseini rope bridge and visit white Passu
        glacier Excursion to Khunjerab – Pakistan-China border Tour of Naltar
        valley and Green lake
      </p>
      <br />

      {/* Image Full Width */}
      <div className="grid grid-cols-4 gap-4">
        {/* <img src="/src/assets/fairymedows.jpg" alt="Hunza Tour" className="w-full rounded-lg" /> */}
        <img
          src="/src/assets/hunzaganish.jpg"
          alt="Hunza Tour"
          className="w-full rounded-lg"
        />
        <img
          src="/src/assets/hunzaganish.jpg"
          alt="Hunza Tour"
          className="w-full rounded-lg"
        />
        <img
          src="/src/assets/nightview hunza.jpg"
          alt="Hunza Tour"
          className="w-full rounded-lg"
        />
        <img
          src="/src/assets/skarduheart.jpg"
          alt="Hunza Tour"
          className="w-full rounded-lg"
        />

        <img
          src="/IMG_1327.jpg"
          alt="Hunza Tour"
          className="w-full rounded-lg"
        />
      </div>

      {/* Company Info */}
      <div className="text-sm text-black leading-relaxed mb-8">
        <p>
          <strong>PAKISTANI MOUNTAIN TOURS (PVT), LTD</strong>
        </p>
        <p>License No. ID-2590</p>
        <p>Department of Tourist Services, Government of Pakistan</p>
      </div>

      {/* Tour Schedule */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-black mb-3">
          TOUR SCHEDULE
        </h2>
        <h3 className="text-lg font-bold text-black mb-1">
          Destination: Gilgit-Baltistan
        </h3>

        <ul className="list-disc list-inside space-y-4 text-black text-sm md:text-base">
          <li>
            <strong>Day 1 – Islamabad:</strong> Arrival and briefing, evening
            flight. Overnight at Hotel Crossroads.
          </li>
          <li>
            <strong>Day 2 – Islamabad to Skardu:</strong> Scenic flight, view of
            Nanga Parbat, visit Manthal Buddha, Sadpara Lake, and Kachura lakes.
            Overnight at Himmel Skardu.We catch a scenic flight over west
            Himalaya & Karakoram Mountains to Skardu – the capital town of
            Baltistan region, surrounded by majestic Karakoram. The flight takes
            an hour to reach the Skardu airport. Pick up & transfer to hotel for
            check-in and breakfast if not in Islamabad, depends on flight’s
            departure timing. We then take you out for sightseeing in and around
            Skardu town, this includes a visit of famous Shangrila Resort and
            lake, Katchura village and upper Katchura lake.
          </li>
          <li>
            <strong>Day 3 – Skardu to Hunza:</strong> View 3 mountain ranges,
            Old Silk Road, Rakaposhi viewpoint, Baltit Fort, Duiker sunset.
            Overnight at Fairy Land Hotel Hunza.
          </li>
          <li>
            <strong>Day 4 – Hunza to Passu Gojal:</strong> Sunrise view, Altit
            Fort, Attabad Lake, Passu & Batura Glacier, Hussaini bridge.
            Overnight at Villa Darya Hunza.
          </li>
          <li>
            <strong>Day 5 – Fairy Meadows:</strong> Travel via Raikot Bridge &
            hike to Fairy Meadows. Overnight in cabins.
          </li>
          <li>
            <strong>Day 6 – Viewpoint Hike:</strong> Hike to Beyal Camp, Nanga
            Parbat viewpoint. Return to hotel.
          </li>
          <li>
            <strong>Day 7 – Return to Naran/Besham:</strong> Via Babusar Pass or
            KKH. Overnight at Naran/Besham.
          </li>
          <li>
            <strong>Day 8 – Islamabad & Departure:</strong> Visit Taxila, Faisal
            Mosque, Monument. Departure for Bangkok.
          </li>
        </ul>
      </section>

      {/* Cost & Inclusions */}
      <section className="pt-6 border-t mb-10">
        <h2 className="text-xl font-semibold text-black">Trip Includes:</h2>
        <ul className="list-disc list-inside text-black text-sm md:text-base">
          <li>4-star Hotels</li>
          <li>All Meals (Breakfast, Lunch, Dinner)</li>
          <li>Water & Fruits</li>
          <li>Transport & Fuel</li>
          <li>Entrance Fees</li>
          <li>Domestic Flight (Islamabad – Skardu)</li>
          <li>Guide & Visa Assistance</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 text-black">Not Included:</h2>
        <ul className="list-disc list-inside text-black text-sm md:text-base">
          <li>International Flights</li>
        </ul>

        <p className="mt-4 font-semibold text-black">
          <strong>Total Cost Per Person:</strong> 32,000 THB
        </p>
      </section>

      {/* Contact */}
      <section className="pt-6 border-t text-sm text-black">
        <h3 className="text-md font-semibold mb-1 text-black">Contact:</h3>
        <p>Arif Market Cinema Bazar, Gilgit, Pakistan</p>
        <p>Email: pakistanimountaintour@gmail.com</p>
        <p>Phone: +66 956071467</p>
      </section>
    </div>
  );
};

export default PlaceDetail;

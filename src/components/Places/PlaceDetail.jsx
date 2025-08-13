import React from "react";
import { useParams } from "react-router-dom";
import HunzaTree from "../../assets/IMG_1334.jpg";
import KarimabadOldHouse from "../../assets/boat.jpg";
import River from "../../assets/hunzaganish.jpg";
import Img1465 from "../../assets/karimabad_old_house.jpg";
import Boat from "../../assets/spring/3.jpg";
import HunzaSuspension from "../../assets/client5.jpg";
import Img1335 from "../../assets/k2-trk/3.jpg";
import FairyMedows from "../../assets/adventureFairymedows/2.jpg";

const PlaceDetail = () => {
  const { title } = useParams();
  // this card is Karakoram And Himalayas
  // attabad lake 

  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10 pb-10 overflow-y-auto mt-10">
      {/* Main Heading Centered */}
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        {title} - Gilgit Baltistan Tour
      </h1>

      {/* Subheading */}
      <h3 className="text-lg font-semibold text-center mb-4 text-gray-700">
        Land of Lakes and Landscapes Vistas
      </h3>

      {/* Basic Tour Info */}
      <div className="text-center text-sm text-gray-600 mb-10">
        <p>Starting point: Islamabad Airport | End: Islamabad Airport</p>
        <p>Duration Trip : 10 nights /11 days</p>
        <p>Ideal time: March to November</p>
      </div>

      {/* Tour Description */}
      <h2 className="text-2xl font-semibold text-black mb-3">
        Tour Description
      </h2>
      <p className="text-gray-800 mb-8 leading-relaxed">
        Visiting Pakistan in is a lifetime experience in particular the northern
        part known as (Gilgit-Baltistan), surrounded with majestic snow-capped
        mountains, and deep coloured rivers, lakes and massive glaciers making
        it one of best destinations for nature and adventure seekers. In the
        north, you will be able to explore scenic views in Gilgit, Nagar and
        Hunza valley. The tour also includes a three days trekking trip or horse
        riding to Fairy Meadow, located at the foot of the mighty Nanga Parbat
        (8,126m), the 2nd highest mountain of Pakistan and 9th in world ranking.
        Moreover, you’ll travel through the Karakoram mountains to reach the
        Khunjerab Pass (Pakistan-China border) located at 4,700 metres, known as
        the highest international border crossing and end of Karakoram Highway
        (887 km) within Pakistan.
      </p>

      {/* Tour Highlights */}
      <h2 className="text-2xl font-semibold text-black mb-3">
        Tour Highlights
      </h2>
      <ul className="list-disc list-inside mb-10 text-gray-700 space-y-2">
        <li>Tour of Islamabad </li>
        <li>Explore Baltistan – the Little Tibet</li>
        <li>Drive on the legendary Karakoram Highway</li>
        <li>Visit Gilgit – Silk Route Town</li>
        <li>Explore the wonderful Hunza valley</li>
        <li>Cross Husseini rope bridge and visit white Passu glacier</li>
        <li>Excursion to Khunjerab – Pakistan-China border</li>
        <li>Tour of Naltar valley and Green lake</li>
        <li>Fairy Meadows and Nanga Parbat adventure trip</li>
      </ul>

      {/* Image Gallery */}
     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 h-full">
      <img src={HunzaTree} alt="Tour 1" className="w-full h-full object-cover rounded-lg" />
      <img src={KarimabadOldHouse} alt="Tour 2" className="w-full h-full object-cover rounded-lg" />
      <img src={River} alt="Tour 3" className="w-full h-full object-cover rounded-lg" />
      <img src={Img1465} alt="Tour 4" className="w-full h-full object-cover rounded-lg" />
      <img src={Boat} alt="Tour 5" className="w-full h-full object-cover rounded-lg" />
      <img src={HunzaSuspension} alt="Tour 6" className="w-full h-full object-cover rounded-lg" />
      <img src={Img1335} alt="Tour 7" className="w-full h-full object-cover rounded-lg" />
      <img src={FairyMedows} alt="Tour 8" className="w-full h-full object-cover rounded-lg" />
    </div>

      {/* Trip Information Table Style */}
      <table className="w-full border border-gray-300 text-sm mb-10">
        <tbody>
          {/* Cost Row */}
          <tr className="border border-gray-300">
            <td className="p-3 font-semibold border border-gray-300">Cost:</td>
            <td className="p-3 border border-gray-300">
              Ask (depends on the number of people)
            </td>
          </tr>

          {/* Included Row */}
          <tr className="border border-gray-300 align-top">
            <td className="p-3 font-semibold border border-gray-300">
              Included:
            </td>
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

          {/* Excluded Row */}
          <tr className="border border-gray-300 align-top">
            <td className="p-3 font-semibold border border-gray-300">
              Excluded:
            </td>
            <td className="p-3 border border-gray-300">
              <ul className="list-disc list-inside space-y-1">
                <li>International Flights</li>
              
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Tour Itinerary */}
      <h2 className="text-2xl font-semibold text-black mb-4">Tour Plan</h2>
      <ul className=" list-inside text-gray-800 leading-relaxed space-y-4 mb-10">
        <li>
          <strong  className="font-bold text-lg ">Day 1:</strong>
          <h2 className="text-lg font-bold ">Arrival in Islamabad.</h2> Meeting you at the airport, pickup and
          transfer to hotel for rest. If arrival is in the daytime, we take you
          out for a tour around Islamabad, the capital of Pakistan. Overnight in
          Islamabad
        </li>
        <li>
          <strong  className="font-bold text-lg ">Day 2:</strong>
          <h2 className="text-lg font-bold ">Islamabad – Gilgit (Flight)</h2>. Leave hotel early morning to
          catch a scenic flight to Gilgit while enjoying dramatic views of
          Hindukush & west Himalaya mountains en route. It takes only an hour to
          reach Gilgit airport. Transfer to hotel for check in & breakfast.
          Gilgit town is located at 1500 m above Sea level; is a we need a day
          around to get acclimatized before heading to more higher. We go to
          sightseeing around Gilgit town- visit an ancient rock carving Buddha
          in Basin valley dates back to 7th century. Visit of Chinese cemetery,
          the final resting place of Chinese workers and engineers who died
          during the construction of the Karakoram Highway (KKH) in Pakistan in
          the 1960s and 1970. Afternoon we spare time to stroll in the local
          bazaar and visit mini China market. Note: We spare this day in Gilgit,
          in case domestic flight delays from Islamabad which is subject to
          weather status, we drive this day on the road to reach Chilas town.
          Overnight in Gilgit
        </li>
        <li>
          <strong  className="font-bold text-lg ">Day 3:</strong>
          <h2 className="text-lg font-bold ">Gilgit – Karimabad (Hunza Valley)</h2> Today we travel up north to
          Karimabad, the capital of fabled Hunza valley, nestled in many
          snow-capped mountains of the mighty Karakoram. En route, we stop to
          see old traces of the ancient Silk Route and the viewpoint of mount
          Rakaposhi (7,788 m.), the majestic peak rising above Nanga valley that
          offers sweeping views from bottom to summit. After arrival in
          Karimabad, we will check into the hotel and go out to visit the 700
          years old Baltit Fort, which dominates the whole valley, and was once
          the residence of the King of the Hunza State. It’s now serving
          tourists as a historical monument and museum. Karimabad bazaar is a
          good place to roam and see the local products, from local carpets to
          other handicraft items to dry-fruits. There are some good cafés where
          you would like to sit with a cup of coffee to enjoy the views of
          sunset. Overnight in Karimabad.
        </li>
        <li>
          <strong  className="font-bold text-lg ">Day 4:</strong>
          <h2 className="text-lg font-bold ">Attabad Lake – Passu Valley</h2>Today we head to explore the upper
          part of Hunza valley via the Attabad lake en route. The long lake was
          formed back in 2010 due to a massive landslide on Hunza river. We will
          stop at the lake viewpoint for photography and is a good place to
          enjoy the cruising the lake. After this, with a short drive we will
          reach the Hussaini hanging bridge, a well-known and must-visit
          footstep bridge over the Hunza river. Next is the Borit lake. After
          this an easy and short walk will take us close to Passu glacier. After
          this we stop for lunch at Glacier Breez Restaurant, located above
          Passu valley. It’s a good viewpoint to see the Passu cones (a set of
          great mountain peaks more than 6,000 metres). In the afternoon, we go
          for a walk around Passu valley and overnight in Passu.
        </li>
        <li>
          <strong  className="font-bold text-lg ">Day 5:</strong>
          <h2 className="text-lg font-bold ">Excursion to Khunjerab Pass at 4,700 m (Pak-China border)</h2>
          Today you are going to drive through the Karakoram National Park and
          climb the Khunjerab Pass, located at an elevation of 4,700 m. It’s the
          highest international crossing between two countries: Pakistan and
          China. While travelling through the Khunjerab National Park, you might
          be able to see some wildlife found in the Karakoram, like ibex,
          Himalayan marmot and snow leopard. After some time on the border for
          photography, we then return to Karimabad and continue uphill to Duikar
          village – located high above Hunza valley. It’s an ideal place to
          catch the sunset and the sweeping view of Hunza valley in twilight.
          Overnight in Karimabad
        </li>
        <li>
          <strong  className="font-bold text-lg ">Day 6:</strong>
          <h2 className="text-lg font-bold "> Hunza – Naltar valley – Gilgit</h2> Today we travel down to Nomal
          village near Gilgit and transfer to 4WD Jeeps for an off-road drive on
          a narrow, winding road between rocky mountains for a few hours. Naltar
          valley is at an altitude of 3,000 m. It’s nestled in snow-capped
          mountains between the vast shadows of Karakoram and Hindu Kush
          mountains, making it one of the most spectacular places to visit.
          That’s where one of the skiing resorts of Pakistan is located. From
          Naltar valley, a bumpy road through a jungle track reaching to Naltar
          lake, also known Green lake or Rainbow lake covered in pine forest. In
          the afternoon, drive down to Gilgit for overnight.
        </li>
        <li>
          <strong  className="font-bold text-lg ">Day 7:</strong>
          <h2 className="text-lg font-bold ">Gilgit – Fairy Meadows (West Himalayas)</h2> Today we leave for
          Fairy Meadows and stop at the junction point of three mountain ranges
          (Karakoram, Himalaya, Hindu Kush) then drive down to Raikot bridge in
          less than 2 hours. At Raikot bridge we switch into the local private
          community Jeep for an off road drive to Tato village, this is the most
          adventurous drive that you may experience on this trip. However, it is
          safe to ride & takes more than an hour to reach the end of the Jeep
          track. We stop for quick lunch at a small and simple restaurant at the
          Jeep stop and then set out for trek to Fairy Meadows. This takes 3
          hours for an average hiker while gaining gradual elevation to reach
          the destination. Note: Horse riding is available here. One can ride a
          horse all the way to Fairy Meadows. That takes around two hours. You
          don’t need to carry all your baggage, all you need is warm clothing
          for two days; extra and unnecessary baggage can be left in the car at
          Raikot bridge. If you prefer to bring up all your baggage, there is a
          porter facility at the trekking point. The hotel in Fairy Meadows
          provides basic services, such as lodging at pine huts, three time
          meals and bonfire at night. Overnight in alpine huts.
        </li>
        <li>
          <strong  className="font-bold text-lg ">Day 8:</strong>
          <h2 className="text-lg font-bold ">Around Fairy Meadows</h2>Fairy Meadows is one popular attraction
          for all domestic and international tourists and is located at the foot
          of Naga Parbat – the western end of the Himalaya mountain range. It
          offers plenty of flexibility, those who like to have an easy day will
          go around Fairy Meadows and enjoy the mesmerizing views from the
          Himalaya to the Karakoram. Trekking enthusiasts can hike up to the
          viewpoint of Raikot glacier or all the way to base camp of Nanga
          Parbat and return to Fairy Meadows in the evening. Note: The Horse
          riding facility can be used until viewpoint and return to Fairy
          Meadows. Overnight in alpine huts.
        </li>
        <li>
          <strong  className="font-bold text-lg ">Day 9:</strong>
          <h2 className="text-lg font-bold ">Fairy Meadows – Besham/ Naran</h2>Descend down to the Jeep stop
          and ride the Jeep back to the Karakoram Highway, switch to the car and
          drive downward to Islamabad while making stop a at Besham to break the
          long journey into two parts. If the trip happens between mid-June to
          the first week of October, we can take the shorter route from Chilas
          that takes you over the Babusar Pass (4,173 m) and to Naran valley for
          overnight. In case the Babusar Pass is closed, we have to follow the
          traditional road the remains open throughout the year. Overnight in
          Besham or Naran
        </li>
        <li>
          <strong  className="font-bold text-lg ">Day 10:</strong>
          <h2 className="text-lg font-bold ">Islamabad</h2>Complete the journey down to Islamabad either from
          Besham or Naran. On arrival, transfer to hotel for shower and short
          rest. We then go out for dinner at the famous food street of
          Islamabad/ Rawalpindi, which are twin cities. Islamabad is a modern
          city whereas Rawalpindi is the old and one of the typical cities with
          hustling and bustling. Overnight in Islamabad/ Rawalpindi
        </li>
        <li>
          <strong  className="font-bold text-lg ">Day 11:</strong>
          <h2 className="text-lg font-bold ">Islamabad tour – Airport transfer</h2>On the last day we take you
          for a tour around Islamabad, however this depends on your homebound
          flight’s departure. If time permits, we will be able to visit Faisal
          Mosque, the largest mosque in Pakistan and is considered an iconic
          symbol of Islamabad. Lok Virsa, a cultural heritage museum that
          presents old and living culture of Pakistan both from the mainstream
          and the rural areas of Pakistan. Transfer to Airport three hours prior
          to flight’s departure
        </li>
      </ul>

      {/* Company Information */}
      <div className="border-t pt-6 text-sm text-gray-700">
        <p>
          <strong>PAKISTANI MOUNTAIN TOURS (PVT) LTD</strong>
        </p>
        <p>License No. ID-2590</p>
        <p>Department of Tourist Services, Government of Pakistan</p>
      </div>

      {/* Contact Info */}
      <div className="border-t pt-6 text-sm text-gray-700">
        <h3 className="font-semibold text-black mb-1">Contact:</h3>
        <p>Arif Market Cinema Bazar, Gilgit, Pakistan</p>
        <p>Email: pakistanimountaintour@gmail.com</p>
        <p>Phone: +66 956071467</p>
      </div>
    </div>
  );
};

export default PlaceDetail;

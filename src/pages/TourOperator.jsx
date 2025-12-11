import React from "react";
import operatorImg from "../assets/newclients/28.jpg"; 
import pakistanImg from "../assets/newclients/20.jpg"; 
import introVideo from "../assets/newclients/123.mp4";
import img1 from "../assets/newclients/a.jpg";
import img2 from "../assets/newclients/o.jpg";
import img3 from "../assets/newclients/s.jpg";
import img4 from "../assets/newclients/c.jpg";
import img5 from "../assets/newclients/h.jpg";
import img6 from "../assets/newclients/i.jpg";
import { Map, Star, Shield, Landmark, PhoneCall } from "lucide-react";


const TourOperator = () => {
  return (
    <div className="p-6 space-y-12 mt-20">
      <section className="py-16 px-6 text-center">
  <h2 className="text-4xl font-bold mb-4">Rashid’s Portfolio</h2>
  <p className="text-lg max-w-2xl mx-auto text-gray-600">
    With over 15+ years of experience, Rashid Hussain has guided thousands 
    of tourists across Pakistan’s most breathtaking destinations.
  </p>
</section>

      {/* Section 1: Introduction */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
<img
  src={operatorImg}
  alt="Rashid Hussain"
  className="rounded-xl shadow-lg w-full aspect-video object-cover"
/>



        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Meet Rashid Hussain</h1>
          <p className="text-lg mb-2">
            Rashid Hussain is a seasoned tour operator with extensive experience
            in facilitating tourists in Pakistan. He has been managing and
            guiding tours since 2008.
          </p>
          <p className="text-lg mb-2">
            Currently living in Thailand, Rashid ensures safe, comfortable, and
            unforgettable travel experiences for all visitors. His expertise
            and dedication make him a trusted professional in the tourism
            industry.
          </p>
        </div>
      </section>

<section className="px-6 pb-16">
  <h3 className="text-3xl font-bold mb-6 text-center">Featured Tour Moments</h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[img1, img2, img3, img4, img5, img6].map((img, index) => (
      <div 
        key={index} 
        className="relative group rounded-xl overflow-hidden shadow-lg"
      >
        <img 
          src={img} 
          alt="Tour Gallery" 
          className="w-full h-64 object-cover group-hover:scale-110 duration-500"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white duration-500">
          <p className="text-lg font-semibold">Contact Now</p>
        </div>
      </div>
    ))}
  </div>
</section>
<section className="py-16 px-6 bg-gray-50">
  <h3 className="text-3xl font-bold text-center mb-10">Special Achievements</h3>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
      <h4 className="text-xl font-bold mb-2">🏅 Certified Tour Operator</h4>
      <p className="text-gray-600">
        Officially certified with years of verified guiding experience.
      </p>
    </div>

    <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
      <h4 className="text-xl font-bold mb-2">🌍 International Experience</h4>
      <p className="text-gray-600">
        Has facilitated travelers from Europe, the Middle East, Southeast Asia, including Thailand and Malaysia.
      </p>
    </div>

    <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
      <h4 className="text-xl font-bold mb-2">📸 Featured in Travel Blogs</h4>
      <p className="text-gray-600">
        Highlighted for providing safe and reliable travel experiences.
      </p>
    </div>

  </div>
</section>


      

      {/* Section 2: Why Choose */}
<section className="bg-white p-10 rounded-2xl shadow-xl border">
  <h2 className="text-3xl font-bold mb-6 text-center">
    Why Choose Our Services
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {/* Item 1 */}
    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition">
      <Map className="text-blue-600 w-8 h-8" />
      <p className="text-lg">
        Personalized and well-planned tour itineraries.
      </p>
    </div>

    {/* Item 2 */}
    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition">
      <Star className="text-blue-600 w-8 h-8" />
      <p className="text-lg">
        Expert guidance from a professional with 15+ years of experience.
      </p>
    </div>

    {/* Item 3 */}
    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition">
      <Shield className="text-blue-600 w-8 h-8" />
      <p className="text-lg">
        Safe, comfortable, and hassle-free travel arrangements.
      </p>
    </div>

    {/* Item 4 */}
    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition">
      <Landmark className="text-blue-600 w-8 h-8" />
      <p className="text-lg">
        Insight into local culture, history, and hidden gems.
      </p>
    </div>

    {/* Item 5 */}
    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition md:col-span-2">
      <PhoneCall className="text-blue-600 w-8 h-8" />
      <p className="text-lg">
        24/7 support during your tours in Pakistan.
      </p>
    </div>

  </div>
</section>



     {/* Section 3: Visit Pakistan & Client Trust */}
<section className="flex flex-col md:flex-row items-center gap-10 py-12">
  
  {/* Left: Image */}
  <div className="md:w-2/5">
    <img
      src={pakistanImg}
      alt="Visit Pakistan"
      className="rounded-2xl shadow-lg w-full max-h-80 object-cover"
    />
  </div>

  {/* Right: Text */}
  <div className="md:w-1/2 space-y-4">
    <h2 className="text-3xl font-bold mb-4">
      Visit Pakistan With Rashid
    </h2>

    <p className="text-gray-700 leading-relaxed">
      Rashid Hussain is a trusted and highly experienced tour operator with 
      15+ years of guiding travelers through Pakistan’s most beautiful destinations. 
      Since 2008, he has been committed to providing safe, comfortable, and memorable 
      journeys for tourists from all around the world.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Travelers choose Rashid because of his professionalism, reliability, and 
      deep understanding of the tourism landscape. He personalizes every tour 
      according to client needs, ensuring a smooth, enjoyable, and unforgettable 
      experience.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Currently based in Thailand, Rashid also participates in international 
      travel events and webinars, including Malaysia, where he shares insights 
      and promotes Pakistan as a must-visit destination.
    </p>

   
  </div>
</section>

    </div>
  );
};

export default TourOperator;

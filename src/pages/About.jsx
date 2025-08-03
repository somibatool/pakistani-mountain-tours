
import React from "react";
import Team1 from '../assets/team pic/team 3.jpg';

import TeamImage from "../assets/adventureFairymedows/11.jpg";         // Replace with actual CEO image
import CoFounderImage from "../assets/autumn/client1.jpg"; // Replace with actual Co-Founder image

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-700 mt-20">
    
   <img 
  src={Team1} 
  alt="Team Image" 
  className="w-full h-80 object-cover rounded-lg shadow-lg"
/>



      
      
      {/* ABOUT US SECTION */}
      <div className="py-12 px-4 md:px-20">
        <h1 className="text-4xl font-bold text-center text-primary mb-6">
          About Us
        </h1>
        <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
          <strong>PAKISTANI MOUNTAIN TOURS (PMT)</strong> is a registered Tourism Company since 2013, recognized under both the Department of Tourist Services (DTS) Islamabad (License No. 1703) and the Security and Exchange Commission of Pakistan (SECP). Our dedicated team of travel professionals is committed to offering you safe, authentic, and unforgettable travel experiences across Pakistan’s majestic landscapes. Whether you're seeking adventure, culture, or relaxation, our passionate team ensures your journey is smooth and memorable.
        </p>
      </div>

      {/* CEO SECTION */}
      <div className="py-12 px-4 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-primary">Our CEO / Founder / Tour guide / social worker</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* CEO Image */}
          <div className="w-full md:w-1/3">
            <img
              src={TeamImage}
              alt="CEO Rashid Hussain"
              className="rounded-lg shadow-lg object-cover max-h-[400px] w-full"
            />
          </div>

          {/* CEO Description */}
          <div className="w-full md:w-2/3 text-lg leading-relaxed">
            <p className="mb-4 font-semibold">Rashid Hussain - CEO</p>
            <p>
              Rashid Hussain, the visionary founder of Pakistani Mountain Tours (PMT), has been leading the company with passion and dedication since its inception. With vast experience in the tourism industry, he is committed to showcasing the beauty of Pakistan to the world. His leadership ensures that every guest receives personalized service and unforgettable memories.
            </p>
          </div>
        </div>
      </div>

      {/* CO-FOUNDER SECTION */}
      <div className="py-12 px-4 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-primary">Co-Founder</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">

        

          {/* Co-Founder Description */}
          <div className="w-full md:w-2/3 text-lg leading-relaxed">
            <p className="mb-4 font-semibold">[Co-Founder Name]</p>
            <p>
              Our Co-Founder shares the same vision and dedication to promoting Pakistan’s unique landscapes and cultural heritage. Together, they have built a company that prioritizes customer satisfaction and quality service, ensuring every traveler experiences the true spirit of adventure.
            </p>
          </div>
            {/* Co-Founder Image */}
          <div className="w-full md:w-1/3">
            <img
              src={CoFounderImage}
              alt="Co-Founder"
              className="rounded-lg shadow-lg object-cover max-h-[400px] w-full"
            />
          </div>
        </div>
      </div>








      {/* CO-FOUNDER SECTION */}
      <div className="py-12 px-4 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-primary"> tour guide</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">

        





      {/* Co-Founder Image */}
          <div className="w-full md:w-1/3">
            <img
              src={CoFounderImage}
              alt="Co-Founder"
              className="rounded-lg shadow-lg object-cover max-h-[400px] w-full"
            />
          </div>
          {/* Co-Founder Description */}
          <div className="w-full md:w-2/3 text-lg leading-relaxed">
            <p className="mb-4 font-semibold">[Co-Founder Name]</p>
            <p>
              Our Co-Founder shares the same vision and dedication to promoting Pakistan’s unique landscapes and cultural heritage. Together, they have built a company that prioritizes customer satisfaction and quality service, ensuring every traveler experiences the true spirit of adventure.
            </p>
          </div>
      
        </div>
      </div>

    </div>
  );
};

export default AboutUs;




import React from "react";
import Team1 from '../assets/team pic/aboutteam.png';
import TeamImage from "../assets/adventureFairymedows/11.jpg";         
import CoFounderImage from "../assets/adventureFairymedows/measum.jpg"; 
import Sajid from "../assets/adventureFairymedows/sajid.jpg"; 
import Ali from "../assets/adventureFairymedows/ali.jpg"; 
import Testimonial from "../components/Testimonial/Testimonial"
import StayConnected from "./StayConnected";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-700 mt-20">
    
   <img 
  src={Team1} 
  alt="Team Image" 
  className="w-full h-90 object-fit rounded-lg shadow-lg"
/>



      
      
      {/* ABOUT US SECTION */}
      <div className="py-12 px-4 md:px-20">
        <h1 className="text-4xl font-bold text-center text-primary mb-6">
          About Us
        </h1>
        <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
          <strong>PAKISTANI MOUNTAIN TOURS (PMT)</strong> is a registered Tourism Company since 2018, recognized under both the Department of Tourist Services (DTS) Islamabad (License No. ID-2590) and the Security and Exchange Commission of Pakistan (SECP). Our dedicated team of travel professionals is committed to offering you safe, authentic, and unforgettable travel experiences across Pakistan’s majestic landscapes. Whether you're seeking adventure, culture, or relaxation, our passionate team ensures your journey is smooth and memorable.
        </p>
      </div>

      {/* CEO SECTION */}
      <div className="py-12 px-4 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-black">Meet Rashid Hussain – CEO & Visionary of Pakistani Mountain Tours</h2>
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
            Rashid Hussain, founder and CEO of Pakistani Mountain Tours, has been steering the company with passion and expertise since day one. Based in Thailand, he manages international clients and frequently travels to destinations like Malaysia to expand global connections. With a wealth of experience in tourism, Rashid is dedicated to presenting Pakistan’s beauty to the world, ensuring every guest enjoys personalized service and unforgettable adventures.
            </p>
          </div>
        </div>
      </div>

    








      {/* sajid  */}
      <div className="py-12 px-4 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-black"> Tour guides</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">

        

        {/* Co-Founder Description */}
          <div className="w-full md:w-2/3 text-lg leading-relaxed">
            <p className="mb-4 font-semibold">[Meet Sajid Hussain – Your Expert Tour Guide]</p>
            <p>
             Sajid Hussain is an experienced and dedicated tour guide with a passion for showcasing the beauty of Pakistan. Known for his friendly personality and deep knowledge of the country’s diverse landscapes, Sajid transforms every trip into a memorable adventure. Whether you’re exploring the valleys of Hunza, journeying to Skardu, or discovering the cultural charms of Chitral, Sajid ensures your experience is safe, comfortable, and filled with unforgettable moments. Travel with Sajid and uncover the true spirit of Pakistan.
            </p>
          </div>



      {/* Co-Founder Image */}
          <div className="w-full md:w-1/3">
            <img
              src={Sajid}
              alt="Co-Founder"
              className="rounded-lg shadow-lg object-cover max-h-[400px] w-full"
            />
          </div>
        
      
        </div>
      </div>
        {/* measum SECTION */}
      <div className="py-12 px-4 md:px-20">
   
        <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3">
            <img
              src={CoFounderImage}
              alt="Co-Founder"
              className="rounded-lg shadow-lg object-cover max-h-[400px] w-full"
            />
          </div>

        

          {/* measum */}
          <div className="w-full md:w-2/3 text-lg leading-relaxed">
            <p className="mb-4 font-semibold">[Meet Measum Abbas – Your Mountain Adventure Guide ]</p>
            <p>
              Measum Abbas is a passionate young tour guide with fresh and unique ideas to make every journey unforgettable. Known for his friendly nature and deep knowledge of Pakistan’s breathtaking mountain regions, Measum knows how to turn a simple trip into a once-in-a-lifetime experience.
Whether you’re exploring the valleys of Hunza, trekking through Fairy Meadows, or discovering hidden trails, Measum will ensure every moment is filled with excitement, comfort, and stories worth sharing.
Connect with Measum today and let him lead you to the heart of Pakistan’s natural beauty.
            </p>
          </div>
            {/* Co-Founder Image */}
        
        </div>
      </div>
      {/* Ali Mehdi SECTION */}
<div className="py-12 px-4 md:px-20">
  <div className="flex flex-col md:flex-row items-center gap-10">
    {/* Ali Mehdi Description */}
    <div className="w-full md:w-2/3 text-lg leading-relaxed">
      <p className="mb-4 font-semibold">[Meet Ali Mehdi – Junior Tour Guide]</p>
      <p>
        Ali Mehdi is a passionate junior tour guide with a growing expertise in Pakistan’s most captivating destinations. Skilled in assisting with trekking routes, cultural tours, and logistical arrangements, he ensures travelers feel welcomed and well-informed. Ali has a keen eye for spotting hidden gems, whether it’s a scenic viewpoint, a lesser-known trail, or a local eatery worth trying. His enthusiasm, attention to detail, and commitment to guest satisfaction make every journey more engaging and memorable.
      </p>
    </div>

    {/* Ali Mehdi Image */}
    <div className="w-full md:w-1/3">
      <img
        src={Ali}
        alt="Ali Mehdi"
        className="rounded-lg shadow-lg object-cover max-h-[400px] w-full"
      />
    </div>
  </div>
</div>

      < Testimonial />
      <StayConnected />

    </div>
  );
};

export default AboutUs;



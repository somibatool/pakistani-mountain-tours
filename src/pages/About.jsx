import React from "react";
import Team1 from "../assets/team pic/team18.jpg";
import TeamImage from "../assets/newclients/28.jpg";
import CoFounderImage from "../assets/adventureFairymedows/measum.jpg";
import Sajid from "../assets/adventureFairymedows/sajid.jpg";
import Ali from "../assets/adventureFairymedows/ali.jpg";
import Somi from "../assets/adventureFairymedows/somi.jpg";
import Testimonial from "../components/Testimonial/Testimonial";
import StayConnected from "./StayConnected";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-700 mt-20">
      {/* Team Image */}
      <img
        src={Team1}
        alt="Team Image"
        className="w-full h-90 object-fit rounded-lg shadow-lg"
      />

      {/* ABOUT US SECTION */}
      <div className="py-12 px-4 md:px-20">
        <h1 className="text-4xl font-bold text-center text-black mb-6">
          About Us
        </h1>
        <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
          <strong>PAKISTANI MOUNTAIN TOURS (PMT)</strong> is a registered
          Tourism Company since 2018, recognized under both the Department of
          Tourist Services (DTS) Islamabad (License No. ID-2590) and the
          Security and Exchange Commission of Pakistan (SECP). Our dedicated
          team of travel professionals is committed to offering you safe,
          authentic, and unforgettable travel experiences across Pakistan’s
          majestic landscapes. Whether you're seeking adventure, culture, or
          relaxation, our passionate team ensures your journey is smooth and
          memorable.
        </p>
      </div>

      {/* CEO SECTION */}
      <div className="py-12 px-4 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-black">
          Meet Rashid Hussain – CEO & Visionary of Pakistani Mountain Tours
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/3">
            <img
              src={TeamImage}
              alt="CEO Rashid Hussain"
              className="rounded-lg shadow-lg object-cover max-h-[400px] w-full"
            />
          </div>
          <div className="w-full md:w-2/3 text-lg leading-relaxed">
            <p className="mb-4 font-semibold">Rashid Hussain - CEO</p>
            <p>
              Rashid Hussain, founder and CEO of Pakistani Mountain Tours, has
              been steering the company with passion and expertise since day
              one. Based in Thailand, he manages international clients and
              frequently travels to destinations like Malaysia to expand global
              connections. With a wealth of experience in tourism, Rashid is
              dedicated to presenting Pakistan’s beauty to the world, ensuring
              every guest enjoys personalized service and unforgettable
              adventures.
            </p>
          </div>
        </div>
      </div>

      {/* Tour Guides SECTION */}
      <div className="py-12 px-4 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-black">Tour Guides</h2>

        {/* Sajid */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          <div className="w-full md:w-2/3 text-lg leading-relaxed">
            <p className="mb-4 font-semibold">
              [Meet Sajid Hussain – Your Expert Tour Guide]
            </p>
            <p>
              Sajid Hussain is an experienced and dedicated tour guide of
              Pakistani mountain tours with a passion for showcasing the
              beauty of Pakistan. Known for his friendly personality and deep
              knowledge of the country’s diverse landscapes, Sajid transforms
              every trip into a memorable adventure. Whether exploring Hunza,
              Skardu, or Chitral, Sajid ensures a safe, comfortable, and
              unforgettable experience.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src={Sajid}
              alt="Sajid Hussain"
              className="rounded-lg shadow-lg object-cover max-h-[400px] w-full"
            />
          </div>
        </div>

        {/* Mesum */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          <div className="w-full md:w-1/3">
            <img
              src={CoFounderImage}
              alt="Mesum Abbas"
              className="rounded-lg shadow-lg object-cover max-h-[400px] w-full"
            />
          </div>
          <div className="w-full md:w-2/3 text-lg leading-relaxed">
            <p className="mb-4 font-semibold">
              [Meet Mesum Abbas – Your Mountain Adventure Guide]
            </p>
            <p>
              Mesum Abbas is a passionate young tour guide with fresh and
              unique ideas to make every journey unforgettable. Known for his
              friendly nature and deep knowledge of Pakistan’s breathtaking
              mountain regions, Mesum ensures every trip is filled with
              excitement, comfort, and stories worth sharing.
            </p>
          </div>
        </div>

        {/* Ali Mehdi */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          <div className="w-full md:w-2/3 text-lg leading-relaxed">
            <p className="mb-4 font-semibold">[Meet Ali Mehdi – Junior Tour Guide]</p>
            <p>
              Ali Mehdi is a passionate junior tour guide with expertise in
              trekking routes, cultural tours, and logistics. He ensures
              travelers feel welcomed and well-informed, spotting hidden gems
              and making every journey memorable.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src={Ali}
              alt="Ali Mehdi"
              className="rounded-lg shadow-lg object-cover max-h-[400px] w-full"
            />
          </div>
        </div>

        {/* Somi */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/3">
            <img
              src={Somi}
              alt="Somi Batool"
              className="rounded-lg shadow-lg object-cover max-h-[400px] w-full"
            />
          </div>
          <div className="w-full md:w-2/3 text-lg leading-relaxed">
            <p className="mb-4 font-semibold">
              [Meet Somi Batool – Marketing & Social Media Manager]
            </p>
            <p>
              Somi Batool is a dedicated marketing and social media manager
              with a strong passion for creating impactful online brand
              experiences. Skilled in content creation, campaign planning,
              and audience engagement, she ensures every project stands out
              and resonates with its target audience.
            </p>
          </div>
        </div>
      </div>

      <Testimonial />
      <StayConnected />
    </div>
  );
};

export default AboutUs;

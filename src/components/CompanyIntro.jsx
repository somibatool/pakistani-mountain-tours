import React from "react";
import { Link } from "react-router-dom";
import MainVideo from '../assets/video/main.mp4';

const CompanyIntro = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-16">
      
      {/* Left Section: Text & Buttons */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
        <h1 className="text-4xl font-bold text-primary mb-6">
          Explore The World With Us
        </h1>
       <p className="text-gray-700 mb-8 leading-relaxed">
  We are pleased to introduce ourselves as <strong>PAKISTANI MOUNTAIN TOURS (PVT) LTD (PMT)</strong>. 
  We are a registered Tourism Company (License No. ID-2590) under the <strong>Department of Tourist Services, Government of Pakistan</strong>. 
  We operate from Arif Market Cinema Bazar, Gilgit, Pakistan. For any inquiries, feel free to contact us.
</p>


     <div className="flex flex-col sm:flex-row gap-4">
  {/* WhatsApp Button */}
  <a
    href="https://wa.me/66956071567"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md text-center"
  >
    WhatsApp Us
  </a>

  {/* Read More Button */}
  <Link
    to="/about"
    className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg shadow-md text-center"
  >
    Read More
  </Link>
</div>




      </div>

      {/* Right Section: Video */}
      <div className="w-full md:w-1/2">
     <video
  src={MainVideo}
  controls
  autoPlay
  muted
  loop
  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
/>
      </div>

    </div>
  );
};

export default CompanyIntro;

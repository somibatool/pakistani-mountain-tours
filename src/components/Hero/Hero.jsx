import React from "react";

const Hero = () => {
  return (
    <>
   <div className="flex items-center justify-center h-screen bg-cover bg-center mt-[13%]">
  <div className="text-center transform -translate-y-10">
    <h1 className="text-white text-4xl lg:text-6xl leading-tight mb-6 font-extrabold tracking-wide font-serif drop-shadow-lg">
      Pakistani Mountain Tours
    </h1>
    <p className="text-lg lg:text-2xl text-white italic font-medium tracking-wider drop-shadow-md mb-6">
      Let's Explore The World (Pakistan, Thailand)
    </p>

    <a
      href="https://wa.me/9266956071567"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 bg-[#00A9B9] text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-[#0092a1]"
    >
      Contact Us on WhatsApp
    </a>
  </div>
</div>

    </>
  );
};

export default Hero;

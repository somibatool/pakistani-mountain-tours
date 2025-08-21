import React from "react";
import FooterLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaGlobe,
  FaWhatsapp,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Gallery", // Changed from Blogs to Gallery
    link: "/gallery",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
];

const Footer = () => {
  return (
    <>
      {/* // Add this inside the <Footer /> component */}

<div className="dark:bg-gray-950 py-10 relative overflow-hidden">
  <video
    autoPlay
    loop
    muted
    className="absolute right-0 top-0 h-full w-full object-cover z-[-1]"
  >
    <source src={NatureVid} type="video/mp4" />
  </video>

  <div className="max-w-screen-xl mx-auto px-4 md:px-10 ">
    {/* Grid Section */}
    <div className="grid md:grid-cols-3 gap-y-8 md:gap-6 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl px-4 md:px-8">
      
      {/* Company Info */}
      <div className="py-8 md:col-span-1">
        <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
          <img src={FooterLogo} alt="" className="max-h-[70px] rounded-lg" />
        </h1>
        <p className="text-sm md:text-base mt-4 text-gray-800 dark:text-gray-300">
          Pakistani Mountain Tours is your trusted guide to the breathtaking landscapes of Pakistan. We specialize in unforgettable adventures, cultural experiences, and mountain expeditions that showcase the true beauty of the region.
        </p>
        <div className="flex items-center gap-3 mt-4 cursor-pointer hover:text-primary">
          <FaGlobe />
          <a
            href="https://pakistanimountaintours.com"
            target="_blank"
            className="hover:text-primary text-sm md:text-base"
          >
            pakistanimountaintours.com
          </a>
        </div>
        <div className="flex items-center gap-3 mt-3 hover:text-green-600 cursor-pointer">
          <FaWhatsapp />
          <p className="text-sm md:text-base">+66956071567</p>
        </div>
      </div>

      {/* Footer Columns */}
      <div className="col-span-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:mt-20 ">
        {/* Important Links */}
        <div className="py-4">
          <h1 className="text-lg font-bold mb-3">Important Links</h1>
          <ul className="flex flex-col gap-2 text-sm md:text-base">
            {FooterLinks.map((link) => (
              <li
                key={link.title}
                className="hover:translate-x-1 duration-300 hover:text-primary text-gray-700 dark:text-gray-200"
              >
                <Link to={link.link} onClick={() => window.scrollTo(0, 0)}>
                  &#11162; {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Trekking Tours */}
        <div className="py-4">
          <h1 className="text-lg font-bold mb-3">Trekking Tours</h1>
          <ul className="flex flex-col gap-2 text-sm md:text-base">
            <li><Link to="/trekkingDetail/k2-base-camp">&#11162; K2 Trek</Link></li>
            <li><Link to="/trekkingDetail/Rush-peak-Trek">&#11162; Rush Peak</Link></li>
            <li><Link to="/trekkingDetail/rakaposhi-base-camp">&#11162; Rakaposhi</Link></li>
          </ul>
        </div>

        {/* Bike Tours */}
        <div className="py-4">
          <h1 className="text-lg font-bold mb-3">Bike Tours</h1>
          <ul className="flex flex-col gap-2 text-sm md:text-base">
            <li><Link to="/bikeDetail/Skardu-Tour">&#11162; Skardu</Link></li>
            <li><Link to="/bikeDetail/karakoram-Highway">&#11162; KKH</Link></li>
            <li><Link to="/bikeDetail/khunjerab-Pass">&#11162; Khunjerab</Link></li>
          </ul>
        </div>

        {/* Adventure Tours */}
        <div className="py-4">
          <h1 className="text-lg font-bold mb-3">Adventure Tours</h1>
          <ul className="flex flex-col gap-2 text-sm md:text-base">
            <li><Link to="/adventureDetail/deosai">&#11162; Deosai</Link></li>
            <li><Link to="/adventureDetail/fairy-meadows">&#11162; Fairy Meadows</Link></li>
            <li><Link to="/adventureDetail/astore">&#11162; Astore</Link></li>
          </ul>
        </div>
      </div>
    </div>

    {/* Footer Bottom Line — Inside Wrapper */}
    <div className="text-center py-5 border-t border-gray-300/50 bg-primary text-white rounded-b-xl text-sm md:text-base">
      PAKISTANI MOUNTAIN TOURS © 2025 All Rights Reserved.
    </div>
  </div>
</div>



    </>
  );
};

export default Footer;

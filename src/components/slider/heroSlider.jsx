import { useEffect, useState } from "react";

// Desktop Images
import SkarduImage from "../../assets/newclients/23.jpg";
import HunzaImage from "../../assets/newclients/40.jpg";
import FairyMeadowsImage from "../../assets/newclients/42.jpg";
import BikeImage from "../../assets/newclients/41.jpg";

// Mobile Images
import SkarduImageMobile1 from "../../assets/newclients/q.jpg";
import HunzaImageMobile1 from "../../assets/newclients/g.jpg";
import FairyMeadowsImageMobile1 from "../../assets/newclients/new.jpeg";
import BikeImageMobile1 from "../../assets/newclients/new2.jpeg";

import SkarduImageMobile2 from "../../assets/newclients/26.jpg";
import HunzaImageMobile2 from "../../assets/newclients/20.jpg";
import FairyMeadowsImageMobile2 from "../../assets/adventureFairymedows/2.jpg";
import BikeImageMobile2 from "../../assets/adventure deosii/9.jpg";

const images = [
  {
    src: SkarduImage,
    mobileSrc: SkarduImageMobile1,
    title: "Welcome to Pakistani Mountain Tours",
    description:
      "Pakistani Mountain Tours creates journeys filled with comfort, discovery, and memories. Discover South Pakistan with Pakistani Mountain Tours.",
  },
  {
    src: HunzaImage,
    mobileSrc: HunzaImageMobile1,
    title: "Welcome to Pakistani Mountain Tours",
    description:
      "Travel with Rashid creates journeys filled with comfort, discovery, and memories. Pakistani Mountain Tours brings you to Hunza, a land of majestic mountains and unmatched hospitality.",
  },
  {
    src: FairyMeadowsImage,
    mobileSrc: FairyMeadowsImageMobile2,
    title: "Welcome to Pakistani Mountain Tours",
    description:
      "Pakistani Mountain Tours brings you unforgettable journeys and meaningful experiences. Fairy Meadows, offered by Pakistani Mountain Tours, is where nature speaks in silence.",
  },
  {
    src: BikeImage,
    mobileSrc: BikeImageMobile2,
    title: "Welcome to Pakistani Mountain Tours",
    description:
      "Travel with Rashid brings you unforgettable journeys and meaningful experiences. Explore Skardu with Pakistani Mountain Tours.",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomIn, setZoomIn] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const zoomTimer = setInterval(() => {
      setZoomIn((prev) => {
        if (prev) return false;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        return true;
      });
    }, 3000);

    return () => clearInterval(zoomTimer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[3000ms] ease-in-out ${
            index === currentIndex
              ? zoomIn
                ? "opacity-100 scale-110"
                : "opacity-100 scale-100"
              : "opacity-0"
          }`}
        >
          <img
            src={isMobile ? image.mobileSrc : image.src}
            alt={image.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          {images[currentIndex].title}
        </h1>

        <p className="text-white text-sm md:text-lg max-w-xl">
          {images[currentIndex].description}
        </p>

        <a
          href="https://wa.me/66956071567"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-6 rounded-full shadow-lg mt-3"
        >
          Contact Us On WhatsApp
        </a>
      </div>
    </div>
  );
};

export default HeroSlider;

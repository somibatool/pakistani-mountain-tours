import { useEffect, useState } from "react";
import SkarduImage from "../../assets/adventure deosii/slider1234.jpg";
import HunzaImage from "../../assets/adventureFairymedows/fairymedowshero.png";
import FairyMeadowsImage from "../../assets/adventureFairymedows/slider1.jpg";
import BikeImage from "../../assets/adventure deosii/skarduheart.jpg";

const images = [
  {
    src: SkarduImage,
    title: "Explore South Pakistan",
    description: 'South Pakistan – a region of vibrant culture, ancient heritage, and breathtaking landscapes from deserts to coastlines.',
  },
  {
    src: HunzaImage,
    title: "Explore Fairy Medows",
    description:
      "A paradise on earth, with breathtaking valleys and rich culture.",
  },
  {
    src: FairyMeadowsImage,
    title: "Explore Rakaposhi Nagar",
    description:
      "Experience the mesmerizing meadows and stunning views.",
  },
  {
    src: BikeImage,
    title: "Explore Skardu Valley",
    description: "Ride through nature’s wonderland and enjoy peaceful sceneries.",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomIn, setZoomIn] = useState(true);

  useEffect(() => {
    const zoomTimer = setInterval(() => {
      setZoomIn((prev) => {
        if (prev === true) {
          // halfway: start zooming out
          return false;
        } else {
          // after zooming out, switch image & zoom in again
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          return true;
        }
      });
    }, 3000); // 3 seconds for each phase (zoom in or out)

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
                ? "opacity-100 scale-110" // zoom in
                : "opacity-100 scale-100" // zoom out
              : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold mt-10 transition-opacity duration-500">
          {images[currentIndex].title}
        </h1>

        <p className="text-white text-sm md:text-lg max-w-xl mt-4 transition-opacity duration-500">
          {images[currentIndex].description}
        </p>

        <a
          href="https://wa.me/66956071567"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 mt-9"
        >
          Contact Us On WhatsApp
        </a>
      </div>
    </div>
  );
};

export default HeroSlider;

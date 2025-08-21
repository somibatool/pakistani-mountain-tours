import { useEffect, useState } from "react";

// 🖼️ Desktop Images
import SkarduImage from "../../assets/adventure deosii/slider1234.jpg";
import HunzaImage from "../../assets/adventureFairymedows/fairymedowshero.png";
import FairyMeadowsImage from "../../assets/adventureFairymedows/slider1.jpg";
import BikeImage from "../../assets/adventure deosii/skarduheart.jpg";

// 📱 Mobile Images (make sure to place your mobile-optimized images in the path below)
import SkarduImageMobile from "../../assets/south pakistan/1.jpg";
import HunzaImageMobile from "../../assets/adventureFairymedows/1.jpg";
import FairyMeadowsImageMobile from "../../assets/adventureFairymedows/2.jpg";
import BikeImageMobile from "../../assets/adventure deosii/9.jpg";

const images = [
  {
    src: SkarduImage,
    mobileSrc: SkarduImageMobile,
    title: "Explore South Pakistan",
    description:
      "South Pakistan – a region of vibrant culture, ancient heritage, and breathtaking landscapes from deserts to coastlines.",
  },
  {
    src: HunzaImage,
    mobileSrc: HunzaImageMobile,
    title: "Explore Fairy Medows",
    description:
      "A paradise on earth, with breathtaking valleys and rich culture.",
  },
  {
    src: FairyMeadowsImage,
    mobileSrc: FairyMeadowsImageMobile,
    title: "Explore Rakaposhi Nagar",
    description: "Experience the mesmerizing meadows and stunning views.",
  },
  {
    src: BikeImage,
    mobileSrc: BikeImageMobile,
    title: "Explore Skardu Valley",
    description: "Ride through nature’s wonderland and enjoy peaceful sceneries.",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomIn, setZoomIn] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // 📱 Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's `md` breakpoint
    };

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize); // update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔁 Auto-switch image with zoom in/out animation
  useEffect(() => {
    const zoomTimer = setInterval(() => {
      setZoomIn((prev) => {
        if (prev === true) {
          return false;
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          return true;
        }
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
          className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 mt-9"
        >
          Contact Us On WhatsApp
        </a>
      </div>
    </div>
  );
};

export default HeroSlider;

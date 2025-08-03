import { useEffect, useState } from 'react';
import SkarduImage from '../../assets/adventure deosii/5.jpg';
import HunzaImage from '../../assets/adventureFairymedows/18.jpg';
import FairyMeadowsImage from '../../assets/rakaposhi-trk/8.jpg';
import BikeImage from '../../assets/bike.jpg';

import WaterfallImage from '../../assets/k2-trk/9.jpg';

const images = [
  { src: SkarduImage, title: 'Explore Deosai Plains', description: 'Deosai National Park – known as the "Land of Giants"' },
  { src: HunzaImage, title: 'Explore Fairy Medows', description: 'A paradise on earth, with breathtaking valleys and rich culture.' },
  { src: FairyMeadowsImage, title: 'Explore Rakaposhi Nagar ', description: 'Experience the mesmerizing meadows and stunning views of Nanga Parbat.' },
  { src: BikeImage, title: 'Explore Gizher Valley', description: 'Ride through nature’s wonderland and enjoy peaceful sceneries.' },
  { src: WaterfallImage, title: 'Explore Mountains Glaciers', description: 'Relax beside waterfalls and breathe the freshest air of the north.' },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={currentImage.src}
        alt={currentImage.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center space-y-4 text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold mt-10">
          {currentImage.title}
        </h1>

        <p className="text-white text-sm md:text-lg max-w-xl mt-4">
          {currentImage.description}
        </p>

        <a
          href="https://wa.me/66956071567"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-primary text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 mt-9"
        >
          Contact Us On  WhatsApp
        </a>
      </div>
    </div>
  );
};

export default HeroSlider;
  
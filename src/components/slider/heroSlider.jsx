import { useEffect, useState } from 'react';

const images = [
  { src: '/src/assets/skarduheart.jpg', title: 'Explore Skardu' },
  { src: '/src/assets/hunzavalley.jpg', title: 'Explore Hunza Valley' },
  { src: '/src/assets/fairymedows.jpg', title: 'Explore Fairy Meadows' }, // You can replace with actual images
  { src: '/src/assets/hunzasuspension.jpg', title: 'Explore Fairy Meadows' }, // You can replace with actual images
  { src: '/src/assets/bike.jpg', title: 'Explore Fairy Meadows' }, // You can replace with actual images
  { src: '/src/assets/Ai.jpg', title: 'Explore Fairy Meadows' }, // You can replace with actual images
  { src: '/src/assets/waterfall.jpg', title: 'Explore Fairy Meadows' }, // You can replace with actual images
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds per slide

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
      <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center ">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          {currentImage.title}
        </h1>
      </div>
    </div>
  );
};

export default HeroSlider;

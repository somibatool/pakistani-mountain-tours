import { useState } from "react";
import { MapPin } from "lucide-react";
import hunzaImg from "../assets/newclients/5.jpg";
import skarduImg from "../assets/newclients/25.jpg";
import naranImg from "../assets/newclients/14.jpg";
import fairyImg from "../assets/newclients/40.jpg";
import swatImg from "../assets/newclients/D71_5407.jpg";
import malamJabbaImg from "../assets/newclients/D71_5219.jpg";
import neelumImg from "../assets/newclients/D71_5514.jpg";
import deosaiImg from "../assets/newclients/D71_5982.jpg";




interface TourCardProps {
  title: string;
  image: string;
  description: string;
}

const TourCard = ({ title, image, description }: TourCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-56 sm:h-64 cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
    >
      {/* Card wrapper */}
      <div
        className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/25"></div>

          {/* Location icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <MapPin size={38} className="text-white" />
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-white text-gray-800 rounded-xl p-4 rotate-y-180 backface-hidden flex flex-col items-center justify-center">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-center text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const MountainTours = () => {
const tours = [
  {
    title: "Skardu Sadpara Lake",
    image: hunzaImg,
    description: "Sadpara Lake is a beautiful, serene lake near Skardu, surrounded by snow-capped mountains and crystal-clear waters.",
  },
  {
    title: "Fairy Medows Reflection Point ",
    image: skarduImg,
    description: "Fairy Meadows is a stunning green plateau at the base of Nanga Parbat, offering breathtaking mountain views.",
  },
  {
    title: " Hunza Valley",
    image: naranImg,
    description: "Hunza Valley is a picturesque region in northern Pakistan, known for its majestic mountains, lush landscapes, and serene environment.",
  },
  {
    title: "Karimabad ",
    image: fairyImg,
    description: "Karimabad is the charming main town of Hunza Valley, famous for its scenic views, historic forts, and vibrant local culture.",
  },
  {
    title: "Hunza Valley",
    image: swatImg,
    description: "Hunza Valley is a breathtaking mountainous region in northern Pakistan, renowned for its stunning landscapes, serene rivers, and vibrant culture.",
  },
  {
    title: "Skardu Mantuka Waterfall",
    image: malamJabbaImg,
    description: "Mantuka Waterfall in Skardu is a spectacular waterfall cascading down rugged cliffs, surrounded by lush green valleys and snow-capped mountains, making it a perfect spot for nature lovers and photographers",
  },
  {
    title: "Suspension Bridge",
    image: neelumImg,
    description: "The Suspension Bridge in Neelum Valley is a thrilling and scenic bridge that spans a river, offering breathtaking views of the surrounding mountains and lush green valleys.",
  },
  {
    title: "Nanga Parbat",
    image: deosaiImg,
    description: "Nanga Parbat is the ninth-highest mountain in the world, famous for its towering peak and dramatic, breathtaking scenery.",
  },
];


  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-10">
        Pakistani Mountain Tours
      </h2>

      {/* Responsive grid: 4 in each row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tours.map((tour, idx) => (
          <TourCard
            key={idx}
            title={tour.title}
            image={tour.image}
            description={tour.description}
          />
        ))}
      </div>
    </section>
  );
};

export default MountainTours;

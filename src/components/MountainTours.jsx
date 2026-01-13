import { useState } from "react";
import { MapPin } from "lucide-react";
import hunzaImg from "../assets/newclients/h.jpg";
import skarduImg from "../assets/newclients/25.jpg";
import naranImg from "../assets/newclients/58.jpg";
import fairyImg from "../assets/newclients/40.jpg";
import swatImg from "../assets/newclients/D71_5407.jpg";
import malamJabbaImg from "../assets/newclients/45.jpg";
import neelumImg from "../assets/newclients/D71_5514.jpg";
import deosaiImg from "../assets/newclients/c.jpg";

const TourCard = ({ title, image, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-56 sm:h-64 cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
    >
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

          <div className="absolute inset-0 bg-black/25"></div>

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
      title: "Nalter valley ",
      image: hunzaImg,
      description:
        "Nalter Valley is a beautiful hidden paradise near Gilgit, known for its crystal-clear lakes and lush green landscapes. Surrounded by snow-capped mountains, it offers peace, adventure, and breathtaking natural beauty. A perfect destination for nature lovers",
    },
    {
      title: "Fairy Medows Reflection Point",
      image: skarduImg,
      description:
        "Fairy Meadows is a stunning green plateau at the base of Nanga Parbat, offering breathtaking mountain views.",
    },
    {
      title: "Hunza Valley",
      image: naranImg,
      description:
        "Hunza Valley is a picturesque region in northern Pakistan, known for its majestic mountains and lush landscapes.",
    },
    {
      title: "Karimabad",
      image: fairyImg,
      description:
        "Karimabad is the main town of Hunza Valley, famous for scenic views, historic forts, and vibrant local culture.",
    },
    {
      title: "Hunza Valley",
      image: swatImg,
      description:
        "Hunza Valley is a breathtaking region known for its stunning landscapes and vibrant culture.",
    },
    {
      title: "Skardu ",
      image: malamJabbaImg,
      description:
        "Skardu is a spectacular cascade surrounded by lush green valleys and mountains.",
    },
    {
      title: "Suspension Bridge",
      image: neelumImg,
      description:
        "The Suspension Bridge in Neelum Valley offers thrilling and scenic views of mountains and rivers.",
    },
    {
      title: "Faisal Mosque",
      image: deosaiImg,
      description:
        "The Faisal Mosque in Islamabad is a stunning landmark known for its unique modern design. Set against the Margalla Hills, it is Pakistan’s largest and most iconic mosque. A peaceful and beautiful place to visit.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-10">
        Pakistani Mountain Tours
      </h2>

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

import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import userimg from "../../assets/autumn/doctor_client.jpg";
import userimg1 from "../../assets/andrew.jpg";
import userimg2 from "../../assets/client5.jpg";
import userimg4 from "../../assets/team pic/nithi.jpg";
import userimg5 from "../../assets/newclients/34.jpg";
import userimg6 from "../../assets/newclients/i.jpg";
import userimg7 from "../../assets/newclients/ratt.jpg";
import googleLogo from "../../assets/google.png"; // make sure this exists in your assets folder

const testimonialData = [
  {
    id: 1,
    name: "Andrew Jason Scott",
    date: "2 Jun 2024",
    text: "I went on a tour with this company recently - it was incredible. A truly beautiful country with wonderful people. You will not regret the awe inspiring landscapes nor the very friendly people. My guide Rashid spoke the many diverse languages, and knew the history and landscapes - enabling me to explore beyond the usual, with real depth and understanding. I’ll never forget my two amazing weeks. It was a genuine pleasure to explore this incredible place with Pakistani Mountain Tours - it has my highest recommendation.",
    img: userimg1,
  },
  {
    id: 2,
    name: "Thippawan Samran",
    date: "14 october 2024",
    text: "I recently went on a tour with Pakistani Mountain Tours – and it was an incredible experience. They took very good care of us throughout the journey. The guide was friendly, knowledgeable, and spoke multiple languages, which made it easy to connect and explore deeper. You can even contact the guide to ask about the best places to visit in Pakistan. The country is truly beautiful, full of awe-inspiring landscapes and warm, welcoming people. I’ll never forget this amazing experience – highly recommended!",
    img: userimg2,
  },
  {
    id: 3,
    name: "Tienchai Sanguanprasatporn",
    date: "5 november 2024",
    text: "Our trip with Pakistani Mountain Tours was nothing short of amazing. From the moment we arrived, everything was well-organized. The guide was kind and helpful, making sure we were comfortable and informed throughout. He shared stories about each place and showed us hidden gems we wouldn’t have discovered on our own. You can reach out to him anytime for advice on where to go in Pakistan. The hospitality, the mountains, and the people all left a lasting impression. I’m so glad we chose this tour!",
    img: userimg,
  },
  {
    id: 4,
    name:"Nithi Bunchatheravate",
    date :"1 october 2025",
    text: " I took the Gilgit-Baltistan Tour in October of 2025 with Pakistani Mountain Tours, and it was fantastic! Our tour guide, Rashid, was incredibly friendly and did an excellent job leading the trip. His English was clear understand. He even had his niece and nephew join the group to help look after us and make sure everything ran smoothly. I highly recommend this tour.Pakistan's scenery is truly magnificent.If you want to go in autumn for autumn leaf colour or when the blossoms are blooming in spring, it would be many times more beautiful. Don't hesitate to visit!",
    img: userimg4,
  },
   {
    id: 5,
    name: "Penluk Lothuvachai",
    date: "29 september 2025",
    text: "The tour Guide Rashid Hussain, took great care of the guests very kind, polite, and knowledgeable about the place. I highlight recommend this tour.",
    img: userimg5,
  },
  {
    id: 6,
    name: "Nitaya Suwannarunk",
    date: "10 November 2025",
    text: "I came to Pakistan in autumn. Throughout the journey, we saw colorful leaves, bright blue streams and lakes, and mountains that were as beautiful as a painting. Pakistani are lovely and friendly. Guide Rashid and his team are friendly, take care and facilitate all time, very impressive. I will definitely visit Pakistan again.",
    img: userimg6,
  },
  {
    id: 7,
    name: "Rattanun Jirachaiyabhas",
    date: "9 October 2025",
    text: "Don't believe on what social media or news from Westerners said about Pakistan. The country is really safe and has beautiful scenery. Pakistani are very friendly too.I also really appreciated the service given to me by PMT. Mr. Rashid and his team are professional, well organized and knowledgeable. I highly recommend PMT for those who want to visit Pakistan. You will definitely enjoy your trip.",
    img: userimg7,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      { breakpoint: 10000, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div data-aos="fade-up" data-aos-duration="300" className="py-10">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-black">
            What Our Customer Says About Us
          </h1>

          <p className="text-lg font-bold text-black mt-3">EXCELLENT</p>

          {/* Stars */}
          <div className="flex justify-center mt-2 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-2xl" />
            ))}
          </div>

          <p className="text-lg mt-1 text-gray-700">
            Based on <span className="font-bold">5 reviews</span>
          </p>

          {/* Google Logo */}
          <div className="flex justify-center mt-2">
            <img src={googleLogo} alt="Google" className="h-6 w-auto" />
          </div>
        </div>

        {/* Testimonials */}
        <div data-aos="zoom-in" data-aos-duration="300" className="max-w-[800px] mx-auto">
          <Slider {...settings}>
            {testimonialData.map(({ id, name, text, img, date }) => (
              <div key={id} className="my-6 px-4">
                <div className="flex flex-col shadow-lg p-6 rounded-xl dark:bg-gray-800 bg-primary/10 h-full">
                  {/* Top row: Image, Name, Date, Stars */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={img}
                      alt={name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
  <span className="font-semibold">{name}</span>
  
  <div className="text-sm text-gray-500 flex flex-col">
    <span>{date}</span>

    <div className="flex text-yellow-400 mt-1">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>
  </div>
</div>

                  </div>
                  {/* Testimonial Text */}
                  <p className="text-gray-600 text-sm">{text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            About Us – Pakistani Mountain Tours At Pakistani Mountain Tours, we
            are passionate about showcasing the breathtaking beauty of Pakistan
            to both domestic and international travelers. With years of
            experience in the tourism industry, we specialize in organizing
            unforgettable trips across Pakistan’s diverse landscapes—from the
            majestic peaks of the north to the historical cities and cultural
            landmarks spread throughout the country. Our dedicated team is
            committed to providing safe, comfortable, and personalized tours,
            ensuring that every traveler experiences the true warmth and
            hospitality of Pakistan. Whether you’re seeking adventure,
            relaxation, or cultural exploration, Pakistani Mountain Tours is
            your trusted partner for discovering the hidden gems of this
            incredible country.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            <img
              src="/public/IMG_1328.JPG"
              alt="Gallery 1"
              className="w-full h-64 object-cover rounded"
            />
            <img
              src="/public/IMG_1332.jpg"
              alt="Gallery 2"
              className="w-full h-64 object-cover rounded"
            />
            <img
              src="/public/IMG_1334.jpg"
              alt="Gallery 3"
              className="w-full h-64 object-cover rounded"
            />
          </div>
          <br />
          <p>
            Our Highlights: Expert-guided tours to Northern Pakistan (Hunza,
            Skardu, Fairy Meadows, and more). Comfortable and reliable transport
            services. Adventure activities: trekking, camping, jeep safaris, and
            more. Customized photography and sightseeing tours. Focus on safety,
            comfort, and personalized service. Serving both local and
            international tourists. Years of professional experience in the
            tourism industry.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          <img
            src="/public/IMG_1335.jpg"
            alt="Gallery 1"
            className="w-full h-64 object-cover rounded"
          />
          <img
            src="/public/IMG_1460.jpg"
            alt="Gallery 2"
            className="w-full h-64 object-cover rounded"
          />
          <img
            src="/public/IMG_1461.jpg"
            alt="Gallery 3"
            className="w-full h-64 object-cover rounded"
          />
        </div>
        <div className="mt-8">
          <p>
            At Pakistani Mountain Tours, we believe that every journey is more
            than just travel—it's an experience that creates memories for a
            lifetime. As a professional travel agency, we specialize in
            organizing tours across Pakistan's most iconic destinations, helping
            both local and international tourists explore the stunning
            landscapes, rich culture, and hidden gems of our beautiful country.
            With years of experience working with travelers from around the
            world, our team understands the importance of comfort, safety, and
            personalized service. From the towering peaks of the Karakoram and
            Himalayas to the serene valleys of Swat, Hunza, and Skardu, we
            ensure each tour is crafted to meet your expectations and provide a
            truly unforgettable experience. We offer a wide range of services
            including adventure tours, sightseeing, cultural explorations,
            family trips, and corporate group tours. Whether you're a solo
            traveler or a large group, Pakistani Mountain Tours is your reliable
            partner to discover the real beauty of Pakistan. Our passion lies in
            showcasing not just the landscapes, but the warm hospitality of our
            people, the vibrant traditions, and the rich heritage that makes
            Pakistan unique.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 mb-10">
          <img
            src="/public/IMG_1328.JPG"
            alt="Gallery 1"
            className="w-full h-64 object-cover rounded"
          />
          <img
            src="/public/IMG_1465.jpg"
            alt="Gallery 2"
            className="w-full h-64 object-cover rounded"
          />
          <img
            src="/public/IMG_1327.jpg"
            alt="Gallery 3"
            className="w-full h-64 object-cover rounded"
          />
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;

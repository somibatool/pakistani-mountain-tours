import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const StayConnected = () => {
  return (
    <div className="py-10 bg-white dark:bg-gray-900">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
          Stay Connected
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Follow us on social media and stay updated with our latest tours, adventures, and experiences!
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-white">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/share/1HSnH1mgig/?mibextid=wwXIfr",
              color: "bg-blue-600",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/pakistanimountaintours?igsh=Y3BveHJlaWowMDF4&utm_source=qr",
              color: "bg-gradient-to-tr from-pink-500 to-yellow-500",
            },
            {
              icon: <FaTwitter />,
              link: "https://www.twitter.com",
              color: "bg-blue-400",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com",
              color: "bg-blue-800",
            },
          
            {
              icon: <FaTiktok />,
              link: "https://www.tiktok.com/@pmt.pk?_t=ZS-8yVccemmZZ2&_r=1",
              color: "bg-black",
            },
          {
  icon: <FaWhatsapp />,
  label: (
    <a
      href="https://wa.me/66956071567"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-primary hover:bg-primary text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 mt-9"
    >
      Contact Us On WhatsApp
    </a>
  ),
  link: "https://wa.me/66956071567",
  color: "bg-green-500",
}

          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl w-12 h-12 flex items-center justify-center rounded-full ${social.color} hover:scale-110 transform transition duration-300 shadow-md hover:shadow-lg`}
              aria-label="Social Link"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StayConnected;

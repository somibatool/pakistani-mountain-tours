import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";
import { FaClock, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export const NavbarLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Gallery", link: "/gallery" },
  { name: "Best Places", link: "/best-places" },
  { name: "Contact", link: "/contact" },
  { name: "Meet our Tour Operator", link: "/tour-operator" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed top-0 right-0 w-full z-50 bg-white shadow-md">

      {/* ===== TOP BAR ===== */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-2 sm:block hidden">
        <div className="container">
          <div className="flex items-center justify-between text-sm">

            {/* Left */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FaClock /> <p>24 Hours Open</p>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt /> <p>66956071567</p>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt /> <p>Pakistan, Thailand</p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-6 text-lg">
              <a
                href="https://www.facebook.com/share/1F2CTNzvM4/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-900"
              >
                <FaFacebookF /> <span className="text-sm">Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/pakistanimountaintours"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-700"
              >
                <FaInstagram /> <span className="text-sm">Instagram</span>
              </a>

              <a
                href="https://www.tiktok.com/@pmt.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-black"
              >
                <FaTiktok /> <span className="text-sm">TikTok</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <div className="container py-3">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="Logo" className="h-20" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6">
            {NavbarLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    isActive ? "text-primary font-semibold" : ""
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full"
            >
              Book Now
            </button>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              {showMenu ? (
                <HiMenuAlt1 size={30} onClick={() => setShowMenu(false)} />
              ) : (
                <HiMenuAlt3 size={30} onClick={() => setShowMenu(true)} />
              )}
            </div>
          </div>

        </div>
      </div>

      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </nav>
  );
};

export default Navbar;

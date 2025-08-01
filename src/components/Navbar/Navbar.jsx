import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
// import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa6"

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/best-places",
  },
  {
    name: "Contact",
    link: "/contact",
  }
];

// const DropdownLinks = [
//   {
//     name: "Our Services",
//     link: "/#services",
//   },
//   {
//     name: "Top Brands",
//     link: "/#mobile_brands",
//   },
//   {
//     name: "Location",
//     link: "/#location",
//   },
// ];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">


<div className="bg-gradient-to-r from-primary to-secondary text-white ">
  <div className="container py-[2px] sm:block hidden">
    <div className="flex items-center justify-between">
      {/* Left - Contact Info */}
      <div className="flex items-center gap-4">
        <p className="text-sm">Connect Now</p>
        
      </div>

      {/* Right - Social Icons */}
     <div className="flex items-center gap-4 text-white text-lg">
  <a
    href="https://www.facebook.com/share/1F2CTNzvM4/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    className="  border-white hover:text-blue-300 hover:bg-white transition-all duration-300"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://www.instagram.com/pakistanimountaintours?igsh=Y3BveHJlaWowMDF4&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
    className="  border-white hover:text-pink-300 hover:bg-white transition-all duration-300"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>
  <a
   href="https://wa.me/+66956071567"
    target="_blank"
    rel="noopener noreferrer"
    className=" border-white hover:text-green-300 hover:bg-white transition-all duration-300"
    aria-label="WhatsApp"
  >
    <FaWhatsapp />
  </a>
  <a
    href="https://www.tiktok.com/@pmt.pk?_t=ZS-8yVccemmZZ2&_r=1"
    target="_blank"
    rel="noopener noreferrer"
    className="  border-white hover:text-gray-300 hover:bg-white transition-all duration-300"
    aria-label="TikTok"
  >
    <FaTiktok />
  </a>
</div>

    </div>
  </div>
</div>


        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4  font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="" className="h-20 " />
              </Link>
              {/* <span>TCJ Tourism</span> */}
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 ">
                <li className="py-4">
                  <NavLink to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/blogs" activeClassName="active">
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/best-places" activeClassName="active">
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/Contact" activeClassName="active">
                    Contact
                  </NavLink>
                </li>
                {/* <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Contact Us{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li> */}
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
                onClick={() => {
                  handleOrderPopup();
                }}
              >
                Book Now
              </button>
              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
        
      </nav>
    </>
  );
};

export default Navbar;

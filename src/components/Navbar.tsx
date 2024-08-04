"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Home, Info, Hotel, Phone } from "lucide-react";
import { motion } from "framer-motion";
import NavLink from "./uiCustom/NavLinks";
import Link from "next/link";

const iconMap: any = {
  Home,
  Info,
  Hotel,
  Phone,
};

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/amenities", text: "Amenities" },
  { href: "/location", text: "Location" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },
];

const mobileLinks = [
  { icon: "Home", text: "Home", href: "/#home" },
  { icon: "Info", text: "Amenities", href: "/amenities" },
  { icon: "Hotel", text: "Location", href: "/location" },
  { icon: "Info", text: "About", href: "/about" },
  { icon: "Phone", text: "Contact", href: "/contact" },
];

const mobileLinks2 = [
  { icon: "Home", text: "Home", href: "/" },
  { icon: "Info", text: "Amenities", href: "/amenities" },
  { icon: "Hotel", text: "Location", href: "/location" },
  { icon: "Info", text: "About", href: "/about" },
  { icon: "Phone", text: "Contact", href: "/contact" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const [currentLinks, setCurrentLinks] = useState(mobileLinks);
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/contact") {
      setCurrentLinks(mobileLinks2);
    } else {
      setCurrentLinks(mobileLinks);
    }
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (target: string) => {
    const element = document.getElementById(target);
    const yOffset = -100; // Adjust this value as needed
    const y = element
      ? element.getBoundingClientRect().top + window.pageYOffset + yOffset
      : 0;

    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 bg-opacity-100 sm:bg-opacity-90  bg-[#ECEAE5] z-10 sm:px-0 w-screen">
      <div className="flex flex-col w-screen pt-4 pb-3 px-6 sm:px-0 overflow-hidden z-[2]">
        <div className="flex justify-between items-center px-3 sm:px-12">
          <div className="flex text-[26px] gap-4 text-primary sm:text-[42px] font-extrabold roboto-slab self-center">
            <span className="text-black">SHREE</span> RADHE
          </div>
          <div className="hidden text-secondary  roboto-slab md:flex gap-8 uppercase items-center font-semibold text-[18px]">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                href={link.href}
                text={link.text}
                onClick={() => handleLinkClick(link.href.split("#")[1])}
              />
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="z-50">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col items-center opacity-100 gap-12 absolute top-24 left-0 text-[40px] font-semibold w-screen z-[1] p-12 bg-[#ECEAE5]/70 mt-2 h-screen text-pretty italic"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex bg-opacity-100 flex-col h-[90vh] overflow-hidden items-center gap-12"
            >
              {currentLinks.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="self-center bg-opacity-100 flex justify-between w-full items-center gap-2"
                  >
                    {item.text === "Contact" ? (
                      <Link
                        href={item.href}
                        className="flex bg-opacity-100 items-center gap-2"
                      >
                        <Icon size={40} /> {item.text}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => {
                          handleLinkClick(item.href.split("#")[1]);
                        }}
                        className="flex items-center gap-2"
                      >
                        <Icon size={40} /> {item.text}
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

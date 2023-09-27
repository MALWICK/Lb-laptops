import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../homepage/HomeNavbar.css";
import Image from "next/image";
import Lblogo from "../../assets/images/lB-logo.png";
import Searchbar from "./searchbar";

function HomeNavbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrollingDown = window.scrollY > 0;
      setIsSticky(isScrollingDown);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen">
      <div
        className={`bg-red-700 h-14 cursor-pointer flex items-center justify-center transition-all duration-300 ${
          isSticky ? "sticky top-0" : ""
        }`}
      >
        <div className="innerBanner flex items-center justify-center gap-10">
          <p>
            <i className="bg-white bi bi-tags-fill text-[#FE3B02]"></i> Low Prices, 60-day
            money-back policy, and more. Now to sep 30
          </p>
          <span className="exp underline text-[#FE3B02]">
            Explore now <i className="bi bi-arrow-right"></i>
          </span>
        </div>
      </div>
      <nav
        className={`bg-white h-16 transition-all duration-300 ${
          isSticky ? "sticky top-0 shadow" : ""
        } ${window.innerWidth <= 768 ? "fixed" : ""}`}
      >
        <div className="container mx-auto flex items-center justify-between h-full px-4">
          <div className="logo text-lg font-bold">
            <Image src={Lblogo} alt="my-logo" />
          </div>

          <Searchbar />

          <div className="md:hidden">
            <button
              type="button"
              className="block text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <i className="bi bi-x-lg"></i>
              ) : (
                <i className="bi bi-list"></i>
              )}
            </button>
          </div>
          <ul className={`hidden md:flex space-x-4 ${isMenuOpen ? "" : "hidden"}`}>
            <li className="notification">
              <i className="bi bi-bell"></i>
            </li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      {isMenuOpen && (
        <ul className="md:hidden">
          <li>
            <i className="bi bi-bell"></i>
            <i className="bi bi-bell"></i> Notifications
          </li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
}

export default HomeNavbar;
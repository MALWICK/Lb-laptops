import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../homepage/HomeNavbar.css";
import Image from "next/image";
import Lblogo from "../../assets/images/lB-logo.png";

function HomeNavbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

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
        <div className="innerBanner flex items-center  justify-center gap-10  ">
          <p>
            <i className="bg-white bi bi-tags-fill"></i> Low Prices, 60-day
            money-back policy, and more.Now to sep 30
          </p>
          <span className="exp underline">
            Explore now <i className="bi bi-arrow-right"></i>
          </span>
        </div>
      </div>
      <nav
        className={`bg-white h-16 transition-all duration-300 ${
          isSticky ? "sticky top-0 shadow" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-full px-4">
          <div className="logo text-lg font-bold">
            <Image src={Lblogo} alt="my-logo" />
          </div>

          <div className="relative">
            <button
              className="text-black focus:outline-none"
              onClick={toggleSearch}
            >
              <i className="bi bi-search"></i>
            </button>
            {isSearchOpen && (
              <div className="absolute right-0 mt-2 bg-black rounded-md shadow-lg">
                <input
                  className="w-64 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none"
                  type="text"
                  placeholder="Search..."
                />
              </div>
            )}
          </div>

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
          <ul
            className={`hidden md:flex space-x-4 ${isMenuOpen ? "" : "hidden"}`}
          >
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      {isMenuOpen && (
        <ul className="md:hidden">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
}

export default HomeNavbar;

import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

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
        className={`bg-gray-200 h-16 transition-all duration-300 ${
          isSticky ? "sticky top-0" : ""
        }`}
      >
        Banner
      </div>
      <nav
        className={`bg-white h-16 transition-all duration-300 ${
          isSticky ? "sticky top-0 shadow" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-full px-4">
          <div className="text-lg font-bold">Logo</div>
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

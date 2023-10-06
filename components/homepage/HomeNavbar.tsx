import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./HomeNavbar.css";
import { BsList, BsX } from "react-icons/bs";
import LogoImg from "@/assets/images/lB-logo.png";
import Image from "next/image";
import SearchBar from "./components/searchbar";
import Dropdown from "./components/Dropdown";
import BannerData from "@/data/BannerData"

function HomeNavbar() {
  const [showMenu, setShowMenu] = useState(false);

  // Function to handle menu toggle
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  // Function to handle window resize
  const handleResize = () => {
    if (window.innerWidth > 600) {
      setShowMenu(false);
    }
  };

  const handleLinks = (url:string) => {
    window.location.href = url;
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <Dropdown />
          <div className="logo">
            <Image src={LogoImg} alt="logo" priority={true} />
          </div>
          <SearchBar />

          <div className={`menu ${showMenu ? "show" : ""}`}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>

            <div></div>
          </div>
          <div className="hamburger-menu" onClick={handleMenuToggle}>
            {showMenu ? <BsX /> : <BsList />}
          </div>
        </div>
      </nav>
      <div className="banner">
        <ul className="innerbanner">
          {BannerData.map((data) => (
            <li key={data.title} onClick={() => handleLinks(data.url)}>
              {data.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default HomeNavbar;

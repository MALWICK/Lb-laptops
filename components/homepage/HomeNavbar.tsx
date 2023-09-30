import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./HomeNavbar.css";
import { BsList, BsX } from "react-icons/bs";
import LogoImg from "@/assets/images/lB-logo.png";
import Image from "next/image";
import SearchBar from "./components/searchbar";
import Dropdown from "./components/Dropdown";


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

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Image src={LogoImg} alt="logo" priority={true} />
          </div>
          <SearchBar />
          <Dropdown />
     
           <div className={`menu ${showMenu ? "show" : ""}`}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            

            <div>
              
            </div>
          </div>
          <div className="hamburger-menu" onClick={handleMenuToggle}>
            {showMenu ? <BsX /> : <BsList />}
          </div> 
            

        </div>
      </nav>
      <div className="banner"></div>
    </div>
  );
}
export default HomeNavbar;

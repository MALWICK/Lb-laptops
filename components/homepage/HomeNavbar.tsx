import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./HomeNavbar.css";
import {  BsSunFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { WiMoonAltWaningCrescent2 } from "react-icons/wi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LogoImg from "@/assets/images/lB-logo.png";
import Image from "next/image";
import SearchBar from "./components/searchbar";
import Dropdown from "./components/Dropdown";
import BannerData from "@/data/BannerData";
import NotificationIcon from "./components/notificationdropdown/NotificationIcon";
import HamburgerMenu from "./components/hamBurgerMenu/hamburgerMenu"
import SlidingThumbnail from "./components/TodaysDeals/components/SlidingThumbnail";

interface HomeNavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const HomeNavbar: React.FC<HomeNavbarProps> = ({
  isDarkMode,
  toggleDarkMode,
}) => {
 
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [replaceDropdown, setReplaceDropdown] = useState(false);



  // Function to handle window resize
  const handleResize = () => {
    if (window.innerWidth > 600) {
     
    }
  };

  const handleLinks = (url: string) => {
    window.location.href = url;
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setShowSearchBar(window.innerWidth > 599);
    };
  
    handleResize(); // Check window size on initial render
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleSize(); // Check screen size on initial render

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  useEffect(() => {
    const handleSize = () => {
      setReplaceDropdown(window.innerWidth <= 768);
    };

    handleSize(); // Check screen size on initial render

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <div className={`bg-${isDarkMode ? "black" : "white"} `}>
      <nav className="navbar w-full">
        <div className="container w-full ">

        <>
              {replaceDropdown ? (
                
                <HamburgerMenu />
              ) : (
                <Dropdown  />
              )}
            </>
          
          <div className="logo">
            <Image src={LogoImg} alt="logo" priority={true} />
          </div>
          {showSearchBar && <SearchBar />}

          <div
            className={`menu flex justify-around items-center gap-4  `}
          >
            <span className="notification">
              <NotificationIcon />
            </span>
            <>
              {isSmallScreen ? (
                <FaRegUser className="text-2xl" />
              ) : (
                <a
                  href="#"
                  className="flex"
                >
                  <div className="loginsign flex items-center justify-around gap-2">
                    <button className="login">Login</button>
                    <button className="signup">SignUp</button>
                  </div>
                </a>
              )}
            </>
            <a href="#">
              <AiOutlineShoppingCart />
            </a>
            <a
              href="#"
              className="flex flex-col font-medium text-xs hover:rounded-full p-[4px] w-24 items-center justify-center hover:bg-gray-200"
            >
              <span>Return&</span>
              <span>Oder</span>
            </a>

            <div></div>
          </div>
          <button
            className=" top-4 right-4 p-2 rounded-full bg-gray-300 dark:bg-gray-800 text-gray-600 dark:text-gray-200"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <BsSunFill /> : <WiMoonAltWaningCrescent2 />}
          </button>
       
        </div>
      </nav>
      <div className="banner flex justify-center items-center ">
        <ul className="innerbanner flex justify-around items-center   text-base cursor-pointer">
          {BannerData.map((data) => (
            <li
              key={data.title}
              className="hove"
              onClick={() => handleLinks(data.url)}
            >
              {data.title}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};
export default HomeNavbar;

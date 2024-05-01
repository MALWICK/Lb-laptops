import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./HomeNavbar.css";
import { BsList, BsX, BsSunFill } from "react-icons/bs";
import { WiMoonAltWaningCrescent2 } from "react-icons/wi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LogoImg from "@/assets/images/lB-logo.png";
import Image from "next/image";
import SearchBar from "./components/searchbar";
import Dropdown from "./components/Dropdown";
import BannerData from "@/data/BannerData";
import NotificationIcon from "./components/notificationdropdown/NotificationIcon";

interface HomeNavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const HomeNavbar: React.FC<HomeNavbarProps> = ({
  isDarkMode,
  toggleDarkMode,
}) => {
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

  const handleLinks = (url: string) => {
    window.location.href = url;
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`bg-${isDarkMode ? "black" : "white"} `}>
      <nav className="navbar w-full">
        <div className="container w-full ">
          <Dropdown />
          <div className="logo">
            <Image src={LogoImg} alt="logo" priority={true} />
          </div>
          <SearchBar />

          <div
            className={`menu flex justify-around items-center gap-4  ${
              showMenu ? "show" : ""
            }`}
          >
            <span className="notification">
              <NotificationIcon />
            </span>
            <div className="loginsign flex items-center justify-around gap-2 ">
              <button className="login">Login</button>
              <button className="signup">SignUp</button>
            </div>
            <a href="#">
              {" "}
              <AiOutlineShoppingCart />{" "}
            </a>
            <a href="#">Contact</a>

            <div></div>
          </div>
          <button
            className=" top-4 right-4 p-2 rounded-full bg-gray-300 dark:bg-gray-800 text-gray-600 dark:text-gray-200"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <BsSunFill /> : <WiMoonAltWaningCrescent2 />}
          </button>
          <div className="hamburger-menu" onClick={handleMenuToggle}>
            {showMenu ? <BsX /> : <BsList />}
          </div>
        </div>
      </nav>
      <div className="banner flex justify-center items-center ">
        <ul className="innerbanner flex justify-around items-center   text-base cursor-pointer">
          {BannerData.map((data) => (
            <li
              key={data.title}
              className="hove text-black"
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

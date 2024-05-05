import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./HomeNavbar.css";
import { BsSunFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { WiMoonAltWaningCrescent2 } from "react-icons/wi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LogoImg from "@/assets/images/lB-logo.png";
import Image from "next/image";
import SearchBar from "./components/searchbar";
import Dropdown from "./components/Dropdown";
import BannerData from "@/data/BannerData";
import NotificationIcon from "./components/notificationdropdown/NotificationIcon";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Modal } from "antd";
import HamburgerMenu from "./components/hamBurgerMenu/hamburgerMenu";
import SlidingThumbnail from "./components/TodaysDeals/components/SlidingThumbnail";

interface HomeNavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const HomeNavbar: React.FC<HomeNavbarProps> = ({
  isDarkMode,
  toggleDarkMode,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [replaceDropdown, setReplaceDropdown] = useState(false);
  const [isSliderThumbnail, setIsSliderThumbnail] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowSearchBar(window.innerWidth > 599);
      setIsSmallScreen(window.innerWidth <= 768);
      setReplaceDropdown(window.innerWidth <= 768);
      setIsSliderThumbnail(window.innerWidth <= 768);
    };

    handleResize(); // Check window size on initial render

    const resizeListener = () => {
      handleResize();
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLinks = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className={`bg-${isDarkMode ? "black" : "white"} `}>
      <nav className="navbar w-full">
        <div className="container w-full ">
          <>{replaceDropdown ? <HamburgerMenu /> : <Dropdown />}</>
          <div className="logo">
            <Image src={LogoImg} alt="logo" priority={true} />
          </div>
          {showSearchBar && <SearchBar />}

          <div
            className={`menu flex justify-around items-center gap-4  ${
              showMenu ? "show" : ""
            }`}
          >
            <span className="notification">
              <NotificationIcon />
            </span>
            <span
              className="change-country"
              title="Change Country"
              onClick={showModal}
            >
              <span className="fi fi-cm" style={{ height: 16, width: 16 }} />
            </span>
            <Modal
              className="Modal-container"
              title="COUNTRIES & REGIONS"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <label className="select-text">
                Please select a country / region to shop:
              </label>
              <div className="selectCountries-content">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <span
                      className="fi fi-cm"
                      style={{ height: 16, width: 16 }}
                    />
                    <p className="name">Cameroon</p>
                  </div>
                  <input type="radio" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <span
                      className="fi fi-ci"
                      style={{ height: 16, width: 16 }}
                    />
                    <p className="name">Ivory Coast</p>
                  </div>
                  <input type="radio" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <span
                      className="fi fi-gh"
                      style={{ height: 16, width: 16 }}
                    />
                    <p className="name">Ghana</p>
                  </div>
                  <input type="radio" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <span
                      className="fi fi-za"
                      style={{ height: 16, width: 16 }}
                    />
                    <p className="name">South Africa</p>
                  </div>
                  <input type="radio" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <span
                      className="fi fi-eg"
                      style={{ height: 16, width: 16 }}
                    />
                    <p className="name">Egypt</p>
                  </div>
                  <input type="radio" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <span
                      className="fi fi-rw"
                      style={{ height: 16, width: 16 }}
                    />
                    <p className="name">Rwanda</p>
                  </div>
                  <input type="radio" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <span
                      className="fi fi-sl"
                      style={{ height: 16, width: 16 }}
                    />
                    <p className="name">Sierra Leone</p>
                  </div>
                  <input type="radio" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <span
                      className="fi fi-tg"
                      style={{ height: 16, width: 16 }}
                    />
                    <p className="name">Togo</p>
                  </div>
                  <input type="radio" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <span
                      className="fi fi-ke"
                      style={{ height: 16, width: 16 }}
                    />
                    <p className="name">Kenya</p>
                  </div>
                  <input type="radio" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <span
                      className="fi fi-ng"
                      style={{ height: 16, width: 16 }}
                    />
                    <p className="name">Nigeria</p>
                  </div>
                  <input type="radio" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <span
                      className="fi fi-tz"
                      style={{ height: 16, width: 16 }}
                    />
                    <p className="name">Tanzania</p>
                  </div>
                  <input type="radio" />
                </div>
              </div>
            </Modal>
            <div className="menu flex justify-around items-center gap-4">
              <>
                {isSmallScreen ? (
                  <FaRegUser className="text-2xl" />
                ) : (
                  <a href="#" className="flex">
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
              className="top-4 right-4 p-2 rounded-full bg-gray-300 dark:bg-gray-800 text-gray-600 dark:text-gray-200"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <BsSunFill /> : <WiMoonAltWaningCrescent2 />}
            </button>
          </div>
        </div>
      </nav>
      <div className="banner flex justify-center items-center">
        <>
          {isSliderThumbnail ? (
            <SlidingThumbnail />
          ) : (
            <ul className="innerbanner flex justify-around items-center text-base cursor-pointer">
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
          )}
        </>
      </div>
    </div>
  );
};

export default HomeNavbar;

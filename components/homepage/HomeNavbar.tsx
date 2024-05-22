import React, { useEffect, useRef, useState } from "react";
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

const Countries = [
  { name: "Cameroon", icon: "fi fi-cm" },
  { name: "Côte d'Ivoire", icon: "fi fi-ci" },
  { name: "Ghana", icon: "fi fi-gh" },
  { name: "South Africa", icon: "fi fi-za" },
  { name: "Egypt", icon: "fi fi-eg" },
  { name: "Rwanda", icon: "fi fi-rw" },
  { name: "Sierra Leone", icon: "fi fi-sl" },
  { name: "Togo", icon: "fi fi-tg" },
  { name: "Kenya", icon: "fi fi-ke" },
  { name: "Nigeria", icon: "fi fi-ng" },
  { name: "Tanzania", icon: "fi fi-tz" },
  { name: "Guinea-Bissau", icon: "fi fi-gw" },
  { name: "Mali", icon: "fi fi-ml" },
  { name: "Seychelles", icon: "fi fi-sc" },
  { name: "Mozambique", icon: "fi fi-mz" },
  { name: "Central African Republic", icon: "fi fi-cf" },
  { name: "Cabo Verde", icon: "fi fi-cv" },
  { name: "Zimbabwe", icon: "fi fi-zw" },
  { name: "Angola", icon: "fi fi-ao" },
  { name: "Madagascar", icon: "fi fi-mg" },
  { name: "Botswana", icon: "fi fi-bw" },
];

const HomeNavbar: React.FC<HomeNavbarProps> = ({
  isDarkMode,
  toggleDarkMode,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectCountryIndex, setSelectCountryIndex] = useState<number | null>(
    null
  );
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [replaceDropdown, setReplaceDropdown] = useState(false);
  const [isSliderThumbnail, setIsSliderThumbnail] = useState(false);
  const radioRefs = useRef<Array<HTMLInputElement | null>>(
    Array(Countries.length).fill(null)
  );

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

  const handleRadioSelection = (index: number) => {
    if (radioRefs.current[index] !== null) {
      radioRefs.current[index]!.checked = true;
      setSelectCountryIndex(index);
    }
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
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              okButtonProps={{
                style: { display: "none" },
              }}
              cancelButtonProps={{
                style: { display: "none" },
              }}
            >
              <div style={{ margin: "10px 15px 20px 15px" }}>
                <h1 className="title-text">Countries & Regions</h1>
                <p className="select-text">
                  Please select a country / region to shop:
                </p>
                <div className="selectCountries-content">
                  {Countries.map((country, index) => (
                    <div
                      key={index}
                      className={`selectCountries-radio ${
                        selectCountryIndex === index ? "selected" : " "
                      }`}
                      onClick={() => handleRadioSelection(index)}
                    >
                      <div className="flex gap-1 items-center">
                        <span
                          className={country.icon}
                          style={{ height: 16, width: 16 }}
                        />
                        <p className="name">{country.name}</p>
                      </div>
                      <label className="radio-button">
                        <input
                          type="radio"
                          name="Radio"
                          ref={(el) => (radioRefs.current[index] = el)}
                        />
                        <span className="radio-mark"></span>
                      </label>
                    </div>
                  ))}
                </div>
                <hr />
                <div className="flex justify-center mb-3 mt-4">
                  <button className="save-button">Save Preferences</button>
                </div>
                <p className="link-text">
                  International Shopping &amp; Shipping,{" "}
                  <a
                    href="#"
                    className="underline hover:bg-gray-200 hover:text-blue-700"
                    title="go to LB-Tronz Global site"
                  >
                    LB-Tronz Global
                  </a>
                  .
                </p>
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
                <span>Orders</span>
              </a>
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

"use client";
import React, { useEffect, useState } from "react";
import HomeNavbar from "@/components/homepage/HomeNavbar";
import "primeflex/primeflex.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import ParentContainer from "@/components/homepage/components/parentcontainer/ParentContainer";
import RightSidebar from "@/components/homepage/components/RigthSidebar/RightSidebar";
import BottomCards from "@/components/homepage/components/AutoSlider/bottomCards/bottomCards";
import TodaysDeals from "@/components/homepage/components/TodaysDeals/TodaysDeals";
import Welcomedeals from "@/components/homepage/components/welcomeDeals/Welcomedeals";
import Categories from "@/components/homepage/components/categories/categories";
import Footer from "@/components/homepage/components/Footer";

const Page: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const prefersDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkTheme);
    document.documentElement.classList.add(prefersDarkTheme ? "dark" : "light");
    setIsClient(true);
  }, []);

  const handleToggle = (): void => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <main
      className={`w-full bg-red-400 ${isDarkMode ? "bg-black" : "bg-white"}`}
    >
      <button
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-300 dark:bg-gray-800 text-gray-600 dark:text-gray-200"
        onClick={handleToggle}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <HomeNavbar isDarkMode={isDarkMode} toggleDarkMode={handleToggle} />
      <div className="slide__container w-[95%] m-auto flex   ">
        <RightSidebar />
        <ParentContainer />
      </div>
      <div className="main__parent w-[100vw] flex items-center flex-col">
        <div className="cards__container w-[90%] flex justify-space items-center gap-5 ">
          <BottomCards />
        </div>
        

        <TodaysDeals />
        <div className="container w-full  flex items-center justify-center">
        <div className="w-[90%] container flex-col  flex ">
          <Welcomedeals />
          <Categories />
        </div>
      </div>
      </div>
    <Footer />
     
      <h1>{isClient ? "This is never prerendered" : "Prerendered"}</h1>
    </main>
  );
};

export default Page;

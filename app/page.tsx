
"use client";
import React, { useEffect, useState } from "react";
import HomeNavbar from "@/components/homepage/HomeNavbar";


const Page: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const prefersDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkTheme);
    document.documentElement.classList.add(prefersDarkTheme ? "dark" : "light");
  }, []);

  const handleToggle = (): void => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
   
      <main
        className={`w-full h-[150vh] ${isDarkMode ? "bg-black" : "bg-white"}`}
      >
        <button
          className="fixed top-4 right-4 p-2 rounded-full bg-gray-300 dark:bg-gray-800 text-gray-600 dark:text-gray-200"
          onClick={handleToggle}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <HomeNavbar isDarkMode={isDarkMode} toggleDarkMode={handleToggle} />
      </main>
 
  );
};

export default Page;

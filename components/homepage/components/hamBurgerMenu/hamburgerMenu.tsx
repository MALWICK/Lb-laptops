import React, { useRef, useState, useEffect } from "react";

const hamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (url: string) => {
    setIsOpen(false);
    // Redirect to the selected page
    window.location.href = url;
  };

  const pageLinks = [
    { title: "Today's Best Deals", url: "/todaysBestDeals" },
    { title: "Flash Deals", url: "/flashDeals" },
    { title: "Build Your Own Custom Pc", url: "/customizepc" },
    { title: "Gamer Pc Finder", url: "/findGamerpc" },
    { title: "Best Sellers", url: "/bestSellers" },
    { title: "Discounted Deals", url: "/discountdeals" },
  ];

  const AllProductsLinks = [
    { title: "Laptops", url: "/laptops" },
    { title: "Gaming PC", url: "/gamingpc" },
    { title: "Mobile Phones & Accesories", url: "/mobilePhones&Accesories" },
    { title: "Tabletts", url: "/tabletts" },
    { title: "SmartWatches", url: "/smartWatches" },
    { title: "components & Storage", url: "components&storage" },
    { title: "Computer Accessories", url: "/computerAccessories" },
    { title: "Appliances", url: "/appliances" },
    { title: "Tv & Home Theater ", url: "/tvhomeTheater" },
    { title: "Gaming & VR", url: "/gamingvr" },
    { title: "Smart Home & Security", url: "/smartHome" },
    { title: "Office Solutions", url: "/officeSolution" },
    { title: "Software & Services", url: "/softwareServices" },
    { title: "Cameras", url: "/cameras" },
    { title: "Toys & Drones", url: "/toysdrones" },
    { title: "Speakers", url: "/speakers" },
    { title: "Refurbished Phones & Laptops", url: "/refurbishedPhonesLaptops" },
  ];

  const MobilePhones = [
    { title: "Apple iPhone 11 Pro Max", url: "/iphone11promax" },
    { title: "Apple iPhone 11 Pro", url: "/iphone11pro" },
    { title: "Apple iPhone 11", url: "/iphone11" },
    { title: "Apple iPhone 11 Mini", url: "/iphone11mini" },
  ];

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <i className="bi bi-list"></i>
      </button>

      {isOpen && (
        <div className="w-[100vw] absolute  h-[436px] overflow-y-scroll flex flex-col  z-[1000] left-[-33px] bg-red-700">
          <div className="">
            <ul className="">
              {pageLinks.map((link) => (
                <li key={link.title} onClick={() => handleItemClick(link.url)}>
                  {link.title}
                </li>
              ))}

              <div className="">
                <h2 className="text-xl font-extrabold underline">
                  All Products
                </h2>
                <ul className="">
                  {AllProductsLinks.map((productlink) => (
                    <li
                      key={productlink.title}
                      onClick={() => handleItemClick(productlink.url)}
                    >
                      {productlink.title}
                    </li>
                  ))}
                </ul>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default hamburgerMenu;

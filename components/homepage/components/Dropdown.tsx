import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./Dropdown.css";

const Dropdown = () => {
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
    { title: "PC", url: "/pc" },
    { title: "Laptops", url: "/laptops" },
    { title: "CPUs", url: "/cpus" },
    { title: "RAMs", url: "/rams" },
  ];

  const AllProductsLinks = [
    { title: "components& Storage", url: "components&storage"},
    { title: "Computer System", url: "/computerSystem"},
    { title: "Computer Peripherals", url: "/computerperipherals"},
    { title: "Appliances", url: "/appliances" },
    { title: "Tv & Home Theater ", url: "/tv&homeTheater"},
    { title: "Gaming & VR", url: "/gaming&vr" },
    { title: "Smart Home & Security", url: "/smartHome" },
    { title: "Office Solutions", url: "/officeSolution" },
    { title: "Software & Services", url: "/softwareServices" },
    { title: "Automotive & Tools", url: "/automotiveTools" },
    { title: "Appliances", url: "/homeOutdoors" },
    { title: "Health & Sports", url: "/healthSports" },
    { title: "Toys & Drones", url: "/toys&drones" },
  ];

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <i className="bi bi-list"></i>
      </button>
      {isOpen && (
        <div className="dropdown-menu ">
          <div className="firstcolumn">
            <ul className="dropdown-menus">
              {pageLinks.map((link) => (
                <li key={link.title} onClick={() => handleItemClick(link.url)}>
                  {link.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="secondcolumn">
            <ul className="dropdown-menus">
              {AllProductsLinks.map((productlink) => (
                <li key={productlink.title} onClick={() => handleItemClick(productlink.url)}>
                  {productlink.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

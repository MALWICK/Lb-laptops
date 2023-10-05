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

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <i className="bi bi-list"></i>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {pageLinks.map((link) => (
            <li key={link.title} onClick={() => handleItemClick(link.url)}>
              {link.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
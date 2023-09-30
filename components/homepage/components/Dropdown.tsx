import React, { useState, useEffect, useRef } from "react";
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

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
      <i className="bi bi-list"></i>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={handleItemClick}>Item 1</li>
          <li onClick={handleItemClick}>Item 2</li>
          <li onClick={handleItemClick}>Item 3</li>
          <li onClick={handleItemClick}>Item 4</li>
          <li onClick={handleItemClick}>Item 5</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

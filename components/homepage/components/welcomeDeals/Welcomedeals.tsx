import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Cards from "./components/cards";

import "./style.css"

const Welcomedeals = () => {
  return (
    <div className="flex items-center justify-center w-full ">
     <div className="innercontainer w-[100%] flex items-center p-4 h-[338px] rounded-3xl gap-1 bg-orange-400 ">
        <a
          href="#"
          className="w-[441px] pt-5  pr-5 pb-5 pl-5 h-[304px] relative bg-orange-400"
        >
          <img
            className="new-user--iconImg--hPKNeKH absolute w-[146px] h-[140px] left-[306px] rounded-2xl top-[-11px] object-contain"
            src="https://upload.shop-bit.com/header/brand_background/1708421400582.png"
          />
          <div className="new-user--title--1-OZSf text-white font-medium  max-w-[299px]  w-full text-4xl  leading-tight display-flex overflow-hidden text-ellipsis">
            New shopper exclusive
          </div>
          <div className="new-user--subtitle--lFl2IdN text-2xl max-w-[320px] leading-tight display-flex overflow-hidden text-ellipsis text-white ">
            First order only
          </div>
          <div className="new-user--card--2l9bT00 cardss">
            <div className="new-user--cardTitle--1vaqt9G small-conts">Up to 70% off</div>
            <div
              className="new-user--cardSubtitle--2YvzJT3 font-medium"
            
            >
              Welcome deal
            </div>
            <div
              className="new-user--cardButton--mX3jj97 absolute right-[24px] lft-btn"
              
            >
              <FaArrowRightLong  />
            </div>
          </div>
        </a>
        <div className=" flex items-center justify-center">
        <Cards />

        </div>
       
      </div>
    </div>
  );
};

export default Welcomedeals;

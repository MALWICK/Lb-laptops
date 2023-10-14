"use client";
import React from "react";
import "./parentCOntainer.css";
import Slideshow from "../AutoSlider/Slideshow";
import RightSidebar from "../RigthSidebar/RightSidebar";


const images = [
  'https://promotions.newegg.com/nepro/23-1522/1920x660.jpg',
  'https://promotions.newegg.com/mobile/referral/banner/23-1519/1920x660.jpg',
  'https://promotions.newegg.com/msi/23-1311/1920x660.jpg',
  "https://promotions.newegg.com/bequiet/23-1468/1920x660.jpg",
  "https://promotions.newegg.com/gigabyte/23-1509/1920x660.jpg",
  "https://promotions.newegg.com/rosewill/23-1440/1920x660.jpg",
  "https://sc02.alicdn.com/kf/H3c9c37f5d15044a2b27709dcd96b3811q.jpg",
  "https://sc02.alicdn.com/kf/Haa646e0ed54d4852bfc96e44e34b93d6F.jpg",
  "https://sc02.alicdn.com/kf/Hed51c95586184ef89ece2a3a0da66019d.jpg"
];


function parentcontainer() {
  return (
    <div className="w-full parent bg-red flex items-center justify-center flex-col ">
      <div className="parentinner bg-red flex items-center justify-center flex-col ">
        <div className="swipe-container flex items-center justify-between">
          <RightSidebar />
          <Slideshow images={images}  />
        </div>
      </div>
    </div>
  );
}

export default parentcontainer;

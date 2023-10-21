"use client";
import React from "react";
import "./parentCOntainer.css";
import Slideshow from "../AutoSlider/Slideshow";
import RightSidebar from "../RigthSidebar/RightSidebar";


const images = [
  'https://promotions.newegg.com/nepro/23-1522/1920x660.jpg',
  'https://promotions.newegg.com/mobile/referral/banner/23-1519/1920x660.jpg',
  "https://promotions.newegg.com/nepro/23-0612/1920x660.jpg",
  "https://promotions.newegg.com/msi/23-1531/1920x660.jpg",
  "https://promotions.newegg.com/abs/23-1579/1920x660.jpg",
  "https://promotions.newegg.com/seagate/23-1548/1920x660.jpg",
  "https://promotions.newegg.com/intel/23-1527/banner/1920x660.jpg",
  'https://promotions.newegg.com/msi/23-1311/1920x660.jpg',
  "https://promotions.newegg.com/bequiet/23-1468/1920x660.jpg",
  "https://promotions.newegg.com/gigabyte/23-1509/1920x660.jpg",
  "https://promotions.newegg.com/rosewill/23-1440/1920x660.jpg",
  "https://sc02.alicdn.com/kf/H3c9c37f5d15044a2b27709dcd96b3811q.jpg",
  "https://sc02.alicdn.com/kf/Haa646e0ed54d4852bfc96e44e34b93d6F.jpg",
  "https://sc02.alicdn.com/kf/Hed51c95586184ef89ece2a3a0da66019d.jpg",
  "https://promotions.newegg.com/marketplace/23-1508/1920x660.jpg",
  "https://sc02.alicdn.com/kf/H3180e119228a465e99e208ade10b83f4Y.jpg",
  "https://s.alicdn.com/@sc02/kf/H3e3b35770a9b469490bc3910e8e01987H.jpg_q80.jpg",
  "https://sc02.alicdn.com/kf/H73060d93d2984bf3ad6a33f6ba04999en.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/Category_Storefronts/1367476_us_he_handpicked_laptops_1500x440.jpg",
  "https://s.alicdn.com/@sc02/kf/H14cb730c2f9c401cab08114c8ec05aedJ.jpg_q80.jpg",
  "https://promotions.newegg.com/nepro/23-1538/1920x660.jpg",
  "https://promotions.newegg.com/nepro/23-1540/1920x660.jpg",
  "https://promotions.newegg.com/corsair/23-1499/1920x660.jpg",
  "https://promotions.newegg.com/nepro/23-1164/1920x660.jpg"
  


];


function parentcontainer() {
  return (
    <div className="w-full parent bg-red flex items-center justify-center flex-col ">
      <div className="parentinner bg-red flex items-center justify-center flex-col ">
        <div className="swipe-container flex w-[100%]">
          <RightSidebar />
          <Slideshow images={images}  />
        </div>
      </div>
    </div>
  );
}

export default parentcontainer;

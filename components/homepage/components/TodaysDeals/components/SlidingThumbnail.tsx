import React, { useState, useEffect } from 'react';
import BannerItem from "@/data/BannerData";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

 const SlidingThumbnail = () => {
    const handleLinks = (url: string) => {
        window.location.href = url;
      };

      const [displayItems, setDisplayItems] = useState(BannerItem.slice(0, 3));

      useEffect(() => {
        const interval = setInterval(() => {
        
          const currentIndex = BannerItem.indexOf(displayItems[displayItems.length - 1]);
          const nextIndex = (currentIndex + 1) % BannerItem.length;
          const newDisplayItems = BannerItem.slice(nextIndex, nextIndex + 3);
          setDisplayItems(newDisplayItems);
        }, 7000); 
    
        return () => {
          clearInterval(interval);
        };
      }, [displayItems]);
      
  return (
    <div className="banner flex justify-center items-center  w-full">
    <ul className="innerbanner flex justify-around items-center   text-base cursor-pointer">
    {displayItems.map((item, index) => (
        <div key={index}>
          <a onClick={() => handleLinks(item.url)} href={item.url}>{item.title}</a>
        </div>
      ))}
    </ul>
  </div>
  )
}

export default SlidingThumbnail;
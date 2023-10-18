"use client"
import { useEffect, useState } from 'react';
import "./Slideshow.css"
import RightSidebar from '../RigthSidebar/RightSidebar';

interface SlideshowProps {
  images: string[];
}
const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleTogglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };
  
  const slideStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
  };
  
  return (
    <div className="slideshow">
      <div className="slide" style={slideStyle}>
      <div className="controls">
        <button className='swiper-button-prev ' onClick={handlePrev}><i className="bi bi-chevron-left"></i></button>
        
        <button onClick={handleTogglePlay}>{isPlaying ? 'Stop' : 'Play'}</button>
        <button className='swiper-button-prev ' onClick={handleNext}><i className="bi bi-chevron-right"></i></button>
      </div>
      </div>
      
    </div>
  );
};

export default Slideshow;
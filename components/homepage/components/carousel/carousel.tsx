import React, { useState } from 'react';
import ProductCard from  "../productcard/productcard";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className={`${
          currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
        }`}
        onClick={goToPrevious}
        disabled={currentIndex === 0}
      >
        Previous
      </button>
      <div className="mx-4">
        <ProductCard
          image={products[currentIndex].image}
          title={products[currentIndex].title}
          description={products[currentIndex].description}
        />
      </div>
      <button
        className={`${
          currentIndex === products.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
        }`}
        onClick={goToNext}
        disabled={currentIndex === products.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default ProductCarousel;
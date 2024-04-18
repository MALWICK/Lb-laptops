import { useRef, useState } from 'react';

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    image: 'product1.jpg',
    title: 'Product 1',
    description: 'Description for Product 1',
  },
  {
    id: 2,
    image: 'product2.jpg',
    title: 'Product 2',
    description: 'Description for Product 2',
  },

  {
      id: 3,
      image: 'product1.jpg',
      title: 'Product 1',
      description: 'Description for Product 1',
    },
    {
      id: 4,
      image: 'product2.jpg',
      title: 'Product 2',
      description: 'Description for Product 2',
    },

    {
      id: 5,
      image: 'product2.jpg',
      title: 'Product 2',
      description: 'Description for Product 2',
    },
    {
      id: 6,
      image: 'product2.jpg',
      title: 'Product 2',
      description: 'Description for Product 2',
    },
    {
      id: 7,
      image: 'product2.jpg',
      title: 'Product 2',
      description: 'Description for Product 2',
    },
    {
      id: 8,
      image: 'product2.jpg',
      title: 'Product 2',
      description: 'Description for Product 2',
    },
    {
      id: 9,
      image: 'product2.jpg',
      title: 'Product 2',
      description: 'Description for Product 2',
    },
    {
      id: 10,
      image: 'product2.jpg',
      title: 'Product 2',
      description: 'Description for Product 2',
    },

    
  // Add more products as needed
];

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {

    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }
    
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);

      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
      }
    }
    
  };

  return (
    <div className="flex items-center justify-center container p-4">
      <button
        className={`p-2 border rounded-md ${
          currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
        onClick={handlePrevious}
        disabled={currentIndex === 0}
      >
        Previous
      </button>
      <div
        className="flex flex-row w-full  space-x-4 overflow-x-auto"
       
        ref={carouselRef}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-md"
            style={{ minWidth: '200px' }}
          >
            <img src={product.image} alt={product.title} className="mb-2" />
            <h3 className="text-lg font-bold">{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <button
               className={`p-2 border rounded-md ${
                currentIndex === products.length - 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              }`}      
        onClick={handleNext}
        disabled={currentIndex === products.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
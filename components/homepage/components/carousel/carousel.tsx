// import { useRef, useState } from 'react';

// interface Product {
//   id: number;
//   image: string;
//   title: string;
//   description: string;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     image: 'product1.jpg',
//     title: 'Product 1',
//     description: 'Description for Product 1',
//   },
//   {
//     id: 2,
//     image: 'product2.jpg',
//     title: 'Product 2',
//     description: 'Description for Product 2',
//   },

//   {
//       id: 3,
//       image: 'product1.jpg',
//       title: 'Product 1',
//       description: 'Description for Product 1',
//     },
//     {
//       id: 4,
//       image: 'product2.jpg',
//       title: 'Product 2',
//       description: 'Description for Product 2',
//     },

//     {
//       id: 5,
//       image: 'product2.jpg',
//       title: 'Product 2',
//       description: 'Description for Product 2',
//     },
//     {
//       id: 6,
//       image: 'product2.jpg',
//       title: 'Product 2',
//       description: 'Description for Product 2',
//     },
//     {
//       id: 7,
//       image: 'product2.jpg',
//       title: 'Product 2',
//       description: 'Description for Product 2',
//     },
//     {
//       id: 8,
//       image: 'product2.jpg',
//       title: 'Product 2',
//       description: 'Description for Product 2',
//     },
//     {
//       id: 9,
//       image: 'product2.jpg',
//       title: 'Product 2',
//       description: 'Description for Product 2',
//     },
//     {
//       id: 10,
//       image: 'product2.jpg',
//       title: 'Product 2',
//       description: 'Description for Product 2',
//     },

    
//   // Add more products as needed
// ];

// const Carousel = () => {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const handleNext = () => {

//     if (currentIndex < products.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//       if (carouselRef.current) {
//         carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
//       }
//     }
    
//   };

//   const handlePrevious = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);

//       if (carouselRef.current) {
//         carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
//       }
//     }
    
//   };

//   return (
//     <div className="flex items-center justify-center container p-4">
//       <button
//         className={`p-2 border rounded-md ${
//           currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
//         }`}
//         onClick={handlePrevious}
//         disabled={currentIndex === 0}
//       >
//         Previous
//       </button>
//       <div
//         className="flex flex-row w-full  space-x-4 overflow-x-auto"
       
//         ref={carouselRef}
//       >
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="p-4 border rounded-md"
//             style={{ minWidth: '200px' }}
//           >
//             <img src={product.image} alt={product.title} className="mb-2" />
//             <h3 className="text-lg font-bold">{product.title}</h3>
//             <p>{product.description}</p>
//           </div>
//         ))}
//       </div>
//       <button
//                className={`p-2 border rounded-md ${
//                 currentIndex === products.length - 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
//               }`}      
//         onClick={handleNext}
//         disabled={currentIndex === products.length - 1}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Carousel;
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../productcard/productcard";
import { productData, responsive } from "@/data/Products";
import { FaCaretRight } from "react-icons/fa6";

function carousel() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="mt-[4rem]	App p-2">
      <div className="title-hoder w-full p-4 flex items-center  gap-3">
        <h1 className="text-2xl	 text-blue-950	font-bold">New at Newegg – New Arrivals</h1>
        <span className='flex items-center justify-normal gap-0 text-sm text-slate-500 hover:underline cursor-pointer'>See More <FaCaretRight/></span>      </div>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}

export default carousel
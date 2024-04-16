import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img src={image} alt={title} className="w-full h-40 object-cover mb-4" />
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
"use client";
import React from "react";

interface cardDetails {
  productImage: string;
  id: number;
  backgroundImage: string;
  newUserDiscountPercentage: string;
  newUserPrice: string;
  reductionPrice: string;
  description: string;
}

const cards = () => {
  const Data: cardDetails[] = [
    {
      productImage:
        "https://img4.dhresource.com/webp/m/300x300/f3/albu/km/y/30/f7ee4297-b6db-497d-af97-c0088d53d778.jpg",
      id: 1,
      backgroundImage:
        "https://ae01.alicdn.com/kf/S78fc35f117b0418fa0e1ac4befb39eaaH/216x184.png_.webp",
      newUserDiscountPercentage: "-57%",
      newUserPrice: "0.77",
      reductionPrice: "$1.88",
      description: "Plaque de Refroidissement pour Téléphone Portable, Compatible avec Magnétique/réinitialisation Arrière Religieux, Mini Refroidisseur Universel de Jeu, Élargir la Surface, Autocollant Rayonnant, 1 Pièce"
    },
    {
      productImage:
        "https://img4.dhresource.com/webp/m/300x300/f3/albu/km/y/30/f7ee4297-b6db-497d-af97-c0088d53d778.jpg",
      id: 1,
      backgroundImage:
        "https://ae01.alicdn.com/kf/S78fc35f117b0418fa0e1ac4befb39eaaH/216x184.png_.webp",
      newUserDiscountPercentage: "-57%",
      newUserPrice: "0.77",
      reductionPrice: "$1.88",
      description: "Plaque de Refroidissement pour Téléphone Portable, Compatible avec Magnétique/réinitialisation Arrière Religieux, Mini Refroidisseur Universel de Jeu, Élargir la Surface, Autocollant Rayonnant, 1 Pièce"
    },
    {
      productImage:
        "https://img4.dhresource.com/webp/m/300x300/f3/albu/km/y/30/f7ee4297-b6db-497d-af97-c0088d53d778.jpg",
      id: 1,
      backgroundImage:
        "https://ae01.alicdn.com/kf/S78fc35f117b0418fa0e1ac4befb39eaaH/216x184.png_.webp",
      newUserDiscountPercentage: "-57%",
      newUserPrice: "0.77",
      reductionPrice: "$1.88",
      description: "Plaque de Refroidissement pour Téléphone Portable, Compatible avec Magnétique/réinitialisation Arrière Religieux, Mini Refroidisseur Universel de Jeu, Élargir la Surface, Autocollant Rayonnant, 1 Pièce"
    },
    {
      productImage:
        "https://img4.dhresource.com/webp/m/300x300/f3/albu/km/y/30/f7ee4297-b6db-497d-af97-c0088d53d778.jpg",
      id: 1,
      backgroundImage:
        "https://ae01.alicdn.com/kf/S78fc35f117b0418fa0e1ac4befb39eaaH/216x184.png_.webp",
      newUserDiscountPercentage: "-57%",
      newUserPrice: "0.77",
      reductionPrice: "$1.88",
      description: "Plaque de Refroidissement pour Téléphone Portable, Compatible avec Magnétique/réinitialisation Arrière Religieux, Mini Refroidisseur Universel de Jeu, Élargir la Surface, Autocollant Rayonnant, 1 Pièce"
    },
    
  ];
  return (
    <div className="flex items-center justify-center gap-1">
      {Data.map((cardItem,id) => (
        <a key={id} className="w-[228px] h-[298px] mr-4 ml-4 bg-white rounded-md p-2 flex flex-col  no-underline shadow-slate-50 relative cursor-pointer">
          <div className="w-[96%] h-[198px] rounded-md relative overflow-hidden filter contrast-90 bg-white">
            <img
              src={cardItem.productImage}
              className=" block w-full h-full"
              alt="shoe"
            />
          </div>
          <div className="w-[40px] h-[40px] bg-red-600 rounded-full justify-center text-white absolute right-0 bottom-[-12] z-3 inline-flex items-center" 
           style={{ backgroundImage: `url(${cardItem.backgroundImage})` }}
          >
            <span className=""> {cardItem.newUserDiscountPercentage}</span>
            
          </div>
          <div className="desc w-[96%]">
            <span className="text-base w-full text-black h-18 flex overflow-hidden truncate flex-col line-clamp-1">{cardItem.description}</span>
          </div>
          <div className="flex mt-2 gap-2">
            <span className="text-base font-medium text-black">{cardItem.newUserPrice}</span>
            <span className=" line-through text-base font-medium text-gray-500 ">{cardItem.reductionPrice}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default cards;

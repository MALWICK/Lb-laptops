"use client";
import React from "react";

interface cardDetails {
  productImage: string;
  id: number;
  backgroundImage: string;
  newUserDiscountPercentage: string;
  newUserPrice: string;
  reductionPrice: string;
}

const cards = () => {
  const Data: cardDetails[] = [
    {
      productImage:
        "https://img4.dhresource.com/webp/m/300x300/f3/albu/km/y/30/f7ee4297-b6db-497d-af97-c0088d53d778.jpg",
      id: 1,
      backgroundImage:
        "https://ae01.alicdn.com/kf/S77960096cb434574b49119c1a3ada819d/101x36.png",
      newUserDiscountPercentage: "-57%",
      newUserPrice: "0.77",
      reductionPrice: "$1.88",
    },
  ];
  return (
    <div className="">
      {Data.map((cardItem,id) => (
        <a key={id} className="w-[214px] h-[298px] mr-4 ml-4 bg-white rounded-md p-2 flex flex-col  no-underline shadow-slate-50">
          <div className="w-[198px] h-[198px] rounded-md relative overflow-hidden filter contrast-90 bg-white">
            <img
              src={cardItem.productImage}
              className=" block w-full h-full"
              alt="shoe"
            />
          </div>
          <div className="newuser-discount mt-2 w-[100px] h-[36px] flex items-center justify-end bg-no-repeat text-xl font-semibold leading-36 p-2 mt-30 mr-4 bg-contain bg-center object-contain text-white pr-3 pl-9" 
           style={{ backgroundImage: `url(${cardItem.backgroundImage})` }}
          >
            {cardItem.newUserDiscountPercentage}
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

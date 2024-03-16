"use client";
import React from "react";
import "./deals.css"


interface DealsCard {
  id: number;
  imageUrl: string;
  rating: {
    star: number;
    numberOfStars: number;
  };
  href: {
    link: string;
    title: string;
  };
  price: {
    price: string;
    rebate: string;
    duration?: string;
    dueDate?: string;
    benefit?: string;
    rebatePercentage?: string;
  };
  bonusItems?: string;
  shipping?: string;
  backgroundImage?: string;
}

const cards: DealsCard[] = [
  {
    id: 1,
    imageUrl: " https://c1.neweggimages.com/nobgproductcompressall300/ACCUS210811ieahq.jpg",
    rating: { star: 4, numberOfStars: 150 },
    href: {
      link: "alibaba.com",
      title:
        "SABRENT [6-Pack 22AWG Premium 6ft USB-C to USB A 2.0 Sync and Charge Cables [Black] (CB-C6X6)",
    },
    price: {
      price: "$200",
      rebate: "$150",
      duration: "9hr",
      dueDate: "2017-march",
      benefit: "",
      rebatePercentage: "",
    },
    bonusItems: "https://c1.neweggimages.com/nobgproductcompressall300/AME8S22021111NLEYE4.jpg",
    shipping: "",
    backgroundImage: "https://c1.neweggimages.com/WebResource/Themes/Nest/images/bgs/group-buy-bg-2h.png",
  },
  {
    id: 2,
    imageUrl: "https://c1.neweggimages.com/productimage/nb300/11-353-205-V13.jpg",
    rating: { star: 4, numberOfStars: 150 },
    href: {
      link: "alibaba.com",
      title:
        "DIYPC DIY-S08-G Green USB 3.0 Steel / Tempered Glass ATX Mid Tower Computer Case, 1 x 120mm Fan x Rear (Pre-Installed)",
    },
    price: {
      price: "$38",
      rebatePercentage: "Save 35%",
      rebate: "$59.9",
      benefit: "",
    },
    shipping: "FREE SHIPPING",
  },
  {
    id: 3,
    imageUrl: "https://c1.neweggimages.com/productimage/nb300/32-732-182-05.png",
    rating: { star: 4, numberOfStars: 150 },
    href: {
      link: "alibaba.com",
      title: "H&R Block 2023 Premium Tax Software - PC/Mac",
    },
    price: {
      price: "$380",
      rebatePercentage: "Save 15%",
      rebate: "$59.9",
      benefit: "$38 Off W/ Code",
    },
    shipping: "",
  },
  {
    id: 4,
    imageUrl: "https://c1.neweggimages.com/productimage/nb300/11-353-205-V13.jpg",
    rating: { star: 4, numberOfStars: 150 },
    href: {
      link: "alibaba.com",
      title: "Xbox 3 Month Ultimate Game Pass - US Registered Account",
    },
    price: {
      price: "$38",
      rebatePercentage: "Save 35%",
      rebate: "$59.9",
    },
    shipping: "FREE SHIPPING",
  },
  {
    id: 5,
    imageUrl: "https://c1.neweggimages.com/productimage/nb300/11-353-205-V13.jpg",
    rating: { star: 4, numberOfStars: 150 },
    href: {
      link: "alibaba.com",
      title:
        "DIYPC DIY-S08-G Green USB 3.0 Steel / Tempered Glass ATX Mid Tower Computer Case, 1 x 120mm Fan x Rear (Pre-Installed)",
    },
    price: {
      price: "$38",
      rebatePercentage: "Save 35%",
      rebate: "$59.9",
    },
    shipping: "FREE SHIPPING",
  },
];

const DealsCard: React.FC = () => {
  const firstDivCards = cards.filter((card) => card.id === 1);
  const secondDivCards = cards.filter((card) => card.id !== 1);
  console.log(firstDivCards, "ssoisosoioisoiiso")


  return (
    <div className="flex container h-[100%] w-[100%] bg-red-800 p-0">
      {firstDivCards.map((card) =>
        <div className="rounded-md rond bg-cover  bg-slate-800 w-[47%]"  >
          <div className="container holder  h-[30.4rem] relative" style={{ backgroundImage: `url(${card.backgroundImage})` }} key={card.id}>
            <div className="fighter-compare-items flex">
            <div className=" fighter-compare-item-l absolute left-2 top-0 mt-2 transform perspective-[18px] scale-[1.04, 1.14] rotate-x-[358deg] origin-top-left">
              <div className="fighter-product p-1 h-full relative z-10 text-black	">
                <div className="fighter-brandtext-sm leading-5 relative -right-2 font-medium mb-1 whitespace-nowrap ">Current Price</div>
                <div className="goods-price is-horizontal mt-0"><div className="goods-price-was text-xl leading-7 -right-2 relative">$21.99</div></div>
                <div className="fighter-compare-circle w-[32% text-black	 h-9 rounded-full border-2 border-white box-border absolute right-[-1.8rem] top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-yellow-300 to-yellow-500 text-base font-bold  flex items-center justify-center text-shadow-xs" >
                  VS</div>
              </div>
            </div>
            <div className="fighter-compare-item-r">
            <div className="fighter-product">
              <div className="fighter-brand">Group Buy Price</div>
              <div className="goods-price is-horizontal">
              <div className="goods-price-current">
                <span className="goods-price-symbol">$</span>
                <span className="goods-price-value"><strong>14</strong><sup>.29</sup></span></div>
              </div>
            </div>
            </div>
            
            </div>
          
          </div>
        </div>
      )}

      <div className="flex container w-[58%] flex-wrap gap-[8px]">
        {secondDivCards.map((card) => (
          <div key={card.id} className="flex justify-center items-center rounded-md bg-slate-700 w-[48%] h-[240px] bg-orange-900">
            {/* Render the card content */}
          </div>
        ))}
      </div>
    </div>
  );

};

export default DealsCard;

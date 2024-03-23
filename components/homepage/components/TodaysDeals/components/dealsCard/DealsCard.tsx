"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./deals.css";

interface DealsCard {
  id: number;
  imageUrl?: string;
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
  hoverImageUrl: {
    imageUrl: string[];
    alt: string;
  }[];
  alt?: string;
}

const cards: DealsCard[] = [

  {
    id: 2,
    imageUrl:
      "https://c1.neweggimages.com/productimage/nb300/11-353-205-V13.jpg",
    rating: { star: 4, numberOfStars: 150 },
    href: {
      link: "alibaba.com",
      title:
        "DIYPC DIY-S08-G Green USB 3.0 Steel / Tempered Glass ATX Mid Tower Computer Case, 1 x 120mm Fan x Rear (Pre-Installed)",
    },
    price: {
      price: "$3800",
      rebatePercentage: "Save 35%",
      rebate: "$59.9",
      benefit: "Winter deals",
    },
    shipping: "FREE SHIPPING",
    hoverImageUrl: [
      {
        imageUrl:[  "https://c1.neweggimages.com/productimage/nb300/11-353-205-V13.jpg", "https://c1.neweggimages.com/productimage/nb300/19-113-793-03.png","https://c1.neweggimages.com/productimage/nb300/A6PFS2304240F0CRD7D.jpg", "https://c1.neweggimages.com/nobgproductcompressall300/20-215-329-V01.jpg",],
        
        alt: "Hover Image 2-1 Alt Text",
      },
     
    ],
    alt: "jane",
  },
  {
    id: 3,
    imageUrl: "",
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
    shipping: "20% off shipping",
    hoverImageUrl: [
      {
        imageUrl:[ "https://c1.neweggimages.com/productimage/nb300/32-732-182-05.png",],
         
        alt: "Hover Image 2-1 Alt Text",
      },
    ],
  },
  {
    id: 4,
    imageUrl: "",
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
    hoverImageUrl: [
      {
        imageUrl:[     "https://c1.neweggimages.com/productimage/nb300/32-732-182-05.png",],
     
        alt: "Hover Image 2-1 Alt Text",
      },
    ],
  },
  {
    id: 5,
    imageUrl:
      "https://c1.neweggimages.com/productimage/nb300/11-353-205-V13.jpg",
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
    hoverImageUrl: [
      {
        imageUrl:[ "https://c1.neweggimages.com/productimage/nb300/32-732-182-05.png",],
    
        alt: "Hover Image 2-1 Alt Text",
      },
    ],
  },
];

const DealsCard: React.FC = () => {
  const firstDivCards = cards.filter((card) => card.id === 1);
  const secondDivCards = cards.filter((card) => card.id !== 1);
  console.log(firstDivCards, "ssoisosoioisoiiso");

  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  const handleCardHover = (cardId: number | null) => {
    setHoveredCardId(cardId);
  };
 

  return (
    <div className="flex container h-[100%] w-[100%] bg-red-800 p-0">
    

      <div className="flex container w-[58%] flex-wrap gap-[8px]">
        {secondDivCards.map((card) => (
          console.log(card.hoverImageUrl,"ssssssssssssssssssssssssssß"),
          <div
            key={card.id}
            className="flex flex-row-reverse justify-center items-center rounded-md bg-cyan-50 w-[48%] h-[240px] mb-1"
            onMouseEnter={() => handleCardHover(card.id)}
            onMouseLeave={() => handleCardHover(null)}
          >
           <a
              href="https://www.newegg.com/p/2AM-000Z-000B9?Item=2AM-000Z-000B9&amp;cm_sp=Homepage_SS-_-P1_2AM-000Z-000B9-_-03172024"
              className="goods-img"
              data-quicklink="true"
            >
              {hoveredCardId === card.id ? (
                <img
                  src={card.hoverImageUrl[0].imageUrl[0]}
                  alt={card.hoverImageUrl[0].alt}
                  className="hover-image"
                />
              ) : (
                <img
                  src={card.imageUrl}
                  alt={card.alt}
                  className="default-image"
                />
              )}
            </a>
            <div className="goods-info">
              <div className="goods-branding w-[50%] has-brand-store">
                <a
                  href="https://www.newegg.com/p/2AM-000Z-000B9?Item=2AM-000Z-000B9&amp;cm_sp=Homepage_SS-_-P1_2AM-000Z-000B9-_-03172024#IsFeedbackTab"
                  className="goods-rating flex items-center gap-2 w-full"
                  title="Rating + 4.8"
                >
                  {Array.from({ length: card.rating.star }).map((_, index) => (
                    <FaStar className="text-yellow-400" key={index} />
                  ))}
                  <span className="goods-rating-num font-s text-gray">
                    ({card.rating.numberOfStars})
                  </span>
                </a>
                <a
                  href={card.href.link}
                  className="goods-title font-l"
                  title="View Details"
                  data-quicklink="true"
                >
                  {card.href.title}
                </a>
                <div className="savePrice w-full flex  flex-col">
                  <div className="saving-cont flex items-center gap-2 leading-3	">
                    <span className="savebtn">
                      {card.price.rebatePercentage}
                    </span>
                    <span className="savebtn bg-orange-950 p-2 rounded-lg text-white">
                      {card.price.rebate}
                    </span>
                  </div>
                  <div className="originalPrice w-full flex flex-col gap-2 leading-3">
                    <span className="reduction">{card.price.price}</span>
                    <span className="flex  rounded-tl-[122px] rounded-br-[455px] bg-orange-500 p-[0.4rem] w-[8vw] items-center justify-center text-white	">
                      {card.shipping}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsCard;

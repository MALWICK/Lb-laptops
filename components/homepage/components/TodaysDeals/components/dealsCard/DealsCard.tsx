"use client";
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import "./deals.css";
import Image from "next/image";


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
  hoverImageUrl?:object;
}

const cards: DealsCard[] = [
  {
    id: 1,
    imageUrl: " https://c1.neweggimages.com/nobgproductcompressall300/ACCUS210811ieahq.jpg",
    rating: { star: 4, numberOfStars: 150 },
    href: {
      link: "alibaba.com",
      title:
        "Shop Now",
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
    shipping: "20% off shipping",
    backgroundImage: "https://i5.walmartimages.com/dfw/4ff9c6c9-53a0/k2-_6accd1e8-3c29-4ac6-b37e-319856266cf2.v1.jpg",
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
      price: "$3800",
      rebatePercentage: "Save 35%",
      rebate: "$59.9",
      benefit: "Winter deals",
    },
    shipping: "FREE SHIPPING",
    hoverImageUrl: {
      image1: {
        imageUrl: 'path/to/hover-image-2-1.jpg',
        alt: 'Hover Image 2-1 Alt Text',
      },
      image2: {
        imageUrl: 'path/to/hover-image-2-2.jpg',
        alt: 'Hover Image 2-2 Alt Text',
      },
      image3: {
        imageUrl: 'path/to/hover-image-2-3.jpg',
        alt: 'Hover Image 2-3 Alt Text',
      },
      image4: {
        imageUrl: 'path/to/hover-image-2-4.jpg',
        alt: 'Hover Image 2-4 Alt Text',
      },
    },
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
    shipping: "20% off shipping",
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

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };


  return (
    <div className="flex container h-[100%] w-[100%] bg-red-800 p-0">
      {firstDivCards.map((card) =>
        <div className="rounded-md rond bg-cover  bg-slate-800 w-[47%]"  >
          <a href={card.href.link}>
            <div className="container holder bg-cover bg-center h-[30.4rem] relative" style={{ backgroundImage: `url(${card.backgroundImage})` }} key={card.id}>
            <span className="text-black absolute top-5 bg-white hover:bg-slate-700 hover:text-white cursor-pointer focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 hover:bg-orange-500 focus:outline-none dark:focus:ring-blue-800">{card.href.title}</span>
            </div>
          </a>
        </div>
      )}

      <div className="flex container w-[58%] flex-wrap gap-[8px]">
        {secondDivCards.map((card) => (
          <div key={card.id} className="flex flex-row-reverse justify-center items-center rounded-md bg-cyan-50 w-[48%] h-[240px] mb-1">
          
            <a
            href="https://www.newegg.com/p/2AM-000Z-000B9?Item=2AM-000Z-000B9&amp;cm_sp=Homepage_SS-_-P1_2AM-000Z-000B9-_-03172024"
            className="goods-img"
            data-quicklink="true"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={hovered ? card.hoverImageUrl.imageUrl : card.imageUrl}
              className="object-contain h-[18.5vh] w-[14.9vw] overflow-hidden"
              title={card.title}
              alt={card.alt}
            />
          </a>
            <div className="goods-info">
              <div className="goods-branding w-[50%] has-brand-store">
                <a href="https://www.newegg.com/p/2AM-000Z-000B9?Item=2AM-000Z-000B9&amp;cm_sp=Homepage_SS-_-P1_2AM-000Z-000B9-_-03172024#IsFeedbackTab" className="goods-rating flex items-center gap-2 w-full" title="Rating + 4.8">
                  {Array.from({ length: card.rating.star }).map((_, index) => (
                    <FaStar className="text-yellow-400" key={index} />
                  ))}
                  <span className="goods-rating-num font-s text-gray">({card.rating.numberOfStars})</span>8
                </a>
                <a href={card.href.link} className="goods-title font-l" title="View Details" data-quicklink="true">{card.href.title}</a>
                <div className="savePrice w-full flex  flex-col">
                    <div className="saving-cont flex items-center gap-2 leading-3	">
                      <span className="savebtn">{card.price.rebatePercentage}</span>
                      <span className="savebtn bg-orange-950 p-2 rounded-lg text-white">{card.price.rebate}</span>
                    </div>
                    <div className="originalPrice w-full flex flex-col gap-2 leading-3">
                    <span className="reduction">{card.price.price}</span>
                    <span className="flex  rounded-tl-[122px] rounded-br-[455px] bg-orange-500 p-[0.4rem] w-[8vw] items-center justify-center text-white	">{card.shipping}</span>
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

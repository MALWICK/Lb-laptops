"use client";
import { useRef, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


interface HoverImage {
  id: number;
  value: string;
}

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
  hoverImageUrl: HoverImage[];
  alt?: string;
}

const dealsCard2: React.FC = () => {
  const cards: DealsCard[] = [
    {
      id: 2,
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
          id: 1,
          value:
            "https://c1.neweggimages.com/productimage/nb300/B0GJD23081112Z3E406.jpg",
        },
        {
          id: 2,
          value:
            "https://c1.neweggimages.com/productimage/nb300/19-113-793-04.png",
        },
        {
          id: 3,
          value:
            "https://c1.neweggimages.com/productimage/nb300/19-113-793-05.png",
        },
      ],
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
          id: 1,
          value:
            "https://c1.neweggimages.com/productimage/nb300/B0GJD23081112Z3E406.jpg",
        },
        {
          id: 2,
          value:
            "https://c1.neweggimages.com/productimage/nb300/19-113-793-04.png",
        },
        {
          id: 3,
          value:
            "https://c1.neweggimages.com/productimage/nb300/19-113-793-05.png",
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
          id: 1,
          value:
            "https://c1.neweggimages.com/productimage/nb300/BFEFS2401020I338G0B.jpg",
        },
        {
          id: 2,
          value:
            "https://c1.neweggimages.com/productimage/nb300/A6PFS2304240F0CRD7D-1.jpg",
        },
        {
          id: 3,
          value:
            "https://c1.neweggimages.com/productimage/nb300/A6PFS2304240F0CRD7D-2.jpg",
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
          id: 1,
          value:
            "https://c1.neweggimages.com/productimage/nb300/34-360-351-03.jpg",
        },
        {
          id: 2,
          value:
            "https://c1.neweggimages.com/nobgproductcompressall300/20-215-329-V02.jpg",
        },
        {
          id: 3,
          value:
            "https://c1.neweggimages.com/nobgproductcompressall300/20-215-329-V03.jpg",
        },
      ],
    },
  ];

  const [currentImageIndexes, setCurrentImageIndexes] = useState<
    Record<number, number>
  >({});
  const [isHovered, setIsHovered] = useState(false);
  const [intervalIds, setIntervalIds] = useState<
    Record<number, NodeJS.Timeout>
  >({});

  const startRotation = (cardIndex: number) => {
    console.log("startRotation - cardIndex:", cardIndex);

    const id = setInterval(() => {
      setCurrentImageIndexes((prevIndexes) => {
        const currentIndexes = { ...prevIndexes };
        currentIndexes[cardIndex] =
          (currentIndexes[cardIndex] + 1) %
          cards[cardIndex].hoverImageUrl.length;
        return currentIndexes;
      });
    }, 3000);
    setIntervalIds((prevIds) => ({ ...prevIds, [cardIndex]: id }));
  };

  const stopRotation = (cardIndex: number) => {
    console.log("stopRotation - cardIndex:", cardIndex);

    clearInterval(intervalIds[cardIndex]);
    setIntervalIds((prevIds) => {
      const updatedIds = { ...prevIds };
      delete updatedIds[cardIndex];
      return updatedIds;
    });
  };

  const handleMouseEnter = (cardIndex: number) => {
    setIsHovered(true);
    setCurrentImageIndexes((prevIndexes) => ({
      ...prevIndexes,
      [cardIndex]: 1,
    }));
    startRotation(cardIndex);
  };

  const handleMouseLeave = (cardIndex: number) => {
    setIsHovered(false);
    setCurrentImageIndexes((prevIndexes) => {
      const currentIndexes = { ...prevIndexes };
      delete currentIndexes[cardIndex];
      return currentIndexes;
    });
    stopRotation(cardIndex);
  };

  useEffect(() => {
    return () => {
      Object.keys(intervalIds).forEach((cardIndex) => {
        stopRotation(Number(cardIndex));
      });
    };
  }, [intervalIds]);
  return (
    <div className="flex container h-full w-full  gap-[16px] mt-4 rounded-md">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex  flex-col rounded-md bg-neutral-100 w-[23.2vw] h-[40vh] mb-1"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
              <div className="goods-info w-full">
              <div className="goods-branding w-[100%] has-brand-store">
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
                  <div className="saving-cont flex items-center gap-2 leading-3 mb-2	">
                    <span className="savebtn border-orange-500 border-2 border-solid p-2 rounded-lg text-black ">
                      {card.price.rebatePercentage}
                    </span>
                    <FaArrowRightLong className="text-orange-500" />
                    <span className="savebtn border-orange-950 p-2 rounded-lg text-black">
                      {card.price.rebate}
                    </span>
                  </div>
                  <div className="originalPrice w-full flex flex-col gap-2 leading-3">
                    <span className="reduction text-xl font-medium text-stone-600	 mt-1 mb-1">
                      {card.price.price}
                    </span>
                    <span className="flex  rounded-tl-[122px] rounded-br-[455px] bg-orange-500 p-[0.6rem] w-[9.4vw] items-center justify-center text-white	">
                      {card.shipping}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.newegg.com/p/2AM-000Z-000B9?Item=2AM-000Z-000B9&amp;cm_sp=Homepage_SS-_-P1_2AM-000Z-000B9-_-03172024"
              className="w-full  bg-red flex items-start justify-end relative"
              data-quicklink="true"
            >
              <img
               className="object-contain scale-90 w-[180px] overflow-hidden	 absolute -top-12 z-10 h-[180px]"
               src={
                isHovered && currentImageIndexes[index] !== undefined && card.hoverImageUrl[currentImageIndexes[index]]
                  ? card.hoverImageUrl[currentImageIndexes[index]].value
                  : card.hoverImageUrl[0]?.value
              }
                             alt="Hover Image"
              />

             
            </a>
         
         
        </div>
      ))}
    </div>
  );
};

export default dealsCard2;

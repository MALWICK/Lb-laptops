import React, { useState } from "react";
import Image from "next/image";
import "./bottomCards.css";

interface CardItem {
  images: { src: string; title: string }[];
  text: string;
  title: string;
  backgroundImage: string;
  discountPrice: string;
  originalPrice: string;
}

const cardsItems: CardItem[] = [
  {
    backgroundImage:
      "https://c1.neweggimages.com/WebResource/Themes/Nest/images/bgs/Combo_bg.png",
    images: [
      {
        src: "https://c1.neweggimages.com/ProductImageCompressAll300/19-118-462-01.jpg",
        title: "Processors -Desktop",
      },
      {
        src: "https://c1.neweggimages.com/ProductImageCompressAll300/13-119-660-08.png",
        title: "Desktop Memory",
      },
      {
        src: "https://c1.neweggimages.com/ProductImageCompressAll300/13-119-660-08.png",
        title: "Desktop Memory",
      },
    ],
    text: "INTEL 14th Gen COMBO",
    title: "SAVINGS $110.00",
    discountPrice: "$800",
    originalPrice: "$12000",
  },
  {
    backgroundImage:
      "https://c1.neweggimages.com/WebResource/Themes/Nest/images/bgs/Combo_bg.png",
    images: [
      {
        src: "https://c1.neweggimages.com/ProductImageCompressAll300/19-118-462-01.jpg",
        title: "Processors -Desktop",
      },
      {
        src: "https://c1.neweggimages.com/ProductImageCompressAll300/13-145-477-01.jpg",
        title: " Intel Motherb...",
      },
      {
        src: "https://c1.neweggimages.com/ProductImageCompressAll300/13-119-660-08.png",
        title: "Desktop Memory",
      },
    ],
    text: "INTEL 14th Gen COMBO",
    title: "SAVINGS $110.00",
    discountPrice: "$950",
    originalPrice: "$15000",
  },
  {
    backgroundImage:
      "https://c1.neweggimages.com/WebResource/Themes/Nest/images/bgs/Combo_bg.png",
    images: [
      {
        src: "https://c1.neweggimages.com/ProductImageCompressAll300/19-118-462-01.jpg",
        title: "Processors -Desktop",
      },
      {
        src: "https://c1.neweggimages.com/ProductImageCompressAll300/13-119-660-08.png",
        title: "Desktop Memory",
      },
    ],
    text: "INTEL 14th Gen COMBO",
    title: "SAVINGS $110.00",
    discountPrice: "$950",
    originalPrice: "$15000",
  },
];

const Card: React.FC<CardItem> = ({
  backgroundImage,
  images,
  text,
  title,
  discountPrice,
  originalPrice,
}) => {
  const [hoveredImage, setHoveredImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const [isPopupHovered, setPopupHovered] = useState(false);

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const handleImageHover = (image: { src: string; title: string }) => {
    setHoveredImage(image);
  };

  const handleImageLeave = () => {
    if (!isPopupHovered) {
      setHoveredImage(null);
    }
  };

  const handlePopupEnter = () => {
    setPopupHovered(true);
  };

  const handlePopupLeave = () => {
    setPopupHovered(false);
    setHoveredImage(null); // Close popup when leaving the popup area
  };

  return (
    <div className="cardcont w-[24vw] items-center justify-between gap-[4px]" onMouseLeave={handleImageLeave}>
      <div
        className="card flex flex-col shadow-md w-full h-[210px] rounded-md bg-cover bg-center relative"
        style={backgroundImageStyle}
      >
        <div className="section-title">
          <div className="section-title-text font-normal text-base flex gap-2 ml-2 mt-1 mb-3">
            <p  className="font-sans text-black">{text}</p>
            <strong className="text-red-600">
              <p>{title}</p>
            </strong>
          </div>
          <div className="section-right"></div>
        </div>
        <div className="flex relative items-center justify-center ml-2 gap-1 w-[98%]">
          <div className="personalized-combo-goods flex flex-wrap item-center justify-center w-[80%] gap-1">
            {images.map((image, index) => (
              <div
                className="personalized-combo-items bg-slate-100 flex items-center justify-start rounded-md mb-1  w-[46%] h-[70px] ml-2"
                key={index}
                onMouseEnter={() => handleImageHover(image)}
                onMouseLeave={handleImageLeave}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  className="w-[50%] h-[50%] object-cover"
                  width={65}
                  height={48}
                />
                <p className="text-black wrap-text	">{image.title}</p>
              </div>
            ))}
          </div>
          <div className=" flex items-center h-[130px] justify-center flex-col">
            <p className="flex items-center justify-between w-full line-through">
              {" "}
              {originalPrice}
            </p>
            <p className="flex items-center justify-between w-full text-black">
              = {discountPrice}
            </p>
          </div>
        </div>
      </div>

      {hoveredImage && (
        <div className="hover-popup z-10 w-[50%]" onMouseEnter={handlePopupEnter} onMouseLeave={handlePopupLeave}>
          <div className="hover-popup-backdrop"></div>
          <div className="hover-popup-content w-[340px] h-[340px] absolute z-10 text-black">
            <Image
              src={hoveredImage.src}
              alt={hoveredImage.title}
              width={200}
              height={150}
            />
            <div>
              <p>{hoveredImage.title}</p>
              <p>Discount Price: {discountPrice}</p>
              <p>Promo Combo: {text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface BottomCardsProps {
  className?: string;
}

const BottomCards: React.FC<BottomCardsProps> = () => {
  
  return (
    <div className="w-full z-10 flex items-center relative p-0  justify-end">
      <div className="inner__cards w-[84%] flex items-center absolute right-[-8px] justify-center bottom-2 gap-[6px]">
        {cardsItems.map((card, index) => (
          <Card
            key={index}
            backgroundImage={card.backgroundImage}
            images={card.images}
            text={card.text}
            title={card.title}
            discountPrice={card.discountPrice}
            originalPrice={card.originalPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default BottomCards;

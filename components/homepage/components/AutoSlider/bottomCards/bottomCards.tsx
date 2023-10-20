"use client";
import React from "react";
import Image from "next/image";

interface cardsItem {
  images: string[];
  text: string;
  title: string;
  backgroundImage: string;
}

const cardsItem: cardsItem[] = [
  {
    backgroundImage:
      "https://c1.neweggimages.com/WebResource/Themes/Nest/images/bgs/Combo_bg.png",
    images: [
      "https://c1.neweggimages.com/ProductImageCompressAll300/19-118-462-01.jpg",
      "	https://c1.neweggimages.com/ProductImageCompressAll300/13-119-660-08.png",
      "https://c1.neweggimages.com/ProductImageCompressAll300/20-821-556-04.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll300/20-318-013-05.png",
    ],
    text: "INTEL 14th Gen COMBO",
    title: "SAVINGS $110.00",
  },
];

const Card: React.FC<cardsItem> = ({
  backgroundImage,
  images,
  text,
  title,
}) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div
      className="card flex flex-col shadow-md w-[620px] h-[210px] rounded-md bg-cover bg-center"
      style={backgroundImageStyle}
    >
      <div className="section-title">
        <div className="section-title-text font-normal text-base flex gap-2 ml-2 mt-1 mb-3">
          <p className="font-sans">{text}</p>
          <strong className="text-red-600">
            <p>{title}</p>
          </strong>
        </div>
        <div className="section-right"></div>
      </div>
      <div className="flex relative ml-2 gap-2">
        <div className="personalized-combo-goods flex flex-wrap w-[450px] gap-1">
          {images.map((image, index) => (
            <div className="personalized-combo-items bg-slate-100   flex  items-center justify-start rounded-md w-[220px] h-[70px] ">
              <Image
                key={index}
                src={image}
                alt={`Card Image ${index + 1}`}
                className="w-[50%] h-[50%] object-cover "
                width={65}
                height={48}
              />
              malor
            </div>
            
          ))}
        </div>
        <div className="price  flex items-center justify-center">
          price= $1250
        </div>
      </div>
    </div>
  );
};

function bottomCards() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="inner__cards w-4/5 flex items-center justify-center gap-2">
        {cardsItem.map((card, index) => (
          <Card
            key={index}
            backgroundImage={card.backgroundImage}
            images={card.images}
            text={card.text}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
}

export default bottomCards;

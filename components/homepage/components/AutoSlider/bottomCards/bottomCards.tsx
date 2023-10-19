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
    text: "card1",
    title: "major",
  },
];

const Card: React.FC<cardsItem> = ({ backgroundImage, images, text,title }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="card flex flex-col shadow-md w-[330px]" style={backgroundImageStyle}>
     
      
      
      <div className="section-title">
            <div className="section-title-text font-normal text-base">
              "Intel Core 14 Gen Combo"
              <p>{title}</p>
              <strong className="text-red-600"><p>{text}</p></strong>
            </div>
            <div className="section-right"></div>
          </div>
          <div className="flex relative">
            <div className="personalized-combo-goods">
            {images.map((image, index) => (
       
        <div className="personalized-combo-items bg-white rounded-md">
           <Image key={index} src={image} alt={`Card Image ${index + 1}`} className="w-[30%] h-[64px]" 
            width={64}
            height={48}/>
        </div>
      ))}
             
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
          <Card key={index} backgroundImage={card.backgroundImage} images={card.images} text={card.text} title={card.title} />
        ))}
       
      </div>
    </div>
  );
}

export default bottomCards;

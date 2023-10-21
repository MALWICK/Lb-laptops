import React from "react";
import Image from "next/image";

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
        src: "https://c1.neweggimages.com/ProductImageCompressAll300/20-821-556-04.jpg",
        title: " Intel Motherb...",
      },
      {
        src: "https://c1.neweggimages.com/ProductImageCompressAll300/20-318-013-05.png",
        title: "Internal SSDs",
      },
    ],
    text: "INTEL 14th Gen COMBO",
    title: "SAVINGS $110.00",
    discountPrice: "$800",
    originalPrice: "$12000",
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
            <div
              className="personalized-combo-items bg-slate-100 flex items-center justify-start rounded-md w-[220px] h-[70px]"
              key={index}
            >
              <Image
                src={image.src}
                alt={image.title}
                className="w-[50%] h-[50%] object-cover"
                width={65}
                height={48}
              />
              <p>{image.title}</p>
            </div>
          ))}
        </div>
        <div className="price flex items-center justify-center flex-col">
         <p className="flex items-center justify-between w-full line-through text-slate-500">from  {originalPrice}</p>
          <p className="flex items-center justify-between w-full">Price: {discountPrice}</p>
        </div>
      </div>
    </div>
  );
};

function BottomCards() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="inner__cards w-4/5 flex items-center justify-center gap-2">
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
}

export default BottomCards;
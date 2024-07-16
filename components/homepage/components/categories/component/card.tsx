import React from "react";
import Image from "next/image";
import "./style.css";
import { Key } from "lucide-react";

interface categoriesData {
  cardTitle: string;
  id: number;
  cardColor: string;
  catergoryitem: {
    imageUrl: string;
    title: string;
    id: number;
  }[];
}
const Data: categoriesData[] = [
  {
    cardTitle: "Don't hate the game, hater the player",
    id: 1,
    cardColor: "#E0EDFF",
    catergoryitem: [
      {
        imageUrl: "https://c1.neweggimages.com/nobgproductcompressall300/AKUYS2403250KJ2KD50.jpg",
        title: "Gaming Chair",
        id: 1,
      },
      {
        imageUrl: "https://c1.neweggimages.com/nobgproductcompressall300/BREWS2309060DXH5MB2.jpg",
        title: "Gaming Desk",
        id: 2,
      },
      {
        imageUrl: "https://c1.neweggimages.com/nobgproductcompressall300/23-193-155-04.jpg",
        title: "Gaming Keyboard",
        id: 3,
      },
      {
        imageUrl: "https://c1.neweggimages.com/nobgproductcompressall300/68-105-274-V01.jpg",
        title: "Gaming Desktop",
        id: 4,
      },
    ],
  },
  {
    cardTitle: "Outside's the Place to be",
    id: 2,
    cardColor: "#DDEEE0",
    catergoryitem: [
      {
        imageUrl: "https://c1.neweggimages.com/nobgproductcompressall300/ADDTD2401051894YU32.jpg",
        title: "Camping",
        id:1,
      },
      {
        imageUrl: "https://c1.neweggimages.com/nobgproductcompressall300/B2A3S2204080K3Q0FCD.jpg",
        title: "Generators",
        id: 2,
      },
      {
        imageUrl: "https://c1.neweggimages.com/nobgproductcompressall300/AGDWS21051307vJf.jpg",
        title: "Patio Furniture",
        id: 3,
      },
      {
        imageUrl: "https://c1.neweggimages.com/nobgproductcompressall300/BTY7S24052914VHCP08.jpg",
        title: "Grills",
        id: 4,
      },
    ],
  },
  {
    cardTitle: "Go for the Gold",
    id: 3,
    cardColor: "#DCEBF1",
    catergoryitem: [
      {
        imageUrl: "https://c1.neweggimages.com/nobgproductcompressall300/ASS7S2211100GTNBU90.jpg",
        title: "Tread Mills",
        id: 1,
      },
      {
        imageUrl: "https://c1.neweggimages.com/nobgproductcompressall300/A9T7D2209301881LS77.jpg",
        title: "Weight Training",
        id: 2,
      },
      {
        imageUrl: "https://c1.neweggimages.com/nobgproductcompressall300/ANHGS2305250GCUT1A5.jpg",
        title: "Electric Bikes",
        id: 3,
      },
      {
        imageUrl: "https://c1.neweggimages.com/nobgproductcompressall300/AAVJ_1_201706132099469652.jpg",
        title: "Sporting Goods",
        id: 4,
      },
    ],
  },
  {
    cardTitle: "A Helpful Home Starts Here",
    id: 4,
    cardColor: "#EBE5FF",
    catergoryitem: [
      {
        imageUrl: "https://c1.neweggimages.com/nobgproductcompressall300/81-606-013-33.gif",
        title: "Door Bells",
        id: 1,
      },
      {
        imageUrl: "https://c1.neweggimages.com/nobgproductcompressall300/81-860-004-21.jpg",
        title: "Thermostat",
        id: 2,
      },
      {
        imageUrl: "https://c1.neweggimages.com/nobgproductcompressall300/81-858-002-S01.jpg",
        title: "Smart Hubs",
        id: 3,
      },
      {
        imageUrl: "https://c1.neweggimages.com/nobgproductcompressall300/89-826-999-08.jpg",
        title: "Tv's",
        id: 4,
      },
    ],
  },
];

const card = () => {
  return (
    <div className="w-full flex items-center justify-center  gap-3 mt-6">
      {Data.map((category) => (
        <div
          key={category.id}
          className="grid-col dffg flex-auto w-[400px] h-[450px]"
        >
          <div className="home-tile-title text-lg w-full items-center flex justify-center  mb-5 text-blue-950	font-bold leading-7">
            {category.cardTitle}
          </div>
          <div className="home-tile-box   box-border rounded-md flex flex-wrap justify-center items-center gap-3 h-[88%]"   style={{ backgroundColor: category.cardColor }}>
            {category.catergoryitem.map((item) => (
              <a href="#" className="home-tile-item" key={item.id}>
                <div
                  className="goods-img w-[165px] h-[140px] rounded bg-white"
                 
                >
                  <img src={item.imageUrl} alt={item.title} className="w-[140px] h-[104px] rounded object-cover"/>
                </div>
                <span className="block text-lg font-bold leading-6 text-gray-700 min-h-16 mt-2 pl-3">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default card;

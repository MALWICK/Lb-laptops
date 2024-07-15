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
    cardTitle: "export bIkes",
    id: 1,
    cardColor: "#E0EDFF",
    catergoryitem: [
      {
        imageUrl: "https://promotions.newegg.com/nepro/23-0738/800x120@2x.jpg",
        title: "Title 1",
        id: 1,
      },
      {
        imageUrl: "https://promotions.newegg.com/Group6/24-0418/800x120@2x.jpg",
        title: "Title 2",
        id: 2,
      },
      {
        imageUrl: "https://promotions.newegg.com/Group6/24-0418/800x120@2x.jpg",
        title: "Title 2",
        id: 3,
      },
      {
        imageUrl: "https://promotions.newegg.com/Group6/24-0418/800x120@2x.jpg",
        title: "Title 2",
        id: 4,
      },
    ],
  },
  {
    cardTitle: "export bIkes",
    id: 2,
    cardColor: "#DDEEE0",
    catergoryitem: [
      {
        imageUrl: "https://promotions.newegg.com/nepro/23-0738/800x120@2x.jpg",
        title: "Title 1",
        id:1,
      },
      {
        imageUrl: "https://promotions.newegg.com/Group6/24-0418/800x120@2x.jpg",
        title: "Title 2",
        id: 2,
      },
      {
        imageUrl: "https://promotions.newegg.com/Group6/24-0418/800x120@2x.jpg",
        title: "Title 2",
        id: 3,
      },
      {
        imageUrl: "https://promotions.newegg.com/Group6/24-0418/800x120@2x.jpg",
        title: "Title 2",
        id: 4,
      },
    ],
  },
  {
    cardTitle: "export bIkes",
    id: 3,
    cardColor: "#DCEBF1",
    catergoryitem: [
      {
        imageUrl: "https://promotions.newegg.com/nepro/23-0738/800x120@2x.jpg",
        title: "Title 1",
        id: 1,
      },
      {
        imageUrl: "https://promotions.newegg.com/Group6/24-0418/800x120@2x.jpg",
        title: "Title 2",
        id: 2,
      },
      {
        imageUrl: "https://promotions.newegg.com/Group6/24-0418/800x120@2x.jpg",
        title: "Title 2",
        id: 3,
      },
      {
        imageUrl: "https://promotions.newegg.com/Group6/24-0418/800x120@2x.jpg",
        title: "Title 2",
        id: 4,
      },
    ],
  },
  {
    cardTitle: "export bIkes",
    id: 4,
    cardColor: "#EBE5FF",
    catergoryitem: [
      {
        imageUrl: "https://promotions.newegg.com/nepro/23-0738/800x120@2x.jpg",
        title: "Title 1",
        id: 1,
      },
      {
        imageUrl: "https://promotions.newegg.com/Group6/24-0418/800x120@2x.jpg",
        title: "Title 2",
        id: 2,
      },
      {
        imageUrl: "https://promotions.newegg.com/Group6/24-0418/800x120@2x.jpg",
        title: "Title 2",
        id: 3,
      },
      {
        imageUrl: "https://promotions.newegg.com/Group6/24-0418/800x120@2x.jpg",
        title: "Title 2",
        id: 4,
      },
    ],
  },
];

const card = () => {
  return (
    <div className="w-full flex items-center justify-center  gap-2 mt-6">
      {Data.map((category) => (
        <div
          key={category.id}
          className="grid-col dffg flex-auto w-[400px] h-[450px] border-red-600 border-solid"
        >
          <div className="home-tile-title text-lg font-bold mb-5 text-sky-900 leading-7">
            {category.cardTitle}
          </div>
          <div className="home-tile-box bg-white  box-border rounded-md flex flex-wrap justify-center items-center gap-4">
            {category.catergoryitem.map((item) => (
              <a href="#" className="home-tile-item" key={item.id}>
                <div
                  className="goods-img w-[165px] h-[123px] rounded-xl"
                  style={{ backgroundColor: category.cardColor }}
                >
                  <img src={item.imageUrl} alt={item.title} className="w-[140px] h-[104px] object-cover"/>
                </div>
                <span className="block text-lg font-bold leading-6 text-gray-700 min-h-16">
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

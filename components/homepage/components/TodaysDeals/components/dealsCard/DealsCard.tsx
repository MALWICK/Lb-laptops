"use client";
import React from "react";
import "../dealsCard/deals.css";

const cards = [
  {
    id: "1",
    Imageurl: "https://c1.neweggimages.com/WebResource/Themes/Nest/images/bgs/group-buy-bg-2h.png",
    rating:{star:4,numberOfstars:150} ,
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
      benefit:""
    },
    bonusItems: "https://c1.neweggimages.com/nobgproductcompressall300/AME8S22021111NLEYE4.jpg",
    shipping:""
  },
  {
    id: "2",
    Imageurl: "https://c1.neweggimages.com/productimage/nb300/11-353-205-V13.jpg",
    rating:{star:4,numberOfstars:150} ,
    href: {
      link: "alibaba.com",
      title:
        "DIYPC DIY-S08-G Green USB 3.0 Steel / Tempered Glass ATX Mid Tower Computer Case, 1 x 120mm Fan x Rear (Pre-Installed)",
    },
    price: {
      price: "$38",
      rebatePercentage: "Save 35%",
      rebate:"$59.9",
      benefit:""
    },
   shipping:"FREE SHIPPING"
  },
  {
    id: "3",
    Imageurl: "https://c1.neweggimages.com/productimage/nb300/32-732-182-05.png",
    rating:{star:4,numberOfstars:150} ,
    href: {
      link: "alibaba.com",
      title:
        "H&R Block 2023 Premium Tax Software - PC/Mac ",
    },
    price: {
      price: "$380",
      rebatePercentage: "Save 15%",
      rebate:"$59.9",
      benefit:"$38 Off W/ Code"
    },
   shipping:""
  },
  {
    id: "4",
    Imageurl: "https://c1.neweggimages.com/productimage/nb300/11-353-205-V13.jpg",
    rating:{star:4,numberOfstars:150} ,
    href: {
      link: "alibaba.com",
      title:
        "Xbox 3 Month Ultimate Game Pass - US Registered Account",
    },
    price: {
      price: "$38",
      rebatePercentage: "Save 35%",
      rebate:"$59.9"
    },
   shipping:"FREE SHIPPING"
  },
  {
    id: "2",
    Imageurl: "https://c1.neweggimages.com/productimage/nb300/11-353-205-V13.jpg",
    rating: 4,
    href: {
      link: "alibaba.com",
      title:
        "DIYPC DIY-S08-G Green USB 3.0 Steel / Tempered Glass ATX Mid Tower Computer Case, 1 x 120mm Fan x Rear (Pre-Installed)",
    },
    price: {
      price: "$38",
      rebatePercentage: "Save 35%",
      rebate:"$59.9"
    },
   shipping:"FREE SHIPPING"
  },
];

const DealsCard: React.FC = () => {
  return (
    <div className="flex container h-[100%] w-[100%] bg-red-800 p-0">
      <div className="rounded-md rond h-[450px] bg-slate-800 w-[47%]">1</div>
      <div className="flex container  w-[58%]  flex-wrap gap-[8px] ">
        <div className="flex justify-center items-center rounded-md bg-slate-700 w-[48%] h-[240px]">
          3bg-orange-900
        </div>
      </div>
    </div>
  );
};

export default DealsCard;

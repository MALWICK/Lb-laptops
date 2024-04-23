import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../productcard/productcard";
import { productData, responsive } from "@/data/Products";
import { FaCaretRight } from "react-icons/fa6";

function carousel() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="mt-[4rem]	App p-2">
      <div className="title-hoder w-full p-4 flex items-center  gap-3">
        <h1 className="text-2xl	 text-blue-950	font-bold">New at Newegg – New Arrivals</h1>
        <span className='flex items-center justify-normal gap-0 text-sm text-slate-500 hover:underline cursor-pointer'>See More <FaCaretRight/></span>      </div>
      <Carousel  responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}

export default carousel
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

export default function ProductCard(props: {
  id: number | string;
  url: string | undefined;
  name:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  price:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  description:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
}) {
  return (
    <div className="carde mb-1 max-h-[30rem] h-full'">
      <div className="cardeInner_container">
        <div className="cardeImage-container relative">
          <button
            type="button"
            className="w-[32px] h-[32px] flex items-center justify-center top-2 right-4 absolute border-slate-50 bg-slate-50 rounded-full"
          >
            <CiHeart className="text-2xl w-[1.5rem] h-[1.5rem]" />
          </button>
          <img className="product--image" src={props.url} alt="product image" />
        </div>

        <div className="items-name flex items-center justify-between p-2">
          <h2>{props.name}</h2>
        </div>
        <div className="info-carde p-2">
          <p className="mt-[2px]">gain</p>
          <p className="mt-[2px]">
            <span>{props.price}</span>
          </p>
          <button className="flex items-center w-[4.4vw] p-1 border border-slate-300 justify-center gap-1 rounded-2xl mt-[3px] text-black ">
            <FaPlus className="w-[0.9rem] h-[.9rem]" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}

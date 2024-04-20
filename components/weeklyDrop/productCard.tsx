import React from "react";
import { FaCirclePlus } from "react-icons/fa6";


export default function ProductCard(props: {
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
    <div className="carde mb-1">
      <div className="cardeInner_container">
        <div className="cardeImage-container">
          <img className="product--image" src={props.url} alt="product image" />
        </div>

        <div className="items-name flex items-center justify-between p-2">
          <h2>{props.name}</h2>
          <FaCirclePlus />
        </div>
        <div className="info-carde p-2 ">
      
      
        <p>gain</p>
        <p>
          <span>{props.price}</span>
        </p>
        </div>
        
      </div>
    </div>
  );
}

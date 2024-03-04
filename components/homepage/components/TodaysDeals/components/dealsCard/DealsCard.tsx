"use client"
import React from "react";
import "../dealsCard/deals.css"

const cards = [
];



const DealsCard: React.FC = () => {
    return (
        <div className= 'grid grid-cols-3 grid-rows-3 gap-1 p-2'>
        <div className="row-span-3 h-[46rem] w-[500px]">1</div>
        <div className="flex justify-center items-center bg-green w-[500px] h-[240px]">3</div>
        <div className="flex justify-center items-center bg-greenh-[240px] w-[500px]">4</div>
        <div className="col-start-2 row-start-2 flex justify-center items-center w-[500px] bg-green h-[240px]">5</div>
        <div className="col-start-3 row-start-2 flex justify-center items-center w-[500px] bg-green h-[240px]">6</div>
        <div className="col-start-2 row-start-3 flex justify-center items-center bg-green w-[500px] h-[240px]">7</div>
        <div className="col-start-3 row-start-3 flex justify-center items-center bg-greenh-[240px] w-[500px]">8</div>
      </div>
    
    );
};

export default DealsCard;
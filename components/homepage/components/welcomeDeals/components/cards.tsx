"use client"
import React from 'react'

interface cardDetails  {
    productImage: string;
    id:number;
    backgroundImage: string;
    newUserDiscountPrice:number;
    newUserPrice:number;
    reductionPrice:number;
}

const cards = () => {
    const Data: cardDetails[] =[
        {
            productImage:"https://img4.dhresource.com/webp/m/300x300/f3/albu/km/y/30/f7ee4297-b6db-497d-af97-c0088d53d778.jpg",
            id:1,
            backgroundImage:"https://img4.dhresource.com/webp/m/300x300/f3/albu/km/y/30/f7ee4297-b6db-497d-af97-c0088d53d778.jpg",
            newUserDiscountPrice:100,
            newUserPrice:100,
            reductionPrice:100
        },  
    ]
  return (
    <a className='w-[214px] h-[298px] mr-4 ml-4 bg-white rounded-md p-2 flex flex-col items-center no-underline shadow-slate-50'>
        <div className="w-[198px] h-[198px] rounded-md relative overflow-hidden filter contrast-90 bg-white" >
            <img src="https://img4.dhresource.com/webp/m/300x300/f3/albu/km/y/30/f7ee4297-b6db-497d-af97-c0088d53d778.jpg" className=' block w-full h-full' alt="shoe" />
        </div>
        <div className="newuser-discount" >

        </div>
    </a>
  )
}

export default cards
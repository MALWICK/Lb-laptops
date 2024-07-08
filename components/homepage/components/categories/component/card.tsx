import React from 'react'
import Image from 'next/image';
import "./style.css";

const card = () => {
  return (
    <div className='grid-col dffg flex-auto w-[400px] h-[450px] border-red-600 border-solid'>
        <div className="home-tile-title text-lg font-bold mb-5 text-sky-900 leading-7">Outdoor Living</div>
            <div className="home-tile-box bg-white p-20 pt-0 pr-20 box-border rounded-md flex justify-between flex-wrap">
                <a href="#" className='home-tile-item'>
                    <div className="goods-img">
                        <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/2f293a63-91ce-4a8b-a5ec-bf0f460cff8e._CR0,142,1613,845_SX860_AGmerlin_QL70_.jpg" alt="" />
                    </div>
                    <span className='block text-lg font-bold leading-6 text-gray-700 min-h-16'>Bikes</span>
                </a>
            </div>
       
    </div>
  )
}

export default card
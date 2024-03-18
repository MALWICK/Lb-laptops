"use client"
import React from 'react'
import "./TodaysDeal.css"
import DealsCard from './components/dealsCard/DealsCard'

interface TodaysDealsprop {
  className?: string;
}

const  TodaysDeals: React.FC<TodaysDealsprop> = () => {
  return (
    <div className='w-[94%]   flex items-center justify-center mt-[2.4%] mb-2'>
      <div className="innerDeals__cont w-[100vw]">
        <div className="first__row w-full flex items-center justify-between p-2">
            <div className="deals__heading">
                <h1 className='text-28'>TODAY'S BEST DEALS</h1>
            </div>
            <div className="timer"> crease</div>
        </div>
        <DealsCard />
      </div>
    </div>
  )
}

export default TodaysDeals

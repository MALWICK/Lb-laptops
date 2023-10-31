"use client"
import React from 'react'
import "./TodaysDeal.css"

function TodaysDeals() {
  return (
    <div className='w-[90%] flex items-center justify-center'>
      <div className="innerDeals__cont w-[100%]">
        <div className="first__row w-full flex items-center justify-between p-2">
            <div className="deals__heading">
                <h1 className='deals__heading'>TODAY'S BEST DEALS</h1>
            </div>
            <div className="timer"> crease</div>
        </div>

      </div>
    </div>
  )
}

export default TodaysDeals

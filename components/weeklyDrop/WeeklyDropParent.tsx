import React from 'react'
import WeeklyDrop from './weeklyDrop'
import Swippercard from './swippercard'

const WeeklyDropParent = () => {
  return (
    <div className=' w-full container flex items-center justify-center gap-2'>
      <WeeklyDrop />
      <Swippercard/>
    </div>
  )
}

export default WeeklyDropParent;
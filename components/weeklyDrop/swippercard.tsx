import React from 'react'

const swippercard = () => {
  return (
    <div className='w-[50%] rounded-lg 	relative flex items-center justify-center  h-[100%] p-2'>
      <a href="#">
      <div className="image-bac h-[23rem] w-[100%] rounded-lg">
      <img src="https://promotions.newegg.com/nepro/24-0158/940x390@2x.jpg" className='w-[100%] h-[100%] object-cover' alt="" />
      </div>
      </a>
    </div>
  )
}

export default swippercard;
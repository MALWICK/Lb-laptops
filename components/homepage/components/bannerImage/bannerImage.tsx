import React from 'react'

interface BannerData {
    backgroundimage: string;
    title: string;
}

const Data: BannerData[] = [
    {
        backgroundimage: "https://images.unsplash.com/photo-1630911111411-888888888888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        title: "Title 1"
    },
    {
        backgroundimage: "https://images.unsplash.com/photo-1630911111411-888888888888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        title: "Title 2"
    }
]

const bannerImage = () => {
  return (
    <div>bannerImage</div>
  )
}

export default bannerImage
import React from "react";

interface BannerData {
  backgroundimage: string;
  title: string;
}

const Data: BannerData[] = [
  {
    backgroundimage:
      "https://promotions.newegg.com/nepro/23-0738/800x120@2x.jpg",
    title: "Title 1",
  },
  {
    backgroundimage:
      "https://promotions.newegg.com/Group6/24-0418/800x120@2x.jpg",
    title: "Title 2",
  },
];

const BannerImage = () => {
  return (
    <div className=" w-full p-4 flex items-center justify-center h-[18vh]">
      {Data.map((item, index) => {
        const style = {
          backgroundImage: `url(${item.backgroundimage})`,
        };
        return (
          <div className=" flex w-full h-[90%] items-center justify-center gap-0 mt-2">
   
            <div
              className="banner-image w-[49vw] cursor-pointer h-[100%] rounded-xl	 bg-contain bg-no-repeat bg-center "
              key={index}
              style={style}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default BannerImage;

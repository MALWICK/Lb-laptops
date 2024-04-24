import React from 'react';

interface BannerData {
    backgroundimage: string;
    title: string;
}

const Data: BannerData[] = [
    {
        backgroundimage: "https://promotions.newegg.com/nepro/23-0738/800x120@2x.jpg",
        title: "Title 1"
    },
    {
        backgroundimage: "https://promotions.newegg.com/Group6/24-0418/800x120@2x.jpg",
        title: "Title 2"
    }
];

const BannerImage = () => {
    return (
        <div className='container'> 
            {
                Data.map((item, index) => {
                    const style = {
                        backgroundImage: `url(${item.backgroundimage})`,
                    };
                    return (
                        <div className="container flex w-full items-center justify-center gap-2 mt-2">
                              <div className='banner-image' key={index} style={style}>
                            <h2>{item.title}</h2>
                        </div>
                        </div>
                      
                    );
                })
            }
        </div>
    );
};

export default BannerImage;
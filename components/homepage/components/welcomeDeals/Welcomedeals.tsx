import React from "react";

const Welcomedeals = () => {
  return (
    <div className="flex items-center justify-center w-full bg-slate-500">
      <div className="innercontainer w-[100%] flex items-center justify-center bg-red-700 ">
        <div className="w-[24%] bg-red-600 flex flex-col p-1 flex-1">
          <div className="no-underline h-full cursor-pointer bg-transparent">
            <div className="h-[570px] w-[350px] rounded-lg flex flex-wrap bg-orange-200	">
              <div className="text-wrap break-normal w-full h-[14%] bg-green-500 flex flex-col">
                <span className="text-2xl font-extrabold overflow-hidden truncate text-rose-900">
                  Welcome Deal
                </span>
                <span className=" text-base font-normal">
                  Your exclusive price
                </span>
              </div>
              <div className="flex flex-col items-center justify-around w-full h-[80%]">
                <div className="">
                  <div className="flex items-center relative flex-col rounded-lg">
                    <div className="relative overflow-hidden rounded-md">
                      <img
                        src="https://ae01.alicdn.com/kf/Se60bac2d087e4ea2911cd368ed1992c6G.jpg_350x350.jpg_.webp"
                        className="max-w-[224px] max-h-[224px] w-full h-full object-cover rounded-lg aspect-auto"
                        alt="Magcubic Projector HY300 PRO 4K Android 11 Dual Wifi6 260ANSI Allwinner H713 BT5.0 1080P 1280*720P Home Cinema Outdoor Projetor"
                      />
                    </div>
                    <div className="flex  max-h[30px] h-full items-center justify-center mt-1">
                      <div className="innert flex items-center justify-center gap-1">
                        <span className="flex">￡37.81</span>
                        <span className="">￡106.58</span>
                      </div>
                      <div className="flex absolute"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcomedeals;

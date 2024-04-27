import React from "react";

const Welcomedeals = () => {
  return (
    <div className="flex items-center justify-center  w-full   bg-slate-500">
      <div className="innercontainer w-[100%] flex items-center justify-center  bg-red-700 ">
        <div className="w-[24%] bg-red-600 flex flex-col p-1  flex-1">
          <a
            href="#"
            className="no-underline	 h-full cursor-pointer bg-transparent"
          >
            <div className="h-[570px] w-[350px] p-4 rounded-lg flex flex-wrap bg-orange-200	">
              <div className="text-wrap break-normal flex flex-col">
              <span className="text-2xl font-extrabold overflow-hidden truncate text-rose-900">Your text goes here</span>
              <span className=" text-base font-normal">Your exclusive price</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcomedeals;

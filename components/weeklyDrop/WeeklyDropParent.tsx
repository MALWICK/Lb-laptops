import React from "react";
import WeeklyDrop from "./weeklyDrop";
import SwipperCard from "./swippercard";
import { FaCaretRight } from "react-icons/fa";

const WeeklyDropParent = () => {
  return (
    <div className="w-full container flex flex-col mt-3 mb-3">
      <div className="title-hoder w-full p-4 flex items-center gap-3">
        <h1 className="text-2xl text-blue-950 font-bold">Weekly Deal Drops</h1>
        <span className="flex items-center justify-normal gap-0 text-sm text-slate-500 hover:underline cursor-pointer">
          See More <FaCaretRight />
        </span>
      </div>
      <div className=" max-h-[36rem]  h-[32rem] items-center flex  justify-center gap-2 w-full p-2">

    <WeeklyDrop/>
    <SwipperCard />
      </div>
    </div>
  );
};

export default WeeklyDropParent;
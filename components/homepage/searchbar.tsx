"use client";
import React from "react";
import { words } from "@/data/data";

function searchbar() {
  return (
    <form className="w-[500px] relative">
      <div className="relative">
        <input
          type="search"
          className="w-full p-4 rounded-full bg-slate-800"
          id="searchinput"
          placeholder="Type Here"
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-300 rounded-full">
          <i className="bi bi-search"></i>
        </button>
      </div>
      <div className="absolute top-20 p-4 bg-slate-800 text-black w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2"></div>
    </form>
  );
}

export default searchbar;

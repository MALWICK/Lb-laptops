import React, { useState, useEffect } from "react";
import { words } from "@/data/data";

function SearchBar() {
  const [activeSearch, setActiveSearch] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState<number>(-1);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value === "") {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(words.filter((w) => w.includes(value)).slice(0, 8));
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion);
    setActiveSearch([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedSuggestionIndex((prevIndex) => Math.max(prevIndex - 1, -1));
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedSuggestionIndex((prevIndex) => Math.min(prevIndex + 1, activeSearch.length - 1));
    } else if (e.key === "Enter") {
      if (selectedSuggestionIndex >= 0) {
        e.preventDefault();
        const selectedSuggestion = activeSearch[selectedSuggestionIndex];
        setSearchValue(selectedSuggestion);
        setActiveSearch([]);
      }
    }
  };

  useEffect(() => {
    setSelectedSuggestionIndex(-1);
  }, [activeSearch]);

  return (
    <form className="w-[500px] relative">
      <div className="relative">
        <input
          type="search"
          className="w-full p-4 rounded-full bg-slate-100"
          id="searchinput"
          placeholder="Type Here"
          value={searchValue}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-300 rounded-full h-12 flex items-center justify-items-center w-12">
          <i className="bi bi-search"></i>
        </button>
      </div>

      {activeSearch.length > 0 && (
        <div className="absolute top-20 p-4 bg-slate-100 text-black w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
          {activeSearch.map((suggestion, index) => (
            <span
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              className={selectedSuggestionIndex === index ? "selected" : ""}
            >
              {suggestion}
            </span>
          ))}
        </div>
      )}
    </form>
  );
}

export default SearchBar;
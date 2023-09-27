import React, { useState, useEffect, useRef } from "react";
import { words } from "@/data/data";

function SearchBar() {
  const [activeSearch, setActiveSearch] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] =
    useState<number>(-1);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchValue(value);
    if (value === "") {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      words
        .filter((w) => w.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 8)
    );
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion);
    setActiveSearch([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedSuggestionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : activeSearch.length - 1));
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedSuggestionIndex((prevIndex) => (prevIndex < activeSearch.length - 1 ? prevIndex + 1 : 0));
    } else if (e.key === "Enter") {
      if (selectedSuggestionIndex >= 0) {
        e.preventDefault();
        const selectedSuggestion = activeSearch[selectedSuggestionIndex];
        setSearchValue(selectedSuggestion);
        setActiveSearch([]);
      }
    }
  };

  const handleFocus = () => {
    setSelectedSuggestionIndex(-1);
  };

  useEffect(() => {
    setSelectedSuggestionIndex(-1);
  }, [activeSearch]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target as Node)
      ) {
        setActiveSearch([]);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (selectedSuggestionIndex >= 0 && suggestionsRef.current) {
      const selectedSuggestion = suggestionsRef.current.querySelector(
        `[data-index="${selectedSuggestionIndex}"]`
      );
      if (selectedSuggestion) {
        selectedSuggestion.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedSuggestionIndex]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform any additional actions here, such as handling the form submission
    // without refreshing the page
  };

  return (
    <form className="w-[500px] relative" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="search"
          className="w-full p-4 rounded-full bg-slate-100"
          id="searchinput"
          placeholder="Type Here"
          value={searchValue}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-300 rounded-full h-12 flex items-center justify-items-center w-12">
          <i className="bi bi-search"></i>
        </button>
      </div>

      {activeSearch.length > 0 && (
        <div
          className="absolute top-20 p-4 bg-slate-100 text-black w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2"
          ref={suggestionsRef}
        >
          {activeSearch.map((suggestion, index) => (
            <span
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              className={selectedSuggestionIndex === index ? "selected" : ""}
              data-index={index}
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
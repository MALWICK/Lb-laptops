import React, { useState, useRef, useEffect } from 'react';
import { words } from "@/data/data";
import "./searchbar.css"


function SearchBar() {
  const [activeSearch, setActiveSearch] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState<number>(-1);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchValue(value);
    if (value === '') {
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
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedSuggestionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : activeSearch.length - 1));
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedSuggestionIndex((prevIndex) => (prevIndex < activeSearch.length - 1 ? prevIndex + 1 : 0));
    } else if (e.key === 'Enter') {
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

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (selectedSuggestionIndex >= 0 && suggestionsRef.current) {
      const selectedSuggestion = suggestionsRef.current.querySelector(
        `[data-index="${selectedSuggestionIndex}"]`
      );
      if (selectedSuggestion) {
        selectedSuggestion.scrollIntoView({ block: 'nearest' });
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
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-2 h-2 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="searchinput"
          className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search pc, Laptops..."
          required
          value={searchValue}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
        />
        <button
          type="submit"
          className="sub text-white absolute right-2.5 bottom-2.5 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
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
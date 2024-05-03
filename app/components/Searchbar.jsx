"use client";
import React from 'react'


import { TypewriterEffectSmooth } from "../../components/ui/typewritter-effect";

const Searchbar = () => {
  const words = [
    {
      text: "Search Events",
    },
    {
      text: "Search Movies",
      className: "text-[cb202d]",
    },
    {
      text: "Lookup Cinema",
      className: "text-[cb202d]",
    },
    {
      text: "Search location..",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];



  return (
    
<div className="relative">
  <label htmlFor="Search" className="sr-only"> Search for... </label>

  <input
    type="text"
    id="Search"
    // placeholder={<TypewriterEffectSmooth  words={words}/>}
    placeholder ="Search Events"
    className="w-full text-gray-600 bg-gray-300 rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm  dark:bg-gray-800 dark:text-white"
  />

  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
    <button
      type="button"
      className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
    >
      <span className="sr-only">Search</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </button>
  </span>
</div>
  )
}

export default Searchbar





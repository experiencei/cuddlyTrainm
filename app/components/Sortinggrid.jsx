"use client";

import React from 'react';
import { useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils"
import Link from "next/link";

// the sorting grid components for filtering and sorting data and readjusting the searchparams url

// onclick of the button reassign the pathname to what buttons you clicks

const IconGrid = ({ items }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");
  const pathname = usePathname();

  // it create a querystring a click of the button
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set(name, value);
 
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-3 lg:flex justify-between pt-10 cursor-pointer">
      {items.map((item) => (
        <Link
          key={item.id}
          href={pathname + "?" + createQueryString("filter", item.title)}
          className={cn(
            search === item.title
              ? "border-b-2 border-black pb-2 flex-shrink-0"
              : "opacity-70 flex-shrink-0",
            "flex flex-col gap-y-3 items-center"
          )}
        >
        <div key={item.id} className="flex items-center justify-center p-4 rounded-md bg-gray-100 hover:bg-gray-200">
          <i className="text-2xl text-blue-500 mr-2">
            {item.icon} 
          </i>
          <p className="text-sm font-medium">{item.title}</p>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default IconGrid;


import * as React from "react";

export interface IuseUtilsProps {}

export function useUtils() {
  const capitalizeFirstWord = (word?: string) => {
    if (!word) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const cleanUrl = (url: string) => {
    return url.replace(/%20/g, " ").replace(/%/g, "");
  };
  return {
    cleanUrl,
    capitalizeFirstWord,
  };
}

import * as React from "react";

export interface IuseFormatDateProps {}

export function useFormatDate() {
  function formatToMonthName(dateInput?: string) {
    if (!dateInput) {
      return;
    }
    // Convert MongoDB ISODate string to JavaScript Date object
    const date = new Date(dateInput);

    // Define month names array
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Extract components of the date
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    // Format the date string
    const formattedDate = `${month}, ${day},${year}`;

    return formattedDate;
  }
  function formatDate(d?: Date) {
    if (!d) {
      return;
    }
    const date = new Date(d);
    // Array of day names
    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    const months = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Get the day name
    const dayName = days[date.getDay()];

    // Get the day, month, and year
    const day = String(date.getDate()).padStart(2, "0");
    const month: any = String(date.getMonth()); // Month is zero-based
    const year = date.getFullYear();
    // Get the hours and minutes
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    // Format the date string
    const formattedDate = `${dayName} ${day} ${months[month]},${year}`;

    return formattedDate;
  }
  return { formatToMonthName, formatDate };
}

"use client";
import * as React from "react";
import { LuSettings2 } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import landing from "../../public/assets/images/32.jpg";
import image0 from "../../public/assets/images/22.jpg";
import image1 from "../../public/assets/images/33.jpg";
import image2 from "../../public/assets/images/34.jpg";
import image3 from "../../public/assets/images/35.jpg";
import image4 from "../../public/assets/images/36.jpg";
import image5 from "../../public/assets/images/71.jpg";
import image6 from "../../public/assets/images/37.jpg";
import image7 from "../../public/assets/images/38.jpg";
import image8 from "../../public/assets/images/42.jpg";
import image9 from "../../public/assets/images/43.jpg";
import Image from "next/image";
import { RestaurantList } from "@/components/restaurant/home/restaurantsList";
export interface IPageProps {}
interface IFilter {
  name: string;
  active: boolean;
}
interface IService {
  name: string;
  image: any;
}
export default function Page(props: IPageProps) {
  const [filters, setFIlters] = React.useState<IFilter[]>([
    {
      name: "Nearest",
      active: true,
    },
    {
      name: "Book Table",
      active: false,
    },
    {
      name: "Limited Slots",
      active: false,
    },
  ]);
  const services: IService[] = [
    {
      name: "Experiences",
      image: image0,
    },
    {
      name: "Romantic Dining",
      image: image1,
    },
    {
      name: "Cafe",
      image: image2,
    },
    {
      name: "Premium Dining",
      image: image3,
    },

    {
      name: "Buffet",
      image: image4,
    },
    {
      name: "Wine Tasting",
      image: image5,
    },
    {
      name: "Drink and Dine",
      image: image6,
    },
    {
      name: "NightLife",
      image: image7,
    },
    {
      name: "Breakfast places",
      image: image8,
    },
    {
      name: "Family Dining",
      image: image9,
    },
  ];
  return (
    <div className="font-outfit px-4 sm:hidden">
      <div className="flex  overflow-scroll no-scrollbar gap-2 mt-4">
        <div className="border flex items-center py-[6px] px-3 cursor-pointer shadow-sm rounded-xl gap-1 ">
          <LuSettings2 size="0.8rem" />
          <p className="">Filters</p>
          <FaCaretDown size="0.8rem" />
        </div>
        {filters.map((filter: IFilter, i: number) => {
          return (
            <div
              onClick={() => {
                setFIlters((filters) => {
                  const temp = [...filters];
                  const filterStatus = !filter.active;
                  temp.map((item) => {
                    if (item.name == filter.name) {
                      console.log(filter.active);
                      item.active == filterStatus;
                    }
                  });
                  return temp;
                });
              }}
              key={i}
              className={`border flex items-center py-[6px] px-3 cursor-pointer shadow-sm rounded-xl gap-1 ${
                filter.active && "border-mainRed bg-mainRed/10 text-mainRed"
              }`}
            >
              <p className=" text-nowrap">{filter.name}</p>
            </div>
          );
        })}
      </div>
      <Image
        src={landing}
        alt="landing_img"
        className=" aspect-[16/9] mt-8 rounded-[2rem] brightness-75"
      />
      <div className="grid grid-cols-[auto_7rem_auto] mt-8">
        <div className="border my-auto border-gray-100 rounded-full" />
        <h3 className="text-center text-gray-500 font-normal tracking-widest">
          EXPLORE
        </h3>
        <div className="border my-auto border-gray-100 rounded-full" />
      </div>
      <div className="grid grid-cols-[auto_18rem_auto] mt-8">
        <div className="border my-auto border-gray-100 rounded-full" />
        <h3 className="text-center text-gray-500 font-normal tracking-widest">
          WHAT ARE YOU LOOKING FOR?
        </h3>
        <div className="border my-auto border-gray-100 rounded-full" />
      </div>
      <div className="grid grid-cols-3 grid-rows-[5rem_5rem_5rem_5rem] mt-4 gap-2 ">
        {services.map((service: IService, i: number) => {
          return (
            <div
              key={i}
              className={`${i == 0 && " row-span-2"} ${
                i == 5 && " row-span-2"
              } cursor-pointer shadow-sm rounded-xl  relative  `}
            >
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 text-white text-center">
                {service.name}
              </div>
              {/* <div
              // className={`${i == 0 && "h-full"} ${
              //   i == 5 && "h-full"
              // } rounded-[1.5rem] brightness-75 relative border w-full h-full `}
              > */}
              <Image
                src={service.image}
                alt="image"
                //   fill
                //   className="w-full h-full rounded-[1.5rem]"
                className={`${i == 0 && "h-full"} ${
                  i == 5 && "h-full"
                } rounded-[1.2rem] brightness-75 h-full `}
              />
              {/* </div> */}
            </div>
          );
        })}
      </div>
      <RestaurantList />
      
    </div>
  );
}

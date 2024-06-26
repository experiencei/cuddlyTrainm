import { Skeleton } from "@/components/ui/skeleton";
import { useRestaurants } from "@/hooks/restaurant/useRestaurant";
import { browserClient } from "@/lib/supabase-browser";
import { TRestaurant } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { MdStar } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

export interface IRestaurantListProps {}

export function RestaurantList(props: IRestaurantListProps) {
  const { restaurants, loading } = useRestaurants();
  console.log(restaurants);
  if (restaurants) {
    restaurants.map(async (item: TRestaurant) => {
      const restaurant: TRestaurant | any = await browserClient
        .from("Restaurant_List")
        .select("&")
        .eq("name", item.name);
      console.log(restaurant);
    });
  }
  return (
    <div className="my-8">
      <div className="grid grid-cols-[auto_22rem_auto] ">
        <div className="border my-auto border-gray-100 rounded-full" />
        <h3 className="text-center text-gray-500 font-normal tracking-widest">
          POPULAR RESTAURANTS AROUND YOU
        </h3>
        <div className="border my-auto border-gray-100 rounded-full" />
      </div>
      <div className=" mt-4 grid gap-2">
        {!loading.getRestaurants &&
          restaurants.map((restaurant: TRestaurant, i: number) => {
            return (
              <Link
                prefetch
                href={`/restaurant/${restaurant.name}`}
                className="relative "
                key={i}
              >
                <div className="relative w-full h-full aspect-square rounded-[1.5rem] overflow-hidden ">
                  <Image
                    src={restaurant.images[0]}
                    alt="restaurant_img"
                    fill
                    objectFit="cover"
                    className=" brightness-75"
                  />
                  <MdFavoriteBorder
                    className="absolute top-4 right-4"
                    size="1.3rem"
                    color="white"
                  />
                </div>
                <div className="absolute top-0 left-0 h-full w-full flex items-end z-10 p-2">
                  <div className=" w-full  rounded-[1rem] overflow-hidden ">
                    <div className="text-xs text-white p-3 bg-gradient-to-r from-[#2b6bda] via-[#5289E5] to-[#ffffff60]">
                      <div className="flex gap-2">
                        <h1 className="  text-nowrap  tracking-widest ">
                          WALK-IN OFFER
                        </h1>
                        <div className="w-full border my-auto border-gray-300 rounded-full" />
                      </div>
                      <div className="font-semibold">XXX</div>
                    </div>
                    <div className="bg-white h-full p-3">
                      <div className="flex justify-between">
                        <h1>{restaurant.name}</h1>
                        <div className=" text-white p-1 px-2 text-sm bg-[#277E3B] flex items-center rounded-lg gap-2">
                          <p>4.1</p> <MdStar color="white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-zinc-400  font-light">
                          {restaurant.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      {loading.getRestaurants && <Loading />}
    </div>
  );
}

const Loading = () => {
  return (
    <div className="grid gap-4 mt-4">
      {[0, 0, 0].map((item: number, i: number) => {
        return (
          <Skeleton
            key={i}
            className="w-full h-[15rem] rounded-2xl flex items-end p-2"
          >
            <Skeleton className="w-full h-[7rem] rounded-2xl bg-gray-400" />
          </Skeleton>
        );
      })}
    </div>
  );
};

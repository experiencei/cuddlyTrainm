"use client";
import * as React from "react";
import Link from "next/link";
import { TRestaurant } from "@/types/types";
import { serverClient } from "@/lib/supabase-server";
import { useRestaurants } from "@/hooks/restaurant/useRestaurant";

const Page = ({ params }: { params: any }) => {
  const { restaurant, fetchRestaurant } = useRestaurants();
  console.log(restaurant);
  return (
    <div className=" overflow-hidde pt-4 pb-4 ">
      Restaurant page {restaurant?.name}


      
    </div>
  );
};

export default Page;

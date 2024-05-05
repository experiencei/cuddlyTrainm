import { TRestaurant } from "@/types/types";
import { browserClient } from "@/lib/supabase-browser";
import * as React from "react";
import { serverClient } from "@/lib/supabase-server";

interface ILoading {
  getRestaurants: boolean;
  getRestaurant: boolean;
}
export function useRestaurants() {
  const [restaurants, setRestaurants] = React.useState<TRestaurant[]>([]);
  const [restaurant, setRestaurant] = React.useState<TRestaurant>();
  const [trigger, setTrigger] = React.useState<number>(1);
  const [loading, setLoading] = React.useState<ILoading>({
    getRestaurant: false,
    getRestaurants: false,
  });
  const fetchRestaurants = async () => {
    setLoadingHandler("getRestaurants", true);
    const { data, error } = await browserClient
      .from("Restaurant_List")
      .select("*");
    if (data || !error) {
      setLoadingHandler("getRestaurants", false);
      console.log(data);
      setRestaurants(data);
    }
    if (error) {
      setLoadingHandler("getRestaurants", false);
      console.log(error);
    }
  };
  const fetchRestaurant = async (name: string) => {
    setLoadingHandler("getRestaurant", true);
    const { data, error } = await browserClient
      .from("Restaurant_List")
      .select("*")
      .eq("Restaurant_List.name", name)
      .single();
    if (data || !error) {
      setLoadingHandler("getRestaurant", false);
      console.log(data);
      setRestaurant(data);
      console.log();
    }
    if (error) {
      setLoadingHandler("getRestaurant", false);
    }
  };
  React.useEffect(() => {
    fetchRestaurants();
  }, [trigger]);
  const triggerFetch = () => {
    setTrigger(Math.random());
  };
  const setLoadingHandler = (name: keyof ILoading, value: boolean) => {
    setLoading((prev) => {
      const temp = { ...prev };
      temp[name] = value;
      return temp;
    });
  };
  return { restaurants, loading, triggerFetch, restaurant, fetchRestaurant };
}

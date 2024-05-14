"use client";
import * as React from "react";
import Link from "next/link";
import { TRestaurant } from "@/types/types";
import { RxCaretLeft } from "react-icons/rx";
import { useRestaurants } from "@/hooks/restaurant/useRestaurant";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { MdFavoriteBorder, MdStar } from "react-icons/md";
import { TbShare3 } from "react-icons/tb";
import { useUtils } from "@/hooks/utils/useUtils";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { PiChairDuotone } from "react-icons/pi";
import { RiDirectionLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { Divider } from "@/components/restaurant/atoms/divider";
import { Button } from "@/components/ui/button";

interface ITab {
  name: string;
  active: boolean;
  onScroll: Function;
}
const Page = ({ params }: { params: any }) => {
  const { capitalizeFirstWord } = useUtils();
  const router = useRouter();
  const name = params.restaurant.replace(/%20/g, " ").replace(/%/g, "");
  const aboutRef: any = React.useRef(null);
  const menuRef: any = React.useRef(null);
  const walkInRef: any = React.useRef(null);
  const photosRef: any = React.useRef(null);
  const reviewsRef: any = React.useRef(null);

  const scrollTo = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [tabs, setTabs] = React.useState<ITab[]>([
    {
      name: "Walk-in-offers",
      active: true,
      onScroll: () => scrollTo(walkInRef),
    },
    { name: "Menu", active: false, onScroll: () => scrollTo(walkInRef) },
    { name: "Photos", active: false, onScroll: () => scrollTo(walkInRef) },
    { name: "Reviews", active: false, onScroll: () => scrollTo(walkInRef) },
    { name: "About", active: false, onScroll: () => scrollTo(walkInRef) },
  ]);

  const { restaurant, fetchRestaurant, loading, restaurants } =
    useRestaurants();
  console.log(restaurant);
  React.useEffect(() => {
    fetchRestaurant(name);
    console.log("i fetched restaurant", name);
  }, []);

  const restaurantName = capitalizeFirstWord(restaurant?.name);
  return (
    <div className=" overflow-hidde font-outfit font-light  ">
      {loading.getRestaurant && <Loading />}
      {!loading.getRestaurant && restaurant && (
        <div>
          <div className="borsder border-black aspect-video relative">
            <div className="relative aspect-vdideo brightness-50 w-full h-[16rem]">
              <Image
                src={restaurant.images[0]}
                alt="restaurant_img"
                fill
                objectFit="cover"
              />
            </div>
            <div className="absolute z-10 bottom-0 left-0 w-full h-full pt-4">
              <div className="w-full bordesr flex justify-between items-center">
                <RxCaretLeft
                  onClick={() => router.push("/restaurant")}
                  color="white"
                  size="2rem"
                  className=" cursor-pointer"
                />
                <div className="flex gap-4 items-center">
                  <MdFavoriteBorder color="white" size="1.2rem" />
                  <TbShare3 color="white" size="1.2rem" />
                </div>
              </div>
              <div className="p-2">
                <div className="grid grid-cols-[70%_30%] text-white  ">
                  <div>
                    <h1 className="text-2xl font-normal">{restaurantName}</h1>
                    <p className="text-sm">{restaurant.address}</p>
                    <div className="inline-flex gap-2 items-center px-4 py-1 bg-black/40 rounded-xl mt-2  ">
                      <IoCheckmarkDoneCircle
                        className="my-auto"
                        color="rgb(34 197 94)"
                      />
                      <p>Opens {restaurant.opening_time}</p>
                    </div>
                    <div className="inline-flex gap-2 items-center px-4 py-1 bg-black/40 rounded-xl mt-1  ">
                      <IoCheckmarkDoneCircle
                        className="my-auto"
                        color="rgb(34 197 94)"
                      />
                      <p>Closes {restaurant.closing_time}</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-full mt-2 font-normal">
                  <div className="bg-white py-4 px-6 items-center justify-center rounded-full flex gap-2 cursor-pointer">
                    <PiChairDuotone size="1.2rem" color="rgb(203 32 45)" />
                    <p>Book a table </p>
                  </div>
                  <div className="grid grid-flow-col gap-2  justify-center">
                    <div className="bg-white p-4 px-6 items-center justify-center rounded-full flex gap-2 cursor-pointer ">
                      <RiDirectionLine size="1.2rem" color="rgb(203 32 45)" />
                    </div>
                    <div className="bg-white p-4 px-6 items-center justify-center rounded-full flex gap-2 cursor-pointer  ">
                      <FiPhoneCall size="1.2rem" color="rgb(203 32 45)" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 ">
            <div className="p-4 sticky top-0 bg-white z-10">
              <Tab tabs={tabs} className="" />
            </div>

            <div ref={walkInRef} className="">
              <Divider text="Walk-in-offers" />
            </div>
            <div ref={menuRef} className="">
              <Divider text="Menu" />
            </div>
            <div ref={photosRef} className="">
              <Divider text="Photos" />
              <div className="grid grid-cols-3 grid-rows-3 gap-2 mt-4">
                {restaurant.images.map((image: string, i: number) => {
                  return (
                    <div
                      className={`relative w-full h-full rounded-x aspect-square rounded-2xl overflow-hidden ${
                        i == 0 && "col-span-2 row-span-2"
                      }`}
                      key={i}
                    >
                      <Image
                        src={image}
                        alt="restaurant_img"
                        fill
                        objectFit="cover"
                        // className={`w-full h-full rounded-x ${
                        //   i == 0 && "col-span-2 row-span-2"
                        // }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div ref={reviewsRef} className="">
              <Divider text="Reviews" />

              <div className="mt-4 h-40 flex items-center justify-center text-zinc-400 ">
                No reviews
              </div>
            </div>
            <div ref={aboutRef} className="">
              <Divider text="About the restaurant" />
              <div className=" bg-yellow-50 border-yellow-200 border h-40 mt-4 rounded-xl"></div>
            </div>
            <div ref={reviewsRef} className="">
              <Divider text="Expore other restaurants" />

              {!loading && restaurants.length == 0 && (
                <div className="mt-4 h-40 flex items-center justify-center text-zinc-400 ">
                  No restaurants
                </div>
              )}
              <div className=" mt-4 grid gap-2 grid-cols-2">
                {!loading.getRestaurants &&
                  restaurants.map((restaurant: TRestaurant, i: number) => {
                    return (
                      <Link
                        prefetch
                        href={`/restaurant/${restaurant.name}`}
                        className="relative shadow-lg rounded-lg overflow-hidden "
                        key={i}
                      >
                        <div className="relative w-full h-full aspect-[16/20]  overflow-hidden ">
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
                        <div className="absolute top-[50%] bg-white left-0 h-[50%] w-full flex items-end z-10 ">
                          <div className="bg-white h-full p-3">
                            <div className="flex justify-between">
                              <div>
                                <h1 className="text-sm font-semibold truncate">
                                  {restaurant.name}
                                </h1>

                                <p className="text-zinc-400  text-sm font-light">
                                  {restaurant.address}
                                </p>
                              </div>
                              <div className=" text-white  px-2 text-xs bg-[#277E3B] flex h-[1.5rem]  items-center rounded-lg gap-2">
                                <p>4.1</p> <MdStar color="white" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-full grid grid-cols-2 gap-2 fixed bottom-0 left-0 p-2 py-4 z-10 bg-white border min-h-[5rem]">
        {/* <Link href={`/${restaurantName}/book`}> */}
        {!loading.getRestaurant ? (
          <Button
            onClick={() => router.push(`/restaurant/${restaurantName}/book`)}
            className="border-mainRed text-mainRed bg-transparent border  h-full !rounded-xl hover:bg-mainRed hover:text-white"
          >
            Book a table
          </Button>
        ) : (
          <Skeleton className="w-full h-full rounded-xl" />
        )}
        {!loading.getRestaurant ? (
          <Button className="h-full bg-mainRed flex-col !py-1 !rounded-xl hover:bg-mainRed/70">
            <h1>Pay bill</h1>
            <p className="text-xs font-light">Tab to view offers</p>
          </Button>
        ) : (
          <Skeleton className="w-full h-full rounded-xl" />
        )}
      </div>
    </div>
  );
};

export default Page;

const Loading = () => {
  return (
    <div className="grid gap-4 p-4">
      <Skeleton className="w-full h-[10rem] rounded-xl" />
      <div className="flex gap-2">
        <Skeleton className="w-[8rem] h-[3rem] rounded-full" />
        <Skeleton className="w-[4rem] h-[3rem] rounded-full" />
        <Skeleton className="w-[4rem] h-[3rem] rounded-full" />
      </div>
      <Skeleton className="w-full h-[3rem] rounded-full" />
      <Skeleton className="w-full h-[3rem] rounded-full" />
      <div className="grid grid-cols-2 gap-2">
        <Skeleton className="w-full h-[10rem] rounded-xl" />
        <Skeleton className="w-full h-[10rem] rounded-xl" />
      </div>
      <Skeleton className="w-full h-[10rem] rounded-xl" />
    </div>
  );
};

const Tab = ({ className, tabs }: { className: string; tabs: ITab[] }) => {
  // const [tabs, setTabs] = React.useState([
  //   { name: "Walk-in-offers", active: true },
  //   { name: "Menu", active: false },
  //   { name: "Photos", active: false },
  //   { name: "Reviews", active: false },
  //   { name: "About", active: false },
  // ]);
  return (
    <div
      className={`${className}  border border-gray-300 flex overflow-scroll gap-2 bg-zinc-200 rounded-full p-1`}
    >
      {tabs.map((tab: ITab, i: number) => {
        return (
          <div
            onClick={() => tab.onScroll()}
            key={i}
            className={` rounded-full px-4 py-2 text-nowrap text-gray-700 text-sm cursor-pointer ${
              tab.active &&
              "border border-mainRed bg-white text-black cursor-default "
            }`}
          >
            {tab.name}
          </div>
        );
      })}
    </div>
  );
};

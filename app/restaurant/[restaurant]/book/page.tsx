"use client";
import { useUtils } from "@/hooks/utils/useUtils";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { RxCaretLeft } from "react-icons/rx";
import { CiCalendarDate } from "react-icons/ci";
import { FaCaretDown, FaUsers } from "react-icons/fa";
import { Calendar } from "@/components/ui/calender";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useFormatDate } from "@/hooks/utils/useFormatDate";
import { PiUsersThree } from "react-icons/pi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { Divider } from "@/components/restaurant/atoms/divider";
import { useSelector } from "react-redux";
import { selectUser } from "@/slices/userSlice";
const Page = ({ params }: { params: any }) => {
  const router = useRouter();
  const { cleanUrl } = useUtils();
  const url = cleanUrl(params.restaurant);
  console.log(url);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [guests, setGuests] = React.useState<string | undefined>();
  const { formatDate } = useFormatDate();
  console.log(date, "date");
  console.log(guests, "guests");

  const formattedDate = formatDate(date);

  // const setDate=(value:Date)=>{
  // router.
  // }

  const user = useSelector(selectUser);
  console.log(user, "user");
  return (
    <div className="bg-black font-outfit">
      <div className="p-2 py-4">
        <RxCaretLeft
          onClick={() => router.back()}
          color="white"
          size="2rem"
          className=" cursor-pointer"
        />
        {/* <div className="" */}
        <div className="text-white text-center">
          <h1 className="font-semibold text-lg">Book Restaurant</h1>
          {/* <h1 className="text-center text-white text-4xl font-bold">{}</h1> */}
          <p className="text-sm font-light">{url}</p>
        </div>
      </div>
      <div className="bg-[#345081] rounded-t-[1rem]">
        <div className="  p-2  grid grid-cols-2 gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <div className="relative cursor-pointer flex items-center gap-2 bg-[#436299] brsightness-200 text-white text-sm justify-between py-3 px-4 rounded-xl">
                <div className="flex gap-2 items-center">
                  <CiCalendarDate color="white" size="1.2rem" />
                  <p className="truncate">
                    {formattedDate ? formattedDate : "No date selected"}
                  </p>
                </div>
                <FaCaretDown color="white" />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) =>
                  date < new Date() || date > new Date("2024-08-01")
                }
                className="rounded-md border absolute top-0 z-50 text-black bg-white shadow-lg"
              />
            </PopoverContent>
          </Popover>
          <Select onValueChange={setGuests}>
            <SelectTrigger className="h-full !border-none !ring-0 !outline-0  cursor-pointer flex items-center gap-2 bg-[#436299] brsightness-200 text-white text-sm justify-between py-3 px-4 rounded-xl">
              {/* <div className="cursor-pointer flex items-center gap-2 bg-[#436299] brsightness-200 text-white text-sm justify-between py-3 px-4 rounded-xl"> */}
              <div className="flex gap-2 items-center">
                <PiUsersThree color="white" size="1.2rem" />
                <p className="truncate">
                  {guests && `${guests} Guests`}
                  {!guests && "Select no of guests"}
                </p>
                {/* </div> */}
                {/* <FaCaretDown color="white" /> */}
              </div>
            </SelectTrigger>
            <SelectContent className="!bg-white">
              <SelectGroup>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="4">4 Guests</SelectItem>
                <SelectItem value="6">6 Guests</SelectItem>
                <SelectItem value="8">8 Guests</SelectItem>
                {/* <SelectItem value="full">Full restaurant booking</SelectItem> */}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className=" bg-white p-2 rounded-t-[1rem]  gap-2">
          <div className="">
            <Divider text="Select time of day" />
            <div
              className={`  border border-gray-300 flex overflow-scroll gap-2 bg-zinc-200 rounded-full p-1`}
            >
              {/* {tabs.map((tab: ITab, i: number) => {
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
      })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

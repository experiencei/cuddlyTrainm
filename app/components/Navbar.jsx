'use client'

import Image from "next/image";
import Link from "next/link";
import MobileLogo from "../../public/assets/icons/logo.svg"
import DesktopLogo from "../../public/assets/icons/logoDesktop.svg"

import { Separator } from "@/components/ui/separator"



import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Searchbar  from "../../app/components/Searchbar"

export function Navbar() {
const { user, isLoading } = useKindeBrowserClient();

  return (
<header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <Link className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <Image
            src={DesktopLogo}
            alt="Desktop Logo"
            width={40}
            height={120}
            className="w-32 h-14 hidden lg:block"
          />

          <Image
            src={MobileLogo}
            alt="Mobile Logo"
            width={40}
            height={120}
            className="block lg:hidden w-10 h-8"
          />
        </Link>
      </div>
      <Searchbar/>
      <div className="hidden md:block">
        <nav aria-label="Global">
        {/* <DropdownMenu>

        </DropdownMenu> */}
          <ul className="flex items-center gap-6 text-base">
            <li>
              <Link className="text-[#2d2d2d] transition font-medium hover:text-gray-500/75" href="/"> Events </Link>
            </li>

            <li>
              <Link className="text-[#2d2d2d] transition font-medium hover:text-gray-500/75" href="/dining"> Dining </Link>
            </li>
            {
            user ? (
                <>
                <li>
              <Link className="text-[#2d2d2d] transition font-medium hover:text-gray-500/75" href="/bookings"> Bookings </Link>
            </li>

            <li>
              <Link className="text-[#cd202d] transition font-medium hover:text-gray-500/75" href="/business"> Partner with us </Link>
            </li>
                </>
              ) : <>

              </>
            }
           
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
        {
            !user ? ( <><LoginLink
            className="rounded-md bg-[#cd202d] px-5 py-2.5 text-sm font-medium text-white shadow"
          >
            Login
          </LoginLink>

          <div className="hidden sm:flex">
            <RegisterLink
              className="rounded-md bg-[#f4f4f2] px-5 py-2.5 text-sm font-medium text-[#cd202d]"
            >
              Create Account
            </RegisterLink>
            </div>
            </>):(<>
              <div className="hidden sm:flex">
            <LogoutLink 
              className="rounded-md bg-[#f4f4f2] px-5 py-2.5 text-sm font-medium text-[#cd202d]"
            >
              Logout
            </LogoutLink>
            </div>
            </>)}
          
        </div>

        <DropdownMenu className="block md:hidden">
          <DropdownMenuTrigger className=" block md:hidden rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

          </DropdownMenuTrigger>
          {(user ? <>
            <DropdownMenuContent align="end" className="w-[200px] block md:hidden">
            <DropdownMenuItem>
              <Link className="text-[#2d2d2d] transition font-medium hover:text-gray-500/75 w-full" href="/bookings">
               Bookings 
               </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <Link className="text-[#cd202d] transition font-medium hover:text-gray-500/75 w-full" href="/business"> 
            Partner with us 
            </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
            <LogoutLink className=" text-gray-500/75 transition font-medium hover:text-[#cd202d] w-full">Logout</LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
          </> : <>
          <DropdownMenuContent align="end" className="w-[200px] block md:hidden">
            <DropdownMenuItem>
              <RegisterLink className="transition font-medium md:hidden bg-[#f4f4f2] text-[#cd202d] hover:text-gray-500/75 w-full" >
               Create Account 
               </RegisterLink>
            </DropdownMenuItem>
            </DropdownMenuContent>
          </>)}
         
        </DropdownMenu>

        
      </div>
    </div>
  </div>
  <Separator classname="pt-18"/>
</header>

  );
}





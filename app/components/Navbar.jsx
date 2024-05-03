import Image from "next/image";
import Link from "next/link";
import MobileLogo from "../../public/assets/icons/logo.svg"
import DesktopLogo from "../../public/assets/icons/logoDesktop.svg"




import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { DropdownMenu } from "@/components/ui/dropdown-menu";
// import { DropdownMenu } from "@/components/ui/dropdown-menu";



export async function Navbar() {
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
            className="w-32 hidden lg:block"
          />

          <Image
            src={MobileLogo}
            alt="Mobile Logo"
            className="block lg:hidden w-12"
          />
        </Link>
      </div>

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

            <li>
              <Link className="text-[#2d2d2d] transition font-medium hover:text-gray-500/75" href="/business"> Partner with us </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <LoginLink
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
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
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

          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  );
}

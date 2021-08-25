import Image from "next/image";
import { useRouter } from "next/router";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
//The useSession() React Hook in the NextAuth.js client
//is the easiest way to check if someone is signed in.
import { signIn, signOut, useSession } from "next-auth/client";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header className="w-full ">
      {/* Top nav */}

      <div className="flex items-center bg-amazon_blue px-1 py-1  flex-grow justify-between  ">
        {/* Left */}

        <div className="flex">
          <div
            onClick={() => router.push("/")}
            className="link hidden sm:flex mt-2  items-center flex-grow-0 sm:flex-grow-0"
          >
            <Image
              src="https://bit.ly/3CNFVo3"
              width={150}
              height={40}
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>

          <div
            onClick={() => router.push("/")}
            className="link flex sm:hidden   items-center flex-grow-0 sm:flex-grow-0"
          >
            <Image
              src="https://bit.ly/3ANR4n0"
              width={60}
              height={40}
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>

          <div className="  link text-white text-xs flex  items-center mx-4  whitespace-nowrap ">
            <div className="relative top-1">
              <LocationMarkerIcon className="hidden lg:block h-[1.4rem] " />
            </div>
            <div className="hidden lg:block">
              <p>Hello</p>
              <p className="font-bold text-sm">Select your address</p>
            </div>
          </div>
        </div>

        {/* Search */}

        <div className="hidden sm:flex h-9 bg-yellow-400 hover:bg-yellow-500  rounded-md flex-grow items-center cursor-pointer">
          <input
            type="text"
            className="p-2 px-4 h-full w-6 flex-grow flex-shrink focus:outline-none rounded-l-md "
          />
          <SearchIcon className="h-10 p-2 " />
        </div>

        {/* Right */}

        <div className="text-white text-xs flex  space-x-6 items-center mx-6 whitespace-nowrap  ">
          <div className="hidden sm:flex link relative top-2">
            <Image
              src="https://bit.ly/3jZMPhu"
              width={25}
              height={25}
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>

          <div onClick={!session ? signIn : signOut} className="link">
            {session ? `Hello, ${session.user.name}` : <p>Sign In</p>}

            <p className="font-bold md:text-sm">Account & Lists</p>
          </div>

          <div
            onClick={() => session && router.push("/orders")}
            className="link"
          >
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>

          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-[1.7rem] h-4 w-4 bg-yellow-500 text-black text-center  font-bold rounded-full  ">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-bold md:text-sm">Cart</p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex bg-amazon_blue-light text-white items-center text-sm space-x-5 pl-6 p-2 font-semibold">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Best Sellers</p>
        <p className="link">Mobiles</p>
        <p className="link">Amazon Pay</p>
        <p className="link hidden sm:inline-flex">Fashion</p>
        <p className="link hidden sm:inline-flex">Electronics</p>
        <p className="link hidden md:inline-flex">Prime</p>
        <p className="link hidden md:inline-flex">Customer Service</p>
        <p className="link hidden lg:inline-flex">New Releases</p>
        <p className="link hidden lg:inline-flex">Computers</p>
        <p className="link hidden xl:inline-flex">Home & Kitchen</p>
        <p className="link hidden xl:inline-flex">Toys & Games</p>
        <p className="link hidden xl:inline-flex">Today's Deals</p>
        <p className="link hidden xl:inline-flex">Coupans</p>
      </div>
    </header>
  );
}

export default Header;

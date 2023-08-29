"use client";
import React from "react";
import Image from "next/image";
import FullLogoSvg from "@/app/appComponents/assets/logo/svg/Color_logo_nobackground.svg";
import Link from "next/link";

// import { Logout } from "@/app/appwrite/logout";
import Hacker from "../../../../public/hacker_ai.png";
import Search from "./headerComponents/Search";
import Date from "./headerComponents/Date";
import Notification from "./headerComponents/Notification";


interface HeaderProps {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
  open: boolean;
}

export default function Header({
  setOpenMenu,
  openMenu,
  setOpen,
  open,
}: HeaderProps) {
  return (
    <>
      <nav className="fixed h-[10vh] m-5  w-[90vw] md:w-[80vw] rounded-md bg-white shadow-md dark:bg-gray-800 dark:border-gray-700 items-center p-3">
        {/* <div className="px-3 py-3 lg:px-5 lg:pl-3"> */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-start md:justify-between w-full ">
              <button
                onClick={() => setOpenMenu(!openMenu)}
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-[#2E052E] rounded-lg md:hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2E052E] dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              {/* <Link href="/dashboard" className="flex ml-2 md:mr-24">
                <Image
                  src={FullLogoSvg}
                  className="  mr-3"
                  alt="imbus-AI Logo"
                  width={100}
                  height={50}
                />
              </Link> */}
              <Search/>
              <Date/>
              <Notification/>
            </div>
            {/* <div className="flex items-center"> */}
              <div className="flex items-center  mr-5">
                <button
                  onClick={() => setOpen(!open)}
                  type="button"
                  className="flex text-sm  bg-gray-800 rounded-full focus:ring-2 focus:ring-[#2E052E] dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="w-8 h-8 object-cover hover:border hover:border-[#2E052E] rounded-full"
                    src={Hacker}
                    alt="user photo"
                    width={18}
                    height={18}
                  />
                </button>

                {open && (
                  <div
                    className="z-50 absolute top-10 right-5 my-4 text-base list-none bg-gray-50 text-gray-mid  divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="dropdown-user"
                  >
                    <div className="px-4 py-3" role="none">
                      <p className="text-sm  dark:text-white" role="none">
                        Neil Sims
                      </p>
                      <p
                        className="text-sm font-medium  truncate dark:text-gray-300"
                        role="none"
                      >
                        neil.sims@nimbus.com
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <Link
                          href="/dashboard"
                          className="block px-4 py-2 text-sm  hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm  hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Settings
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm  hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Earnings
                        </Link>
                      </li>
                      <li>
                        <Link
                          // onClick={() => Logout()}
                          href="#"
                          className="block px-4 py-2 text-sm  hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Sign out
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            {/* </div> */}
          </div>
        {/* </div> */}
      </nav>
    </>
  );
}

"use client";
import React, {  useState } from "react";
import Image from "next/image";
import FullLogoSvg from "@/app/assets/logo/svg/Color_logo_nobackground.svg";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
// import { Logout } from "@/appwrite/logout";
// import Avatar from "@/app/assets/img/avatar.png";
import { RxCaretDown } from "react-icons/rx";
// import Announcement from "./alert";
import Loading from "../../app/loading";
import { SettingsMenu } from "@/lib/data/settings";
// import { on } from "nodemailer/lib/xoauth2";
import { HiMenuAlt2 } from "react-icons/hi";

// import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
import { Client, Account } from "appwrite";
import { useToast } from "@/components/ui/use-toast";
import { UserNav } from "./user-nav";

interface HeaderProps {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
  open: boolean;
  username: string;
  email: string;
  avatar: number;
  id: number;
}
let arrId = 0;
export default function Header({
  setOpenMenu,
  openMenu,
  setOpen,
  open,
  username,
  email,
  avatar,
  id,
}: HeaderProps) {
  const router = useRouter();
  const [avatarUrl, setAvatarUrl] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const client = new Client();
  const account = new Account(client);
  client
    .setEndpoint(`${process.env.NEXT_PUBLIC_APPWRITE_URL}`) // Your API Endpoint
    .setProject(`${process.env.NEXT_PUBLIC_APPWRITE_ID}`); // Your project ID

  const onSignout = () => {
    const promise = account.deleteSession("current");

    promise.then(
      function (response) {
        // setTimeout(() => {
        toast({
          title: "Signing-Out.",
          description: "You've been signed out.",
        });
        // setIsLoading(false);
        // }, 3000)
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  

  function handleHeaderClick(item: string) {
    setIsLoading(true);
    item === "Sign-Out" && onSignout();
  }

  return (
    <>
      <nav className="fixed flex items-center justify-between h-[10vh] py-2  lg:pl-3 top-0 right-0 mb-5 w-full  bg-white shadow-lg  shadow-gray-dark dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-start md:hidden ">
          <Button
            onClick={() => setOpenMenu(!openMenu)}
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            className="inline-flex items-center p-2 text-sm text-[#29651d] rounded-lg  bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#29651d] dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <HiMenuAlt2 />
          </Button>
        </div>
        <div className=" md:py-1 ml-16 text-[#29651d] md:text-lg text-sm ">
          Admin Dashboard
        </div>
        <div className="w-[30%]">{/* <Search/> */}</div>

        {/* <Announcement /> */}
        <div className="flex items-center  justify-center gap-2 md:pr-2 md:mx-5">
          <Link
            href={"/dashboard"}
            className="bg-gray-50 border text-[#29651d] hover:bg-[#54f434]/20 hover:text-black font-[roboto]  shadow rounded md:py-1 md:px-16 px-1 text-[10px] md:text-md"
          >
            Go to User Dashboard
          </Link>
          <UserNav username={username} email={email}/>
         
        </div>
      </nav>
    </>
  );
}

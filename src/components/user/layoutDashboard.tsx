"use client";
import React, { useEffect, useState } from "react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import Header from "./header";
import { Client, Account } from "appwrite";
import Link from "next/link";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
import { layoutSegment, userData } from "@/lib/Context";
import { useAtom } from "jotai";
import { SideBarMenu } from "@/lib/data/menu";
import { GetToken } from "@/lib/kuda/GetToken";

export default function DashboardLayout({ children }: any) {
  const [loading, setLoading] = useState<boolean>(true);
  const [userDetails, setUserDetails] = useAtom(userData);
  const [open, setOpen] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [userSession, setUserSession] = useState<any>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const secret = searchParams.get("secret");
  const userId = searchParams.get("userId");
  const client = new Client();
  const account = new Account(client);
  let segment = useSelectedLayoutSegment();
  const [userSegment, setUserSegment] = useAtom(layoutSegment);
  if (userSegment !== "dashboard") {
    segment = userSegment;
  }
  client
    .setEndpoint(`${process.env.NEXT_PUBLIC_APPWRITE_URL}`) // Your API Endpoint
    .setProject(`${process.env.NEXT_PUBLIC_APPWRITE_ID}`); // Your project ID

  async function getConfirmation() {
    const token = await GetToken();
    localStorage.setItem("token", token);
    if (!userId && !secret) {
      const getUserSession = account.getSession("current");

      getUserSession.then(
        function (response) {
          setUserSession(response);
          console.log(response); // Success
        },
        function (error) {
          // setUserSession(false);
          console.log(error); // Failure
          router.push("/login");
        }
      );
    } else if (userId && secret) {
      const confirmMagicUrl = account.updateMagicURLSession(userId, secret);

      confirmMagicUrl.then(
        function (response) {
          if (response) {
            setUserSession(true);
          } else setUserSession(false);
          console.log(response); // Success
        },
        function (error) {
          console.log(error); // Failure
        }
      );
    }

    const getUserAccount = account.get();

    getUserAccount.then(
      function (response) {
        setUserDetails(response);
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  }

  useEffect(() => {
    getConfirmation();
  }, []);

  return (
    <>
      {/* {userSession && ( */}
        <div
          onClick={() => {
            openMenu && setOpenMenu(false);
            open && setOpen(false);
          }}
          className=" w-full h-screen flex justify-between "
        >
          <Header
            setOpenMenu={setOpenMenu}
            openMenu={openMenu}
            setOpen={setOpen}
            open={open}
            username={userDetails?.name}
            email={userDetails?.email}
            avatar={userDetails?.profileAvatarId}
            id={userSession?.userId}
          />

          <aside
            id="logo-sidebar"
            className={`${
              openMenu ? "absolute z-50 left-0 top-12 w-[50%] " : "hidden"
            } md:top-20 md:left-0 md:flex md:flex-col group/side hover:md:w-[15%] hover:transition duration-1000 delay-100 fade-in-80 fade-out-80 md:w-[5%] hover:md:left-0  md:h-screen  pb-5 pt-0 md:pt-5 shadow-sm shadow-[#2E052E] z-50 px-2 text-white bg-[#2E052E] `}
            aria-label="Sidebar"
          >
            <Link
              href="/dashboard"
              className="group-hover/side:md:flex md:hidden w-full px-5 md:mr-24 mb-3"
            >
              {" "}
              Synergy
              {/* <Image
                src={"vercel.svg"}
                width={50}
                height={30}
                className="  mr-3 w-50 h-30"
                alt="imbus-AI Logo"
                priority
              /> */}
            </Link>
            <Link
              href="/dashboard"
              className="group-hover/side:md:hidden md:flex w-full px-1  mb-3"
            >
              S
              {/* <Image
                src={"next.svg"}
                className="  mr-3 w-50 h-30"
                width={50}
                height={30}
                alt="imbus-AI Logo"
                priority
              /> */}
            </Link>
            <hr className="mb-8" />
            {SideBarMenu.map((menu, index) => (
              <Link
                key={index}
                href={menu.href}
                className={`flex text-sm justify-start items-center p-2 my-1 rounded-lg dark:text-white  ${
                  segment === menu.segment &&
                  "group bg-[#800080] text-black font-bold"
                }  "pl-4 group-hover/side:md:pl-8 hover:bg-[#800080]  hover:text-white hover:font-extrabold text-center"
              dark:hover:bg-gray-700 `}
              >
                <div className=" group:text-gray-900 text-white text-lg group-hover/side:md:text-md">
                  {menu.icon}
                </div>
                <span className="ml-3 md:invisible group-hover/side:md:visible group-hover/side:md:delay-100 text-[12px]">
                  {menu.title}
                </span>
              </Link>
            ))}
          </aside>

          <div className=" flex  items-start  w-full md:w-[95%] group-hover/side:md:w-[85%] px-3 overflow-y-auto   pt-20 text-[#2E052E] bg-white">
            {children}
          </div>
          {/* <Footer /> */}
        </div>
      {/* )} */}
    </>
  );
}

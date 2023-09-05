"use client";
import React, { useEffect, useState } from "react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import Header from "./header";
import { Client, Account } from "appwrite";
import Link from "next/link";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
import { userData } from "@/lib/Context";
import { useAtom } from "jotai";
import { AdminSideBarMenu } from "@/lib/data/menu";
import { GetToken } from "@/lib/kuda/GetToken";
import axios from "axios";

export default function AdminDashboardLayout({ children }: any) {
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
  const segment = useSelectedLayoutSegment();
  const [token,setToken] = useState<string>("token");
 
  client
    .setEndpoint(`${process.env.NEXT_PUBLIC_APPWRITE_URL}`) // Your API Endpoint
    .setProject(`${process.env.NEXT_PUBLIC_APPWRITE_ID}`); // Your project ID

  async function getConfirmation() {
    await axios
    .get(
      `${process.env.NEXT_PUBLIC_APPWRITE_CALLBACK}/api/v1/gettoken`
    )
    .then((response) => {
      console.log(response);
      // localStorage.setItem("token", response.data)
    });   
    if (!userId && !secret) {
      const getUserSession = account.getSession("current");

      getUserSession.then(
        function (response) {
          if(response.userId === process.env.NEXT_PUBLIC_ADMIN_ID){

            setUserSession(response);
            console.log("Session: ",response); // Success
          }else{
            // setUserSession(false);
          router.push("/login");
          }
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
        console.log("User: ",response); // Success
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
      {userSession && (
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
            id={userSession.userId}
          />

          <aside
            id="logo-sidebar"
            className={`${
              openMenu ? "absolute z-50 left-0 top-12 w-[50%] " : "hidden"
            } md:top-20 md:left-0 md:flex md:flex-col group/side hover:md:w-[15%] transition duration-700 ease-in-out md:w-[5%] hover:md:left-0  md:h-screen  pb-5 pt-0 md:pt-5 shadow-sm shadow-[#29651d] z-50 px-2 text-white bg-[#29651d] `}
            aria-label="Sidebar"
          >
            <Link
              href="/dashboard"
              className="group-hover/side:md:flex md:hidden w-full px-5 md:mr-24 mb-3"
            >
              <Image
                src={"vercel.svg"}
                width={50}
                height={30}
                className="  mr-3 w-50 h-30"
                alt="imbus-AI Logo"
                priority
              />
            </Link>
            <Link
              href="/dashboard"
              className="group-hover/side:md:hidden md:flex w-full px-1  mb-3"
            >
              <Image
                src={"next.svg"}
                className="  mr-3 w-50 h-30"
                width={50}
                height={30}
                alt="imbus-AI Logo"
                priority
              />
            </Link>
            <hr className="mb-8" />
            {AdminSideBarMenu.map((menu, index) => (
              <Link
                key={index}
                href={menu.href}
                className={`flex text-sm justify-start items-center p-2 my-1 rounded-lg dark:text-white  ${
                  segment === menu.segment &&
                  "group bg-[#54f434] text-black font-bold"
                }  "pl-4 group-hover/side:md:pl-8 hover:bg-[#54f434]  hover:text-white hover:font-extrabold text-center"
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

          <div className=" flex  items-start  w-full md:w-[95%] group-hover/side:md:w-[85%] px-3 overflow-y-auto pt-20 text-gray-800 bg-white">
            {children}
          </div>
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
}

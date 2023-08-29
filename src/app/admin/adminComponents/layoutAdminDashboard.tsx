"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter, redirect } from "next/navigation";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ConfigItems } from "../../../.config";
import { ConfirmMagic, CreateMagic } from "../../appwrite/login";
import Header from "./header";
import { CheckAccount } from "@/app/appwrite/checkAccount";
import LoginForm from "../../dashboard/dashboardComponents/loginComponents/form";
import LoginPage from "../../dashboard/dashboardComponents/loginComponents/login";
import { CreateJWT } from "@/app/appwrite/createJWT";
import Loading from "../../loading";
import { Client, Account } from "appwrite";
import { Sidebar, Sidebar2 } from "./sidebar";

export default function DashboardLayout({ children }: any) {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  // const [currentSession, setCurrentSession] = useState('loading');
  const [user, setUser] = useState<any>();
  const [userSession, setUserSession] = useState<string>("loading");
  // const router = useRouter();
  const searchParams = useSearchParams();
  const secret = searchParams.get("secret");
  const userId = searchParams.get("userId");

  // useEffect(() => {
  //   const client = new Client();
  //   const account = new Account(client);
  //   client
  //     .setEndpoint(`${ConfigItems.APPWRITE_SERVER}`) // Your API Endpoint
  //     .setProject(`${ConfigItems.APPWRITE_PROJECTID}`); // Your project ID

  //   const promise = account.get();
  //   promise.then(
  //     function (response) {
  //       console.log(response); // Success
  //       setUser(response);
  //       setUserSession("true");
  //     },
  //     function (error) {
  //       console.log(error); // Failure
  //       setUserSession("false");
  //     }
  //   );
  // }, []);
  // if (userId || secret) {
  //   const getMagic = async () => await ConfirmMagic(userId, secret);
  //   getMagic();
  //   setUserSession("true");
  // }

  return true ? (
    <div className="flex bg-[#2E052E] justify-start">
      <div className="w-0 md:w-1/6 z-20">
        {openMenu ? (
          <Sidebar />
        ) : (
          <Sidebar2 />
        )}
      </div>
      <div className="flex flex-col w-full md:w-5/6 ">
        <Header
          setOpenMenu={setOpenMenu}
          openMenu={openMenu}
          setOpen={setOpen}
          open={open}
        />

        <div className="p-4 h-[90vh] overflow-auto  bg-gray-200 w-full sm:w-full pt-24">
          {children}
        </div>
        <div className="h-[10vh] text-white ">Footer</div>
      </div>
      {/* </div> */}
    </div>
  ) : userSession === "false" ? (
    <LoginPage />
  ) : (
    <Loading />
  );
}

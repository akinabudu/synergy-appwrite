"use client";
import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import { useRouter, redirect } from "next/navigation";
// import Image from "next/image";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import Header from "./header";
// import LoginPage from "./login";
// import { CreateJWT } from "@/app/appwrite/createJWT";
// import Loading from "../loading";
// import { Client, Account } from "appwrite";
import { Sidebar, Sidebar2 } from "./sidebar";
import { ConfirmMagicUrl } from "../appwrite/login";

export default function DashboardLayout({ children }: any) {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  // const [currentSession, setCurrentSession] = useState('loading');
  const [user, setUser] = useState<any>();
  const [userSession, setUserSession] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const secret = searchParams.get("secret");
  const userId = searchParams.get("userId");

 async function getConfirmation(){
  if (userId && secret) {
   await ConfirmMagicUrl(userId,secret).then((res)=>{
    if (res) {
      setUserSession(true)
    }
    else setUserSession(false)
   })
  }else{
    router.push("/login")
  }
 }


   useEffect(() => {
  getConfirmation()
    
  }, []);




  


  return userSession &&
    <div className="flex bg-primary justify-start">
      <div className="w-0 md:w-1/6 z-20">
        {openMenu ? <Sidebar /> : <Sidebar2 />}
      </div>
      <div className="flex flex-col w-full md:w-5/6 ">
        <Header
          setOpenMenu={setOpenMenu}
          openMenu={openMenu}
          setOpen={setOpen}
          open={open}
        />

        <div className="p-4 h-[80vh] overflow-auto  bg-gray-200 w-full sm:w-full mt-16">
          {children}
        </div>
        <div className="h-[10vh] text-white ">Footer</div>
      </div>
    </div>
  
}

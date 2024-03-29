'use client'
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Image from "next/image";
import Logo from "@/app/appComponents/assets/logo/synergy_logo.jpeg";

export default function Verify() {
  return (
    <>
      <div className="bg-gray-light  w-full h-screen text-center justify-center flex flex-col items-center ">
        {/* <div className="bg-[#131415] flex flex-col w-3/5 h-3/5 rounded-2xl gap-4 items-center justify-center py-10"> */}
        <Image
          className="mx-auto h-20 w-auto mb-10 "
          src={Logo}
          width={100}
          alt="Your Company"
        />
            <h2 className="text-center text-3xl font-bold tracking-tight text-[#2E052E]">
              NIMBUS-AI
            </h2>
          <div className="flex flex-row text-white text-center justify-center items-center">
            <MailOutlineIcon className="px-2 text-[#2E052E] text-5xl" />
            <div className="text-bold text-2xl text-[#2E052E]">
              Check your email
            </div>
          </div>

          <div className="text-bold text-md text-[#2E052E]-dark">
            A sign in link has been sent to your email address.
          </div>
        {/* </div> */}
      </div>
    </>
  );
}

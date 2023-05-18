'use client'
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Image from "next/image";
import Logo from "/public/projectlogo.png";

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
            <h2 className="text-center text-3xl font-bold tracking-tight text-[#C19807]">
              NIMBUS-AI
            </h2>
          <div className="flex flex-row text-white text-center justify-center items-center">
            <MailOutlineIcon className="px-2 text-primary text-5xl" />
            <div className="text-bold text-2xl text-white">
              Check your email
            </div>
          </div>

          <div className="text-bold text-md text-[#C19807]">
            A sign in link has been sent to your email address.
          </div>
        {/* </div> */}
      </div>
    </>
  );
}

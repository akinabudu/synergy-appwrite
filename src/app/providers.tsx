"use client";
import { useEffect, useState } from "react";
import { UserDetailsContext } from "../lib/Context";
import AOS from "aos";

type UserDetails = {
  studentExamId?: string;
  quizPassed?: boolean;
  labFinished?: boolean;
  startLabTime_Mili?: number;
  labDuration?: number;
  email?: string;
};

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [userDetails, setUserDetails] = useState<UserDetails[]>([]);

  useEffect(()=>{
    AOS.init({
      duration: 600,
    });
  },[])
    

  return (
    <>
        <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
          {children}
        </UserDetailsContext.Provider>
    </>
  );
};

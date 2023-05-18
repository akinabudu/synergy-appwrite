"use client";
import { useEffect, useState } from "react";
import { UserDetailsContext } from "./lib/Context";

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
    

  return (
    <>
        <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
          {children}
        </UserDetailsContext.Provider>
    </>
  );
};

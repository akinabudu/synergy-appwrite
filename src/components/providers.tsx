"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import { useSelectedLayoutSegment } from "next/navigation";
import { useAtom } from "jotai";
import { layoutSegment } from "@/lib/Context";
import NextTopLoader from "nextjs-toploader";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const segment = useSelectedLayoutSegment();
  const [userSegment, setUserSegment] = useAtom(layoutSegment);
  setUserSegment(segment)

  // console.log(segment)

  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <>
      <NextTopLoader 
      color="#800080"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={200}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />
      {children}
    </>
  );
};

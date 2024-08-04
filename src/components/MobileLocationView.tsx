"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Footer from "@/components/Footer";
import DesktopView from "@/components/views/desktopView";
import MobileView from "@/components/views/mobileView";
import Image from "next/image";
import { MapPin } from "lucide-react";
import MapSS from '../../public/mapSS.png'
export default function MobileLocationView() {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/mapFinal.json",
    });
  }, []);

  return (
    <div className="flex flex-col overflow-y-hidden">
      {/* Lottie Animation Container */}
      <Image src={MapSS} className="mt-[20px]" alt="MapSS" width={600} height={500}/>
      <div className="flex flex-col">
        <div className="flex mt-[20px] h-[13vh] self-center   bg-white justify-center items-center w-[90vw] px-2 rounded-lg border-dashed border-2 border-primary">
          <div className="flex w-[15%] self-center justify-center items-center">
            <MapPin />
          </div>
          <div className="flex flex-col  self-center text-black z-[1] w-[100%] items-center justify-center h-[12vh] bg-white text-[16px] font-bold ">
            Godrej Garden City, located in Gota, Ahmedabad, Gujarat 380060
          </div>
        </div>
        <div className="flex mt-[10px] h-[13vh] self-center   bg-white justify-center items-center w-[90vw] px-2 rounded-lg border-dashed border-2 border-primary">
          <div className="flex w-[15%] self-center justify-center items-center">
            <MapPin />
          </div>
          <div className="flex flex-col  self-center text-black z-[1] w-[100%] items-center justify-center h-[12vh] bg-white text-[16px] font-bold ">
            Godrej Garden City, located in Gota, Ahmedabad, Gujarat 380060
          </div>
        </div>
        <div className="flex mt-[10px] h-[13vh] self-center   bg-white justify-center items-center w-[90vw] px-2 rounded-lg border-dashed border-2 border-primary">
          <div className="flex w-[15%] self-center justify-center items-center">
            <MapPin />
          </div>
          <div className="flex flex-col  self-center text-black z-[1] w-[100%] items-center justify-center h-[12vh] bg-white text-[16px] font-bold ">
            Godrej Garden City, located in Gota, Ahmedabad, Gujarat 380060
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-[20px] z-[00]">
        <Footer />
      </div>
    </div>
  );
}

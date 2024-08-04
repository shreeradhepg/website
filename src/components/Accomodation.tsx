"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DesktopView from "./views/desktopView";
import MobileView from "./views/mobileView";
import TabView from "./views/tabView";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Accommodation: React.FC = () => {
  const images = [
    "https://th.bing.com/th/id/OIP.-1-PcY2jhF74MvZK4xctRwHaE8?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.tBEwytBubS8G1IHN2bPJkgHaE6?rs=1&pid=ImgDetMain", // Replace with actual URLs
    "https://th.bing.com/th/id/OIP.ViUAuItOO54F6HlshFw-fQHaFI?rs=1&pid=ImgDetMain",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNextClick = () => {
    setDirection(1);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousClick = () => {
    setDirection(-1);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(handleNextClick, 3000); // scroll every 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <>
      <MobileView>
        <div className="flex flex-col items-center justify-center w-screen">
          {/* Title */}
          <div className="text-[#ff7433] text-2xl font-extrabold leading-normal capitalize">
            accommodation
          </div>

          {/* Navigation */}
          <div className="flex mt-4 w-screen justify-around">
            {/* Navigation indicator */}
            <div className="text-[#04536c] text-2xl font-extrabold leading-normal capitalize">
              {`${currentImageIndex + 1} / ${images.length}`}
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-4">
              <div
                className="button flex items-center rounded-[0.625rem] bg-[#96948f] text-[#fffcf2] text-sm font-medium uppercase px-4 py-2 cursor-pointer"
                onClick={handlePreviousClick}
              >
                Previous
              </div>
              <div
                className="button-1 flex items-center rounded-[0.625rem] bg-[#ff7433] text-[#fffcf2] text-sm font-medium uppercase px-4 py-2 cursor-pointer"
                onClick={handleNextClick}
              >
                NEXT
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full max-w-screen-sm md:max-w-full mt-4">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentImageIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${images[currentImageIndex]})`,
                  paddingTop: "56.25%", // 16:9 aspect ratio (adjust as needed)
                }}
              ></motion.div>
            </AnimatePresence>
          </div>
        </div>
      </MobileView>
      <TabView>
        <div className="flex flex-col items-center justify-center md:w-[1700px] px-24">
          {/* Title */}
          <div className="text-primary text-2xl font-extrabold capitalize">
            Accommodation
          </div>

          {/* Navigation */}
          <div className="flex justify-around gap-12 w-screen">
            {/* Navigation indicator */}
            <div className="flex gap-4">
              <div className="text-secondary text-2xl font-extrabold capitalize">
                {`${currentImageIndex + 1} / ${images.length}`}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-4">
              <div
                className="button flex items-center ml-4 bg-[#96948f] text-foreground rounded-[0.625rem] text-sm font-medium uppercase px-4 py-2 cursor-pointer"
                onClick={handlePreviousClick}
              >
                Previous
              </div>
              <div
                className="button-1 flex items-center rounded-[0.625rem] bg-primary text-[#fffcf2] text-sm font-medium uppercase px-4 py-2 cursor-pointer"
                onClick={handleNextClick}
              >
                NEXT
              </div>
            </div>
          </div>

          {/* Background image */}
          <div className="relative w-full md:h-[400px] mt-4 md:mt-[16px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentImageIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
              ></motion.div>
            </AnimatePresence>
          </div>
        </div>
      </TabView>
      <DesktopView>
        <div className="flex flex-col items-center justify-center md:w-[1700px]">
          {/* Title */}

          {/* Navigation */}
          <div className="flex justify-around gap-12 bg-background py-7 w-screen">
            {/* Navigation indicator */}
            <div className="flex gap-4">
              <div className="text-secondary text-2xl font-extrabold capitalize">
                {`${currentImageIndex + 1} / ${images.length}`}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-4">
              <div
                className="button flex items-center ml-4 bg-transparent border-primary text-primary border-[1px] border-solid  rounded-[0.625rem] text-sm font-medium uppercase px-4 py-2 cursor-pointer"
                onClick={handlePreviousClick}
              >
                <ChevronLeft />
              </div>
              <div
                className="button-1 flex items-center rounded-[0.625rem] bg-primary text-white text-sm font-medium uppercase px-4 py-2 cursor-pointer"
                onClick={handleNextClick}
              >
                <ChevronRight />
              </div>
            </div>
          </div>

          {/* Background image */}
          <div className="relative w-full md:h-[400px] ">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentImageIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
              ></motion.div>
            </AnimatePresence>
          </div>
        </div>
      </DesktopView>
    </>
  );
};

export default Accommodation;

"use client";
import React, { useState } from "react";
import { Book, BookCopy, PauseCircle, PlayCircle } from "lucide-react";
import DesktopView from "./views/desktopView";
import MobileView from "./views/mobileView";
import IconButton from "./uiCustom/IconButton";
import { Icons } from "./Icons";
import TabView from "./views/tabView";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
  const [texts, setTexts] = useState([
    {
      title: "Prime Location",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n" +
        "dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Magna fermentum\n" +
        "iaculis eu non diam phasellus vestibulum lorem.",
    },
    {
      title: "Best Facilities",
      content:
        "New text content after clicking on 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n" +
        "eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis \n" +
        "mauris sit amet massa. Magna fermentum iaculis eu non diam phasellus vestibulum lorem.",
    },
    {
      title: "Best Food",
      content:
        "New text content after clicking on 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n" +
        "eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis \n" +
        "mauris sit amet massa. Magna fermentum iaculis eu non diam phasellus vestibulum lorem.",
    },
  ]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const handleTextChange = (delta: number) => {
    const newIndex = currentTextIndex + delta;
    if (newIndex >= 0 && newIndex < texts.length) {
      setCurrentTextIndex(newIndex);
    }
  };

  return (
    <>
      <MobileView>
        <div className="flex flex-col items-center justify-around pt-10 pb-10 w-full">
          {/* First row: About Us */}
          <div className="flex justify-center w-full">
            <div className="text-[#ff7433] font-['Mulish'] text-2xl font-black leading-normal capitalize">
              About Us
            </div>
          </div>

          {/* Second row: Empowering Safe text */}
          <div className="flex justify-center w-full mt-4">
            <div className="text-[#04536c] font-['Mulish'] text-base leading-6 text-center">
              Empowering Safe and Respectful Living Everywhere
            </div>
          </div>

          {/* Third row: Timeline and Prime Location */}
          <div className="flex flex-col items-center w-full mt-8 space-y-6">
            {/* Prime Location */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-black font-['Mulish'] text-xl font-bold leading-tight">
                {texts[currentTextIndex].title}
              </div>
              <p className="text-[#04536c] font-['Mulish'] text-sm leading-6">
                {texts[currentTextIndex].content
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </p>
            </div>

            {/* Timeline */}
            <div className="flex justify-center items-center space-x-6">
              {/* Icon 1 */}
              <div
                className="flex items-center justify-center w-12 h-12 bg-[#FF7433] rounded-full cursor-pointer"
                onClick={() => handleTextChange(-1)}
              >
                <img
                  src={
                    currentTextIndex > 0
                      ? "https://img.icons8.com/?size=100&id=nWpDyHQtzGUT&format=png&color=FFFFFF"
                      : "https://img.icons8.com/?size=100&id=7694&format=png&color=FFFFFF"
                  }
                  alt="Icon"
                  className={currentTextIndex > 0 ? "w-6 h-6" : "w-5 h-5"}
                />
              </div>
              {/* Line */}
              <div className="w-px h-24 bg-[#04536c]" />
              {/* Icon 2 */}
              <div
                className={`flex items-center justify-center w-12 h-12 bg-[#FF7433] rounded-full cursor-pointer ${
                  currentTextIndex >= texts.length - 1 &&
                  "opacity-50 cursor-not-allowed"
                }`}
                onClick={() =>
                  currentTextIndex < texts.length - 1 && handleTextChange(1)
                }
              >
                <img
                  src={
                    currentTextIndex < texts.length - 1
                      ? "https://img.icons8.com/?size=100&id=SIOs8NS7C3bJ&format=png&color=FFFFFF"
                      : "https://img.icons8.com/?size=100&id=SIOs8NS7C3bJ&format=png&color=FFFFFF"
                  }
                  alt="Icon"
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>
        </div>
      </MobileView>
      <TabView>
        <div className="flex flex-col items-center justify-center  w-full leading-[3.625rem] px-0">
          {/* First row: About Us */}
          <div className="flex justify-center w-full">
            <div className="text-[#ff7433] font-['Mulish'] text-3xl font-black leading-[normal] capitalize">
              About Us
            </div>
          </div>

          {/* Second row: Empowering Safe text */}
          <div className="flex justify-center w-full mt-4">
            <div className="text-[#04536c] font-['Mulish'] text-[.9375rem] leading-[1.4375rem]">
              Empowering Safe and Respectful Living Everywhere
            </div>
          </div>

          {/* Third row: Timeline and Prime Location */}
          <div className="flex justify-center items-start w-full mt-8">
            {/* Timeline */}
            <div className="flex flex-col items-center gap-6">
              {/* Icon 1 */}
              <div
                className="flex items-center justify-center w-[73px] h-[73px] bg-[#FF7433] rounded-full cursor-pointer"
                onClick={() => handleTextChange(-1)}
              >
                <img
                  src={
                    currentTextIndex > 0
                      ? "https://img.icons8.com/?size=100&id=nWpDyHQtzGUT&format=png&color=FFFFFF"
                      : "https://img.icons8.com/?size=100&id=7694&format=png&color=FFFFFF"
                  }
                  alt="Icon"
                  className={
                    currentTextIndex > 0
                      ? "w-[40px] h-[40px]"
                      : "w-[25px] h-[25px]"
                  }
                />
              </div>
              {/* Line */}
              <div className="w-[0.0625rem] h-[7.625rem] bg-[#04536c]" />
              {/* Icon 2 */}
              <div
                className={`flex items-center justify-center w-[73px] h-[73px] bg-[#FF7433] rounded-full cursor-pointer ${
                  currentTextIndex >= texts.length - 1 &&
                  "opacity-50 cursor-not-allowed"
                }`}
                onClick={() =>
                  currentTextIndex < texts.length - 1 && handleTextChange(1)
                }
              >
                <img
                  src={
                    currentTextIndex < texts.length - 1
                      ? "https://img.icons8.com/?size=100&id=SIOs8NS7C3bJ&format=png&color=FFFFFF"
                      : "https://img.icons8.com/?size=100&id=SIOs8NS7C3bJ&format=png&color=FFFFFF"
                  }
                  alt="Icon"
                  className="w-[40px] h-[40px]"
                />
              </div>
            </div>
            {/* Prime Location */}
            <div className="flex flex-col items-start lg:mt-[48px] ml-8 sm:w-auto sm:ml-8 mt-0">
              <div className="text-black font-['Mulish'] text-3xl font-bold leading-[65.449px]">
                {texts[currentTextIndex].title}
              </div>
              <p className="text-[#04536c] font-['Mulish'] text-[.9375rem] leading-[1.4375rem]">
                {texts[currentTextIndex].content
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </TabView>
      <DesktopView>
        <div className="flex flex-col items-center justify-center  w-full leading-[3.625rem] px-0">
          {/* First row: About Us */}
          <div className="flex justify-center w-full">
            <div className="text-[#ff7433] font-['Mulish'] text-3xl font-black leading-[normal] capitalize">
              About Us
            </div>
          </div>

          {/* Second row: Empowering Safe text */}
          <div className="flex justify-center w-full mt-4">
            <div className="text-[#04536c] font-['Mulish'] text-[.9375rem] leading-[1.4375rem]">
              Empowering Safe and Respectful Living Everywhere
            </div>
          </div>

          {/* Third row: Timeline and Prime Location */}
          <div className="flex justify-center items-start w-full mt-8">
            {/* Timeline */}
            <div className="flex flex-col items-center gap-6">
              {/* Icon 1 */}
              <div
                className="flex items-center justify-center w-[73px] h-[73px] bg-[#FF7433] rounded-full cursor-pointer"
                onClick={() => handleTextChange(-1)}
              >
                <img
                  src={
                    currentTextIndex > 0
                      ? "https://img.icons8.com/?size=100&id=nWpDyHQtzGUT&format=png&color=FFFFFF"
                      : "https://img.icons8.com/?size=100&id=7694&format=png&color=FFFFFF"
                  }
                  alt="Icon"
                  className={
                    currentTextIndex > 0
                      ? "w-[40px] h-[40px]"
                      : "w-[25px] h-[25px]"
                  }
                />
              </div>
              {/* Line */}
              <div className="w-[0.0625rem] h-[7.625rem] bg-[#04536c]" />
              {/* Icon 2 */}
              <div
                className={`flex items-center justify-center w-[73px] h-[73px] bg-[#FF7433] rounded-full cursor-pointer ${
                  currentTextIndex >= texts.length - 1 &&
                  "opacity-50 cursor-not-allowed"
                }`}
                onClick={() =>
                  currentTextIndex < texts.length - 1 && handleTextChange(1)
                }
              >
                <img
                  src={
                    currentTextIndex < texts.length - 1
                      ? "https://img.icons8.com/?size=100&id=SIOs8NS7C3bJ&format=png&color=FFFFFF"
                      : "https://img.icons8.com/?size=100&id=SIOs8NS7C3bJ&format=png&color=FFFFFF"
                  }
                  alt="Icon"
                  className="w-[40px] h-[40px]"
                />
              </div>
            </div>
            {/* Prime Location */}
            <div className="flex flex-col items-start lg:mt-[48px] ml-8 sm:w-auto sm:ml-8 mt-0">
              <div className="text-black font-['Mulish'] text-3xl font-bold leading-[65.449px]">
                {texts[currentTextIndex].title}
              </div>
              <p className="text-[#04536c] font-['Mulish'] text-[.9375rem] leading-[1.4375rem]">
                {texts[currentTextIndex].content
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </DesktopView>
    </>
  );
};

export default AboutUs;

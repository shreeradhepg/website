"use client";
import React, { useState } from "react";
import DesktopView from "./views/desktopView";
import MobileView from "./views/mobileView";
import {
  Dessert,
  Dumbbell,
  Library,
  ParkingCircle,
  ParkingCircleIcon,
  Wifi,
} from "lucide-react";
import { Feature } from "./uiCustom/Feature";
import TabView from "./views/tabView";

interface Feature {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}
const features: Feature[] = [
  {
    icon: Wifi,
    title: "Wi-Fi",
    description: "Amet minim mollit non",
  },
  {
    icon: ParkingCircleIcon,
    title: "Parking",
    description: "Amet minim mollit non",
  },
  {
    icon: Dumbbell,
    title: "Gym",
    description: "Amet minim mollit non",
  },
  {
    icon: Library,
    title: "Library",
    description: "Amet minim mollit non",
  },
  {
    icon: Dessert,
    title: "Cafeteria",
    description: "Amet minim mollit non",
  },
];

const Facilities: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <MobileView>
        {" "}
        <div className="flex flex-col  items-start px-12 gap-2  mb-[100px]">
          <div className="flex flex-col items-center justify-center gap-3">
            {features.map((feature, index) => (
              <Feature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </MobileView>
      <TabView>
        <div className="flex flex-col  items-start px-24 gap-2  mb-[100px]">
          <div className="flex items-center justify-center gap-32">
            <div className=" h-[5.75rem] ">
              <div className="flex items-center justify-center  h-full">
                <img
                  src="https://img.icons8.com/?size=100&id=60027&format=png&color=FF7433"
                  alt="Wi-Fi Icon"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col ml-[10px]">
                  <div className="text-primary  text-[1.0625rem] font-black  capitalize">
                    Wi-Fi
                  </div>
                  <div className=" text-secondary  text-[.9375rem] ">
                    Amet minim mollit non
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[5.75rem] mr-[40px]">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src="https://img.icons8.com/?size=100&id=F2f6HZQRUyKY&format=png&color=FF7433"
                  alt="Parking Icon"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col ml-[10px]">
                  <div className="text-primary  text-[1.0625rem] font-black  capitalize">
                    Parking
                  </div>
                  <div className=" text-secondary  text-[.9375rem] ">
                    Lorem ipsum dolor sit
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[5.75rem] mr-[40px]">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src="https://img.icons8.com/?size=100&id=9773&format=png&color=FF7433"
                  alt="Gym Icon"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col ml-[10px]">
                  <div className="text-primary  text-[1.0625rem] font-black  capitalize">
                    Gym
                  </div>
                  <div className=" text-secondary  text-[.9375rem] ">
                    Sed do eiusmod tempor
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[5.75rem] mr-[10px]">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src="https://img.icons8.com/?size=100&id=IcTW1MVtUaxj&format=png&color=FF7433"
                  alt="Pool Icon"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col ml-[10px]">
                  <div className="text-primary  text-[1.0625rem] font-black  capitalize">
                    Pool
                  </div>
                  <div className=" text-secondary  text-[.9375rem] ">
                    Incididunt ut labore et
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50px] h-[50px]">
              <button
                onClick={handleShowMore}
                className="flex items-center justify-center w-full h-full border-2 border-[rgba(255,116,51,0.68)] rounded-[5px]"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=99992&format=png&color=FF7433"
                  alt="Plus Icon"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          </div>
          {showMore && (
            <div className="flex items-center gap-20 mt-4 ">
              <div className=" h-[5.75rem] mr-[40px]">
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    src="https://img.icons8.com/?size=100&id=11222&format=png&color=FF7433"
                    alt="Library Icon"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col ml-[10px]">
                    <div className="text-primary  text-[1.0625rem] font-black  capitalize">
                      Library
                    </div>
                    <div className=" text-secondary  text-[.9375rem] ">
                      Ut enim ad minim veniam
                    </div>
                  </div>
                </div>
              </div>
              <div className=" h-[5.75rem] mr-[40px]">
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    src="https://img.icons8.com/?size=100&id=FVQ3xoP9VcTG&format=png&color=FF7433"
                    alt="Cafeteria Icon"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col ml-[10px]">
                    <div className="text-primary  text-[1.0625rem] font-black  capitalize">
                      Cafeteria
                    </div>
                    <div className=" text-secondary  text-[.9375rem] ">
                      Quis nostrud exercitation
                    </div>
                  </div>
                </div>
              </div>
              {/* Add more facilities as needed */}
            </div>
          )}
        </div>
      </TabView>
      <DesktopView>
        {" "}
        <div className="flex flex-col  items-start px-24 gap-2  mb-[100px]">
          <div className="flex items-center justify-center gap-32">
            <div className=" h-[5.75rem] ">
              <div className="flex items-center justify-center  h-full">
                <img
                  src="https://img.icons8.com/?size=100&id=60027&format=png&color=FF7433"
                  alt="Wi-Fi Icon"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col ml-[10px]">
                  <div className="text-primary  text-[1.0625rem] font-black  capitalize">
                    Wi-Fi
                  </div>
                  <div className=" text-secondary  text-[.9375rem] ">
                    Amet minim mollit non
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[5.75rem] mr-[40px]">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src="https://img.icons8.com/?size=100&id=F2f6HZQRUyKY&format=png&color=FF7433"
                  alt="Parking Icon"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col ml-[10px]">
                  <div className="text-primary  text-[1.0625rem] font-black  capitalize">
                    Parking
                  </div>
                  <div className=" text-secondary  text-[.9375rem] ">
                    Lorem ipsum dolor sit
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[5.75rem] mr-[40px]">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src="https://img.icons8.com/?size=100&id=9773&format=png&color=FF7433"
                  alt="Gym Icon"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col ml-[10px]">
                  <div className="text-primary  text-[1.0625rem] font-black  capitalize">
                    Gym
                  </div>
                  <div className=" text-secondary  text-[.9375rem] ">
                    Sed do eiusmod tempor
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[5.75rem] mr-[10px]">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src="https://img.icons8.com/?size=100&id=IcTW1MVtUaxj&format=png&color=FF7433"
                  alt="Pool Icon"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col ml-[10px]">
                  <div className="text-primary  text-[1.0625rem] font-black  capitalize">
                    Pool
                  </div>
                  <div className=" text-secondary  text-[.9375rem] ">
                    Incididunt ut labore et
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-20 mt-4 ">
            <div className=" h-[5.75rem] mr-[40px]">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src="https://img.icons8.com/?size=100&id=11222&format=png&color=FF7433"
                  alt="Library Icon"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col ml-[10px]">
                  <div className="text-primary  text-[1.0625rem] font-black  capitalize">
                    Library
                  </div>
                  <div className=" text-secondary  text-[.9375rem] ">
                    Ut enim ad minim veniam
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[5.75rem] mr-[40px]">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src="https://img.icons8.com/?size=100&id=FVQ3xoP9VcTG&format=png&color=FF7433"
                  alt="Cafeteria Icon"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col ml-[10px]">
                  <div className="text-primary  text-[1.0625rem] font-black  capitalize">
                    Cafeteria
                  </div>
                  <div className=" text-secondary  text-[.9375rem] ">
                    Quis nostrud exercitation
                  </div>
                </div>
              </div>
            </div>
            {/* Add more facilities as needed */}
          </div>
        </div>
      </DesktopView>
    </>
  );
};

export default Facilities;

"use client";
import React, { useEffect, useState } from "react";

import {
  Axe,
  Dessert,
  Dumbbell,
  Library,
  ParkingCircle,
  ParkingCircleIcon,
  Shirt,
  Wifi,
} from "lucide-react";
import MobileView from "@/components/views/mobileView";
import { Feature } from "@/components/uiCustom/Feature";
import TabView from "@/components/views/tabView";
import DesktopView from "@/components/views/desktopView";
import Footer from "@/components/Footer";
import { FeatureDt } from "@/components/uiCustom/FeatureDt";

import { motion, AnimatePresence } from "framer-motion";
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
  {
    icon: Axe,
    title: "Miscellaneous",
    description: "Amet minim mollit non",
  },
  {
    icon: Shirt,
    title: "Laundry Services",
    description: "Amet minim mollit non",
  },
];

const Facilities: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const images = [
    "https://telecomtalk.info/wp-content/uploads/2023/09/jiofiber-long-term-plans-come-with-free.png.webp",
    "https://media.istockphoto.com/id/1083622428/vector/car-parking-icon.jpg?s=612x612&w=0&k=20&c=Z6VydNYDHrBq6gujhSuC6eIaCXQn_eMHNBFf8Co0ul4=", 
    "https://housing.com/news/wp-content/uploads/2022/11/GYM-INTERIORS-FEATURE-compressed.jpg",
    "https://media.istockphoto.com/id/1498878143/photo/book-stack-and-open-book-on-the-desk-in-modern-public-library.webp?b=1&s=170667a&w=0&k=20&c=T63zJBKuZLTUQwwAAwLzbMwtzAEdd4wZRaEV6EAdUnA=",
    "https://3.files.edl.io/1ed0/18/10/24/140236-4602de79-383e-4afb-94f6-678a95125f25.jpg",
    "https://goldcoastplumbingcompany.com.au/wp-content/uploads/2021/03/plumbing-service-types.jpg",
    "https://media.cnn.com/api/v1/images/stellar/prod/210915133905-how-to-do-laundry-lead.jpg?q=x_0,y_0,h_900,w_1601,c_fill",
  ];
  const [hoveredFeatureIndex, setHoveredFeatureIndex] = useState<any>(0);
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
    <div className="flex flex-col">
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
        <div className="flex flex-col items-start gap-2 mt-3 mb-[100px]">
          <div className=" text-[30px] gap-2">
            {features.map((feature, index) => {
              const marginLeft = `ml-${index * 80}px`; // Calculate margin-left

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredFeatureIndex(index)}
                >
                  <div className="grid grid-cols-2 gap-8 relative">
                    <FeatureDt
                      key={index}
                      index={index}
                      titleSize="text-[24px]"
                      descriptionSize="text-[20px]"
                      icon={feature.icon}
                      iconSize="text-[32px]"
                      title={feature.title}
                      description={feature.description}
                      marginLeft={marginLeft}
                    />
                  </div>
                  <AnimatePresence>
                    {hoveredFeatureIndex === index && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                        className="absolute right-[210px] top-[190px]"
                      >
                        <img
                          src={images[hoveredFeatureIndex]}
                          alt={`Feature ${index}`}
                          className="w-[700px] bg-contain h-[530px] rounded-2xl shadow-[0_20px_50px_rgba(255,_116,_51,_0.7)]"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </DesktopView>
      <Footer />
    </div>
  );
};

export default Facilities;

"use client";
import Image from "next/image";
import React from "react";
import heroSvg from "../../public/images/blob.svg";
import heroImage from "../../public/images/s1-c.png";
import DesktopView from "./views/desktopView";
import MobileView from "./views/mobileView";
import TabView from "./views/tabView";
import { Search } from "lucide-react";
import IconButton from "./uiCustom/IconButton";
import { motion } from "framer-motion";

// Define animation variants
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const Hero: React.FC = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <MobileView>
        <div className="relative flex px-7 kanit-regular">
          <div className="relative kanit-regular">
            <div className="relative">
              <div className="flex flex-col w-[70vw] mt-0">
                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-bold text-[#000000] text-[28px]"
                >
                  Facilities, That Make Your Stay
                  <span className="text-primary ml-[5px]">Comfortable</span>
                </motion.p>
                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-4"
                >
                  <IconButton
                    icon={Search}
                    text="Explore Your Living Space"
                    onClick={handleClick}
                    variant="primary"
                    width="300px"
                    height="50px"
                  />
                </motion.div>
              </div>
            </div>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative"
              style={{ width: "1002px", height: "525px", left: "10px" }}
            >
              <Image
                src={heroSvg}
                style={{
                  position: "absolute",
                  width: "325px",
                  height: "344px",
                  objectFit: "fill",
                  transform: "rotate(180deg)",
                  top: "20px",
                  left: "20px",
                  marginLeft: "15vw",
                }}
                alt="svg"
              />
              <Image
                src={heroImage}
                style={{
                  position: "absolute",
                  width: "312px",
                  height: "280px",
                  objectFit: "cover",
                  marginLeft: "12vw",
                  bottom: "120px",
                }}
                alt="svg"
              />
            </motion.div>
          </div>
        </div>
      </MobileView>
      <TabView>
        <div className="relative flex justify-between px-24 kanit-regular mt-28">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="flex-shrink-0">
              <p className="flex-shrink-0 font-bold w-[50vw] h-[212px] text-[#000000] text-[57.47px] leading-[3.625rem]">
                Facilities,
                <br />
                That Make Your Stay
                <br />
                <span className="text-primary">Comfortable</span>
              </p>
              <div className="flex-shrink-0 w-[640.258px] h-[5.875rem] text-secondary text-[1.0625rem] leading-[1.625rem]">
                To provide a secure, comfortable, and supportive living
                <br />
                environment that promotes academic success, personal
                <br />
                growth, and community among post-graduate students.
              </div>
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                className="mt-20"
              >
                <IconButton
                  icon={Search}
                  text="Explore Your Living Space"
                  onClick={handleClick}
                  variant="primary"
                  width="300px"
                  height="60px"
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex-shrink-0"
            style={{ width: "1002px", height: "725px", left: "-119px" }}
          >
            <Image
              src={heroSvg}
              style={{
                position: "absolute",
                width: "725px",
                height: "544px",
                objectFit: "fill",
                transform: "rotate(180deg)",
                top: "-105px",
                marginLeft: "15vw",
              }}
              alt="svg"
            />
            <Image
              src={heroImage}
              style={{
                position: "relative",
                width: "612px",
                height: "580px",
                objectFit: "cover",
                marginLeft: "12vw",
              }}
              alt="svg"
            />
          </motion.div>
        </div>
      </TabView>
      <DesktopView>
        <div className="relative flex justify-between px-24 kanit-regular mt-28">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="flex-shrink-0">
              <p className="flex-shrink-0 font-bold w-[50vw] h-[212px] text-[#000000] text-[57.47px] leading-[3.625rem]">
                Facilities,
                <br />
                That Make Your Stay
                <br />
                <span className="text-primary">Comfortable</span>
              </p>
              <div className="flex-shrink-0 w-[640.258px] h-[5.875rem] text-secondary text-[1.0625rem] leading-[1.625rem]">
                To provide a secure, comfortable, and supportive living
                <br />
                environment that promotes academic success, personal
                <br />
                growth, and community among post-graduate students.
              </div>
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                className="mt-20"
              >
                <IconButton
                  icon={Search}
                  text="Explore Your Living Space"
                  onClick={handleClick}
                  variant="primary"
                  width="300px"
                  height="60px"
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex-shrink-0"
            style={{ width: "1002px", height: "725px", left: "-119px" }}
          >
            <Image
              src={heroSvg}
              style={{
                position: "absolute",
                width: "725px",
                height: "544px",
                objectFit: "fill",
                transform: "rotate(180deg)",
                top: "-105px",
                marginLeft: "15vw",
              }}
              alt="svg"
            />
            <Image
              src={heroImage}
              style={{
                position: "relative",
                width: "612px",
                height: "580px",
                objectFit: "cover",
                marginLeft: "12vw",
              }}
              alt="svg"
            />
          </motion.div>
        </div>
      </DesktopView>
    </>
  );
};

export default Hero;

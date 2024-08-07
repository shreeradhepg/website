"use client";
import React, { useState } from "react";
import {
  BookCopy,
  ChevronDown,
  ChevronUp,
  PauseCircle,
  PlayCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import DesktopView from "../views/desktopView";
import MobileView from "../views/mobileView";
import IconButton from "../uiCustom/IconButton";
import TabView from "../views/tabView";
import Footer from "../Footer";

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const handleTogglePlay = () => {
    const video = document.getElementById("about-video") as HTMLVideoElement;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const videoVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col">
      <MobileView>
        <motion.div
          className="flex flex-col w-screen items-center justify-around gap-10 relative px-3 mt-[-70px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center justify-center relative h-[155px]">
            <video
              id="about-video"
              className="h-[155px] rounded-lg"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
            />
            <button
              className="absolute bottom-0 right-0 flex justify-center items-center rounded-lg ml-[-75px] w-[48px] h-[35px] bg-primary z-[1]"
              onClick={handleTogglePlay}
            >
              {isPlaying ? (
                <PauseCircle className="self-center text-[12px] z-20" />
              ) : (
                <PlayCircle className="self-center text-[12px] z-20" />
              )}
            </button>
          </div>
          <motion.div
            className="flex flex-col items-center justify-center text-justify px-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            <div className="text-primary text-[30px] font-black leading-normal capitalize mb-4">
              Our Story
            </div>
            <p className="text-[#04536c] text-[16px] mb-4">
              At Shree Radhe PG, we understand student life. Founded by Rahul
              Tomar, with over 15 years of experience in the PG industry,
              we&apos;ve seen firsthand the challenges students face.
              That&apos;s why we&apos;ve created more than just accommodation –
              we&apos;ve built a home away from home. Our mission is simple:
              provide the best food, luxurious living, and a positive
              environment where students can thrive. We believe that comfortable
              living and a supportive atmosphere are key to helping you make the
              most of your college years. Choose Shree Radhe PG and enjoy your
              studies while we take care of the rest.
            </p>
           
          </motion.div>
        </motion.div>
      </MobileView>
      <TabView>
        <div className="flex w-screen items-center justify-around gap-10 relative mb-[100px]">
          <div className="flex items-center justify-center relative h-[455px]">
            <motion.video
              id="about-video"
              className="h-[455px] z-[0] rounded-lg"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              initial="hidden"
              animate="visible"
              variants={videoVariants}
            />
            <motion.button
              className="absolute bottom-0 right-0 flex justify-center items-center rounded-lg ml-[-75px] w-[88px] h-[65px] bg-primary z-10"
              onClick={handleTogglePlay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? (
                <PauseCircle className="self-center text-[24px] z-20" />
              ) : (
                <PlayCircle className="self-center text-[24px] z-20" />
              )}
            </motion.button>
          </div>
          <motion.div
            className="flex flex-col items-center justify-center text-justify"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="text-primary text-[30px] font-black leading-normal capitalize mb-4">
              Our Story
            </div>
            <p className="text-[#04536c] text-[16px] mb-4 w-[600px]">
              At Shree Radhe PG, we understand student life. Founded by Rahul
              Tomar, with over 15 years of experience in the PG industry,
              we&apos;ve seen firsthand the challenges students face.
              That&apos;s why we&apos;ve created more than just accommodation –
              we&apos;ve built a home away from home. Our mission is simple:
              provide the best food, luxurious living, and a positive
              environment where students can thrive. We believe that comfortable
              living and a supportive atmosphere are key to helping you make the
              most of your college years. Choose Shree Radhe PG and enjoy your
              studies while we take care of the rest.
              {!showFullText && <span> ...</span>}
              {showFullText && (
                <span>
                  {" "}
                  We believe that comfortable living and a supportive atmosphere
                  are key to helping you make the most of your college years.
                  Choose Shree Radhe PG and enjoy your studies while we take
                  care of the rest. Our mission is simple: provide the best
                  food, luxurious living, and a positive environment where
                  students can thrive. We believe that comfortable living and a
                  supportive atmosphere are key to helping you make the most of
                  your college years. Choose Shree Radhe PG and enjoy your
                  studies while we take care of the rest.
                </span>
              )}
            </p>

            <IconButton
              icon={showFullText ? ChevronUp : ChevronDown}
              text={showFullText ? "Show Less" : "Read More"}
              variant="primary"
              width="180px"
              height="50px"
              onClick={toggleText}
            />
          </motion.div>
        </div>
      </TabView>
      <DesktopView>
        <div className="flex w-screen items-center justify-around gap-10 relative mb-[100px]">
          <div className="flex items-center justify-center relative h-[455px]">
            <motion.video
              id="about-video"
              className="h-[455px] z-[0] rounded-lg"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              initial="hidden"
              animate="visible"
              variants={videoVariants}
            />
            <motion.button
              className="absolute bottom-0 right-0 flex justify-center items-center rounded-lg ml-[-75px] w-[88px] h-[65px] bg-primary z-10"
              onClick={handleTogglePlay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? (
                <PauseCircle className="self-center text-[24px] z-20" />
              ) : (
                <PlayCircle className="self-center text-[24px] z-20" />
              )}
            </motion.button>
          </div>
          <motion.div
            className="flex flex-col items-center justify-center text-justify"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="text-primary text-[30px] font-black leading-normal capitalize mb-4">
              Our Story
            </div>
            <p className="text-[#04536c] text-[16px] mb-4 w-[600px]">
              At Shree Radhe PG, we understand student life. Founded by Rahul
              Tomar, with over 15 years of experience in the PG industry,
              we&apos;ve seen firsthand the challenges students face.
              That&apos;s why we&apos;ve created more than just accommodation –
              we&apos;ve built a home away from home. Our mission is simple:
              provide the best food, luxurious living, and a positive
              environment where students can thrive. We believe that comfortable
              living and a supportive atmosphere are key to helping you make the
              most of your college years. Choose Shree Radhe PG and enjoy your
              studies while we take care of the rest.
              {!showFullText && <span> ...</span>}
              {showFullText && (
                <span>
                  {" "}
                  We believe that comfortable living and a supportive atmosphere
                  are key to helping you make the most of your college years.
                  Choose Shree Radhe PG and enjoy your studies while we take
                  care of the rest. Our mission is simple: provide the best
                  food, luxurious living, and a positive environment where
                  students can thrive. We believe that comfortable living and a
                  supportive atmosphere are key to helping you make the most of
                  your college years. Choose Shree Radhe PG and enjoy your
                  studies while we take care of the rest.
                </span>
              )}
            </p>

            <IconButton
              icon={showFullText ? ChevronUp : ChevronDown}
              text={showFullText ? "Show Less" : "Read More"}
              variant="primary"
              width="180px"
              height="50px"
              onClick={toggleText}
            />
          </motion.div>
        </div>
      </DesktopView>
      <Footer />
    </div>
  );
};

export default AboutPage;

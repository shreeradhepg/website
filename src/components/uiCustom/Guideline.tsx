import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import IconButton from "./IconButton";

interface GenderGuide {
  dos: string[];
  donts: string[];
}

const BoysGuide: GenderGuide = {
  dos: [
    "Respect local culture and customs",
    "Keep your living space clean and organized",
    "Pay rent and utilities on time",
    "Participate in maintaining common areas",
    "Be considerate of noise levels, especially at night",
    "Inform the owner if you'll be away for extended periods",
    "Use water and electricity responsibly",
    "Follow safety protocols, including locking doors and windows",
    "Resolve conflicts with roommates amicably",
    "	Respect the privacy of other residents",
  ],
  donts: [
    "Don't smoke inside the building",
    "Don't consume alcohol it’s prohibited by PG rules",
    "Don't invite guests without permission",
    "Don't damage PG property",
    "Don't engage in illegal activities",
    "Don't play very loud music or create disturbances",
    "Don't leave common areas messy after use",
  ],
};

const GirlsGuide: GenderGuide = {
  dos: [
    "	Keep emergency contacts saved on your phone",
    "	Lock your room when leaving",
    "	Maintain cleanliness in your room and common areas",
    "	Pay rent and dues on time",
    "	Respect other residents' privacy and space",
    "	Use shared facilities responsibly",
    "	Report maintenance issues promptly",
    "	Communicate politely with PG owner/manager",
    "	Create a conducive study environment",
  ],
  donts: [
    "Don't invite guests without permission",
    "Don't allow overnight stays without prior approval",
    "Don't make excessive noise, especially at night",
    "Don't smoke or consume alcohol on the premises",
    "Don't leave valuable items unattended",
    "Don't share your room keys with others",
    "Don't waste electricity or water",
    "Don't engage in any illegal activities",
  ],
};

interface GuidelinesPageProps {
  selectedGender: any;
}

const GuidelinesPage: React.FC<GuidelinesPageProps> = ({ selectedGender }) => {
  const [showGuidelines, setShowGuidelines] = useState(true);
  const currentGuide = selectedGender === "female" ? GirlsGuide : BoysGuide;

  return (
    <>
      <div className="flex self-end">
        <IconButton
          icon={showGuidelines ? ChevronUp : ChevronDown}
          text={`Guidelines`}
          onClick={() => setShowGuidelines(!showGuidelines)}
          width="200px"
          height="60px"
        />
      </div>
      <div className="flex flex-col  items-center justify-center w-full  py-24">
        {showGuidelines && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "60vh", opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 60 }}
            className="flex flex-col items-center justify-center w-80vw overflow-y-scroll h-[90vh] customScrollBar  bg-white rounded-xl px-8 py-44"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-col items-center justify-center rounded-xl p-8 mt-36"
            >
              <h1 className="text-2xl font-bold mb-4">
                {selectedGender === "female" ? "Girls" : "Boys"} Guidelines
              </h1>
              <div className="flex justify-between w-full">
                <div className="w-1/2 pr-4">
                  <h2 className="text-lg font-bold mb-2">Dos</h2>
                  <ul className="list-none">
                    {currentGuide.dos.map((item, index) => (
                      <li key={index} className="mb-2 gap-2 flex items-center">
                        <span className="text-primary">✔</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-1/2 pl-4">
                  <h2 className="text-lg font-bold mb-2">Donts</h2>
                  <ul className="list-none">
                    {currentGuide.donts.map((item, index) => (
                      <li key={index} className="mb-2 flex items-center">
                        <FaTimesCircle className="text-red-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default GuidelinesPage;

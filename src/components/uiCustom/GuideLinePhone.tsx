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

const GuidelinesPagePhone: React.FC<GuidelinesPageProps> = ({
  selectedGender,
}) => {
  const [showGuidelines, setShowGuidelines] = useState(false);
  const currentGuide = selectedGender === "female" ? GirlsGuide : BoysGuide;

  return (
    <>
      <div className="flex justify-center mt-4">
        <IconButton
          icon={showGuidelines ? ChevronUp : ChevronDown}
          text={`Guidelines`}
          onClick={() => setShowGuidelines(!showGuidelines)}
          width="150px"
          height="50px"
        />
      </div>
      <div className="flex flex-col items-center w-full h-[80vh] py-4">
        {showGuidelines && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "60vh", opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 120 }}
            className="w-11/12 h-5/6 bg-white rounded-xl p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-col items-center rounded-xl p-2"
            >
              <h1 className="text-xl font-bold mb-2">
                {selectedGender === "female" ? "Girls" : "Boys"} Guidelines
              </h1>
              <div className="flex flex-col sm:flex-row justify-between w-full">
                <div className="w-full sm:w-1/2 sm:pr-2 mb-2 sm:mb-0">
                  <h2 className="text-base font-bold mb-1">Dos</h2>
                  <ul className="list-none text-sm">
                    {currentGuide.dos.map((item, index) => (
                      <li key={index} className="mb-2 gap-2 flex items-center">
                        <span className="text-primary">✔</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full sm:w-1/2 sm:pl-2">
                  <h2 className="text-base font-bold mb-1">Donts</h2>
                  <ul className="list-none text-sm">
                    {currentGuide.donts.map((item, index) => (
                      <li key={index} className="mb-1 flex items-center">
                        <FaTimesCircle className="text-red-500 mr-1" />
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

export default GuidelinesPagePhone;

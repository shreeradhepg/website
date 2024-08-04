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
    "Respect others' personal space.",
    "Listen actively when someone is speaking.",
    "Use polite language when communicating.",
    "Help others when needed.",
    "Maintain good hygiene.",
    "Be punctual.",
    "Follow school rules.",
    "Be honest and truthful.",
    "Participate in group activities.",
    "Show kindness and empathy.",
  ],
  donts: [
    "Do not engage in physical fights.",
    "Avoid using disrespectful language.",
    "Do not bully others.",
    "Avoid interrupting others.",
    "Do not litter.",
    "Avoid cheating.",
    "Do not spread rumors.",
    "Avoid exclusion of others.",
    "Do not skip classes.",
    "Avoid negative peer pressure.",
  ],
};

const GirlsGuide: GenderGuide = {
  dos: [
    "Support and encourage others.",
    "Communicate assertively and respectfully.",
    "Respect others' opinions and perspectives.",
    "Help classmates and friends.",
    "Maintain good personal hygiene.",
    "Be on time.",
    "Follow school guidelines.",
    "Be truthful and honest.",
    "Engage in group projects.",
    "Be compassionate and understanding.",
  ],
  donts: [
    "Avoid spreading rumors or gossip.",
    "Do not judge others based on appearance.",
    "Avoid excluding others from activities.",
    "Do not interrupt while others are talking.",
    "Do not litter or create a mess.",
    "Avoid dishonest behavior.",
    "Do not engage in negative talk.",
    "Avoid making fun of others.",
    "Do not skip responsibilities.",
    "Avoid negative influences.",
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
                      <li key={index} className="mb-1 flex items-center">
                        <FaCheckCircle className="text-green-500 mr-1" />
                        {item}
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

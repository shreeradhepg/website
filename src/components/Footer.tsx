// src/components/Footer.tsx

"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import DesktopView from "./views/desktopView";
import MobileView from "./views/mobileView";
import TabView from "./views/tabView";

interface FooterProps {
  // Add any props you need here
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="pt-20">
      <MobileView>
        <div className="w-screen bg-primary flex flex-col items-center justify-center py-12 ">
          <div className="flex flex-col items-center space-y-6">
            {/* About Section */}
            <div className="text-center">
              <h5 className="text-xl font-bold text-white">About</h5>
              <p className="mt-2 text-white text-justify">
                To provide a secure, comfortable,
                <br />
                and supportive living environment
                <br />
                that promotes academic success,
                <br />
                personal growth, and community
                <br />
                among post-graduate students.
              </p>
              <div className="mt-4 flex space-x-4">
                <FontAwesomeIcon
                  className="text-white w-[25px] h-[25px] hover:text-white"
                  icon={faFacebookF}
                />
                <FontAwesomeIcon
                  className="text-white w-[25px] h-[25px] hover:text-white"
                  icon={faTwitter}
                />
                <FontAwesomeIcon
                  className="text-white w-[25px] h-[25px] hover:text-white"
                  icon={faInstagram}
                />
                <FontAwesomeIcon
                  className="text-white w-[25px] h-[25px] hover:text-white"
                  icon={faYoutube}
                />
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="text-center">
              <h5 className="text-xl font-bold mt-8 text-white">Quick Links</h5>
              <ul className="mt-2 space-y-2 text-white">
                <li>
                  <a href="/" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/amenities" className="hover:text-white">
                    Facilities
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/location" className="hover:text-white">
                    Location
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MobileView>
      <TabView>
        <div className="w-screen bg-primary  flex flex-row items-center justify-between px-20 h-[40vh]">
          <div className="flex  justify-between w-screen">
            {/* About Section */}
            <div>
              <h5 className="text-xl font-bold text-white">About</h5>
              <p className="mt-2 text-white">
                To provide a secure, comfortable, and supportive living
                environment
                <br />
                that promotes academic success, personal growth, and community
                <br />
                among post-graduate students.
              </p>
              <div className="mt-4 flex space-x-4">
                <FontAwesomeIcon
                  className="text-white w-[25px] h-[25px] hover:text-white"
                  icon={faFacebookF}
                />
                <FontAwesomeIcon
                  className="text-white w-[25px] h-[25px] hover:text-white"
                  icon={faTwitter}
                />
                <FontAwesomeIcon
                  className="text-white w-[25px] h-[25px] hover:text-white"
                  icon={faInstagram}
                />
                <FontAwesomeIcon
                  className="text-white w-[25px] h-[25px] hover:text-white"
                  icon={faYoutube}
                />
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <h5 className="text-xl font-bold text-white">Quick Links</h5>
              <ul className="mt-2 space-y-2 text-white">
                <li>
                  <a href="/" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Amenities
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TabView>
      <DesktopView>
        <div className="w-screen bg-primary  flex flex-row items-center justify-between px-20 h-[40vh]">
          <div className="flex  justify-between w-screen">
            {/* About Section */}
            <div>
              <h5 className="text-xl font-bold text-white">About</h5>
              <p className="mt-2 text-white">
                To provide a secure, comfortable, and supportive living
                environment
                <br />
                that promotes academic success, personal growth, and community
                <br />
                among post-graduate students.
              </p>
              <div className="mt-4 flex space-x-4">
                <FontAwesomeIcon
                  className="text-white w-[25px] h-[25px] hover:text-white"
                  icon={faFacebookF}
                />
                <FontAwesomeIcon
                  className="text-white w-[25px] h-[25px] hover:text-white"
                  icon={faTwitter}
                />
                <FontAwesomeIcon
                  className="text-white w-[25px] h-[25px] hover:text-white"
                  icon={faInstagram}
                />
                <FontAwesomeIcon
                  className="text-white w-[25px] h-[25px] hover:text-white"
                  icon={faYoutube}
                />
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <h5 className="text-xl font-bold text-white">Quick Links</h5>
              <ul className="mt-2 space-y-2 text-white">
                <li>
                  <a href="/" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/amenities" className="hover:text-white">
                    Facilities
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/location" className="hover:text-white">
                    Location
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DesktopView>
    </footer>
  );
};

export default Footer;

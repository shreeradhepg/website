import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

interface FooterProps {
  // Add any props you need here
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#FFFCF2] py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:space-x-10">
          {/* About Section */}
          <div className="mb-6 md:mb-0">
            <h5 className="text-xl font-bold text-gray-800">About</h5>
            <p className="mt-2 text-[#04536C]">
              To provide a secure, comfortable, and supportive living environment<br/>
              that promotes academic success, personal growth, and community<br/>
              among post-graduate students.
            </p>
            <div className="mt-4 flex space-x-4">
              <FontAwesomeIcon className="text-gray-500 w-[25px] h-[25px] hover:text-gray-700" icon={faFacebookF} />
              <FontAwesomeIcon className="text-gray-500 w-[25px] h-[25px] hover:text-gray-700" icon={faTwitter} />
              <FontAwesomeIcon className="text-gray-500 w-[25px] h-[25px] hover:text-gray-700" icon={faInstagram} />
              <FontAwesomeIcon className="text-gray-500 w-[25px] h-[25px] hover:text-gray-700" icon={faYoutube} />
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0 mt-6 md:mt-0 md:ml-12">
            <h5 className="text-xl font-bold text-gray-800">Quick Links</h5>
            <ul className="mt-2 space-y-2 text-[#FF5200]">
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  Symptoms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  Prevention
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  About Coronavirus
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer';
import WhatWeProvide from './WhatWeProvide';
import AboutPage from './AboutPage';
import WhatPeopleSayAboutUs from './WhatPeopleSayAboutUs';
import Reviews from './Reviews';
import About from './About';
import Contact from './Contact';
import Facilities from './Facilities';

const Pages: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <div className='px-[90px]'>
        <Navbar />
      </div>
      <div className='mt-[48px] px-[90px]'>
        <AboutPage />
      </div>
      <div className='mt-[48px] px-[90px]'>
        <Facilities />
      </div>
      <div className='mt-[48px] px-[90px]'>
        <WhatWeProvide />
      </div>
      <div className='mt-[48px] px-[90px]'>
        <WhatPeopleSayAboutUs />
      </div>
      <div className='mt-[48px] px-[90px]'>
        <Reviews />
      </div>
      <div className='mt-[48px] px-[90px]'>
        <About />
      </div>
      <div className='mt-[48px] px-[90px]'>
        <Contact />
      </div>
      <div className='mt-[48px] px-[90px]'>
        <Footer />
      </div>
    </div>
  );
};

export default Pages;

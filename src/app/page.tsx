// pages.tsx


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
    <div>
      <div>
        <Navbar />
      </div>
      <div className='mt-[48px]'>
        <AboutPage />
      </div>
      <div className='mt-[48px] px-20'>
        <Facilities />
      </div>
      <div className='mt-[48px]'>
      <WhatWeProvide/>
      </div>
      <div className='mt-[48px] px-20'>
      <WhatPeopleSayAboutUs/>
      </div>
      <div className='mt-[48px] px-20'>
      <Reviews/>
      </div>
      <div className='mt-[48px] px-20'>
      <About/>
      </div>
      <div className='mt-[48px] px-20'>
      <Contact/>
      </div>
      <div className='mt-[48px]'>
        <Footer />
      </div>
    </div>
  );
};

export default Pages;

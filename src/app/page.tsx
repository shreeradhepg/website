// pages.tsx

import React from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer';
import WhatWeProvide from './WhatWeProvide';
import AboutPage from './AboutPage';
import WhatPeopleSayAboutUs from './WhatPeopleSayAboutUs';
import Reviews from './Reviews';
import About from './About';

const Pages: React.FC = () => {
  return (
    <div className='bg-[#FFFCF2]'>
      <div>
        <Navbar />
      </div>
      <div className='mt-[48px] bg-[#FFFCF2]'>
        <AboutPage />
      </div>
      <div className='mt-[48px]'>
      <WhatWeProvide/>
      </div>
      <div className='mt-[48px] px-20 bg-[#FFFCF2]'>
      <WhatPeopleSayAboutUs/>
      </div>
      <div className='mt-[48px] px-20'>
      <Reviews/>
      </div>
      <div className='mt-[48px] px-20'>
      <About/>
      </div>
      <div className='mt-[48px]'>
        <Footer />
      </div>
    </div>
  );
};

export default Pages;

// pages.tsx

import React from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer';
import WhatWeProvide from './WhatWeProvide';
import AboutPage from './AboutPage';

const Pages: React.FC = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <AboutPage />
      </div>
      <div>
      <WhatWeProvide/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Pages;

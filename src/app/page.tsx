// pages.tsx

import React from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer';

const Pages: React.FC = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Pages;

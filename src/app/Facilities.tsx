'use client';
import React, { useState } from 'react';

const Facilities: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-4">
        <div className="w-[16.625rem] h-[5.75rem] mr-[40px]">
          <div className="flex items-center justify-center w-full h-full">
            <img src="https://img.icons8.com/?size=100&id=60027&format=png&color=FF7433" alt="Wi-Fi Icon" width={50} height={50} />
            <div className='flex flex-col ml-[10px]'>
              <div className="text-[#ff7433] font-['Mulish'] text-[1.0625rem] font-black leading-[1.375rem] capitalize">Wi-Fi</div>
              <div className="w-[10.3125rem] text-[#04536c] font-['Mulish'] text-[.9375rem] leading-[1.375rem]">Amet minim mollit non</div>
            </div>
          </div>
        </div>
        <div className="w-[16.625rem] h-[5.75rem] mr-[40px]">
          <div className="flex items-center justify-center w-full h-full">
            <img src="https://img.icons8.com/?size=100&id=F2f6HZQRUyKY&format=png&color=FF7433" alt="Parking Icon" width={50} height={50} />
            <div className='flex flex-col ml-[10px]'>
              <div className="text-[#ff7433] font-['Mulish'] text-[1.0625rem] font-black leading-[1.375rem] capitalize">Parking</div>
              <div className="w-[10.3125rem] text-[#04536c] font-['Mulish'] text-[.9375rem] leading-[1.375rem]">Lorem ipsum dolor sit</div>
            </div>
          </div>
        </div>
        <div className="w-[16.625rem] h-[5.75rem] mr-[40px]">
          <div className="flex items-center justify-center w-full h-full">
            <img src="https://img.icons8.com/?size=100&id=9773&format=png&color=FF7433" alt="Gym Icon" width={50} height={50} />
            <div className='flex flex-col ml-[10px]'>
              <div className="text-[#ff7433] font-['Mulish'] text-[1.0625rem] font-black leading-[1.375rem] capitalize">Gym</div>
              <div className="w-[10.3125rem] text-[#04536c] font-['Mulish'] text-[.9375rem] leading-[1.375rem]">Sed do eiusmod tempor</div>
            </div>
          </div>
        </div>
        <div className="w-[16.625rem] h-[5.75rem] mr-[10px]">
          <div className="flex items-center justify-center w-full h-full">
            <img src="https://img.icons8.com/?size=100&id=IcTW1MVtUaxj&format=png&color=FF7433" alt="Pool Icon" width={50} height={50} />
            <div className='flex flex-col ml-[10px]'>
              <div className="text-[#ff7433] font-['Mulish'] text-[1.0625rem] font-black leading-[1.375rem] capitalize">Pool</div>
              <div className="w-[10.3125rem] text-[#04536c] font-['Mulish'] text-[.9375rem] leading-[1.375rem]">Incididunt ut labore et</div>
            </div>
          </div>
        </div>
        <div className="w-[50px] h-[50px]">
          <button 
            onClick={handleShowMore} 
            className="flex items-center justify-center w-full h-full border-2 border-[rgba(255,116,51,0.68)] rounded-[5px]"
          >
            <img src="https://img.icons8.com/?size=100&id=99992&format=png&color=FF7433" alt="Plus Icon" width={30} height={30} />
          </button>
        </div>
      </div>
      {showMore && (
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <div className="w-[16.625rem] h-[5.75rem] mr-[40px]">
            <div className="flex items-center justify-center w-full h-full">
              <img src="https://img.icons8.com/?size=100&id=11222&format=png&color=FF7433" alt="Library Icon" width={50} height={50} />
              <div className='flex flex-col ml-[10px]'>
                <div className="text-[#ff7433] font-['Mulish'] text-[1.0625rem] font-black leading-[1.375rem] capitalize">Library</div>
                <div className="w-[10.3125rem] text-[#04536c] font-['Mulish'] text-[.9375rem] leading-[1.375rem]">Ut enim ad minim veniam</div>
              </div>
            </div>
          </div>
          <div className="w-[16.625rem] h-[5.75rem] mr-[40px]">
            <div className="flex items-center justify-center w-full h-full">
              <img src="https://img.icons8.com/?size=100&id=FVQ3xoP9VcTG&format=png&color=FF7433" alt="Cafeteria Icon" width={50} height={50} />
              <div className='flex flex-col ml-[10px]'>
                <div className="text-[#ff7433] font-['Mulish'] text-[1.0625rem] font-black leading-[1.375rem] capitalize">Cafeteria</div>
                <div className="w-[10.3125rem] text-[#04536c] font-['Mulish'] text-[.9375rem] leading-[1.375rem]">Quis nostrud exercitation</div>
              </div>
            </div>
          </div>
          {/* Add more facilities as needed */}
        </div>
      )}
    </div>
  );
};

export default Facilities;

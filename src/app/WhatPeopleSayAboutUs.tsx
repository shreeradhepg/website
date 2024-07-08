"use client";
import React, { useState } from 'react';

const WhatPeopleSayAboutUs: React.FC = () => {
    const images = [
        'https://th.bing.com/th/id/OIP.-1-PcY2jhF74MvZK4xctRwHaE8?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP.tBEwytBubS8G1IHN2bPJkgHaE6?rs=1&pid=ImgDetMain', // Replace with actual URLs
        'https://th.bing.com/th/id/OIP.ViUAuItOO54F6HlshFw-fQHaFI?rs=1&pid=ImgDetMain'
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePreviousClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="flex flex-col items-center justify-center md:w-[1327px] md:h-[574px] w-full">
            {/* Title row */}
            <div className="text-[#ff7433] font-Mulish text-2xl font-extrabold leading-normal capitalize">
                accommodation
            </div>
            <div className="flex justify-between w-full px-4">
                <div className="flex space-x-4">
                    <div className="text-[#04536c] font-Mulish text-2xl font-extrabold leading-normal capitalize">
                        {`${currentImageIndex + 1} / ${images.length}`}
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div
                        className="button flex items-center rounded-[0.625rem] bg-[#96948f] text-[#fffcf2] font-Livvic text-sm font-medium uppercase px-4 py-2 cursor-pointer"
                        onClick={handlePreviousClick}
                    >
                        Previous
                    </div>
                    <div
                        className="button-1 flex items-center rounded-[0.625rem] bg-[#ff7433] text-[#fffcf2] font-Livvic text-sm font-medium uppercase px-4 py-2 cursor-pointer"
                        onClick={handleNextClick}
                    >
                        NEXT
                    </div>
                </div>
            </div>

            {/* Background image */}
            <div
                className="w-full md:h-[400px] bg-cover bg-center mt-4 md:mt-[16px]"
                style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            >
                {/* Empty div for full-width and height */}
            </div>
        </div>
    );
};

export default WhatPeopleSayAboutUs;

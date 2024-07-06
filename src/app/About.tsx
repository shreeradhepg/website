'use client';
import React, { useState } from 'react';

const About: React.FC = () => {
    const [texts, setTexts] = useState([
        {
            title: 'Prime Location',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n' +
                'dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Magna fermentum\n' +
                'iaculis eu non diam phasellus vestibulum lorem.'
        },
        {
            title: 'Best Facilities',
            content:
                'New text content after clicking on 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n' +
                'dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Magna fermentum\n' +
                'iaculis eu non diam phasellus vestibulum lorem.'
        },
        {
            title: 'Best Food',
            content:
                'New text content after clicking on 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n' +
                'dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Magna fermentum\n' +
                'iaculis eu non diam phasellus vestibulum lorem.'
        }
    ]);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const handleTextChange = (delta: number) => {
        const newIndex = currentTextIndex + delta;
        if (newIndex >= 0 && newIndex < texts.length) {
            setCurrentTextIndex(newIndex);
        }
    };

    return (
        <div className="flex flex-col items-center pt-[2.625rem] pb-[2.625rem] w-full">
            {/* First row: About Us */}
            <div className="flex justify-center w-full">
                <div className="text-[#ff7433] font-['Mulish'] text-3xl font-black leading-[normal] capitalize">
                    About Us
                </div>
            </div>

            {/* Second row: Empowering Safe text */}
            <div className="flex justify-center w-full mt-4">
                <div className="text-[#04536c] font-['Mulish'] text-[.9375rem] leading-[1.4375rem]">
                    Empowering Safe and Respectful Living Everywhere
                </div>
            </div>

            {/* Third row: Timeline and Prime Location */}
            <div className="flex justify-center items-start w-full mt-8">
                {/* Timeline */}
                <div className="flex flex-col items-center gap-6">
                    {/* Number 1 */}
                    <div
                        className="flex items-center justify-center w-[73px] h-[73px] bg-[#FF7433] rounded-full cursor-pointer"
                        onClick={() => handleTextChange(-1)}
                    >
                        <div className="text-[#fffcf2] font-['Mulish'] text-2xl leading-[normal]">1</div>
                    </div>
                    {/* Line */}
                    <div className="w-[0.0625rem] h-[7.625rem] bg-[#04536c]" />
                    {/* Number 2 */}
                    <div
                        className="flex items-center justify-center w-[73px] h-[73px] bg-[#FF7433] rounded-full cursor-pointer"
                        onClick={() => handleTextChange(1)}
                    >
                        <div className="text-[#fffcf2] font-['Mulish'] text-2xl leading-[normal]">2</div>
                    </div>
                </div>
                {/* Prime Location */}
                <div className="flex flex-col items-start lg:mt-[48px] ml-8 sm:w-auto sm:ml-8 mt-0  ">
                    <div className="text-black font-['Mulish'] text-3xl font-bold leading-[65.449px]">
                        {texts[currentTextIndex].title}
                    </div>
                    <p className="text-[#04536c] font-['Mulish'] text-[.9375rem] leading-[1.4375rem]">
                        {texts[currentTextIndex].content.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;

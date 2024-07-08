'use client';
import React, { useState } from 'react';
import { Button } from 'antd';
import { PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    const video = document.getElementById('about-video') as HTMLVideoElement;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative">
      <div className="w-full md:w-1/2 flex items-center justify-center relative h-[555px]">
        <video
          id="about-video"
          className="w-full h-[555px] rounded-lg"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
        <Button
          type="primary"
          shape="square"
          className="absolute bottom-24 right-0"
          onClick={handleTogglePlay}
          icon={isPlaying ? <PauseCircleFilled style={{ fontSize: '24px', zIndex: 2 }} /> : <PlayCircleFilled style={{ fontSize: '24px', zIndex: 2 }} />}
          style={{ width: '88px', height: '65px', backgroundColor: "#ff7433", zIndex: 3 }}
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center">
        <div className="text-[#ff7433] font-Mulish text-[30px] font-black leading-[normal] capitalize mb-4">
          Our Story
        </div>
        <p className="text-[#04536c] font-Mulish text-16 leading-[1.4375rem] mb-4">
          Amet minim mollit non deserunt ullamco est sit aliqua
          <br />
          dolor do amet sint. Velit officia consequat duis enimt
          <br />
          veli mollit. Exercitation Amet minim mollit non deserunt
          <br />
          Deserunt ullamco est sit Velit officia consequat duis enim
        </p>
        <div className="py-3 px-8 rounded-2xl bg-[#ff7433] text-white font-Mulish text-.8125rem leading-normal uppercase mb-4">
          Read more
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

import React from 'react';
import { Button } from 'antd';
import { WifiOutlined,  CleanOutlined,  SecurityOutlined,  ParkingOutlined } from '@ant-design/icons';

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="w-full md:w-1/2">
        <div className="relative">
          <video
            className="w-full h-full rounded-lg"
            controls
            src="https://www.w3schools.com/html/mov_bbb.mp4"
          />
          <Button
            type="primary"
            shape="circle"
            icon={<PlayCircleOutlined />}
            className="absolute bottom-4 right-4"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="text-2xl font-bold mb-4">Our Story</div>
        <p className="text-gray-600 mb-4">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation Amet minim mollit non deserunt Deserunt ullamco est sit Velit officia consequat duis enim
        </p>
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2">
            <WifiOutlined className="text-lg text-blue-600" />
            <span>Wi-Fi</span>
          </div>
          <div className="flex items-center gap-2">
            <CleanOutlined className="text-lg text-blue-600" />
            <span>Cleaning</span>
          </div>
          <div className="flex items-center gap-2">
            <SecurityOutlined className="text-lg text-blue-600" />
            <span>Security</span>
          </div>
          <div className="flex items-center gap-2">
            <ParkingOutlined className="text-lg text-blue-600" />
            <span>Parking</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
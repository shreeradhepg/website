'use client';
import React from 'react';

const Contact: React.FC = () => (
  <div className="container">
    <div className="header flex flex-col flex-shrink-0 w-[1347px] h-[555px] bg-gradient-to-b from-[#FF844A]/[.85] to-[#99461F]/[.85] justify-center">
      <div className='flex justify-between mr-[48px] mt-[0px]'>
        <div className='flex flex-col ml-[48px]'>
          <div className="title___description flex flex-col flex-shrink-0 items-start w-[15.3125rem] h-[5.5rem]">
            <div className="title flex flex-col items-start">
              <div className="Gothic text-white font-[century] text-[7.603px] mb-[8px] leading-[11.405px] uppercase">Contact Now</div>
              <div className="text-white font-[Livvic] text-[1.1875rem] mb-[17px] font-bold leading-[normal]">GET IN TOUCH NOW</div>
            </div>
            <div className="Gothic text-white font-[century] text-[6.843px] leading-[10.264px]">
              Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea dictumst. Duis porta, quam ut finibus ultrices.
            </div>
          </div>
          <div className="frame_4 flex flex-shrink-0 items-start mt-[13px] px-[48px] w-[12.8125rem] h-[1.9375rem]">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="Facbook flex-shrink-0 ml-[10px] w-[1.8125rem] h-[1.8125rem] bg-[url('https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png')]"></a>
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="Whatsapp flex-shrink-0 ml-[10px] w-[1.8125rem] h-[1.8125rem] bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/1280px-WhatsApp_logo-color-vertical.svg.png')]"></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="Instagram flex-shrink-0 ml-[10px] w-[1.8125rem] h-[1.8125rem] bg-[url('https://www.gatewayspesach.org/wp-content/uploads/2019/08/600px-Instagram_logo_2016.svg_-540x540.png')]"></a>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 items-start gap-5 w-[12.9375rem] h-[11.375rem]">
          <div className="frame_203 flex flex-col justify-center items-start">
            <div className="Gothic text-white font-[century] text-[7.034px] leading-[15.072px] uppercase">Phone</div>
            <div className="frame_234 flex flex-col justify-center items-start">
              <div className="text-white font-[Livvic] text-[10.048px] font-medium leading-[13.565px]">+880123456789</div>
              <div className="text-white font-[Livvic] text-[10.048px] font-medium leading-[13.565px]">+880987654321</div>
            </div>
          </div>
          <div className="frame_233 flex flex-col justify-center items-start">
            <div className="Gothic text-white font-[century] text-[7.034px] leading-[15.072px] uppercase">Email</div>
            <div className="frame_235 flex flex-col justify-center items-start text-white font-[Livvic] text-[10.048px] font-medium leading-[13.565px]">
              needhelp@company.com
            </div>
          </div>
          <div className="frame_234-1 flex flex-col justify-center items-start">
            <div className="Gothic text-white font-[century] text-[7.034px] leading-[15.072px] uppercase">Address</div>
            <div className="frame_235-1 flex flex-col justify-center items-start text-white font-[Livvic] text-[10.048px] font-medium leading-[13.565px]">
              Road No. 8, Niketan, Dhaka, Bangladesh
            </div>
          </div>
        </div>
      </div>
      <div className="map-container flex justify-center ml-[48px] mr-[48px]">
        <iframe
          className="w-full h-[300px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.292856649765!2d-122.41941508468168!3d37.774929279758606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c79e8f67f%3A0x3b8a0a4d096b2d84!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1597698233580!5m2!1sen!2sus"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
          style={{ border: 0 }}
        />
      </div>
    </div>
  </div>
);

export default Contact;

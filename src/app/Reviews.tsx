"use client";
import React, { useState } from "react";

const Reviews: React.FC = () => {
  const reviews = [
    {
      image: "https://th.bing.com/th/id/OIP.IJmJDoQDn5ib3F7I83jqhAHaLG?w=683&h=1024&rs=1&pid=ImgDetMain",
      text: "“Lorem ipsum dolor sit amet consectetur. Tortor tempus cursus leo dictumst elementum. Sagittis elit turpis dignissim turpis tristique venenatis. Tempor id commodo odio nunc id volutpat libero. Ut hendrerit malesuada netus sapien dictum sapien nibh. Cras laoreet risus mus mi commodo volutpat quis neque. Scelerisque at in in id donec ornare velit. Posuere amet lobortis volutpat purus mauris. Tortor magna non turpis ultricies iaculis rhoncus. Volutpat lectus proin pellentesque platea.”",
      name: "Krish",
      role: "Customer"
    },
    {
      image: "https://th.bing.com/th/id/OIP.uXA5wSH1aIT_e3Blwtj1EgHaJc?rs=1&pid=ImgDetMain", // Replace with actual URL
      text: "“Another review text here. This is a sample review for demonstration purposes. Replace with actual review text.”",
      name: "Jane Doe",
      role: "Student"
    },
    {
      image: "https://i.pinimg.com/474x/80/8d/c2/808dc20d52fbd2871c78cf0c3a7f1bac.jpg", // Replace with actual URL
      text: "“Yet another review text here. This is another sample review for demonstration purposes. Replace with actual review text.”",
      name: "John Smith",
      role: "Teacher"
    }
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePreviousClick = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="text-[#ff7433] text-center mb-4 font-mulish text-3xl font-extrabold capitalize">
        What people say about us?
      </div>
      <div className="flex items-center justify-between gap-4">
        <div
          className="review w-[470px] h-[470.429px] ml-[80px] rounded-2xl bg-fill flex-shrink-0"
          style={{ backgroundImage: `url(${currentReview.image})` }}
        />

        <div className="grid grid-cols-1 mr-[80px] md:grid-cols-[484.21px] gap-4">
          <div className="text-[#04536c] text-justify font-century-gothic text-lg leading-[1.1875rem]">
            {currentReview.text}
          </div>
          <div className="flex items-center justify-between mt-[48px]">
            <div className="flex flex-col items-start gap-2">
              <div className="text-[#04536c] font-livvic text-2xl font-medium leading-7">
                {currentReview.name}
              </div>
              <div className="text-[#04536c] font-century-gothic text-base leading-[1.3125rem]">
                {currentReview.role}
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                <svg
                  width={28}
                  height={25}
                  viewBox="0 0 28 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handlePreviousClick}
                  className="cursor-pointer"
                >
                  <path
                    d="M27.4231 12.1191C27.4231 18.5467 21.3771 23.8146 13.8429 23.8146C6.30864 23.8146 0.262609 18.5467 0.262609 12.1191C0.262609 5.69157 6.30864 0.423681 13.8429 0.423681C21.3771 0.423681 27.4231 5.69157 27.4231 12.1191Z"
                    fill="#FF7433"
                    stroke="#FF7433"
                    strokeWidth="0.477366"
                  />
                  <path
                    d="M11.3883 12.5876H10.7467L11.2323 13.0069L12.7358 14.3054L12.7357 14.3055L12.7421 14.3107C12.7585 14.3238 12.7692 14.3378 12.7757 14.3504L12.9878 14.241L12.7757 14.3504C12.7821 14.3629 12.7848 14.3746 12.785 14.3852C12.7852 14.3958 12.7831 14.4074 12.7773 14.4196C12.7715 14.432 12.7617 14.4459 12.7463 14.4592C12.7308 14.4725 12.7105 14.4847 12.6858 14.4933C12.6611 14.5019 12.6337 14.5064 12.6055 14.506C12.5773 14.5056 12.5502 14.5002 12.5261 14.4909C12.5021 14.4817 12.4826 14.4692 12.4681 14.4557L12.4682 14.4556L12.4618 14.4501L10.2509 12.5407C10.2209 12.5147 10.2123 12.4877 10.2123 12.4683C10.2123 12.4489 10.2209 12.4218 10.2509 12.3958L12.458 10.4898C12.4903 10.4649 12.538 10.4476 12.5921 10.4484C12.6478 10.4493 12.6952 10.4689 12.7256 10.4952C12.7551 10.5207 12.7639 10.5472 12.7643 10.5663C12.7647 10.5847 12.7575 10.6097 12.7319 10.6345L11.2323 11.9296L10.7467 12.3489H11.3883H17.0209C17.0779 12.3489 17.1268 12.3688 17.158 12.3958C17.1881 12.4218 17.1968 12.4489 17.1968 12.4683C17.1968 12.4877 17.1881 12.5148 17.158 12.5408C17.1268 12.5677 17.0779 12.5876 17.0209 12.5876H11.3883Z"
                    fill="#FFFCF2"
                    stroke="#FFFCF2"
                    strokeWidth="0.477366"
                  />
                </svg>
                <svg
                  width={29}
                  height={25}
                  viewBox="0 0 29 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleNextClick}
                  className="cursor-pointer"
                >
                  <ellipse
                    cx="14.6162"
                    cy="12.1191"
                    rx="13.8189"
                    ry="11.9342"
                    fill="#FF7433"
                  />
                  <path
                    d="M15.0546 9.87207C15.1582 9.78257 15.2988 9.7323 15.4454 9.7323C15.592 9.7323 15.7325 9.78257 15.8362 9.87207L18.3236 12.0202C18.4272 12.1097 18.4854 12.2311 18.4854 12.3577C18.4854 12.4843 18.4272 12.6057 18.3236 12.6952L15.8362 14.8434C15.7319 14.9303 15.5923 14.9784 15.4474 14.9773C15.3024 14.9763 15.1638 14.926 15.0613 14.8375C14.9588 14.749 14.9007 14.6293 14.8994 14.5041C14.8982 14.379 14.9539 14.2584 15.0546 14.1684L16.5509 12.8351H11.2997C11.1531 12.8351 11.0125 12.7848 10.9088 12.6953C10.8052 12.6057 10.7469 12.4843 10.7469 12.3577C10.7469 12.2311 10.8052 12.1097 10.9088 12.0202C11.0125 11.9306 11.1531 11.8803 11.2997 11.8803H16.5509L15.0546 10.5471C14.951 10.4575 14.8927 10.3361 14.8927 10.2096C14.8927 10.083 14.951 9.96159 15.0546 9.87207Z"
                    fill="#FFFCF2"
                  />
                </svg>
              </div>
              <div className="text-[#04536c] text-sm leading-3">
                {currentReviewIndex + 1} of {reviews.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

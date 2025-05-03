import React from "react";
import expertDoctor from "../../../assets/about/challenge/counter-icon-4.png";
import problemSolve from "../../../assets/about/challenge/counter-icon-5.png";
import awardWinner from "../../../assets/about/challenge/counter-icon-6.png";

const DoctorProblemAward = () => {
  return (
    <div className="max-w-7xl mx-auto px-2">
      <div className="md:flex gap-10 py-24">
        {/* Expert Doctors*/}
        <div className="flex flex-col items-center">
          <img src={expertDoctor} alt="expert doctor" />
          <h1 className=" text-5xl font-semibold">540+</h1>
          <h3 className="flex text-[14px] text-[#04c065] font-medium items-center mb-2">
            Expert Doctors
          </h3>
          <p className="text-[#899dab] text-[15px]">
            Our clients trust Poordoct for reliable, innovative healthcare
            solutions, appreciating our support, quality service, and commitment
            to excellence.
          </p>
        </div>
        {/* Problem Solve*/}
        <div className="flex flex-col items-center">
          <img src={problemSolve} alt="problem solve" />
          <h1 className=" text-5xl font-semibold">899+</h1>
          <h3 className="flex text-[14px] text-[#04c065] font-medium items-center mb-2">
            Problem Solve
          </h3>
          <p className="text-[#899dab] text-[15px]">
            Our clients trust Poordoct for reliable, innovative healthcare
            solutions, appreciating our support, quality service, and commitment
            to excellence.
          </p>
        </div>
        {/* Award Winner*/}
        <div className="flex flex-col items-center">
          <img src={awardWinner} alt="award winner" />
          <h1 className=" text-5xl font-semibold">100+</h1>
          <h3 className="flex text-[14px] text-[#04c065] font-medium items-center mb-2">
            Award Winner
          </h3>
          <p className="text-[#899dab] text-[15px]">
            Our clients trust Poordoct for reliable, innovative healthcare
            solutions, appreciating our support, quality service, and commitment
            to excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProblemAward;

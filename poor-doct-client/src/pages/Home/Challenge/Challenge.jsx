import React from "react";
import { BsPersonFill } from "react-icons/bs";

const Challenge = () => {
  return (
    <div className="bg-[#223645]">
      <div className="max-w-7xl mx-auto px-2 text-white py-28">
        <div className="md:flex lg:gap-28 items-center">
          {/* challenge left side component*/}
          <div className="flex-1 space-y-7">
            <h4 className="text-[#f3b4c3] text-xl font-medium">
              We are available 24/7
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold my-7">
              We Always Ready For A Challenge.
            </h2>
            <button className="btn bg-[#e12454] border-0 shadow text-white p-6 mb-10 md:mb-0">
              MAKE APPOINTMENT
            </button>
          </div>
          {/* challenge right side component*/}
          <div className="flex-1">
            <div className="flex gap-20">
              <h3 className="text-[#04c065] text-5xl font-semibold">1M+</h3>
              <div>
                <h3 className="flex text-xl font-semibold items-center mb-2 text-white">
                  <BsPersonFill />
                  Satisfied Clients
                </h3>
                <p className="text-[#899dab] text-[15px]">
                  Our clients trust Poordoct for reliable, innovative healthcare
                  solutions, appreciating our support, quality service, and
                  commitment to excellence.
                </p>
              </div>
            </div>
            <div className="flex gap-16 mt-10">
              <h3 className="text-[#04c065] text-5xl font-semibold">100+</h3>
              <div>
                <h3 className="flex text-xl font-semibold items-center mb-2 text-white">
                  <BsPersonFill />
                  World Awards
                </h3>
                <p className="text-[#899dab] text-[15px]">
                  Poordoct Medical Solution has received global awards for
                  innovation, excellence, and impact in healthcare technology
                  and client-focused solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;

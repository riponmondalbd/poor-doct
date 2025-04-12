import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "../../../assets/white-logo.png";

const Footer = () => {
  return (
    <div className="bg-[#223645] text-white">
      <div className="max-w-7xl mx-auto">
        {/* navbar logo with email send and satisfied client section */}
        <div className="flex justify-between items-center py-10">
          {/* logo */}
          <img className="h-20" src={logo} alt="logo" />
          {/* subscribe by email */}
          <div className="flex items-center gap-3">
            <h3 className="font-bold">Subscribe:</h3>
            <div className="join">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered join-item text-black"
              />
              <button className="btn btn-primary join-item">
                <FaTelegramPlane className="text-xl" />
              </button>
            </div>
          </div>
          {/* satisfied clients */}
          <h3 className="flex items-center">
            <span className="text-[#04c065] text-4xl font-medium">5M+ </span>
            Satisfied Clients
          </h3>
        </div>
        {/* border */}
        <div class="border-b-1 border-[#7c8085] "></div>
        {/* navbar menu with recent and contact us items */}
      </div>
    </div>
  );
};

export default Footer;

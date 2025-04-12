import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "../../../assets/white-logo.png";

const Footer = () => {
  return (
    <div className="bg-[#223645] text-white">
      <div className="max-w-7xl mx-auto">
        {/* navbar logo with email send and satisfied client section */}

        <div className="flex-row md:flex space-y-6 md:space-y-0 justify-between items-center py-10">
          {/* logo */}
          <img className="h-20 mx-auto md:mx-0" src={logo} alt="logo" />
          {/* subscribe by email */}
          <div className="flex justify-center md:justify-start items-center gap-3">
            <h3 className="font-bold">Subscribe:</h3>
            <div className="join">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered join-item text-black"
              />
              <button className="btn bg-[#04c065] border-[#04c065] shadow join-item">
                <FaTelegramPlane className="text-xl" />
              </button>
            </div>
          </div>
          {/* satisfied clients */}
          <h3 className="flex items-center justify-center md:justify-start">
            <span className="text-[#04c065] text-4xl font-medium">5M+ </span>
            Satisfied Clients
          </h3>
        </div>

        {/* border */}
        <div className="border-b-1 border-[#7c8085] "></div>

        {/* navbar menu with recent and contact us items */}
        <footer className="footer sm:footer-horizontal p-10">
          <aside>
            <h6 className="footer-title">About Us</h6>
            <p>
              Lorem ipsum dolor sit amet, culpa
              <br /> consectetadipisicing elit.
              <br /> numquam iste aliquam
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Quick Links</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Recent Posts</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Contact Us</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        {/* border */}
        <div className="border-b-1 border-[#7c8085] "></div>
      </div>
    </div>
  );
};

export default Footer;

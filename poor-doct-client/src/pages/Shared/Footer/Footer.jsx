import { FaTelegramPlane } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdPhoneIphone } from "react-icons/md";
import { Link } from "react-router";
import logo from "../../../assets/white-logo.png";

const Footer = () => {
  return (
    <div className="bg-[#223645]">
      <div className="max-w-7xl mx-auto px-2">
        {/* navbar logo with Subscription and satisfied client section */}

        <div className="flex-row md:flex space-y-6 md:space-y-0 justify-between items-center py-10">
          {/* logo */}
          <img className="h-20 mx-auto md:mx-0" src={logo} alt="logo" />
          {/* subscribe by email */}
          <div className="flex justify-center md:justify-start items-center gap-3">
            <h3 className="font-bold  text-white">Subscribe:</h3>
            <div className="join">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered join-item"
              />

              <button className="btn bg-[#04c065] border-[#04c065] shadow join-item">
                <FaTelegramPlane className="text-xl text-black" />
              </button>
            </div>
          </div>
          {/* satisfied clients */}
          <h3 className="flex items-center justify-center md:justify-start  text-white">
            <span className="text-[#04c065] text-4xl font-medium">5M+ </span>
            Satisfied Clients
          </h3>
        </div>

        {/* border */}
        <div className="border-b-1 border-[#7c8085] "></div>

        {/* navbar menu with recent and contact us items */}
        <footer className="footer sm:footer-horizontal py-10  text-white">
          <aside>
            <h6 className="footer-title">About Us</h6>
            <p>
              Poordoct offers affordable, accessible <br /> healthcare services,
              focusing on underserved <br /> communities with compassionate
              treatment <br /> and essential medical support.
            </p>
            <h6 className="footer-title mt-2">Follow Us On:</h6>
            <div className="flex gap-6">
              <Link
                className="hover:text-[#04c065] duration-300"
                to={"https://www.facebook.com/riponmondalbd"}
                target="_blank"
              >
                <FaFacebook className="text-2xl" />
              </Link>
              <Link
                className="hover:text-[#04c065] duration-300"
                to={"https://x.com/ripon_mondal_bd"}
                target="_blank"
              >
                <FaXTwitter className="text-2xl" />
              </Link>
              <Link
                className="hover:text-[#04c065] duration-300"
                to={"https://www.linkedin.com/in/riponmondalbd/"}
                target="_blank"
              >
                <FaLinkedin className="text-2xl" />
              </Link>
              <Link
                className="hover:text-[#04c065] duration-300"
                to={"https://www.instagram.com/riponmondalbd/"}
                target="_blank"
              >
                <FaInstagram className="text-2xl" />
              </Link>
            </div>
          </aside>
          <nav>
            <h6 className="footer-title">Quick Links</h6>
            <a className="link link-hover hover:text-[#04c065]">Branding</a>
            <a className="link link-hover hover:text-[#04c065]">Design</a>
            <a className="link link-hover hover:text-[#04c065]">Marketing</a>
            <a className="link link-hover hover:text-[#04c065]">
              Advertisement
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Recent Posts</h6>
            <a className="link link-hover hover:text-[#04c065]">About us</a>
            <a className="link link-hover hover:text-[#04c065]">Contact</a>
            <a className="link link-hover hover:text-[#04c065]">Jobs</a>
            <a className="link link-hover hover:text-[#04c065]">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Contact Us</h6>
            <div className="flex gap-3 items-center">
              <MdLocationOn className="text-[18px] text-[#04c065]" />
              <p>Dhaka, Bangladesh</p>
            </div>
            <div className="flex gap-3 items-center link link-hover">
              <MdEmail className="text-[18px] text-[#04c065]" />
              <Link
                className="hover:text-[#04c065]"
                to={"mailto:riponmondal149@gmail.com"}
              >
                riponmondal149@gmail.com
              </Link>
            </div>
            <div className="flex gap-3 items-center link link-hover">
              <MdPhoneIphone className="text-[18px] text-[#04c065]" />
              <Link className="hover:text-[#04c065]" to={"tel:+8801956149980"}>
                +880 1956 149980
              </Link>
            </div>
          </nav>
        </footer>
        {/* border */}
        <div className="border-b-1 border-[#7c8085] "></div>
        {/* copyright section */}
        <footer className="footer sm:footer-horizontal footer-center p-4">
          <aside>
            <p className=" text-white">
              Copyright © {new Date().getFullYear()} - All right reserved by
              Poor Doct
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

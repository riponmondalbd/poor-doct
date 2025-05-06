import React from "react";
import { FaStethoscope } from "react-icons/fa6";
import { LiaPillsSolid, LiaXRaySolid } from "react-icons/lia";
import { LuAmbulance } from "react-icons/lu";
import { MdOutlineBloodtype, MdOutlineScanner } from "react-icons/md";
import { Link } from "react-router";
import linImg from "../../../assets/line.png";
import useScroll from "../../../hooks/useScroll";

const HealthServices = () => {
  const scrollToTop = useScroll();
  return (
    <div className="max-w-7xl mx-auto lg:flex items-center gap-8 px-2">
      {/* left side about content section */}
      <div className="py-24 flex-1 space-y-7">
        <h4 className="text-[#e12454] text-xl font-medium">Popular Services</h4>
        <h2 className="text-5xl font-bold my-7">
          We Provide The Best Health Services.
        </h2>
        <img src={linImg} alt="line" />
        <p>
          PoorDoct Health Care provides comprehensive medical services, focusing
          on personalized care and advanced treatments. They prioritize patient
          well-being with skilled doctors, modern technology, and a
          compassionate approach, ensuring effective diagnosis, treatment, and
          preventive healthcare for individuals and families.
        </p>

        <Link to={"/doctors"} onClick={scrollToTop}>
          <button className="btn bg-[#e12454] text-white p-6">
            Click Here
          </button>
        </Link>
      </div>
      {/* right side images section */}
      <div className="flex-1">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <div className="bg-base-200 hover:bg-[#04c065] hover:text-white p-5 duration-300">
            <FaStethoscope className="text-7xl" />
            <h3 className="textarea-xl font-medium">Free Doctor</h3>
          </div>
          <div className="bg-base-200 hover:bg-[#04c065] hover:text-white p-5 duration-300">
            <LuAmbulance className="text-7xl " />
            <h3 className="textarea-xl font-medium">Free Ambulance</h3>
          </div>
          <div className="bg-base-200 hover:bg-[#04c065] hover:text-white p-5 duration-300">
            <LiaPillsSolid className="text-7xl  " />
            <h3 className="textarea-xl font-medium">Free Medicine</h3>
          </div>
          <div className="bg-base-200 hover:bg-[#04c065] hover:text-white p-5 duration-300">
            <MdOutlineScanner className="text-7xl  " />
            <h3 className="textarea-xl font-medium">Free Pathology</h3>
          </div>
          <div className="bg-base-200 hover:bg-[#04c065] hover:text-white p-5 duration-300">
            <MdOutlineBloodtype className="text-7xl  " />
            <h3 className="textarea-xl font-medium">Free Donner</h3>
          </div>
          <div className="bg-base-200 hover:bg-[#04c065] hover:text-white p-5 duration-300">
            <LiaXRaySolid className="text-7xl  " />
            <h3 className="textarea-xl font-medium">
              Free <br /> X-Rays
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthServices;

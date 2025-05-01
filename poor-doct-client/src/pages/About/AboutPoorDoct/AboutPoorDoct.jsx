import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import doctorTeam from "../../../assets/AboutSection/doctor-team.jpg";
import linImg from "../../../assets/line.png";

const AboutPoorDoct = () => {
  return (
    <div className="max-w-7xl mx-auto lg:flex lg:flex-row-reverse items-center gap-8 px-2">
      {/* left side images section */}
      <div className="flex-1">
        <img className="mt-2 lg:mt-0" src={doctorTeam} alt="Doctor Team" />
      </div>
      {/* right side about content section */}
      <div className="py-24 flex-1 space-y-7">
        <h4 className="text-[#e12454] text-xl font-medium">About PoorDoct</h4>
        <h2 className="text-5xl font-bold my-7">
          Read Something About PoorDoct Health Care
        </h2>
        <img src={linImg} alt="line" />
        <p>
          PoorDoct Health Care provides comprehensive medical services, focusing
          on personalized care and advanced treatments. They prioritize patient
          well-being with skilled doctors, modern technology, and a
          compassionate approach, ensuring effective diagnosis, treatment, and
          preventive healthcare for individuals and families.
        </p>
        <div className="flex gap-6 items-center">
          <button className="btn bg-[#e12454] text-white p-6">
            Click Here
          </button>

          <p className="flex items-center gap-1 text-xl">
            <BiPhoneCall className="text-4xl text-[#e12454]" />
            +880 1956 149980
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPoorDoct;

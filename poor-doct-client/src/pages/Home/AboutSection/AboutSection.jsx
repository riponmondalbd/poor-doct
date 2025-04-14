import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaLaptopMedical } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { LiaToothSolid } from "react-icons/lia";
import { LuStethoscope } from "react-icons/lu";
import doctorTeam from "../../../assets/AboutSection/doctor-team.jpg";
import linImg from "../../../assets/line.png";

const AboutSection = () => {
  return (
    // TODO: incomplete section
    <div className="max-w-7xl mx-auto lg:flex items-center gap-8 px-2">
      {/* left side images section */}
      <div className="flex-1">
        <img className="mt-2 lg:mt-0" src={doctorTeam} alt="Doctor Team" />
      </div>
      {/* right side about content section */}
      <div className="py-24 flex-1 space-y-7">
        <h4 className="text-[#e12454] text-xl font-medium">About PoorDoct</h4>
        <h2 className="text-5xl font-bold my-7">
          Read Something About Doctio Health Care
        </h2>
        <img src={linImg} alt="line" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi velit,
          est ipsam adipisci cumque molestiae accusantium alias blanditiis
          officia temporibus consequuntur sapiente nesciunt tempora hic optio
          cupiditate at, odio ducimus! Laboriosam dignissimos, quam aliquid,
          illum nemo tempore sapiente consectetur sed delectus nam.
        </p>
        <div className="flex gap-6 items-center">
          <button className="btn bg-[#e12454] text-white">Click Here</button>

          <p className="flex items-center gap-1 text-xl">
            <BiPhoneCall className="text-4xl text-[#e12454]" />
            +880 1956 149980
          </p>
        </div>
        <div className="flex">
          <div>
            <GiMedicines className="text-6xl text-[#e12454]" />
            <h3 className="text-xl">Medicine & Health Care</h3>
          </div>
          <div>
            <LuStethoscope className="text-6xl text-[#e12454]" />
            <h3 className="text-xl">Doctor & Nurse Service</h3>
          </div>
          <div>
            <LiaToothSolid className="text-6xl text-[#e12454]" />
            <h3 className="text-xl">Dentaal Care Service</h3>
          </div>
          <div>
            <FaLaptopMedical className="text-6xl text-[#e12454]" />
            <h3 className="text-xl">Medical Equipment</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

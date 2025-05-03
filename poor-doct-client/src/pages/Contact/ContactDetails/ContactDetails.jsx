import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ContactDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 pb-24">
      <SectionTitle
        heading={"Get In Touch"}
        subHeading={"Feel Free To Contact"}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className=" bg-base-300 p-10 flex gap-3 items-center">
          <div>
            <PiPhoneCall className="text-6xl text-[#e12454] bg-white p-3" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-2">Phone:</h1>
            <p> +880 1956 149980</p>
          </div>
        </div>
        <div className=" bg-base-300 p-10 flex gap-3 items-center">
          <div>
            <SlLocationPin className="text-6xl text-[#e12454] bg-white p-3" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-2">Phone:</h1>
            <p> +880 1956 149980</p>
          </div>
        </div>
        <div className=" bg-base-300 p-10 flex gap-3 items-center">
          <div>
            <MdOutlineMailOutline className="text-6xl text-[#e12454] bg-white p-3" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-2">Phone:</h1>
            <p> +880 1956 149980</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;

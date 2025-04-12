import React from "react";
import linImg from "../../assets/line.png";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center py-24">
      <h4 className="text-[#e12454] text-xl font-medium">{heading}</h4>
      <h2 className="text-5xl font-bold my-7">{subHeading}</h2>
      <img className="mx-auto" src={linImg} alt="line" />
    </div>
  );
};

export default SectionTitle;

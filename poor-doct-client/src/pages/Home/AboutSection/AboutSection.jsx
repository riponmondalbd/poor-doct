import React from "react";
import linImg from "../../../assets/line.png";

const AboutSection = () => {
  return (
    // TODO: incomplete section
    <div>
      {/* left side images section */}
      <div></div>
      {/* right side about content section */}
      <div className="py-24">
        <h4 className="text-[#e12454] text-xl font-medium">About PoorDoct</h4>
        <h2 className="text-5xl font-bold my-7">
          Read Something About Doctio Health Care
        </h2>
        <img src={linImg} alt="line" />
      </div>
    </div>
  );
};

export default AboutSection;

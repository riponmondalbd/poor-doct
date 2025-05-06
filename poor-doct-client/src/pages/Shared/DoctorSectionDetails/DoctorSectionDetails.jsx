import React from "react";
import { Link } from "react-router";
import useScroll from "../../../hooks/useScroll";

const DoctorSectionDetails = ({ id, name, image, designation }) => {
  const scrollToTop = useScroll();
  return (
    <div>
      <Link to={`/doctors/${id}`} onClick={scrollToTop}>
        <div className="relative mx-3">
          <img className="rounded-[6px]" src={image} alt={name} />
          <h2 className="absolute -bottom-5 -left-3 text-center py-5 px-4 rounded-full inline-block bg-[#04c065] hover:bg-[#e12454] text-white text-[14px] font-medium">
            Explore <br /> More
          </h2>
        </div>
        <h2 className="text-center text-2xl font-semibold mt-6 mb-2">{name}</h2>
        <h3 className="text-center font-medium text-[#65768a]">
          {designation}
        </h3>
      </Link>
    </div>
  );
};

export default DoctorSectionDetails;

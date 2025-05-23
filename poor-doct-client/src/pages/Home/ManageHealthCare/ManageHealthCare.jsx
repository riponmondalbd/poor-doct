import React from "react";
import { Link } from "react-router";
import linImg from "../../../assets/line.png";
import useCategory from "../../../hooks/useCategory";
import useScroll from "../../../hooks/useScroll";
import Services from "../../Shared/Services/Services";

const ManageHealthCare = () => {
  const scrollToTop = useScroll();
  const [, categories] = useCategory();
  return (
    <div className="bg-base-300">
      <div className="max-w-7xl mx-auto px-2">
        {/* section of manage and heath service heading and appointment */}
        <div className="grid lg:grid-cols-2 items-center gap-8">
          {/* left side manage healthcare content section */}
          <div className="pt-24 lg:py-24 space-y-7">
            <h4 className="text-[#e12454] text-xl font-medium">
              Manage PoorDoct
            </h4>
            <h2 className="text-5xl font-bold my-7">
              Managed Your Heath Care Services
            </h2>
            <img src={linImg} alt="line" />
          </div>
          {/* right side appointment section */}
          <div className="grid lg:justify-end pb-24 lg:pb-0">
            <Link to={"/contact"} onClick={scrollToTop}>
              <button className="btn bg-[#e12454] text-white p-6">
                MAKE APPOINTMENT
              </button>
            </Link>
          </div>
        </div>
        {/* services groups */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 pb-24">
          {categories.slice(0, 3).map((category) => (
            <Services key={category._id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageHealthCare;

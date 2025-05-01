import React from "react";
import linImg from "../../../assets/line.png";
import Services from "../../Shared/Services/Services";

const ManageHealthCare = () => {
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
            <button className="btn bg-[#e12454] text-white p-6">
              MAKE APPOINTMENT
            </button>
          </div>
        </div>
        {/* services groups */}
        <Services />
      </div>
    </div>
  );
};

export default ManageHealthCare;

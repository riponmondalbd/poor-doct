import React from "react";
import linImg from "../../../assets/line.png";

const ManageHealthCare = () => {
  return (
    <div className="bg-[#dfe9ed]">
      <div className="max-w-7xl mx-auto px-2">
        <div className="grid lg:grid-cols-2 items-center gap-8">
          {/* left side manage healthcare content section */}
          <div className="pt-24 lg:py-24 space-y-7">
            <h4 className="text-[#e12454] text-xl font-medium">
              Manage PoorDoct
            </h4>
            <h2 className="text-5xl font-bold my-7">
              Managed Your Heathcare Services
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
      </div>
    </div>
  );
};

export default ManageHealthCare;

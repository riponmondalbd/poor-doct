import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import allergicImg from "../../../assets/health/service1.png";
import DentalImg from "../../../assets/health/service2.png";
import eyeImage from "../../../assets/health/service3.png";
import bodyImg from "../../../assets/health/service4.png";
import bloodImg from "../../../assets/health/service5.png";
import neurologyImg from "../../../assets/health/service6.png";
import linImg from "../../../assets/line.png";

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
        {/* services groups */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 pb-24">
          {/* eye */}
          <div className="card bg-base-100 rounded-[2px] shadow-sm">
            <figure className="px-10 pt-10">
              <img src={eyeImage} alt="Eye" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Eye Care</h2>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo.
              </p>
              <div className="card-actions">
                <button className="btn btn-ghost">
                  Read More <MdKeyboardDoubleArrowRight />
                </button>
              </div>
            </div>
          </div>
          {/* Blood Cancer */}
          <div className="card bg-base-100 rounded-[2px] shadow-sm">
            <figure className="px-10 pt-10">
              <img src={bloodImg} alt="Eye" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Blood Cancer</h2>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo.
              </p>
              <div className="card-actions">
                <button className="btn btn-ghost">
                  Read More <MdKeyboardDoubleArrowRight />
                </button>
              </div>
            </div>
          </div>
          {/* Neurology Sargery */}
          <div className="card bg-base-100 rounded-[2px] shadow-sm">
            <figure className="px-10 pt-10">
              <img src={neurologyImg} alt="Eye" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Neurology Sargery</h2>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo.
              </p>
              <div className="card-actions">
                <button className="btn btn-ghost">
                  Read More <MdKeyboardDoubleArrowRight />
                </button>
              </div>
            </div>
          </div>
          {/* Allergic Issue */}
          <div className="card bg-base-100 rounded-[2px] shadow-sm">
            <figure className="px-10 pt-10">
              <img src={allergicImg} alt="Eye" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Allergic Issue</h2>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo.
              </p>
              <div className="card-actions">
                <button className="btn btn-ghost">
                  Read More <MdKeyboardDoubleArrowRight />
                </button>
              </div>
            </div>
          </div>
          {/* Body Surgery */}
          <div className="card bg-base-100 rounded-[2px] shadow-sm">
            <figure className="px-10 pt-10">
              <img src={bodyImg} alt="Eye" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Body Surgery</h2>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo.
              </p>
              <div className="card-actions">
                <button className="btn btn-ghost">
                  Read More <MdKeyboardDoubleArrowRight />
                </button>
              </div>
            </div>
          </div>
          {/* Dental Care */}
          <div className="card bg-base-100 rounded-[2px] shadow-sm">
            <figure className="px-10 pt-10">
              <img src={DentalImg} alt="Eye" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Dental Care</h2>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo.
              </p>
              <div className="card-actions">
                <button className="btn btn-ghost">
                  Read More <MdKeyboardDoubleArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageHealthCare;

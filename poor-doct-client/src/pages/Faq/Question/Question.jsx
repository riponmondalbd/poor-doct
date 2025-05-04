import React from "react";
import doctorQna from "../../../assets/doctor-qna.png";
import linImg from "../../../assets/line.png";

const Question = () => {
  return (
    <div className="max-w-7xl mx-auto lg:flex items-center gap-8 px-2">
      {/* left side about content section */}
      <div className="py-24 flex-1 space-y-7">
        <h4 className="text-[#e12454] text-xl font-medium">Get Answers</h4>
        <h2 className="text-5xl font-bold my-7">
          Have Any Questions? Feel Free To Ask.
        </h2>
        <img src={linImg} alt="line" />
        {/* left side QNA section */}
        <div className="flex-1">
          <div className="space-y-4">
            {/* first QNA */}
            <div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow bg-base-100 border-base-300 border"
              >
                <div className="collapse-title font-semibold">
                  What is Poordoct?
                </div>
                <div className="collapse-content text-sm">
                  Poordoct is a healthcare service provider focused on
                  delivering affordable and accessible medical care to
                  underserved communities.
                </div>
              </div>
            </div>
            {/* second QNA */}
            <div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow bg-base-100 border-base-300 border"
              >
                <div className="collapse-title font-semibold">
                  What services does Poordoct offer?
                </div>
                <div className="collapse-content text-sm">
                  Poordoct offers general health check-ups, treatment for common
                  illnesses, preventive care, and access to essential
                  medications at low costs.
                </div>
              </div>
            </div>
            {/* third QNA */}
            <div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow bg-base-100 border-base-300 border"
              >
                <div className="collapse-title font-semibold">
                  Who can benefit from Poordoct?
                </div>
                <div className="collapse-content text-sm">
                  Anyone seeking affordable, quality healthcare—especially
                  individuals from low-income or underserved areas—can benefit
                  from Poordoct’s compassionate services.
                </div>
              </div>
            </div>
            {/* fourth QNA */}
            <div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow bg-base-100 border-base-300 border"
              >
                <div className="collapse-title font-semibold">
                  How much does it cost to visit Poordoct?
                </div>
                <div className="collapse-content text-sm">
                  Most services are either free or offered at a minimal cost to
                  ensure healthcare remains affordable to all.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right side images section */}
      <div className="flex-1">
        <img className="mt-2 lg:mt-0" src={doctorQna} alt="Doctor Team" />
      </div>
    </div>
  );
};

export default Question;

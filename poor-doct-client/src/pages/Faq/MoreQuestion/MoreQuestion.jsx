import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const MoreQuestion = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 mb-24">
      <SectionTitle
        heading={"Get Answer"}
        subHeading={"Most Answered Questions"}
      />
      <div className="md:flex gap-10">
        {/* left side qna */}
        <div className="flex-1">
          <div className="space-y-4">
            {/* first QNA */}
            <div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow bg-base-100 border-base-300 border"
              >
                <div className="collapse-title font-semibold">
                  Does Poordoct provide emergency medical care?
                </div>
                <div className="collapse-content text-sm">
                  Poordoct primarily focuses on primary healthcare and
                  preventive services, but it can offer referrals to nearby
                  emergency facilities if needed.
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
                  Are the doctors at Poordoct qualified?
                </div>
                <div className="collapse-content text-sm">
                  Yes, all medical professionals at Poordoct are certified,
                  experienced, and trained to provide quality, ethical, and
                  compassionate care.
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
                  Where is Poordoct located?
                </div>
                <div className="collapse-content text-sm">
                  Poordoct operates through fixed clinics and mobile health
                  units in various rural and underserved urban areas.
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
                  Does Poordoct offer specialist consultations?
                </div>
                <div className="collapse-content text-sm">
                  Basic specialist consultations may be available periodically,
                  and patients are referred to trusted specialists when
                  required.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side qna */}
        <div className="flex-1 pt-4 md:pt-0">
          <div className="space-y-4">
            {/* first QNA */}
            <div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow bg-base-100 border-base-300 border"
              >
                <div className="collapse-title font-semibold">
                  How does Poordoct support public health?
                </div>
                <div className="collapse-content text-sm">
                  Poordoct conducts awareness programs, health camps, and
                  disease prevention campaigns to improve community health
                  knowledge and practices.
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
                  Has Poordoct received any recognition or awards?
                </div>
                <div className="collapse-content text-sm">
                  Yes, Poordoct has received multiple awards for its innovative
                  approach to community healthcare and impact in underserved
                  regions.
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
                  Can I donate or volunteer with Poordoct?
                </div>
                <div className="collapse-content text-sm">
                  Yes, Poordoct welcomes donations and volunteers. Your support
                  helps expand services, reach more communities, and improve
                  overall healthcare delivery.
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
                  Does Poordoct use technology in its services?
                </div>
                <div className="collapse-content text-sm">
                  Absolutely. Poordoct leverages telemedicine, digital health
                  records, and mobile apps to enhance service efficiency and
                  reach remote patients.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreQuestion;

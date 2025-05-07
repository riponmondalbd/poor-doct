import React from "react";
import { Link } from "react-router";
import linImg from "../../../assets/line.png";
import useScroll from "../../../hooks/useScroll";

const ChooseUs = () => {
  const scrollToTop = useScroll();
  return (
    <div className="max-w-7xl mx-auto lg:flex items-center gap-8 px-2">
      {/* left side about content section */}
      <div className="py-24 flex-1 space-y-7">
        <h4 className="text-[#e12454] text-xl font-medium">Why Choose Us </h4>
        <h2 className="text-5xl font-bold my-7">
          Have Any Questions? Feel Free To Ask.
        </h2>
        <img src={linImg} alt="line" />
        <p>
          Choose Poordoct for its commitment to affordable and accessible
          healthcare for all. We prioritize patients’ needs with compassionate,
          professional care, advanced medical services, and a dedicated team of
          experts. Whether for preventive care or treatment, Poordoct ensures
          quality without financial burden. Our mission is to serve underserved
          communities and make healthcare a right, not a privilege, for
          everyone.
        </p>
        {/* TODO: Hove color*/}
        <Link to={"/faq"} onClick={scrollToTop}>
          <button className="btn btn-link no-underline m-0 p-0 text-[#e12454]">
            Click Here
          </button>
        </Link>
      </div>
      {/* right side QNA section */}
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
                Poordoct is a healthcare service provider focused on delivering
                affordable and accessible medical care to underserved
                communities.
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
                illnesses, preventive care, and access to essential medications
                at low costs.
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
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;

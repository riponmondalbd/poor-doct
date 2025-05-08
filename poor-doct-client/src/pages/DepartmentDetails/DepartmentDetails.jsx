import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router";
import PageTopSection from "../../components/PageTopSection/PageTopSection";
import useCategory from "../../hooks/useCategory";
import Appointment from "../Contact/Appointment/Appointment";
import DoctorsTeam from "../Home/DoctorsTeam/DoctorsTeam";

const DepartmentDetails = () => {
  const [isPending, category] = useCategory();
  const { id } = useParams();

  if (isPending) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  const department = category.find((department) => department._id === id);
  const {
    category_name,
    category_fullDetails,
    category_images,
    category_whyChoseUs,
    category_benefit,
  } = department;

  return (
    <div>
      <title>Poor Doct | Department Details</title>
      <PageTopSection title={"Department Details"} />
      <div className="max-w-7xl mx-auto px-2">
        <h2 className="text-4xl font-bold my-7">{category_name} Department</h2>
        <p>{category_fullDetails}</p>

        {/* image carousel */}
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          thumbWidth={300}
        >
          {category_images.map((item, index) => (
            <div key={index}>
              <img src={item} />
            </div>
          ))}
        </Carousel>
        <h2 className="text-4xl font-bold my-7">Why Chose Us?</h2>
        <p>{category_whyChoseUs}</p>
        <ul className="space-y-3 mt-6">
          <li>1. Modern Dental Treatment</li>
          <li>2. Professional Doctors</li>
          <li>3. Affordable Pricing Low Pricing Package</li>
          <li>4. Experience Senior Nurses</li>
          <li>5. 25 Years Of Experience</li>
        </ul>
        <h2 className="text-4xl font-bold my-7">Approach and Benefit.</h2>
        <p>{category_benefit}</p>
        {/* qna */}
        <div className="space-y-4 mt-6 mb-6">
          {/* first QNA */}
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-base-100 border-base-300 border"
            >
              <div className="collapse-title font-semibold">
                1. Free Medicine & Ambulance Service.
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
                2. Affordable Price For Patient.
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
                3. Modern Pathology Lab.
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
      <Appointment />
      {/* doctors */}
      <DoctorsTeam />
    </div>
  );
};

export default DepartmentDetails;

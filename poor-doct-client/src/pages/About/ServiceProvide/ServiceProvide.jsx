import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Services from "../../Shared/Services/Services";

const ServiceProvide = () => {
  return (
    <div className="bg-base-300">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          heading={"Our Services"}
          subHeading={"Service We Provide"}
        />
        <Services />
      </div>
    </div>
  );
};

export default ServiceProvide;

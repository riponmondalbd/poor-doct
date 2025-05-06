import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCategory from "../../../hooks/useCategory";
import Services from "../../Shared/Services/Services";

const ServiceProvide = () => {
  const [categories] = useCategory();
  return (
    <div className="bg-base-300">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          heading={"Our Services"}
          subHeading={"Service We Provide"}
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 pb-24">
          {categories.slice(0, 6).map((category) => (
            <Services key={category._id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProvide;

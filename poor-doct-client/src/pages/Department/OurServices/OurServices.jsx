import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCategory from "../../../hooks/useCategory";
import Services from "../../Shared/Services/Services";

const OurServices = () => {
  const [, categories] = useCategory();
  return (
    <div className="bg-base-300">
      <div className="max-w-7xl mx-auto px-2">
        <SectionTitle
          heading={"Our Services"}
          subHeading={"Service We Provide"}
        />
        {/* services groups */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 pb-24">
          {categories.map((category) => (
            <Services key={category._id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;

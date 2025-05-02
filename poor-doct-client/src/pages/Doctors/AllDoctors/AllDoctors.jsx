import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useDoctors from "../../../hooks/useDoctors";
import SingleDoctor from "../SingleDoctor/SingleDoctor";

const AllDoctors = () => {
  const [doctors] = useDoctors();
  return (
    <div className="max-w-7xl mx-auto mb-24">
      <SectionTitle
        heading={"Meet Our Team"}
        subHeading={"Our Experts Doctors"}
      />
      <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-10 px-2">
        {doctors.map((doctor) => (
          <SingleDoctor key={doctor._id} doctor={doctor}></SingleDoctor>
        ))}
      </div>
    </div>
  );
};

export default AllDoctors;

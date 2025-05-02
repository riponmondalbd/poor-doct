import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useDoctors from "../../../hooks/useDoctors";
import Doctor from "../../Shared/Doctor/Doctor";

const Team = () => {
  const [doctors] = useDoctors();

  return (
    <div className="max-w-7xl mx-auto mb-24">
      <SectionTitle
        heading={"Meat Our Team"}
        subHeading={"Our Experts Doctors"}
      />
      <div className="md:grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {doctors.slice(0, 6).map((doctor) => (
          <Doctor key={doctor._id} doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Team;

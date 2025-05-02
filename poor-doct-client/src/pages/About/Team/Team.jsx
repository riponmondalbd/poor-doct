import React from "react";
import { Link } from "react-router";
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
      <Link className="md:grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <Doctor key={doctor._id} doctor={doctor}></Doctor>
        ))}
      </Link>
    </div>
  );
};

export default Team;

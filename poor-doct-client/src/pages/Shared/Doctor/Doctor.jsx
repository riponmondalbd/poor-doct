import React from "react";
import DoctorSectionDetails from "../DoctorSectionDetails/DoctorSectionDetails";

const Doctor = ({ doctor }) => {
  const { _id, image, name, designation } = doctor;

  return (
    <DoctorSectionDetails
      id={_id}
      image={image}
      name={name}
      designation={designation}
    />
  );
};

export default Doctor;

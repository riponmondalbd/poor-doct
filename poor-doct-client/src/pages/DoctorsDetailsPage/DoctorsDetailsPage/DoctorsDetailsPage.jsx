import React from "react";
import PageTopSection from "../../../components/PageTopSection/PageTopSection";
import DoctorDetailsPageDoctorDetails from "../DoctorDetailsPageDoctorDetails/DoctorDetailsPageDoctorDetails";

const DoctorsDetailsPage = () => {
  return (
    <div>
      <title>Poor Doct | Doctor Details</title>
      <PageTopSection title={"Doctor Details"} />
      <DoctorDetailsPageDoctorDetails />
    </div>
  );
};

export default DoctorsDetailsPage;

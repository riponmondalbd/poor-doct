import React from "react";
import PageTopSection from "../../../components/PageTopSection/PageTopSection";
import ChooseUs from "../../About/ChooseUs/ChooseUs";
import Appointment from "../../Contact/Appointment/Appointment";
import DoctorDetailsPageDoctorDetails from "../DoctorDetailsPageDoctorDetails/DoctorDetailsPageDoctorDetails";

const DoctorsDetailsPage = () => {
  return (
    <div>
      <title>Poor Doct | Doctor Details</title>
      <PageTopSection title={"Doctor Details"} />
      <DoctorDetailsPageDoctorDetails />
      <Appointment />
      <ChooseUs />
    </div>
  );
};

export default DoctorsDetailsPage;

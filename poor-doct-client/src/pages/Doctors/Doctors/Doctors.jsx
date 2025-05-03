import React from "react";
import PageTopSection from "../../../components/PageTopSection/PageTopSection";
import AllDoctors from "../AllDoctors/AllDoctors";
import AwardsAndAppointment from "../AwardsAndAppointment/AwardsAndAppointment";

const Doctors = () => {
  return (
    <div>
      <title>Poor Doct | About</title>
      <PageTopSection title={"Doctors"} />
      <AllDoctors />
      <AwardsAndAppointment />
    </div>
  );
};

export default Doctors;

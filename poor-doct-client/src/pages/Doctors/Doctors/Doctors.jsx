import React from "react";
import PageTopSection from "../../../components/PageTopSection/PageTopSection";
import Challenges from "../../Shared/Challenges/Challenges";
import AllDoctors from "../AllDoctors/AllDoctors";
import DoctorProblemAward from "../DoctorProblemAward/DoctorProblemAward";

const Doctors = () => {
  return (
    <div>
      <title>Poor Doct | About</title>
      <PageTopSection title={"Doctors"} />
      <AllDoctors />
      <Challenges />
      <DoctorProblemAward />
    </div>
  );
};

export default Doctors;

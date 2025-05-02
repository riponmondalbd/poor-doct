import React from "react";
import PageTopSection from "../../../components/PageTopSection/PageTopSection";
import AllDoctors from "../AllDoctors/AllDoctors";

const Doctors = () => {
  return (
    <div>
      <title>Poor Doct | About</title>
      <PageTopSection title={"Doctors"} />
      <AllDoctors />
    </div>
  );
};

export default Doctors;

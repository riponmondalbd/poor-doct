import React from "react";
import PageTopSection from "../../../components/PageTopSection/PageTopSection";
import HealthServices from "../HealthServices/HealthServices";
import OurServices from "../OurServices/OurServices";

const Department = () => {
  return (
    <div>
      <title>Poor Doct | Department</title>
      <PageTopSection title={"Department"} />
      <HealthServices />
      <OurServices />
    </div>
  );
};

export default Department;

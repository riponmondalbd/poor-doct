import React from "react";
import PageTopSection from "../../../components/PageTopSection/PageTopSection";
import AboutPoorDoct from "../AboutPoorDoct/AboutPoorDoct";
import ServiceProvide from "../ServiceProvide/ServiceProvide";

const About = () => {
  return (
    <div>
      <title>Poor Doct | About</title>
      <PageTopSection title={"About Us"} />
      <AboutPoorDoct />
      <ServiceProvide />
    </div>
  );
};

export default About;

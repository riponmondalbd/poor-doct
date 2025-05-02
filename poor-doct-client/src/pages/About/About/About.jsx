import React from "react";
import PageTopSection from "../../../components/PageTopSection/PageTopSection";
import Challenges from "../../Shared/Challenges/Challenges";
import AboutPoorDoct from "../AboutPoorDoct/AboutPoorDoct";
import ChooseUs from "../ChooseUs/ChooseUs";
import ServiceProvide from "../ServiceProvide/ServiceProvide";
import Team from "../Team/Team";

const About = () => {
  return (
    <div>
      <title>Poor Doct | About</title>
      <PageTopSection title={"About Us"} />
      <AboutPoorDoct />
      <ServiceProvide />
      <ChooseUs />
      <Challenges />
      <Team />
    </div>
  );
};

export default About;

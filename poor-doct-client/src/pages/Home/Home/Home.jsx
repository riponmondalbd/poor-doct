import React from "react";
import Challenges from "../../Shared/Challenges/Challenges";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import ManageHealthCare from "../ManageHealthCare/ManageHealthCare";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <title>Poor Doct | Home</title>
      <Banner />
      <AboutSection />
      <ManageHealthCare />
      <Doctors />
      <Challenges />
      <Testimonials />
    </div>
  );
};

export default Home;

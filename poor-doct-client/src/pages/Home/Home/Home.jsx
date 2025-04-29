import React from "react";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import Challenge from "../Challenge/Challenge";
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
      <Challenge />
      <Testimonials />
    </div>
  );
};

export default Home;

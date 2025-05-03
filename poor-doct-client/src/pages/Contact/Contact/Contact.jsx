import React from "react";
import PageTopSection from "../../../components/PageTopSection/PageTopSection";
import Testimonials from "../../Home/Testimonials/Testimonials";
import Appointment from "../Appointment/Appointment";
import ContactDetails from "../ContactDetails/ContactDetails";

const Contact = () => {
  return (
    <div>
      <title>Poor Doct | Contact</title>
      <PageTopSection title={"Contact"} />
      <ContactDetails />
      <Appointment />
      <Testimonials />
    </div>
  );
};

export default Contact;

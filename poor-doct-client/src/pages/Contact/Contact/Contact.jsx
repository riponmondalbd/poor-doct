import React from "react";
import PageTopSection from "../../../components/PageTopSection/PageTopSection";
import Appointment from "../Appointment/Appointment";
import ContactDetails from "../ContactDetails/ContactDetails";

const Contact = () => {
  return (
    <div>
      <title>Poor Doct | Contact</title>
      <PageTopSection title={"Contact"} />
      <ContactDetails />
      <Appointment />
    </div>
  );
};

export default Contact;

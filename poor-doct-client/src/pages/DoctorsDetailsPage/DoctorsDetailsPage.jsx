import React from "react";
import { useParams } from "react-router";
import PageTopSection from "../../components/PageTopSection/PageTopSection";
import useDoctors from "../../hooks/useDoctors";

const DoctorsDetailsPage = () => {
  const [isPending, doctors] = useDoctors();
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc._id === id);
  console.log(id, doctor);

  if (isPending) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  return (
    <div>
      <PageTopSection title={"Doctor Details"} />
      <div>{doctor.name}</div>
    </div>
  );
};

export default DoctorsDetailsPage;

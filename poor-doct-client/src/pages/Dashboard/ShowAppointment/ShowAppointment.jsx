import DashboardNavbar from "../../../components/DashboardNavbar/DashboardNavbar";

const ShowAppointment = () => {
  return (
    <div>
      <title>Poor Doct | Appointment</title>
      <DashboardNavbar pageTitle={"Appointment"} />
      <div className="p-5">
        <h2 className="card-title text-2xl flex justify-center">
          All Appointments
        </h2>
      </div>
    </div>
  );
};

export default ShowAppointment;

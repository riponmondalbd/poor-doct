import DashboardNavbar from "../../../components/DashboardNavbar/DashboardNavbar";
import useBookings from "../../../hooks/useBookings";

const ShowAppointment = () => {
  const [appointments] = useBookings();

  return (
    <div>
      <title>Poor Doct | Appointment</title>
      <DashboardNavbar pageTitle={"Appointment"} />
      <div className="p-5">
        <h2 className="card-title text-2xl flex justify-center">
          All Appointments
        </h2>
        <h2>{appointments.length}</h2>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Doctor Name</th>
                <th>Category</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, idx) => (
                <tr key={appointment._id}>
                  <th>{idx + 1}</th>
                  <td>{appointment.doctorInfo.name}</td>
                  <td>{appointment.categoryInfo.category_name}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowAppointment;

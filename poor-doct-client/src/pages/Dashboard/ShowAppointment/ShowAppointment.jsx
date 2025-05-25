import { useQuery } from "@tanstack/react-query";
import DashboardNavbar from "../../../components/DashboardNavbar/DashboardNavbar";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ShowAppointment = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  // console.log(user);

  const { data: appointments = [] } = useQuery({
    queryKey: ["appointments", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `http://localhost:5000/appointments?email=${user.email}`
      );
      return res.data;
    },
  });
  console.log(appointments);

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
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, idx) => (
                <tr key={appointment._id}>
                  <th>{idx + 1}</th>
                  <td>{appointment.applicant_name}</td>
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

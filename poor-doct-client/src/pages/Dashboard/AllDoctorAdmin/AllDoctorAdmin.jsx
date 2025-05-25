import { deleteUser } from "firebase/auth";
import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";
import DashboardNavbar from "../../../components/DashboardNavbar/DashboardNavbar";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useDoctors from "../../../hooks/useDoctors";

const AllDoctorAdmin = () => {
  const { user } = useAuth();
  const [, refetch, doctors] = useDoctors();
  const axiosPublic = useAxiosPublic();

  const handleDelete = (doctor) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // delete from database
        const res = await axiosPublic.delete(`/doctor/${doctor._id}`);

        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${doctor.name} has been deleted.`,
            icon: "success",
            timer: 1500,
          });
        }
        // delete from firebase
        deleteUser(user)
          .then(() => {})
          .catch();
      }
    });
  };

  return (
    <div>
      <title>Poor Doct | All Doctors</title>
      <DashboardNavbar pageTitle={"All Doctors"} />
      <div className="p-5">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, index) => (
                <tr key={doctor._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={doctor.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.designation}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(doctor)}
                      className="btn btn-link btn-xs"
                    >
                      <TiDelete className="text-3xl text-red-700" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllDoctorAdmin;

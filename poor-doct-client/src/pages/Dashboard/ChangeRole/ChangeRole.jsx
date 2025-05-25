import { useQuery } from "@tanstack/react-query";
import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";
import DashboardNavbar from "../../../components/DashboardNavbar/DashboardNavbar";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ChangeRole = () => {
  const axiosPublic = useAxiosPublic();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  const handleRoleChange = (user, newRole) => {
    // console.log(user, newRole);
    const updatedRole = { role: newRole };
    axiosPublic.patch(`/users/role/${user._id}`, updatedRole).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Role Update successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      refetch();
    });
  };

  const handleDelete = (user) => {
    console.log(user);
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
        const res = await axiosPublic.delete(`/user/${user._id}`);

        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${user.name} has been deleted.`,
            icon: "success",
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
      <title>Poor Doct | Role</title>
      <DashboardNavbar pageTitle={"Change Role"} />
      <div className="p-5">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Current Role</th>
                <th>Assign Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role ? user.role : "user"}</td>
                  <td>
                    <select
                      onChange={(e) => handleRoleChange(user, e.target.value)}
                      defaultValue="Change Role"
                      className="select"
                    >
                      <option disabled={true}>Change Role</option>
                      <option>Admin</option>
                      <option>Doctor</option>
                      <option>User</option>
                    </select>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(user)}
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

export default ChangeRole;

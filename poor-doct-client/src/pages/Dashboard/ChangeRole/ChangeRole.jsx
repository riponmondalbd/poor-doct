import { useQuery } from "@tanstack/react-query";
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
    console.log(user, newRole);
    const updatedRole = { role: newRole };
    axiosPublic.patch(`/users/role/${user._id}`, updatedRole).then((res) => {
      console.log(res.data);
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

import { FaRegCalendarAlt, FaRegStar } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import DashboardNavbar from "../../../components/DashboardNavbar/DashboardNavbar";
import useAuth from "../../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div>
      <title>Poor Doct | Profile</title>
      <DashboardNavbar pageTitle={"Profile"} />
      <div className="p-5">
        <div className="lg:flex gap-5 py-5">
          {/* profile picture and name */}
          <div className="lg:w-1/2 card bg-base-100 shadow-sm items-center mb-5 lg:mb-0">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 h-[200px] rounded-full ring-3 ring-offset-2">
                <img src={user?.photoURL} />
              </div>
            </div>
            <div className="card-body">
              <h2 className="card-title text-2xl">{user.displayName}</h2>
            </div>
          </div>

          {/* details */}
          <div className="lg:w-1/2 card bg-base-100 shadow-sm">
            <div className="card-body p-3 md:p-6">
              <p className="card-title text-3xl">About You</p>
              <p className="flex items-center text-[18px] gap-2">
                <FiMail />

                {user.email}
              </p>
              <p className="flex items-center text-[18px] gap-2">
                <FaRegStar />
                Review:
              </p>
              <p className="flex items-center text-[18px] gap-2">
                <FaRegCalendarAlt />
                Bookings:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

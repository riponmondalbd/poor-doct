import { Link, NavLink, Outlet } from "react-router";
import Swal from "sweetalert2";
import logo from "../assets/differentLogo.png";
import useAuth from "../hooks/useAuth";
import useDark from "../hooks/useDark";
import useScroll from "../hooks/useScroll";
import useUser from "../hooks/useUser";

const Dashboard = () => {
  const { scrollToTop } = useScroll();
  const { isDark, setIsDark } = useDark();
  const [, user] = useUser();
  const { LogOutUser } = useAuth();

  const handleLogOut = () => {
    LogOutUser()
      .then(() => {
        Swal.fire({
          title: "Log Out Successfully!",
          icon: "success",
          draggable: true,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          title: `${error.message}`,
          icon: "error",
          draggable: true,
          timer: 1500,
        });
      });
  };
  // set role
  const role = user[0]?.role;

  return (
    <div>
      <div className="flex">
        <div className="w-2/6 lg:w-1/6 bg-base-300 min-h-screen p-2 relative">
          <Link to={"/"}>
            <img className="md:w-1/2 lg:w-[90%]" src={logo} alt="logo" />
          </Link>
          {/* make dark mode or theme changer dark and white */}
          <label className="flex cursor-pointer gap-2 ml-6 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              className="toggle theme-controller"
              value="sunset"
              checked={isDark}
              onChange={() => setIsDark(!isDark)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>

          {/* divider */}
          <div className="divider mb-0"></div>

          <>
            {role === "Admin" ? (
              <div>
                {/* admin nav */}
                <ul className="menu w-full p-4 space-y-3">
                  <li>
                    <NavLink
                      to={"/dashboard/profile"}
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive ? "text-[#e12454] font-bold" : ""
                      }
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashboard/appointment"}
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive ? "text-[#e12454] font-bold" : ""
                      }
                    >
                      Appointments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashboard/reviews"}
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive ? "text-[#e12454] font-bold" : ""
                      }
                    >
                      Reviews
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashboard/all-doctors"}
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive ? "text-[#e12454] font-bold" : ""
                      }
                    >
                      All Doctor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashboard/add-doctor"}
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive ? "text-[#e12454] font-bold" : ""
                      }
                    >
                      Add Doctor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashboard/change-role"}
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive ? "text-[#e12454] font-bold" : ""
                      }
                    >
                      Change Role
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : role === "Doctor" ? (
              <div>
                {/* doctor nav */}
                <ul className="menu w-full p-4 space-y-3">
                  <li>
                    <NavLink
                      to={"/dashboard/profile"}
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive ? "text-[#e12454] font-bold" : ""
                      }
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashboard/appointment"}
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive ? "text-[#e12454] font-bold" : ""
                      }
                    >
                      All Appointments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashboard/reviews"}
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive ? "text-[#e12454] font-bold" : ""
                      }
                    >
                      All Reviews
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                {/* user nav */}
                <ul className="menu w-full p-4 space-y-3">
                  <li>
                    <NavLink
                      to={"/dashboard/profile"}
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive ? "text-[#e12454] font-bold" : ""
                      }
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashboard/appointment"}
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive ? "text-[#e12454] font-bold" : ""
                      }
                    >
                      Appointments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashboard/reviews"}
                      onClick={scrollToTop}
                      className={({ isActive }) =>
                        isActive ? "text-[#e12454] font-bold" : ""
                      }
                    >
                      Reviews
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </>

          {/* divider */}
          <div className="divider m-0"></div>

          {/* shared nav */}
          <ul className="menu w-full p-4 space-y-3">
            <li>
              <NavLink
                to={"/"}
                onClick={scrollToTop}
                className={({ isActive }) =>
                  isActive ? "text-[#e12454] font-bold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                onClick={scrollToTop}
                className={({ isActive }) =>
                  isActive ? "text-[#e12454] font-bold" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                onClick={scrollToTop}
                className={({ isActive }) =>
                  isActive ? "text-[#e12454] font-bold" : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <button
            onClick={handleLogOut}
            className="btn bg-[#e12454] text-white mt-4 w-full absolute bottom-0 left-0"
          >
            Logout
          </button>
        </div>

        <div className="w-4/6 lg:w-5/6 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

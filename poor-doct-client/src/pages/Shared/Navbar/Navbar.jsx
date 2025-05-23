import { useEffect, useState } from "react";
import { FaInstagram, FaRegClock } from "react-icons/fa";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { Link, NavLink } from "react-router";

import Swal from "sweetalert2";
import logo from "../../../assets/logo.png";
import useAuth from "../../../hooks/useAuth";
import useDark from "../../../hooks/useDark";
import useScroll from "../../../hooks/useScroll";
import useUser from "../../../hooks/useUser";

const Navbar = () => {
  const { user, LogOutUser } = useAuth();
  const scrollToTop = useScroll();
  const { isDark, setIsDark } = useDark();
  const [, currentUser] = useUser();

  // const [isDark, setIsDark] = useState(
  //   JSON.parse(localStorage.getItem("isDark"))
  // );
  // useEffect(() => {
  //   localStorage.setItem("isDark", JSON.stringify(isDark));
  // }, [isDark]);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  // nav links
  const navLinks = (
    <>
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
          to={"/doctors"}
          onClick={scrollToTop}
          className={({ isActive }) =>
            isActive ? "text-[#e12454] font-bold" : ""
          }
        >
          Doctors
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/department"}
          onClick={scrollToTop}
          className={({ isActive }) =>
            isActive ? "text-[#e12454] font-bold" : ""
          }
        >
          Department
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/faq"}
          onClick={scrollToTop}
          className={({ isActive }) =>
            isActive ? "text-[#e12454] font-bold" : ""
          }
        >
          FAQ
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
    </>
  );

  return (
    <div>
      {/* top nav bar */}
      <div className="bg-[#223645] text-white hidden md:block">
        <div className="max-w-7xl flex justify-between mx-auto py-3">
          {/* time and contact email */}
          <div className="flex gap-2">
            {/* time */}
            <p className="flex items-center gap-1">
              <FaRegClock className="-mt-1 text-[15px]" />
              08.00am - 09.00pm
            </p>
            {/* divider */}
            <span className="border-r-2 h-1/2 my-auto"></span>
            {/* contact email */}
            <p className="flex items-center gap-1">
              <IoMdMail />
              contact.riponmondal@gmail.com
            </p>
          </div>
          {/* social and contact number */}
          <div className="flex gap-2">
            {/* social links */}
            <div className="flex items-center gap-3">
              <Link
                to={"https://www.facebook.com/riponmondalbd"}
                target="_blank"
              >
                <FaFacebookF className="hover:text-[#00bf63]" />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/riponmondalbd/"}
                target="_blank"
              >
                <FaLinkedin className="hover:text-[#00bf63]" />
              </Link>
              <Link to={"https://x.com/ripon_mondal_bd"} target="_blank">
                <FaTwitter className="hover:text-[#00bf63]" />
              </Link>
              <Link
                to={"https://www.instagram.com/riponmondalbd/"}
                target="_blank"
              >
                <FaInstagram className="hover:text-[#00bf63]" />
              </Link>
            </div>
            {/* divider */}
            <span className="border-r-2 h-1/2 my-auto"></span>
            {/* contact number */}
            <p className="flex items-center gap-1">
              <IoMdCall />
              +880 1956 149980
            </p>
          </div>
        </div>
      </div>
      {/* main nav bar */}
      <div
        className={`w-full bg-base-100 shadow-sm  ${
          isSticky
            ? "fixed top-0 z-10 animate-flip-down animate-once animate-ease-in-out"
            : ""
        }`}
      >
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start w-full md:w-1/2">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>
            <Link to={"/"}>
              <img className="h-[60px]" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end gap-2">
            {/* make dark mode or theme changer dark and white */}
            <label className="toggle text-base-content">
              <input
                type="checkbox"
                value="sunset"
                className="theme-controller"
                // checked={isDark === true ? false : true}
                checked={isDark}
                onChange={() => setIsDark(!isDark)}
              />

              <svg
                aria-label="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>

              <svg
                aria-label="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>
            {/* login register and profile section */}
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt={user.displayName}
                      src={currentUser[0]?.image || user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link onClick={scrollToTop} to={"/dashboard/profile"}>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <p onClick={handleLogOut}>Logout</p>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to={"/login"} onClick={scrollToTop}>
                <button className="btn p-2 md:p-4 bg-[#e12454] text-white btn-secondary animate__animated animate__fadeInUp">
                  Log in
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

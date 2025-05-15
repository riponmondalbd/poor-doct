import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import appointmentImage from "../../../assets/contact/doctor.jpg";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useCategory from "../../../hooks/useCategory";
import useDoctors from "../../../hooks/useDoctors";

const Appointment = () => {
  const { user, loading } = useAuth();
  const [isPending, doctors] = useDoctors();
  const [, categories] = useCategory();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  // console.log(doctors, categories);

  if (loading || isPending) {
    return <span className="loading loading-ring loading-lg"></span>;
  }
  const handleAppointment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const data = {
      applicant_name: initialData.name,
      applicant_email: user?.email,
      applicant_phone_number: initialData.phone,
      doctor_id: initialData.doctor,
      department_id: initialData.department,
      date: initialData.date,
      time: initialData.time,
      note: initialData.note,
    };
    // console.log(data);

    if (!user) {
      Swal.fire({
        title: "You are not register?",
        text: "Please login first",
        icon: "question",
      });
      navigate("/login", { state: { from: location } });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      axiosPublic.post("/appointment", data).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Appointment Successfully!",
            icon: "success",
            draggable: true,
          });
          e.target.reset();
        }
      });
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${appointmentImage})`,
        placeItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-2">
        <div className="grid md:grid-cols-2 py-24">
          <div className="bg-base-100 w-full shrink-0 shadow-2xl">
            <div className="card-body">
              <h4 className="text-[#e12454] text-xl font-medium">
                Appointment
              </h4>
              <h2 className="text-5xl font-bold mb-7">Book Appointment</h2>
              <form onSubmit={handleAppointment} className="fieldset space-y-4">
                {/* name & phone number */}
                <div className="flex gap-3">
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Your Name"
                    defaultValue={user?.displayName}
                    name="name"
                    required
                  />
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Your Phone Number"
                    name="phone"
                    required
                  />
                </div>
                {/* department & doctor */}
                <div className="flex gap-3">
                  <select
                    // defaultValue="Doctor"
                    value={selectedDoctor}
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                    name="doctor"
                    className="select"
                    required
                  >
                    <option value={""} disabled={true}>
                      Doctor
                    </option>
                    {doctors.map((doctor) => (
                      <option key={doctor._id} value={doctor._id}>
                        {doctor.name}
                      </option>
                    ))}
                  </select>
                  <select
                    // defaultValue="Department"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    name="department"
                    className="select"
                    required
                  >
                    <option value={""} disabled={true}>
                      Department
                    </option>
                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.category_name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* date & time */}
                <div className="flex gap-3">
                  <input
                    type="date"
                    className="input w-full"
                    name="date"
                    required
                  />
                  <input
                    type="time"
                    className="input w-full"
                    name="time"
                    required
                  />
                </div>
                {/* special note */}
                <textarea
                  className="textarea w-full"
                  placeholder="Special Note"
                  name="note"
                ></textarea>

                <button className="btn bg-[#e12454] text-white mt-4">
                  Submit Now
                </button>
              </form>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

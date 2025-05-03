import appointmentImage from "../../../assets/contact/doctor.jpg";

const Appointment = () => {
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
        <div className="grid md:grid-cols-2 py-20">
          <div className="bg-base-100 w-full shrink-0 shadow-2xl">
            <div className="card-body">
              <h4 className="text-[#e12454] text-xl font-medium">
                Appointment
              </h4>
              <h2 className="text-5xl font-bold mb-7">Book Appointment</h2>
              <fieldset className="fieldset space-y-4">
                {/* name & phone number */}
                <div className="flex gap-3">
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Your Name"
                  />
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Your Phone Number"
                  />
                </div>
                {/* department & doctor */}
                <div className="flex gap-3">
                  <select defaultValue="Department" className="select">
                    <option disabled={true}>Department</option>
                    <option>Crimson</option>
                    <option>Amber</option>
                    <option>Velvet</option>
                  </select>
                  <select defaultValue="Doctor" className="select">
                    <option disabled={true}>Doctor</option>
                    <option>Crimson</option>
                    <option>Amber</option>
                    <option>Velvet</option>
                  </select>
                </div>
                {/* date & time */}
                <div className="flex gap-3">
                  <input
                    type="date"
                    className="input w-full"
                    placeholder="Your Name"
                  />
                  <input
                    type="time"
                    className="input w-full"
                    placeholder="Your Name"
                  />
                </div>
                {/* special note */}
                <textarea
                  className="textarea w-full"
                  placeholder="Special Note"
                ></textarea>

                <button className="btn bg-[#e12454] text-white mt-4">
                  Submit Now
                </button>
              </fieldset>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

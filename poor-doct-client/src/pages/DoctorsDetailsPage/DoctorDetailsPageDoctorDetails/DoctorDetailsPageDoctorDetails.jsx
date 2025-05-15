import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useParams } from "react-router";
import useDoctors from "../../../hooks/useDoctors";

const DoctorDetailsPageDoctorDetails = () => {
  const [isPending, doctors] = useDoctors();
  const { id } = useParams();

  // loading spinner when load data from database
  if (isPending) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  const doctor = doctors.find((doc) => doc._id === id);
  // console.log(doctor);

  const { name, designation, image, details, social_links, skills, awards } =
    doctor;
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center px-2">
        <div>
          {/* name of each tab group should be unique */}
          <div className="tabs tabs-border bg-transparent shadow-none">
            {/* info */}
            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label="Info"
              defaultChecked
            />
            <div className="tab-content py-6 space-y-4">
              <h2 className="text-5xl font-bold">{name}</h2>
              <h3 className=" font-bold text-[#e12454] py-2 uppercase">
                {designation} Specialist
              </h3>
              <p>{details}</p>
              <p>
                It is a long established fact that a reader will be then
                distracted by the thing is and readable content of page when
                looking at that page layout. It is a long and established fact
                that a reader will be then distracted.
              </p>
              <div className="flex gap-6">
                <Link
                  className="text-[#04c065] hover:text-[#e12454] duration-300"
                  to={social_links.facebook}
                  target="_blank"
                >
                  <FaFacebook className="text-2xl" />
                </Link>
                <Link
                  className="text-[#04c065] hover:text-[#e12454] duration-300"
                  to={social_links.twitter}
                  target="_blank"
                >
                  <FaXTwitter className="text-2xl" />
                </Link>
                <Link
                  className="text-[#04c065] hover:text-[#e12454] duration-300"
                  to={social_links.linkedin}
                  target="_blank"
                >
                  <FaLinkedin className="text-2xl" />
                </Link>
              </div>
            </div>

            {/* skills */}
            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label="Skills"
            />
            <div className="tab-content py-6 space-y-4">
              <h2 className="text-5xl font-bold">Doctor's Skills</h2>
              <h3 className=" font-bold text-[#e12454] py-2 uppercase">
                {designation} Specialist
              </h3>
              <p>{details}</p>
              <p>
                It is a long established fact that a reader will be then
                distracted by the thing is and readable content of page when
                looking at that page layout. It is a long and established fact
                that a reader will be then distracted.
              </p>

              <h3 className=" font-bold text-[#e12454] py-2 uppercase">
                Skills
              </h3>
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>
                    {index + 1}. {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* awards */}
            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label="Awards"
            />
            <div className="tab-content py-6 space-y-4">
              <h2 className="text-5xl font-bold">Doctor's Awards</h2>
              <h3 className=" font-bold text-[#e12454] py-2 uppercase">
                {designation} Specialist
              </h3>
              <p>{details}</p>
              <p>
                It is a long established fact that a reader will be then
                distracted by the thing is and readable content of page when
                looking at that page layout. It is a long and established fact
                that a reader will be then distracted.
              </p>
              <ul>
                <h3 className=" font-bold text-[#e12454] py-2 uppercase">
                  Awards
                </h3>
                {awards.map((award, index) => (
                  <li key={index}>
                    {index + 1}. {award}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <img src={image} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsPageDoctorDetails;

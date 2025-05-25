import { useState } from "react";
import Swal from "sweetalert2";
import DashboardNavbar from "../../../components/DashboardNavbar/DashboardNavbar";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useCategory from "../../../hooks/useCategory";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddDoctor = () => {
  const [, categories] = useCategory();
  const axiosPublic = useAxiosPublic();

  const [selectedDepartment, setSelectedDepartment] = useState("");

  // console.log(doctors, categories);

  const handleAddDoctor = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    // make image hosting
    const imageFile = { image: initialData.image };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "content-Type": "multipart/form-data" },
    });

    const facebook = initialData.facebook;
    const twitter = initialData.twitter;
    const linkedin = initialData.linkedin;

    const skillsFromInput = initialData.skills;
    const newSkill = skillsFromInput.split("\n");
    const awardsFromInput = initialData.awards;
    const newAwards = awardsFromInput.split("\n");

    const data = {
      name: initialData.name,
      designation: initialData.designation,
      image: res.data.data.display_url,
      details: initialData.details,
      social_links: { facebook, twitter, linkedin },
      skills: newSkill,
      awards: newAwards,
    };

    const resp = await axiosPublic.post("/doctor", data);

    if (resp.data.insertedId) {
      Swal.fire({
        title: "Doctor Create Successfully!",
        icon: "success",
        draggable: true,
        timer: 1500,
      });
      e.target.reset();
    }
  };
  return (
    <div>
      <title>Poor Doct | Add Doctors</title>
      <DashboardNavbar pageTitle={"Add Doctors"} />
      <div className="p-5">
        <div>
          <div className="max-w-7xl mx-auto px-2">
            <div className="py-24">
              <div className="bg-base-100 w-full shrink-0 shadow-2xl">
                <div className="card-body">
                  <form
                    onSubmit={handleAddDoctor}
                    className="fieldset space-y-4"
                  >
                    {/* name & designation */}
                    <div className="flex gap-3">
                      {/* name */}
                      <input
                        type="text"
                        className="input w-full"
                        placeholder="Name"
                        name="name"
                        required
                      />
                      {/* designation */}
                      <select
                        // defaultValue="Department"
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                        name="designation"
                        className="select w-full"
                        required
                      >
                        <option value={""} disabled={true}>
                          Department
                        </option>
                        {categories.map((category) => (
                          <option
                            key={category._id}
                            value={category.category_name}
                          >
                            {category.category_name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* image*/}
                    <div className="flex gap-3">
                      {/* photo */}
                      <input
                        type="file"
                        className="file-input w-full"
                        name="image"
                      />
                    </div>

                    {/* details */}
                    <textarea
                      className="textarea w-full"
                      placeholder="Details"
                      name="details"
                    ></textarea>

                    {/* social links */}
                    <div className="flex gap-3">
                      {/* facebook */}
                      <input
                        type="url"
                        className="input w-full"
                        placeholder="Facebook"
                        name="facebook"
                        required
                      />
                      {/* twitter */}
                      <input
                        type="url"
                        className="input w-full"
                        placeholder="Twitter"
                        name="twitter"
                        required
                      />
                      {/* linkedin */}
                      <input
                        type="url"
                        className="input w-full"
                        placeholder="Linkedin"
                        name="linkedin"
                        required
                      />
                    </div>

                    {/* skills */}
                    <textarea
                      className="textarea w-full"
                      placeholder="Please press enter after write each skill"
                      name="skills"
                    ></textarea>

                    {/* awards */}
                    <textarea
                      className="textarea w-full"
                      placeholder="Please press enter after write each awards"
                      name="awards"
                    ></textarea>

                    <button className="btn bg-[#e12454] text-white mt-4">
                      Submit Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;

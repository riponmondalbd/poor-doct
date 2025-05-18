import { useForm } from "react-hook-form";
import { FaRegCalendarAlt, FaRegStar } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { LuPencilLine } from "react-icons/lu";
import DashboardNavbar from "../../../components/DashboardNavbar/DashboardNavbar";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useUser from "../../../hooks/useUser";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Profile = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [refetch, currentUser] = useUser();

  // console.log(currentUser[0]);

  const onSubmit = async (data) => {
    // make image hosting
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "content-Type": "multipart/form-data" },
    });

    if (res.data.success) {
      const updateItem = {
        name: data.name,
        image: res.data.data.display_url,
      };

      const userRes = axiosPublic.patch(
        `/user/${currentUser[0]?._id}`,
        updateItem
      );
      refetch();
      console.log(userRes);
    }
    // console.log("with image url", res.data);
  };

  const handleReload = () => {
    window.location.reload();
  };

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
                <img src={currentUser[0]?.image || user?.photoURL} />
              </div>
            </div>

            <div className="card-body">
              <h2 className="card-title text-2xl">
                {currentUser[0]?.name || user?.displayName}
              </h2>
            </div>
            <button
              className="btn btn-link"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <LuPencilLine />
            </button>
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
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={handleReload}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                  {/*  image */}
                  <input
                    type="file"
                    {...register("image", { required: true })}
                    className="file-input file-input-ghost w-full"
                  />
                  {/* recipe name  */}
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Name*</legend>
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="Name"
                      defaultValue={currentUser[0]?.name}
                      {...register("name", { required: true })}
                    />
                  </fieldset>

                  <button className="btn btn-neutral mt-4">Update</button>
                </form>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Profile;

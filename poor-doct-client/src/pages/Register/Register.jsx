import { updateProfile } from "firebase/auth";
import { ErrorMessage, Form, Formik } from "formik";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import * as Yup from "yup";
import registerImage from "../../assets/register/register.json";
import useAuth from "../../hooks/useAuth";

const passwordRegex =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&`^])[A-Za-z\d@$!%*?#&`^]{6,}/;

const signUpSchema = Yup.object().shape({
  name: Yup.string().required("required"),
  email: Yup.string().email("Invalid email").required("required"),
  password: Yup.string()
    .matches(
      passwordRegex,
      "Password must be at least 6 characters and include uppercase, lowercase, number, and special character"
    )
    .required("required"),
});
const Register = () => {
  const { createUser, LogOutUser } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="text-center w-full lg:w-1/2 lg:text-left">
          <Lottie animationData={registerImage} loop={true} />
        </div>
        <div className="card bg-base-100 w-full lg:w-1/2 shrink-0 shadow-2xl">
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={signUpSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
              }, 400);
              // create user
              createUser(values.email, values.password)
                .then((result) => {
                  // update user
                  updateProfile(result.user, {
                    displayName: values.name,
                  })
                    .then(() => {
                      Swal.fire({
                        title: `Hi ${
                          result.user.displayName.split(" ").slice(" ")[0]
                        }`,
                        text: "You SignUp is Successfully!",
                        icon: "success",
                        draggable: true,
                        timer: 1500,
                      });
                      //   logout user
                      LogOutUser()
                        .then(() => {})
                        .catch(() => {});
                      navigate("/login");
                    })
                    .catch((error) => {
                      Swal.fire({
                        title: `${error.message}`,
                        icon: "error",
                        draggable: true,
                        timer: 1500,
                      });
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
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <div className="card-body">
                <Form className="fieldset" onSubmit={handleSubmit}>
                  {/* name field */}
                  <label className="label">Name</label>
                  <input
                    className="input w-full"
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <ErrorMessage
                    name="name"
                    component={"div"}
                    style={{ color: "red" }}
                  />
                  {/* email field */}
                  <label className="label">Email</label>
                  <input
                    className="input w-full"
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <ErrorMessage
                    name="email"
                    component={"div"}
                    style={{ color: "red" }}
                  />

                  {/* password field */}
                  <label className="label">Password</label>
                  <input
                    className="input w-full"
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <ErrorMessage
                    name="password"
                    component={"div"}
                    style={{ color: "red" }}
                  />
                  <button
                    className="btn btn-neutral mt-4"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Register
                  </button>
                </Form>
                <p>
                  Already Have Account?{" "}
                  <Link to={"/login"} className="text-[#04c065]">
                    Login Now
                  </Link>
                </p>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;

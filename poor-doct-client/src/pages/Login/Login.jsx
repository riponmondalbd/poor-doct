import { ErrorMessage, Form, Formik } from "formik";
import Lottie from "lottie-react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import * as Yup from "yup";
import loginImage from "../../assets/register/register.json";
import useAuth from "../../hooks/useAuth";

const passwordRegex =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&`^])[A-Za-z\d@$!%*?#&`^]{6,}/;

const signUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("required"),
  password: Yup.string()
    .matches(
      passwordRegex,
      "Password must be at least 6 characters and include uppercase, lowercase, number, and special character"
    )
    .required("required"),
});

const Login = () => {
  const { googleLogin, loginInUser } = useAuth();

  const handleGoogleLoginIn = () => {
    googleLogin()
      .then((result) => {
        // console.log(result.user);
        if (result.user) {
          Swal.fire({
            title: `Hi ${result.user.displayName.split(" ").slice(" ")[0]}`,
            text: "You Login is Successfully!",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
        }
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
  return (
    <div className="hero bg-base-200 min-h-[90vh]">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="text-center w-full lg:w-1/2 lg:text-left">
          <Lottie className="w-full" animationData={loginImage} loop={true} />
        </div>
        <div className="card bg-base-100 w-full lg:w-1/2 shrink-0 shadow-2xl">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={signUpSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
              }, 400);
              // login user
              loginInUser(values.email, values.password)
                .then((result) => {
                  console.log(result.user);
                  if (result.user) {
                    Swal.fire({
                      title: `Hi ${
                        result.user.displayName.split(" ").slice(" ")[0]
                      }`,
                      text: "You Login is Successfully!",
                      icon: "success",
                      draggable: true,
                      timer: 1500,
                    });
                  }
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
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button
                    className="btn btn-neutral mt-4"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Login
                  </button>
                </Form>
                <p>
                  New Hare?{" "}
                  <Link to={"/register"} className="text-[#04c065]">
                    Create an Account
                  </Link>
                </p>
                <div className="divider">or</div>
                {/* google login */}
                <button
                  onClick={handleGoogleLoginIn}
                  className="btn bg-white text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;

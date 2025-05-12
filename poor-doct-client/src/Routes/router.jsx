import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import About from "../pages/About/About/About";
import Contact from "../pages/Contact/Contact/Contact";
import Department from "../pages/Department/Department/Department";
import DepartmentDetails from "../pages/DepartmentDetails/DepartmentDetails";
import Doctors from "../pages/Doctors/Doctors/Doctors";
import DoctorsDetailsPage from "../pages/DoctorsDetailsPage/DoctorsDetailsPage/DoctorsDetailsPage";
import Faq from "../pages/Faq/Faq/Faq";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "doctors",
        element: <Doctors />,
      },
      {
        path: "doctors/:id",
        element: <DoctorsDetailsPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "department",
        element: <Department />,
      },
      {
        path: "department-details/:id",
        element: <DepartmentDetails />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;

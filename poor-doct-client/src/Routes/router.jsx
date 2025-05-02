import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import About from "../pages/About/About/About";
import Doctors from "../pages/Doctors/Doctors/Doctors";
import Home from "../pages/Home/Home/Home";

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
    ],
  },
]);

export default router;

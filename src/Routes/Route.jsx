import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home";
import Education from "../Components/Education";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Experience from "../Components/Experience";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: Home,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
    ],
  },
]);

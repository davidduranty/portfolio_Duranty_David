import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Project1 from "./pages/Project1.jsx";
import Project2 from "./pages/Project2.jsx";
import Project3 from "./pages/Project3.jsx";
import "./styles/index.scss";
import App from "./App.jsx";
import CV_David from "./pages/CV_David.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project1",
        element: <Project1 />,
      },
      {
        path: "/project2",
        element: <Project2 />,
      },
      {
        path: "/project3",
        element: <Project3 />,
      },
    ],
  },
  {
    path: "/cv_david_duranty",
    element: <CV_David />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

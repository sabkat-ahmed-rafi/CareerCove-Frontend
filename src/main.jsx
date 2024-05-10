import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Login from "./components/Login";
import Register from "./components/Register";
import AllJobs from "./components/AllJobs";
import AppliedJobs from "./components/AppliedJobs";
import MyJobs from "./components/MyJobs";
import AddJobs from "./components/AddJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addJobs",
        element: <AddJobs></AddJobs>
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/myJobs",
        element: <MyJobs></MyJobs>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

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
import Authentication from "./firebase/Authentication";
import User from "./components/User";
import PrivateRoute from "./firebase/PrivateRoute";
import { NextUIProvider } from "@nextui-org/react";
import JobDetails from "./components/JobDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addJobs",
        element: (
          <PrivateRoute>
            <AddJobs></AddJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/appliedJobs",
        element: (
          <PrivateRoute>
            <AppliedJobs></AppliedJobs>
          </PrivateRoute>
        ),
        loader:async () => await fetch("http://localhost:3000/appliedJobs")
      },
      {
        path: "/myJobs",
        element: (
          <PrivateRoute>
            <MyJobs></MyJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/user",
        element: (
          <PrivateRoute>
            <User></User>
          </PrivateRoute>
        ),
      },
      {
        path: "/allJobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`http://localhost:3000/allJobs/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authentication>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </Authentication>
  </React.StrictMode>
);

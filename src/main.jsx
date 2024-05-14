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
import PrivateRoute from "./firebase/PrivateRoute";
import { NextUIProvider } from "@nextui-org/react";
import JobDetails from "./components/JobDetails";
import UpdateJobs from "./components/UpdateJobs";
import Error from "./components/Error";
import Token from "./components/Token";
import Nest from "./components/Nest";
import Express from "./components/Express";
import axios from "axios";

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
        path: "/updateJobs/:id",
        element: (
          <PrivateRoute>
            <UpdateJobs></UpdateJobs>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://career-cove-backend.vercel.app/updateJobs/${params.id}`),
      },
      {
        path: "/allJobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://career-cove-backend.vercel.app/allJobs/${params.id}`),
      },
      {
        path: "/token",
        element: <Token></Token>,
      },
      {
        path: "/express",
        element: <Express></Express>,
      },
      {
        path: "/nest",
        element: <Nest></Nest>,
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

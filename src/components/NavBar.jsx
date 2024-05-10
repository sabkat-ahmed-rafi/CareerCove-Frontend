import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const NavBar = () => {
  const { user, logOut } = useAuth();
  console.log(user)
  const [usersInfo, setUsersInfo] = useState([]);

  const handleLogOut = () => {
    logOut().then(() => {
      // Sign-out successful.
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((data) => setUsersInfo(data.data));
  }, []);

  const singleUser = usersInfo.find((users) => users?.email == user?.email);

  const li = (
    <>
      {user ? (
        <>
          <li className="font-bold activeRoute">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="font-bold activeRoute">
            <NavLink to="/allJobs">All Jobs</NavLink>
          </li>
          <li className="font-bold activeRoute">
            <NavLink to="/appliedJobs">Applied Jobs</NavLink>
          </li>
          <li className="font-bold activeRoute">
            <NavLink to="/addJobs">Add Jobs</NavLink>
          </li>
          <li className="font-bold activeRoute">
            <NavLink to="/myJobs">My Jobs</NavLink>
          </li>
          <li className="font-bold activeRoute">
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li className="font-bold activeRoute">
            <NavLink to="/user">User</NavLink>
          </li>
        </>
      ) : (
        <>
          <li className="font-bold activeRoute">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="font-bold activeRoute">
            <NavLink to="/allJobs">All Jobs</NavLink>
          </li>
          <li className="font-bold activeRoute">
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {li}
            </ul>
          </div>
          <Link
            to="/"
            className="btn gap-0 btn-ghost text-xl lg:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text"
          >
            CarrerCove
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal space-x-3 ">{li}</ul>
        </div>
        <div className="navbar-end space-x-4">
          {/* User, Login, Register, Buttons */}

          {user ? (
            <>
              <section>
                <div className="relative  group">
                  <div className="btn btn-ghost btn-circle avatar">
                    <div className="w-14 rounded-full">
                      <img
                        alt="Photo"
                        src={
                          singleUser?.photoUrl
                            ? singleUser?.photoUrl
                            : user?.photoURL
                        }
                      />
                    </div>
                  </div>
                  <ul className="absolute right-5 mt-0 z-[6] p-2 shadow menu menu-sm dropdown-content bg-slate-100 rounded-box w-52 hidden group-hover:block disappear-3s ">
                    <li>
                      <a className="justify-between font-bold">
                        {user.displayName ? user.displayName : "Not Provided"}
                        <span className="badge font-bold">New</span>
                      </a>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        className="font-bold"
                        onClick={handleLogOut}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </section>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold "
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn text-white font-bold bg-gradient-to-r from-yellow-400 to-pink-500"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;

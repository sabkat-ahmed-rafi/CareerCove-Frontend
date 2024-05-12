import React, { useState } from "react";
import { DatePicker } from "@nextui-org/react";
import axios from "axios";
import Swal from "sweetalert2";


const AddJobs = () => {
  const [option, setOption] = useState();
  const [deadline, setDeadline] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const handleAddJobs = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const title = form.title.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const applicantNumber = parseInt(form.applicantNumber.value);
    const salary = form.salary.value;
    const jobDeadline = deadline.toString().slice(0, 10);
    const jobOption = option;
    const postDate = new Date().toISOString().slice(0, 10)

    // Validating the Form
    const jobPostValue = {
      name,
      email,
      title,
      photo,
      description,
      applicantNumber,
      salary,
      jobDeadline,
      jobOption,
      postDate
    };
    console.log(jobPostValue);

    // Sending Data to the Database
    axios.post("http://localhost:3000/allJobs", jobPostValue)
    .then((data) => {
      console.log(data.data);
      // Success message
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Post Successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    });
  };

  return (
    <>
      <section className="border w-[900px] mx-auto rounded-3xl shadow-lg shadow-pink-500 ">
        <form onSubmit={handleAddJobs} className="pl-9 py-6">
          <section className="flex space-x-7 mx-auto">
            <div>
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered w-[400px]"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="Email"
                className="input input-bordered w-[400px]"
              />
            </div>
          </section>
          <section className="flex space-x-7">
            <div>
              <label className="label">
                <span className="label-text font-bold">Job Title</span>
              </label>
              <input
                name="title"
                type="text"
                placeholder="Job Title"
                className="input input-bordered  w-[400px] "
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold">PhotoURL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="PhotoURL"
                className="input input-bordered  w-[400px] "
              />
            </div>
          </section>
          <section>
            <label className="label">
              <span className="label-text font-bold">Jobs Category</span>
            </label>
            <select
              onChange={(e) => setOption(e.target.value)}
              className="select select-bordered w-[820px] "
            >
              <option disabled selected>
                Select
              </option>
              <option>On Site</option>
              <option>Remote</option>
              <option>Part-Time</option>
              <option>Hybrid</option>
            </select>
          </section>
          <section className="flex space-x-7">
            <div>
              <label className="label">
                <span className="label-text font-bold">Job Description</span>
              </label>
              <input
                name="description"
                type="text"
                placeholder="Description"
                className="input input-bordered  w-[400px] "
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold">
                  Job Applicants Number
                </span>
              </label>
              <input
                name="applicantNumber"
                type="text"
                placeholder="Should be Zero"
                className="input input-bordered  w-[400px] "
              />
            </div>
          </section>
          <section className="flex space-x-7">
            <div>
              <label className="label">
                <span className="label-text font-bold">Salary Range</span>
              </label>
              <input
                name="salary"
                placeholder="Salary Range"
                type="text"
                className="input input-bordered  w-[400px] "
              />
            </div>
            <div className="mt-8">
              <DatePicker
                onChange={(date) => setDeadline(date)}
                label={"Birth date"}
                variant="bordered"
                className="w-[400px]"
              />
            </div>
          </section>
          <section>
            <button className="mt-5 btn w-[400px] text-white font-extrabold bg-gradient-to-r from-yellow-400 to-pink-500">
              Post Job
            </button>
          </section>
        </form>
      </section>
    </>
  );
};

export default AddJobs;

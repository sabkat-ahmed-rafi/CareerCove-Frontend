import { DatePicker } from '@nextui-org/react';
import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


const UpdateJobs = () => {

    const navigate = useNavigate()
    const [option, setOption] = useState();
    const [deadline, setDeadline] = useState(
      new Date().toISOString().slice(0, 10)
    );
  

    const loadedUpdateJobs = useLoaderData()

    const handleUpdate = (e) => {
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
    };
    console.log(jobPostValue);

    // Sending Data to the Database
    axios.put(`https://career-cove-backend.vercel.app/updateJobs/${loadedUpdateJobs._id}`, jobPostValue)
    .then((data) => {
      console.log(data.data);
      navigate('/myJobs')
      // Success message
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Post Successfully Updated",
        showConfirmButton: false,
        timer: 2000,
      });
    });
    }

    return (
        <>
            <section className='pb-14'> 
            <section className="border w-[900px] mx-auto rounded-3xl shadow-lg shadow-pink-500">
        <form onSubmit={handleUpdate} className="pl-9 py-6">
          <section className="flex space-x-7 mx-auto">
            <div>
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
              defaultValue={loadedUpdateJobs.name}
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
              defaultValue={loadedUpdateJobs.email}
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
              defaultValue={loadedUpdateJobs.title}
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
              defaultValue={loadedUpdateJobs.photo}
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
            defaultValue={loadedUpdateJobs.jobOption}
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
              defaultValue={loadedUpdateJobs.description}
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
              defaultValue={loadedUpdateJobs.applicantNumber}
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
              defaultValue={loadedUpdateJobs.salary}
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
              Update Job
            </button>
          </section>
        </form>
      </section>
            </section>
        </>
    );
};

export default UpdateJobs;
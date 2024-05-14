import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { usePDF } from "react-to-pdf";
import { Button } from "@nextui-org/react";
import Header from "./Header";
import axios from "axios";



const AppliedJobs = () => {
  const { user } = useAuth();
  const { toPDF, targetRef } = usePDF({ filename: "jobInformation.pdf" });

  const [myAppliedJobs, setMyAppliedJobs] = useState([]);
  const [loadedAppliedJobs, setLoadedAppliedJobs] = useState([]);
  const [filter, setFilter] = useState("")




  useEffect(() => {
    axios.get(`http://localhost:3000/appliedJobs?filter=${filter}`)
      .then(response => {
        // Handle successful response
        setLoadedAppliedJobs(response.data);
  
        // Filter the loadedAppliedJobs based on user's email

      })
      .catch(error => {
        // Handle error
        console.error("Error fetching applied jobs:", error);
      });
  }, [filter]);

  useEffect(() => {
    // Filter the loadedAppliedJobs based on user's email
    if (user && loadedAppliedJobs) {
      let filteredJobs = loadedAppliedJobs.filter(
        (job) => job.applyerEmail === user.email
      );

      if (filter) {
        filteredJobs = filteredJobs.filter(
          (job) => job.jobOption === filter
        );
      }
      setMyAppliedJobs(filteredJobs);

    }
  }, [user, loadedAppliedJobs, filter]);


  if(myAppliedJobs.length == 0){
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className=" mt-52 text-5xl font-bold mb-52">No Applied Jobs</h1>
      </div>
    );
  } 


  return (
    <>
    <Header h1={"Applied Jobs"}></Header>
    <section className="pl-[70px] mb-10 mt-3">
    <select onChange={(e) => setFilter(e.target.value)} value={filter} className="select select-bordered w-full max-w-xs">
  <option value={""}>All</option>
  <option value={"On Site"}>On Site</option>
  <option value={"Remote"}>Remote</option>
  <option value={"Hybrid"}>Hybrid</option>
  <option value={"Part-Time"}>Part-Time</option>
</select>
    </section>
    <div className="flex flex-wrap justify-center gap-5 pb-14">
      {myAppliedJobs.map((jobs) => (
        <section key={jobs._id} className="w-[400px] border rounded-md p-4 shadow-xl shadow-rose-300">
          <section>
            <div className="flex justify-between">
              <h1 className="font-bold">{jobs.title}</h1>
              <p className="font-semibold">{jobs.jobOption}</p>
            </div>
            <p>{jobs.description}</p>
            <div className="flex justify-between">
              <p className="font-semibold">{jobs.salary}</p>
              <p>Deadline: {jobs.jobDeadline}</p>
            </div>
            <div>
              <Button color="danger"  onClick={() => toPDF()}>Download PDF</Button>
              <div style={{ display: "none" }} ref={targetRef} ><div className="flex justify-between">
              <h1 className="font-bold">{jobs.title}</h1>
              <p className="font-semibold">{jobs.jobOption}</p>
            </div>
            <p>{jobs.description}</p>
            <div className="flex justify-between">
              <p className="font-semibold">{jobs.salary}</p>
              <p>Deadline: {jobs.jobDeadline}</p>
            </div>
            </div>
            </div>
          </section>
        </section>
      ))}
    </div>
    </>
  );
};

export default AppliedJobs;

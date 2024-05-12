import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { usePDF } from "react-to-pdf";
import { Button } from "@nextui-org/react";

const AppliedJobs = () => {
  const { user } = useAuth();
  const { toPDF, targetRef } = usePDF({ filename: "jobInformation.pdf" });

  const loadedAppliedJobs = useLoaderData();
  const [myAppliedJobs, setMyAppliedJobs] = useState([]);

  console.log(loadedAppliedJobs);

  useEffect(() => {
    // Filter the loadedAppliedJobs based on user's email
    if (user && loadedAppliedJobs) {
      const filteredJobs = loadedAppliedJobs.filter(
        (job) => job.applyerEmail === user.email
      );
      setMyAppliedJobs(filteredJobs);
    }
  }, [user, loadedAppliedJobs]);

  console.log(myAppliedJobs);
  console.log(user?.email);

  

  return (
    <div className="flex flex-wrap justify-center gap-5">
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
  );
};

export default AppliedJobs;

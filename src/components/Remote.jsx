import { Button } from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Remote = () => {
  const [remote, setRemote] = useState("Remote");
  const [remoteData, setRemoteData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/allJobs?remote=${remote}`)
      .then((response) => {
        setRemoteData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <>
      <section className="flex flex-wrap gap-6 ">
        {remoteData.map((data) => (
          <section key={data._id} className="border w-[380px] p-5 space-y-1 rounded-lg shadow-md shadow-red-400">
            <div className="flex items-center gap-4 justify-between">
              <h1 className="font-semibold text-xl">{data.title}</h1>
              <p className="font-semibold text-sm">{data.jobOption}</p>
            </div>
            <p>{data.salary}</p>
            <div className="flex  justify-between">
              <p>
                <span className="font-semibold">Post:</span> {data.postDate}
              </p>
              <p>
                <span className="font-semibold">Deadline:</span>{" "}
                {data.jobDeadline}
              </p>
            </div>
              <div className="flex justify-between items-center">
              <p>Applicants: {data.applicantNumber}</p>
            <div>
                <Link to={`/allJobs/${data._id}`}>
                  <Button color="danger" variant="shadow">
                    Details
                  </Button>
                </Link>
              </div>
              </div>
          </section>
        ))}
      </section>
    </>
  );
};

export default Remote;

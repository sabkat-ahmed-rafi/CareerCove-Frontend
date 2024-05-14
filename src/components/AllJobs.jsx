import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
} from "@nextui-org/react";
import axios from "axios";
import { Button } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";




const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const {user} = useAuth()
  const navigate = useNavigate();
  const email = user.email

  useEffect(() => {
    axios.get(`http://localhost:3000/allJobs?search=${search}`)
    .then((data) => {
      setJobs(data.data);
    });
  }, [search]);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
  };

  const handleCheck = () => {
    if(!user){
      Swal.fire({
        position: "center",
        icon: "error",
        title: "You have to login first",
        showConfirmButton: false,
        timer: 5000,
      });
      setTimeout(() => {
        navigate('/login');
      }, 5000);
    }
  }

  return (
    <>
      <Header h1={"All Jobs"} p={""}></Header>
      <section className="px-12 mb-4">
        {" "}
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          onChange={handleSearch}
          name="search"
          placeholder="Type to search..."
          size="sm"
          type="search"
        />
      </section>
      <section className="pb-14 px-12">
        <Table
          color={"default"}
          selectionMode="single"
          defaultSelectedKeys={["2"]}
          aria-label="Example static collection table"
        >
          <TableHeader>
            <TableColumn className="font-extrabold">Job Title</TableColumn>
            <TableColumn className="font-extrabold">
              Job Posting Date
            </TableColumn>
            <TableColumn className="font-extrabold">
              Application Deadline
            </TableColumn>
            <TableColumn className="font-extrabold">Salary Range</TableColumn>
            <TableColumn className="font-extrabold">Details Button</TableColumn>
          </TableHeader>
          <TableBody className="gap-5">
            {jobs.map((job) => (
              <TableRow key={job._id}>
                <TableCell>{job.title}</TableCell>
                <TableCell>{job.postDate}</TableCell>
                <TableCell>{job.jobDeadline}</TableCell>
                <TableCell>{job.salary}</TableCell>
                <TableCell>
                  <Link to={`/allJobs/${job._id}`}>
                    <Button onClick={handleCheck} color="danger" variant="shadow">
                      Details

                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  );
};

export default AllJobs;

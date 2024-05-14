import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@nextui-org/react";
import Header from './Header';
import { Link } from 'react-router-dom';


const MyJobs = () => {

    const {user} = useAuth()
    console.log(user.email)

    const [myJobs, setMyJobs] =useState([])

    const email = user.email


    useEffect(() => {
        axios.get(`https://career-cove-backend.vercel.app/allJobs?email=${email}`)
        .then(response => {
            console.log(response.data)
            setMyJobs(response.data)

        }).catch(error => {
            console.log(error.message)
        })
    },[email])


    const handleDelete = (_id) => {
        axios.delete(`https://career-cove-backend.vercel.app/allJobs/${_id}`)
       .then(response => {
        setMyJobs(myJobs.filter(job => job._id !== _id))
       })
    }

    if(myJobs.length == 0){
      return (
        <div className="flex flex-col justify-center items-center">
          <h1 className=" mt-52 text-5xl font-bold mb-52">No Jobs Found</h1>
        </div>
      );
    } 


    return (
        <>
        <Header h1={"My Posted Jobs"}></Header>
            <section className='mx-[100px] pb-14'>
            <Table 
            className='shadow-lg shadow-pink-500 rounded-b-2xl'
        color={"default"}
        selectionMode="single" 
        defaultSelectedKeys={["2"]} 
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>Job Title</TableColumn>
          <TableColumn>Category</TableColumn>
          <TableColumn>Salary</TableColumn>
          <TableColumn>Post Date</TableColumn>
          <TableColumn>Deadline</TableColumn>
          <TableColumn>Applicants</TableColumn>
          <TableColumn>Update</TableColumn>
          <TableColumn>Delete</TableColumn>
        </TableHeader>
        <TableBody>
          {
            myJobs.map(job => <TableRow key={job._id}>
            <TableCell>{job.title}</TableCell>
            <TableCell>{job.jobOption}</TableCell>
            <TableCell>{job.salary}</TableCell>
            <TableCell>{job.postDate}</TableCell>
            <TableCell>{job.jobDeadline}</TableCell>
            <TableCell>{job.applicantNumber}</TableCell>
            <TableCell><Link to={`/updateJobs/${job._id}`}><Button className='text-white font-extrabold bg-gradient-to-r from-yellow-400 to-pink-500' variant="shadow">Update</Button></Link></TableCell>
            <TableCell><Button className='font-extrabold' color="danger" variant="shadow" onClick={() => handleDelete(job._id)}>Delete</Button></TableCell>
          </TableRow>)
          }
        </TableBody>
      </Table>
            </section>
        </>
    );
};

export default MyJobs;
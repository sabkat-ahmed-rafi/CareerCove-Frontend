import React from "react";
import { Link } from "react-router-dom";
const Blogs = () => {
  return (
    <>
      <section className="pt-20 pb-9 flex justify-evenly">
        <div className="border-2 w-[400px] p-4 space-y-2 rounded-lg">
          <h1 className="text-2xl font-bold">
            What is an access token and refresh token?
          </h1>
          <i>
          In today's interconnected digital world, security is paramount, especially when it comes to handling user authentication and authorization. Access tokens and refresh tokens play a crucial role in securing web applications an.... <Link to={"/token"} className="text-blue-600">more</Link>
          </i>
          <div className="flex justify-between">
            <p className="font-semibold">Time to read: 7 min</p>
            <p className="font-semibold">Posted on: 2024-05-14</p>
          </div>
        </div>
        <div className="border-2 w-[400px] p-4 space-y-2 rounded-lg">
          <h1 className="text-2xl font-bold">
          Understanding Express.js: A Comprehensive Guide to Building Web Applications
          </h1>
          <i>
          In the vast landscape of web development, frameworks play a crucial role in simplifying and accelerating the process of building robust web applications.... <Link to={"/express"} className="text-blue-600">more</Link>
          </i>
          <div className="flex justify-between">
            <p className="font-semibold">Time to read: 8 min</p>
            <p className="font-semibold">Posted on: 2024-03-14</p>
          </div>
        </div>
        <div className="border-2 w-[400px] p-4 space-y-2 rounded-lg">
          <h1 className="text-2xl font-bold">
          Unveiling Nest.js: A Comprehensive Guide to the Modern Node.js Framework
          </h1>
          <i>
          In the rapidly evolving landscape of web development, Node.js has emerged as a powerhouse for building scalable, efficient, and high-performance applications. With its asynchronous, event-driven architecture, Node.js ha.... <Link to={"/nest"} className="text-blue-600">more</Link>
          </i>
          <div className="flex justify-between">
            <p className="font-semibold">Time to read: 9 min</p>
            <p className="font-semibold">Posted on: 2024-04-02</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;

import React from "react";
import Banner from "./Banner";
import JobTabs from "./JobTabs";
import Header from "./Header";
import useAuth from "../hooks/useAuth";

const Home = () => {
    const {loading} = useAuth()
  return (
    <>
      {loading && (
        <span className="loading z-50 text-[#F31260] loading-bars loading-lg sticky top-[300px] left-[650px]"></span>
      )}
      <Banner></Banner>
      <section>
        <Header
          h1={"Job Type Preferences"}
          p={
            "Explore job opportunities based on your preferred work arrangement. Whether you're seeking on-site, remote, hybrid, or part-time positions, find the perfect fit for your lifestyle and career goals."
          }
        ></Header>
        <JobTabs></JobTabs>
      </section>
    </>
  );
};

export default Home;

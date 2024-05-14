import React from "react";
import Banner from "./Banner";
import JobTabs from "./JobTabs";
import Header from "./Header";
import useAuth from "../hooks/useAuth";
import Globe from "./Globe"

const Home = () => {
    const {loading} = useAuth()
  return (
    <>
      {loading && (
        <span className="loading z-50 text-[#F31260] loading-bars loading-lg sticky top-[300px] left-[650px]"></span>
      )}
      <Banner></Banner>
      <section>
        
        <JobTabs></JobTabs>

        <section>
          <Globe></Globe>
        </section>
      </section>
    </>
  );
};

export default Home;

import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import OnSite from "./OnSite";
import Remote from "./Remote";
import Hybrid from "./Hybrid";
import PartTime from "./PartTime";
import AllCategory from "./AllCategory";
import useAuth from "../hooks/useAuth";
import Header from "./Header";

const JobTabs = () => {

  const {user} = useAuth()

  if(!user){
    return ''
  }


  return (
    <>
    <Header
          h1={"Job Type Preferences"}
          p={
            "Explore job opportunities based on your preferred work arrangement. Whether you're seeking on-site, remote, hybrid, or part-time positions, find the perfect fit for your lifestyle and career goals."
          }
        ></Header>
      <section className="mx-[50px] mt-3 pb-12 relative">
      <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color={"danger"} variant={"bordered"}>
        <Tab key="On-Site" title="On-Site">
          <Card className="shadow-md shadow-slate-200">
            <CardBody>
              <OnSite></OnSite>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="Remote" title="Remote">
          <Card>
            <CardBody>
             <Remote></Remote>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="Hybrid" title="Hybrid">
          <Card>
            <CardBody>
              <Hybrid></Hybrid>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="Part-Time" title="Part-Time">
          <Card>
            <CardBody>
              <PartTime></PartTime>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="All Jobs" title="All Jobs">
          <Card>
            <CardBody>
              <AllCategory></AllCategory>
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
      </section>
    </>
  );
};

export default JobTabs;

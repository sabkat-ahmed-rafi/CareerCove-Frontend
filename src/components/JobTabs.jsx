import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import OnSite from "./OnSite";
import Remote from "./Remote";
import Hybrid from "./Hybrid";
import PartTime from "./PartTime";
import AllCategory from "./AllCategory";

const JobTabs = () => {


  return (
    <>
      <section className="mx-[50px] mt-3 mb-12 relative">
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

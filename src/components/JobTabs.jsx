import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

const JobTabs = () => {


  return (
    <>
      <section className="mx-[50px] mt-3 mb-12">
      <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color={"danger"} variant={"bordered"}>
        <Tab key="On-Site" title="On-Site">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="Remote" title="Remote">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="Hybrid" title="Hybrid">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.aaaaaaaaa
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="Part-Time" title="Part-Time">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.bbbbbbbbbbbb
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="All Jobs" title="All Jobs">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.cccccccccc
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

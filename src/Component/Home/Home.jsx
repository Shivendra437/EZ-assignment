import React from "react";
// import Pic from './Pic.jpg';
import Sidebar from "../Sidebar/Sidebar";
import Client from "../Client/Client";
import Entities from "../Entities/Entities";
import CompanyDetails from "../CompanyDetail/CompanyDetail";
import Reuse from "../Reuse/Reuse";
export default function Home() {
  return (
    <div
      style={{
        display: "flex"
        // backgroundImage:`url(${Pic})`,
      }}
    >
      <Sidebar />
      <Client />
      <div>
        <CompanyDetails />
        <br />
        <Entities />
        <Reuse
          Location="Billing Location"
          name="Entity Name"
          code="Entity Code"
          valid="Entity Valid"
          File="sharing"
        />
        <Reuse
          Location="Riyah,Kingdom "
          name="Lucas Films pvt ltd"
          code="LuCAI"
          valid="3june2020-5june2030"
          File="External"
        />
        {/* <Address /> */}
      </div>
    </div>
  );
}

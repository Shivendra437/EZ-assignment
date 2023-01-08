import BarChartIcon from "@mui/icons-material/BarChart";
import React from "react";

export default function ClientHeading() {
  return (
    <div>
      <h2>
        Client <span> </span>
        <BarChartIcon />
      </h2>
      <input
        style={{ width: "250px", borderRadius: "3px" }}
        type="text"
        placeholder="company,entity,user,domain"
      />
    </div>
  );
}

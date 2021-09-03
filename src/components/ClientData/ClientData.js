import React, { useState } from "react";
import Tasks from "../Tasks/Tasks";
import Status from "../Status/Status";
import Reports from "../Reports/Reports";

const ClientData = ({ data }) => {
  return (
    <div className="ClientData">
      <Status data={data}></Status>
      <Tasks data={data}></Tasks>
      <Reports data={data}></Reports>
    </div>
  );
};

export default ClientData;

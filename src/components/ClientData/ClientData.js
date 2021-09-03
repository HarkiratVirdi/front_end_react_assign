import React from "react";
import Tasks from "../Tasks/Tasks";
import Status from "../Status/Status";
import Reports from "../Reports/Reports";

const ClientData = () => {
  return (
    <div className="ClientData">
      <Status></Status>
      <Tasks></Tasks>
      <Reports></Reports>
    </div>
  );
};

export default ClientData;

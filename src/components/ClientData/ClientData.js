import React from "react";
import Tasks from "../Tasks/Tasks";
import Status from "../Status/Status";
import Reports from "../Reports/Reports";

const ClientData = ({ data }) => {
  const { reports, tasks, status } = data;

  return (
    <div className="ClientData">
      <Status data={status}></Status>
      <Tasks data={tasks}></Tasks>
      <Reports data={reports}></Reports>
    </div>
  );
};

export default ClientData;

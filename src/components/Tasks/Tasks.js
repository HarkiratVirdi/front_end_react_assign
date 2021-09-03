import React from "react";
import TableHeading from "../TableHeading/TableHeading";

const Tasks = ({ data }) => {
  const headings = ["Name", "Date & Time", "Status"];
  return (
    <div className="tasks info_container">
      <div className="col">
        <h3>Tasks</h3>
        <button className="rounded_button">View All</button>
      </div>
      <TableHeading width="w-40" heading={headings}></TableHeading>
      {data.map((e) => {
        return (
          <tr>
            <td>{e.tasks.name}</td>
            <td>{e.tasks.deadline}</td>
            <td>{e.tasks.status}</td>
          </tr>
        );
      })}
    </div>
  );
};

export default Tasks;

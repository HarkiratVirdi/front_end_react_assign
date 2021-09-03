import React from "react";
import TableHeading from "../TableHeading/TableHeading";
const Reports = ({ data }) => {
  const headings = [
    "Name",
    "From",
    "To",
    "Created at",
    "Created by",
    "Download",
  ];

  return (
    <div className="reports info_container">
      <div className="col">
        <h3>Reports</h3>
        <button className="rounded_button">View All</button>
      </div>
      <table>
        <TableHeading width="w-80" heading={headings}></TableHeading>

        {data.map((e) => {
          return (
            <tr>
              <td>{e.reports.name}</td>
              <td>{e.reports.from}</td>
              <td>{e.reports.to}</td>
              <td>{e.reports.created_at}</td>
              <td>{e.reports.created_by}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Reports;

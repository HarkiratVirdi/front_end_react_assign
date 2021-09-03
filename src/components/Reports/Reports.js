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

  console.log("report data", data);

  return (
    <div className="reports info_container">
      <div className="col">
        <h3>Reports</h3>
        <button className="rounded_button">View All</button>
      </div>
      <table>
        <TableHeading width="w-80" heading={headings}></TableHeading>
        <tbody>
          {data.map((e) => {
            return (
              <>
                <tr>
                  <td>{e.name}</td>
                  <td>{e.from}</td>
                  <td>{e.to}</td>
                  <td>{e.created_at}</td>
                  <td>{e.created_by}</td>
                </tr>
                <hr />
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;

import React from "react";

const TableHeading = ({ heading, width }) => {
  return (
    <thead className="heading_row">
      <tr>
        {heading.map((e) => {
          return <th>{e}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHeading;

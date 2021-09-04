import React from "react";

const TableHeading = ({ heading, width }) => {
  return (
    <thead className="heading_row">
      <tr>
        {heading.map((e, key) => {
          return <th key={key}>{e}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHeading;

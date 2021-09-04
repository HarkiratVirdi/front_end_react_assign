import React from "react";
import Connection from "../Connection/Connection";
const Status = ({ data }) => {
  //   console.log("in status", data);
  const { admin1, admin2, date_refresh } = data;
  return (
    <div className="status info_container">
      <h3>Status</h3>

      <div className="connect">
        <small>Connectivity</small>
        <Connection
          admin1={admin1}
          admin2={admin2}
          date_refresh={date_refresh}
        ></Connection>
      </div>
    </div>
  );
};

export default Status;

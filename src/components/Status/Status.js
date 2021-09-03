import React from "react";
import Connection from "../Connection/Connection";
const Status = () => {
  return (
    <div className="status info_container">
      <h3>Status</h3>

      <div className="connect">
        <small>Connectivity</small>
        <Connection></Connection>
      </div>
    </div>
  );
};

export default Status;

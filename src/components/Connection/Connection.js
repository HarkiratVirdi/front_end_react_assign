import React from "react";
import Cross from "../../assets/cross.jpg";
import Tick from "../../assets/tick.jpg";

const Connection = ({ admin1, admin2, date_refresh }) => {
  return (
    <div className="connection">
      <div className="connected">
        {admin1.connected ? (
          <span className="connection_details">
            <img src={Tick} alt="" />
            <span>
              Connected to {admin1.admin}
              <p>{admin1.lastConnect}</p>
            </span>
          </span>
        ) : (
          <span className="connection_details">
            <img src={Cross} alt="" />
            <span>
              Not Connected to {admin1.admin}
              <p>{admin1.lastConnect}</p>
            </span>
          </span>
        )}
        {admin2.connected ? (
          <span className="connection_details">
            <img src={Tick} alt="" />
            <span>
              Connected to {admin2.admin}
              <p>
                {admin2.lastConnect ? admin2.lastConnect : "Connect your admin"}
              </p>
            </span>
          </span>
        ) : (
          <span className="connection_details">
            <img src={Cross} alt="" />
            <span>
              Not Connected to {admin2.admin}
              <p>
                {" "}
                {admin2.lastConnect !== ""
                  ? admin2.lastConnect
                  : "Connect your admin"}
              </p>
            </span>
          </span>
        )}
      </div>
      <hr className="line" />

      <div className="refresh">
        <p>
          <small>Data Refresh</small>
        </p>
        <b>Last refreshed at: </b>
        <span>{date_refresh}</span>
      </div>
    </div>
  );
};

export default Connection;

import React from "react";
import Dropdown from "../Dropdown/Dropdown";

const daysDropdown = [
  "last 1 day",
  "last 10 days",
  "last 1 month",
  "last 1 year",
];

const InfoHeader = ({ clientList, changeClient, currentClient }) => {
  return (
    <>
      <div className="InfoHeader">
        <div className="client_info_left">
          <h2>Dashboard</h2>
          <p>
            {" "}
            <b>Client:</b> Schaden, Towne and Beahan{" "}
          </p>
        </div>
        <div className="client_info_right">
          <Dropdown
            handleClientChange={changeClient}
            type="days"
            list={daysDropdown}
          ></Dropdown>
          <Dropdown
            type="clients"
            list={clientList}
            currentClient={currentClient}
            handleClientChange={changeClient}
          ></Dropdown>
          <div className="user_login">
            <img src="" alt="" />
            <div className="user_name">
              <h5 style={{ whiteSpace: "nowrap" }}> Jane Cooper</h5>
              <small>Developer</small>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default InfoHeader;

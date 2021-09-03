import React from "react";
import Dropdown from "../Dropdown/Dropdown";

const daysDropdown = [
  "last 1 day",
  "last 10 days",
  "last 1 month",
  "last 1 year",
];

const InfoHeader = ({ clientList }) => {
  return (
    <>
      <div className="InfoHeader ml-1">
        <div className="client_info_left">
          <h1>Dashboard</h1>
          <p>
            {" "}
            <b>Client:</b> Schaden, Towne and Beahan{" "}
          </p>
        </div>
        <div className="client_info_right">
          <Dropdown type="days" list={daysDropdown}></Dropdown>
          <Dropdown type="clients" list={clientList}></Dropdown>
          <div className="user_login">
            <img src="" alt="" />
            <div className="user_name">
              <h6> Jane Cooper</h6>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default InfoHeader;

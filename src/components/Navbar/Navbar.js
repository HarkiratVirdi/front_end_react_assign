import React from "react";
import Logo from "../../assets/logo.jpg";
import Dashboard from "../../assets/dashboard.jpg";
import Report from "../../assets/report.jpg";
import Tasks from "../../assets/tasks.jpg";
import Setup from "../../assets/setup.jpg";

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="CloudAct" />
      <hr />
      <ul>
        <li className="active">
          <img src={Dashboard} alt="dashboard" /> Dashboard
        </li>
        <li>
          <img src={Report} alt="report" /> Reports
        </li>
        <li>
          {" "}
          <img src={Tasks} alt="tasks" /> Tasks
        </li>
        <li>
          {" "}
          <img src={Setup} alt="setup" />
          Setup
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

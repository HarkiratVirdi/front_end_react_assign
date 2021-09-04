import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import InfoHeader from "./components/InfoHeader/InfoHeader";
import Heading from "./components/Heading/Heading";
import ClientData from "./components/ClientData/ClientData";

//database
import database from "./db/database.json";

function App() {
  const [allClients, setAllClients] = useState([]);
  const [currentClient, setcurrentClient] = useState([database[0]]);
  useEffect(() => {
    database.forEach((e) => {
      allClients.push(e.client);
    });

    setAllClients(allClients);
  }, [setAllClients, allClients]);

  const handleClientChange = (e) => {
    const name = e.target.innerText;
    const currentCli = database.filter((each) => {
      return each.client === name;
    });

    setcurrentClient(currentCli);
  };

  const handleDateChange = (e) => {
    const date = e.target.innerText;
  };

  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <hr />
      <main>
        <InfoHeader
          changeDate={handleDateChange}
          changeClient={handleClientChange}
          clientList={allClients}
          currentClient={currentClient}
        ></InfoHeader>
        <Heading></Heading>
        <ClientData data={currentClient[0]}></ClientData>
      </main>
    </div>
  );
}

export default App;

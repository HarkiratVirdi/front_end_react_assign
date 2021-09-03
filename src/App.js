import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import InfoHeader from "./components/InfoHeader/InfoHeader";
import Heading from "./components/Heading/Heading";
import ClientData from "./components/ClientData/ClientData";

//database
import database from "./db/database.json";

function App() {
  const [allClients, setAllClients] = useState([]);

  useEffect(() => {
    database.forEach((e) => {
      allClients.push(e.reports.name);
    });

    setAllClients(allClients);
    console.log("cli", allClients);
  }, []);

  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <hr />
      <main>
        <InfoHeader clientList={allClients}></InfoHeader>
        <Heading></Heading>
        <ClientData data={database}></ClientData>
      </main>
    </div>
  );
}

export default App;

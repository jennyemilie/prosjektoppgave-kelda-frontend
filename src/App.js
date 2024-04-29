import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ColorTabs from "./Navbar/NavBar";
import { Latest } from "./Components/Latest";

function App() {
  return (
    <>
      <ColorTabs/>
      <div className="container">
        <div className="inputContainer">
          <Latest url="http://localhost:8888/api/Latest/:modelName/latestinputs" label="Latest Inputs"/>
        </div>
        <div className="inputContainer">
          <Latest url="http://localhost:8888/api/Latest/:modelName/latestoutputs" label="Latest Outputs"/>
        </div>
        <div className="inputContainer">
          <Latest url="http://localhost:8888/api/Latest/:modelName/lateststates" label="Latest States"/>
        </div>
      </div>
    </>
  );
}

export default App;


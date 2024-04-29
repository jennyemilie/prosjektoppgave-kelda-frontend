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
        <Latest/>
      </div>
      <div className="inputContainer">
        <Latest/>
      </div>
      <div className="inputContainer">
        <Latest/>
      </div>
    </div>
    <div className="container2"></div>
    </>
  );
}

export default App;

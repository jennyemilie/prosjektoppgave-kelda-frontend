// App.js
import React, { useState } from 'react';
import "./App.css";
import ColorTabs from "./Navbar/NavBar";
import { Latest } from "./Components/Latest";
import { Parameters } from "./Components/Parameters";
import { SimFetch, Sim } from "./Components/Sim";

function App() {
  const [tab, setTab] = useState('one');

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <>
      <ColorTabs value={tab} onChange={handleChange}/>
      <div className="container">
        {tab === 'one' && (
          <>
            <div>
              <Latest url="http://localhost:8888/api/Latest/:modelName/latestinputs" label="Latest Inputs"/>
            </div>
            <div>
              <Latest url="http://localhost:8888/api/Latest/:modelName/latestoutputs" label="Latest Outputs"/>
            </div>
            <div>
              <Latest url="http://localhost:8888/api/Latest/:modelName/lateststates" label="Latest States"/>
            </div>
          </>
        )}
        {tab === 'two' && (
          <>
            <div>
              <Parameters getUrl="http://localhost:8888/api/Parameter" postUrl="http://localhost:8888/api/Parameter/models" fetchLabel=" Get Parameter" updateLabel="Set Parameter"/>
            </div>
            {/* <div className="inputContainer">
              <Parameters postUrl="http://localhost:8888/api/Parameter/models/:modelName/:paramName/:paramPath?=" label="Set Parameter Value"/>
            </div> */}
          </>
        )}
        {tab === 'three' && (
          <div className="simContainer">
            <div>
              <SimFetch url="http://localhost:8888/api/Sim" label="List Models"/>
            </div>
            <div>
              <Sim url="http://localhost:8888/api/Sim/:modelName/info" label="Model Value Sizes"/>
            </div>
            <div>
              <SimFetch url="http://localhost:8888/api/Sim/external-inputs" label="External inputs"/>
            </div>
            <div>
              <Sim url="http://localhost:8888/api/Sim/:modelName/inputs" label="Input"/>
            </div>
            <div>
              <Sim url="http://localhost:8888/api/Sim/:modelName/outputs" label="Output"/>
            </div>
            <div>
              <Sim url="http://localhost:8888/api/Sim/:modelName/states" label="States"/>
            </div>
            <div>
              <Sim url="http://localhost:8888/api/Sim/models/:modelName" label="Model info"/>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

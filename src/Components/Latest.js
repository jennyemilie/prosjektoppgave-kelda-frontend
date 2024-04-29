import React from 'react'
import { useEffect, useState } from "react";
import "./Latest.css";


export const Latest = () => {
    const [modelData, setModelData] = useState([]);
  const [modelName, setModelName] = useState(""); 

  const fetchModelData = async () => {
    if (!modelName) {
      alert("Please enter a model name."); 
      return;
    }
    try {
      const response = await fetch(`http://localhost:8888/api/Latest/${modelName}/latestinputs`);
      const json = await response.json();
      setModelData(json);
    } catch (error) {
      console.log("error fetching model data:", error);
      alert("Failed to fetch data for the specified model."); 
    }
  };
  return (
    <div className="inputContainer">
      <h1 className="epName">Latest inputs</h1>
      <input
        type="text"
        value={modelName}
        onChange={e => setModelName(e.target.value)}
        placeholder="Enter model name"
      />
      <button className="button" onClick={fetchModelData}>Search Model</button>
      {modelData.length > 0 && (
        <div className="output">
          <h2>Latest input for {modelName}</h2>
          {modelData.map((item, index) => (
            <h1 key={index}>{item.name}: {item.value}</h1>
          ))}
        </div>
      )}
    </div>
  )
}

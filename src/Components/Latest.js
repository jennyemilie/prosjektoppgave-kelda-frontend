import React from 'react'
import { useEffect, useState } from "react";
import "./Latest.css";


export const Latest = ({ url, label }) => {
  const [data, setData] = useState([]);
  const [modelName, setModelName] = useState("");

  const fetchData = async () => {
    if (!modelName) {
      alert("Please enter a model name.");
      return;
    }
    try {
      const response = await fetch(url.replace(":modelName", modelName));
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log("Error fetching data from", url, ":", error);
      alert("Failed to fetch data for the specified model.");
    }
  };

  return (
    <div className="inputContainer">
      <h1>{label}</h1>
      <input
        type="text"
        value={modelName}
        onChange={e => setModelName(e.target.value)}
        placeholder="Enter model name"
      />
      <button className="button" onClick={fetchData}>Search Model</button>
      {data.length > 0 && (
        <div className="output">
          <h2>{`Latest data for ${modelName}`}</h2>
          {data.map((item, index) => (
            <div key={index}>{item.name}: {item.value}</div>
          ))}
        </div>
      )}
    </div>
  );
};

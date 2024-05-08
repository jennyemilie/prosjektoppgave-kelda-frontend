import React from 'react'
import { useEffect, useState } from "react";
import "./Component.css";


export const Sim = ({ url, label }) => {
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
    <div className="wrapper">
      <h1>{label}</h1>
      <div className="inputContainer">
      <input
        type="text"
        value={modelName}
        onChange={e => setModelName(e.target.value)}
        placeholder="Enter model name"
      />
      </div>
      <button className="button" onClick={fetchData}>Search Model</button>
      {data.length > 0 && (
        <div className="output">
          <h2>{`Data for ${modelName}`}</h2>
          {data.map((item, index) => (
            <div key={index}>{item.name}: {item.value}</div>
          ))}
        </div>
      )}
    </div>
  );
};

//Without input-data
export const SimFetch = ({ url, label }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error("Error fetching data:", error);
            alert("Failed to fetch data.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="wrapper">
            <h1>{label}</h1>
            <button className="button" onClick={fetchData} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Fetch Data'}
            </button>
            {data.length > 0 && (
                <div className="output">
                    <h2>Data:</h2>
                    {data.map((item, index) => (
                        console.log(item), 
                        <div key={index}>{item}</div>
                    ))}
                </div>
            )}
        </div>
    );
};
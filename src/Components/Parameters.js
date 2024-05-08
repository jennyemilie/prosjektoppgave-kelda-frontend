// parameters.js
import React, { useState } from 'react';
import "./Component.css";

export const Parameters = ({ getUrl, postUrl, fetchLabel, updateLabel }) => {
    const [fetchData, setFetchData] = useState(null);
    const [updateData, setUpdateData] = useState(null);
    const [modelNameFetch, setModelNameFetch] = useState("");
    const [parameterNameFetch, setParameterNameFetch] = useState("");
    const [modelNameUpdate, setModelNameUpdate] = useState("");
    const [parameterNameUpdate, setParameterNameUpdate] = useState("");
    const [paramPath, setParamPath] = useState("");
    const [newValue, setNewValue] = useState("");

    const handleFetch = async () => {
        const url = `${getUrl}/${modelNameFetch}/${parameterNameFetch}`;
        try {
            const response = await fetch(url);
            const json = await response.json();
            setFetchData(json);
        } catch (error) {
            console.error("Fetch error:", error);
            alert("Failed to fetch data.");
        }
    };

    const handleUpdate = async () => {
        const url = `${postUrl}/${modelNameUpdate}/${parameterNameUpdate}?paramPath=${paramPath}`;
        console.log(url);
        console.log(JSON.stringify([parseFloat(newValue)]));
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'accept': '/',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([newValue])
            });
            console.log(response)
            if(response.status === 200){
                const data = await response.json()
                setUpdateData(data);
            }
            
        } catch (error) {
            console.error("Update error:", error);
            alert("Failed to update parameter.");
        }  
    };

    return (
        <div className="container">
        <div className="wrapper">
            <h1>{fetchLabel}</h1>
            <div className="inputContainer">
            <input type="text" value={modelNameFetch} onChange={e => setModelNameFetch(e.target.value)} placeholder="Model name" />
            <input type="text" value={parameterNameFetch} onChange={e => setParameterNameFetch(e.target.value)} placeholder="Parameter name" />
            </div>
            <button className="button" onClick={handleFetch}>Fetch</button>
            {fetchData && <pre>{JSON.stringify(fetchData, null, 2)}</pre>}
        </div>
        <div className="wrapper">
            <h1>{updateLabel}</h1>
            <div className="inputContainer">
            <input type="text" value={modelNameUpdate} onChange={e => setModelNameUpdate(e.target.value)} placeholder="Model name" />
            <input type="text" value={parameterNameUpdate} onChange={e => setParameterNameUpdate(e.target.value)} placeholder="Parameter name" />
            <input type="text" value={paramPath} onChange={e => setParamPath(e.target.value)} placeholder="Sub Parameter" />
            <input type="text" value={newValue} onChange={e => setNewValue(e.target.value)} placeholder="New value" />
            </div>
            <button className="button" onClick={handleUpdate}>Update</button>
            {updateData && <pre>{JSON.stringify(updateData, null, 2)}</pre>}
        </div>
        </div>
    );
};

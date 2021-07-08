import React, { useState, createContext } from "react";

export const NurseryContext = createContext();

export const NurseryProvider = (props) => {
  const [nurseries, setNurseries] = useState([]);

  const getNurseries = () => {
    return fetch("http://localhost:8088/nursery")
      .then((res) => res.json())
      .then(setNurseries);
  };

  const addNurseries = (nurseryObj) => {
    return fetch("http://localhost:8088/nursery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nurseryObj),
    }).then(getNurseries);
  };

  return (
    <NurseryContext.Provider
      value={{
        nurseries,
        getNurseries,
        addNurseries,
      }}
    >
      {props.children}
    </NurseryContext.Provider>
  );
};

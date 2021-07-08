import React, { useContext, useEffect } from "react";
import { NurseryCard } from './NurseryCard'
import { NurseryContext } from "./NurseryProvider";

export const NurseryList = () => {
  const { nurseries, getNurseries } = useContext(NurseryContext);

  useEffect(() => {
    console.log("FlowerList: useEffect - GetFlowers");
    getNurseries();
  }, []);

  return (
    <div className="flowers">
      {console.log("LocationsList: Render", nurseries)}
      {nurseries.map((nursery) => {
        return <NurseryCard key={nursery.id} nursery={nursery} />;
      })}
    </div>
  );
};
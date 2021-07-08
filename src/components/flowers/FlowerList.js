import React, { useContext, useEffect } from "react";
import { FlowerCard } from "./FlowerCard";
import { FlowerContext } from "./FlowerProvider";

export const FlowerList = () => {
  const { flowers, getFlowers } = useContext(FlowerContext);

  useEffect(() => {
    console.log("FlowerList: useEffect - GetFlowers");
    getFlowers();
  }, []);

  return (
    <div className="flowers">
      {console.log("LocationsList: Render", flowers)}
      {flowers.map((flower) => {
        return <FlowerCard key={flower.id} flower={flower} />;
      })}
    </div>
  );
};
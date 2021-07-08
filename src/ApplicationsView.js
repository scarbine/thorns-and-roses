import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { FlowerProvider } from "./components/flowers/FlowerProvider";
import { FlowerList } from "./components/flowers/FlowerList";
import { NurseryProvider } from "./components/nurseries/NurseryProvider";
import { NurseryList } from "./components/nurseries/NurseryList";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/nurseries">
        <NurseryProvider>
          <NurseryList />
        </NurseryProvider>
      </Route>

      <Route exact path="/distributors">
        <></>
      </Route>

      <Route exact path="/retailers">
        <></>
      </Route>
      <Route exact path="/flowers">
       <FlowerProvider>
	       <FlowerList />
       </FlowerProvider>
      </Route>
    </>
  );
};

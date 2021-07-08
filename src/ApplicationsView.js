import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { FlowerProvider } from "./components/flowers/FlowerProvider";
import { FlowerList } from "./components/flowers/FlowerList";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>

      <FlowerProvider>
        <Route path="/flowers">
          <FlowerList />
        </Route>
      </FlowerProvider>
    </>
  );
};

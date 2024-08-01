import React from "react";
import Home from "./Pages/Home/index";
import {  HoverProvider } from "./HoverContext";
import Cursor from "./components/Cursor";

const App = () => {

  return (
    <HoverProvider>
        <Home />
        <Cursor/>
    </HoverProvider>
  );
};

export default App;

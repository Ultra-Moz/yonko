import React from "react";
import Home from "./Pages/Home/index";
import { HoverProvider } from "./HoverContext";
import Cursor from "./components/Cursor";
import BackgroundLines from "./components/BackgroundLines";

const App = () => {

  return (
    <HoverProvider>
      {/* <BackgroundLines/>   */}

      <Home />
      
      <Cursor />
    </HoverProvider>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HoverProvider } from "./HoverContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HoverProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HoverProvider>
);

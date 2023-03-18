import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserContext } from "./contexts/UserContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserContext.Provider value="Vane">
        <App />
      </UserContext.Provider>
    </ThemeContextProvider>
  </React.StrictMode>
);

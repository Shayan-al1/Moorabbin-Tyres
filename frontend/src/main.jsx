// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import App from "./App.jsx";
import "./styles/variables.css";
import "./styles/global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </BrowserRouter>
);

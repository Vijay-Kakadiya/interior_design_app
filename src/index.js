import React from "react";
import ReactDOM from "react-dom/client";
import "swiper/css";
import "bootstrap/scss/bootstrap-grid.scss";
import "bootstrap/scss/bootstrap-reboot.scss";
import "bootstrap/scss/bootstrap-utilities.scss";
import "./assets/scss/index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

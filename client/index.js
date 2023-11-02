import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./stylesheets/styles.css";
import App from "./App";
import Navbar from "./components/Navbar";


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <BrowserRouter>
        <Navbar />
        <br/>
        <App />
    </BrowserRouter>
);
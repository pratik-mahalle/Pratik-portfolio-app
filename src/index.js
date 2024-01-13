/**
 * Entry point of application, where App is rendered within the div with the id of "app" 
 */

import React, { useState } from "react";
import { render } from "react-dom";

import App from "./App";

const DarkModeButton = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <button onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
    );
};

render(
    <>
        <DarkModeButton />
        <App />
    </>,
    document.getElementById("app")
);

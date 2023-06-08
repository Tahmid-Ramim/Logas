import React from "react";
import ReactDOM from "react-dom/client";
import "./all.css";
import App from "./components/App";
import "./output.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
//npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
